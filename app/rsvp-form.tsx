"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Script from "next/script";
import { apiUrl } from "@/app/api-client";

export type EditableRsvp = {
  name: string;
  email: string;
  postalCode: string;
  prefecture: string;
  city: string;
  street: string;
  building: string;
  attendance: "attending" | "declined";
  guestSide: "groom" | "bride" | "unspecified";
  guestCount: number;
  companionNames: string;
  dietaryNeeds: string;
  message: string;
  eventType?: "wedding" | "afterParty" | "reunion" | "lightParty";
  phone?: string;
  arrivalTime?: string;
};

export default function RsvpForm({
  initialData,
  editCredentials,
  variant,
}: {
  initialData?: EditableRsvp;
  editCredentials?: { email: string; code: string };
  variant?: "wedding" | "afterParty" | "reunion" | "lightParty";
}) {
  const [attendance, setAttendance] = useState<"attending" | "declined">(initialData?.attendance ?? "attending");
  const [guestSide, setGuestSide] = useState<"groom" | "bride" | "">(
    initialData?.guestSide === "groom" || initialData?.guestSide === "bride" ? initialData.guestSide : "",
  );
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [editCode, setEditCode] = useState(editCredentials?.code ?? "");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [postalCode, setPostalCode] = useState(initialData?.postalCode ?? "");
  const [prefecture, setPrefecture] = useState(initialData?.prefecture ?? "");
  const [city, setCity] = useState(initialData?.city ?? "");
  const [addressLookup, setAddressLookup] = useState<"idle" | "loading" | "found" | "not-found" | "error">("idle");
  const initialPostalCode = useRef(initialData?.postalCode.replace(/\D/g, "") ?? "");
  const editing = Boolean(editCredentials);
  const eventType = variant ?? initialData?.eventType ?? "wedding";
  const formStartedAt = useRef(Date.now());
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  useEffect(() => {
    const callbackName = "weddingTurnstileSuccess";
    const target = window as typeof window & Record<string, unknown>;
    target[callbackName] = (token: string) => setTurnstileToken(token);
    return () => { delete target[callbackName]; };
  }, []);

  useEffect(() => {
    const digits = postalCode.replace(/\D/g, "");
    if (digits.length !== 7 || digits === initialPostalCode.current) {
      setAddressLookup("idle");
      return;
    }

    const controller = new AbortController();
    const timer = window.setTimeout(async () => {
      setAddressLookup("loading");
      try {
        const response = await fetch(apiUrl(`/postal-code?zipcode=${digits}`), { signal: controller.signal });
        const data = await response.json() as { prefecture?: string; city?: string; town?: string };
        if (response.status === 404) {
          setAddressLookup("not-found");
          return;
        }
        if (!response.ok || !data.prefecture || !data.city) throw new Error("lookup failed");
        setPrefecture(data.prefecture);
        setCity(`${data.city}${data.town ?? ""}`);
        setPostalCode(`${digits.slice(0, 3)}-${digits.slice(3)}`);
        setAddressLookup("found");
      } catch (reason) {
        if ((reason as Error).name !== "AbortError") setAddressLookup("error");
      }
    }, 350);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [postalCode]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const endpoint = editing
      ? `${apiUrl("/rsvp/manage")}?email=${encodeURIComponent(editCredentials!.email)}&code=${encodeURIComponent(editCredentials!.code)}&eventType=${eventType}`
      : apiUrl("/rsvp");
    const response = await fetch(endpoint, {
      method: editing ? "PATCH" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        postalCode: form.get("postalCode"),
        prefecture: form.get("prefecture"),
        city: form.get("city"),
        street: form.get("street"),
        building: form.get("building"),
        attendance,
        guestSide: eventType === "reunion" || eventType === "lightParty" ? "unspecified" : guestSide,
        guestCount: form.get("guestCount"),
        companionNames: form.get("companionNames"),
        dietaryNeeds: form.get("dietaryNeeds"),
        message: form.get("message"),
        eventType,
        phone: form.get("phone"),
        arrivalTime: form.get("arrivalTime"),
        website: form.get("website"),
        formStartedAt: formStartedAt.current,
        turnstileToken,
      }),
    });
    const data = await response.json();
    setSending(false);
    if (!response.ok) {
      setError(data.error ?? "送信に失敗しました。");
      return;
    }
    if (data.editCode) setEditCode(data.editCode);
    setDone(true);
  }

  if (done) {
    return (
      <div className="thanks">
        <span>✓</span>
        <h3>{editing ? "回答を更新しました" : "ご回答ありがとうございます"}</h3>
        <p>{editing ? "変更内容を受け付けました。" : "内容を受け付けました。お会いできる日を楽しみにしています。"}</p>
        {!editing && editCode && (
          <div className="edit-code-card">
            <small>回答変更トークン</small>
            <strong>{editCode}</strong>
            <p>後日回答を変更するときに必要です。メールアドレスと一緒に控えてください。</p>
          </div>
        )}
        <a className="thanks-link" href={eventType === "afterParty" ? "/after-party/response" : eventType === "reunion" ? "/reunion/response" : eventType === "lightParty" ? "/celebration/response" : "/response"}>回答を確認・変更する</a>
        {editing && <button onClick={() => setDone(false)}>もう一度修正する</button>}
      </div>
    );
  }

  return (
    <form className="rsvp-form" onSubmit={submit}>
      <label hidden aria-hidden="true">ウェブサイト<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <fieldset className="attendance">
        <legend>ご出欠 <b>必須</b></legend>
        <label className={attendance === "attending" ? "selected" : ""}>
          <input type="radio" name="attendance" value="attending" checked={attendance === "attending"} onChange={() => setAttendance("attending")} />
          <span>ご出席</span><small>ATTENDING</small>
        </label>
        <label className={attendance === "declined" ? "selected" : ""}>
          <input type="radio" name="attendance" value="declined" checked={attendance === "declined"} onChange={() => setAttendance("declined")} />
          <span>ご欠席</span><small>DECLINED</small>
        </label>
      </fieldset>
      {eventType !== "reunion" && eventType !== "lightParty" && <fieldset className="attendance guest-side">
        <legend>ご関係 <b>必須</b></legend>
        <label className={guestSide === "groom" ? "selected" : ""}>
          <input type="radio" name="guestSide" value="groom" required checked={guestSide === "groom"} onChange={() => setGuestSide("groom")} />
          <span>{eventType === "afterParty" ? "新郎側" : "新郎ゲスト"}</span><small>GROOM&apos;S GUEST</small>
        </label>
        <label className={guestSide === "bride" ? "selected" : ""}>
          <input type="radio" name="guestSide" value="bride" required checked={guestSide === "bride"} onChange={() => setGuestSide("bride")} />
          <span>{eventType === "afterParty" ? "新婦側" : "新婦ゲスト"}</span><small>BRIDE&apos;S GUEST</small>
        </label>
      </fieldset>}
      <label>お名前 <b>必須</b><input name="name" required placeholder="山田 太郎" defaultValue={initialData?.name} /></label>
      <label>メールアドレス <b>必須</b><input name="email" type="email" required readOnly={editing} placeholder="you@example.com" defaultValue={initialData?.email} /></label>
      {eventType !== "wedding" && <label>電話番号 {eventType === "afterParty" && <b>必須</b>}<input name="phone" type="tel" required={eventType === "afterParty"} autoComplete="tel" placeholder="090-1234-5678" defaultValue={initialData?.phone} /></label>}
      {eventType !== "afterParty" && <fieldset className="address-fields">
        <legend>ご住所 {eventType === "wedding" && <b>必須</b>}</legend>
        <label>郵便番号<input name="postalCode" required={eventType === "wedding"} inputMode="numeric" autoComplete="postal-code" placeholder="123-4567" value={postalCode} maxLength={8} onChange={(event) => { initialPostalCode.current = ""; setPostalCode(event.target.value); }} />
          {addressLookup === "loading" && <small className="address-lookup-status">住所を検索中…</small>}
          {addressLookup === "found" && <small className="address-lookup-status success">住所を自動入力しました</small>}
          {addressLookup === "not-found" && <small className="address-lookup-status error">住所が見つかりませんでした</small>}
          {addressLookup === "error" && <small className="address-lookup-status error">住所を取得できませんでした。手入力してください</small>}
        </label>
        <label>都道府県
          <select name="prefecture" required={eventType === "wedding"} value={prefecture} onChange={(event) => setPrefecture(event.target.value)}>
            <option value="" disabled>選択してください</option>
            {["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"].map((name) => <option key={name} value={name}>{name}</option>)}
          </select>
        </label>
        <label>市区町村<input name="city" required={eventType === "wedding"} autoComplete="address-level2" placeholder="渋谷区神宮前" value={city} onChange={(event) => setCity(event.target.value)} /></label>
        <label>番地<input name="street" required={eventType === "wedding"} autoComplete="address-line1" placeholder="1-2-3" defaultValue={initialData?.street} /></label>
        <label className="address-wide">建物名・部屋番号<input name="building" autoComplete="address-line2" placeholder="○○マンション 101号室" defaultValue={initialData?.building} /></label>
      </fieldset>}
      {attendance === "attending" && (
        <>
          <label>参加人数
            <select name="guestCount" defaultValue={String(initialData?.guestCount ?? 1)}>
              {[1,2,3,4,5].map((n) => <option key={n} value={n}>{n}名</option>)}
            </select>
          </label>
          <label>同伴者のお名前<textarea name="companionNames" rows={2} placeholder="同伴者がいる場合にご記入ください" defaultValue={initialData?.companionNames} /></label>
          {eventType === "afterParty" ? <>
            <label>到着予定時刻
              <select name="arrivalTime" defaultValue={initialData?.arrivalTime ?? "18:00まで"}>
                <option>18:00まで</option><option>18:30頃</option><option>19:00以降</option><option>未定</option>
              </select>
            </label>
            <label>食物アレルギー・食事制限<textarea name="dietaryNeeds" rows={2} placeholder="該当する場合のみご記入ください" defaultValue={initialData?.dietaryNeeds} /></label>
          </> : eventType === "reunion" || eventType === "lightParty" ? <label>食物アレルギー・食事制限<textarea name="dietaryNeeds" rows={2} placeholder="該当する場合のみご記入ください" defaultValue={initialData?.dietaryNeeds} /></label> : <input type="hidden" name="dietaryNeeds" value={initialData?.dietaryNeeds ?? ""} />}
        </>
      )}
      <label>{eventType === "reunion" ? "卒業時のクラス・旧姓・幹事へのメッセージ" : eventType === "lightParty" ? "主催者へのメッセージ" : "おふたりへのメッセージ"}<textarea name="message" rows={4} placeholder={eventType === "reunion" ? "例：3年2組／旧姓 佐藤。みんなに会えるのを楽しみにしています！" : "ひとことお寄せください"} defaultValue={initialData?.message} /></label>
      {turnstileSiteKey && <>
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
        <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-callback="weddingTurnstileSuccess" />
      </>}
      {error && <p className="form-error">{error}</p>}
      <button className="submit-button" disabled={sending}>{sending ? "送信中…" : editing ? "変更内容を保存する" : "この内容で回答する"}</button>
      <p className="privacy-note" hidden>ご入力いただいた情報は、本イベントの運営にのみ使用します。</p>
    </form>
  );
}
