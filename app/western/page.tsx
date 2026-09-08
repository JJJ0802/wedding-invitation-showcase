import Image from "next/image";
import RsvpForm from "../rsvp-form";

const faqs = [
  { question: "服装について", answer: "セミフォーマルをおすすめしています。会場周辺は朝晩冷え込むことがありますので、羽織ものをお持ちください。" },
  { question: "お子さまのご参加", answer: "ぜひご一緒にお越しください。お子さま用のお食事や椅子をご希望の場合は、出欠フォームのメッセージ欄でお知らせください。" },
  { question: "駐車場について", answer: "会場に無料駐車場がございます。台数確認のため、お車でお越しの方はメッセージ欄へご記入ください。" },
  { question: "着替え・お荷物について", answer: "会場内に更衣室とクロークをご用意しています。受付スタッフへお声がけください。" },
  { question: "回答を変更したい場合", answer: "回答完了時に表示される変更コードとメールアドレスを使って、回答確認ページからいつでも変更できます。" },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="guest-nav">
          <a href="#access">アクセス</a>
          <a href="#faq">FAQ</a>
          <a href="/response">回答確認・変更</a>
        </nav>
        <div className="hero-ornament" aria-hidden="true">H <i>&</i> A</div>
        <p className="eyebrow">WEDDING RECEPTION</p>
        <h1>Haruto <span>&</span> Aoi</h1>
        <p className="hero-date">SATURDAY, OCTOBER 24, 2026</p>
        <div className="hero-rule" />
        <p className="hero-copy">
          私たちの新しい門出を、<br />
          大切な皆さまと迎えられたら幸せです。
        </p>
        <a href="#rsvp" className="hero-cta">出欠を回答する</a>
      </section>

      <section className="greeting">
        <p className="section-label">INVITATION</p>
        <h2>ごあいさつ</h2>
        <p>
          このたび 私たちは結婚式を挙げることとなりました<br />
          日頃お世話になっている皆さまへ<br />
          感謝の気持ちを込めて 小さな宴を催します
        </p>
        <p>
          秋の軽井沢で 美味しい食事と会話を楽しみながら<br />
          あたたかな一日をご一緒いただけましたら幸いです
        </p>
        <div className="signature"><span>新郎　陽翔</span><span>新婦　葵</span></div>
      </section>

      <section className="profiles">
        <div className="profile-heading">
          <p className="section-label">OUR PROFILE</p>
          <h2>ふたりのこと</h2>
          <p>当日を迎える前に、私たちのことを少しだけご紹介します。</p>
        </div>
        <div className="profile-cards">
          <article className="profile-card groom-card">
            <div className="profile-card-symbol" aria-hidden="true">⌁</div>
            <Image src="/profile-haruto.jpg" alt="新郎・陽翔のプロフィール写真" width={1120} height={1400} />
            <div className="profile-card-name">
              <span>GROOM</span>
              <h3>陽翔</h3>
              <small>Haruto</small>
            </div>
            <dl className="profile-facts">
              <div><dt>誕生日</dt><dd>1996年5月18日</dd></div>
              <div><dt>出身</dt><dd>東京都</dd></div>
              <div><dt>趣味</dt><dd>珈琲・音楽・散歩</dd></div>
              <div><dt>好きなもの</dt><dd>朝の静かな時間</dd></div>
            </dl>
            <p className="profile-story">
              休日はお気に入りの豆を選び、ゆっくり珈琲を淹れるインドア派。
              葵のよく笑うところに、いつも元気をもらっています。
            </p>
            <div className="profile-heart" aria-hidden="true">♡</div>
          </article>

          <article className="profile-card bride-card">
            <div className="profile-heart profile-heart-top" aria-hidden="true">♡</div>
            <Image src="/profile-aoi.jpg" alt="新婦・葵のプロフィール写真" width={1120} height={1400} />
            <div className="profile-card-name">
              <span>BRIDE</span>
              <h3>葵</h3>
              <small>Aoi</small>
            </div>
            <dl className="profile-facts">
              <div><dt>誕生日</dt><dd>1997年9月3日</dd></div>
              <div><dt>出身</dt><dd>長野県</dd></div>
              <div><dt>趣味</dt><dd>季節の花・小さな旅</dd></div>
              <div><dt>好きなもの</dt><dd>焼き菓子と古い器</dd></div>
            </dl>
            <p className="profile-story">
              気になる場所を見つけると、すぐ旅の予定を立てたくなる好奇心旺盛な性格。
              陽翔の穏やかでまっすぐなところが大好きです。
            </p>
            <div className="profile-card-symbol profile-card-symbol-right" aria-hidden="true">⌁</div>
          </article>
        </div>
      </section>

      <section className="details">
        <div>
          <p className="section-label">DATE & TIME</p>
          <strong>2026.10.24</strong>
          <span>土曜日</span>
          <p>受付 11:00<br />挙式 11:30 / 披露宴 12:30</p>
        </div>
        <div>
          <p className="section-label">VENUE</p>
          <h2>森音のチャペル</h2>
          <p>長野県北佐久郡軽井沢町<br />森の小径 10-24</p>
          <a href="https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E9%87%8E%E7%9C%8C%E5%8C%97%E4%BD%90%E4%B9%85%E9%83%A1%E8%BB%BD%E4%BA%95%E6%B2%A2%E7%94%BA" target="_blank" rel="noreferrer">地図を見る ↗</a>
        </div>
      </section>

      <section className="access-section" id="access">
        <div className="access-heading">
          <p className="section-label">ACCESS</p>
          <h2>会場までのご案内</h2>
          <p>森に囲まれた会場まで、どうぞお気をつけてお越しください。</p>
        </div>
        <div className="access-grid">
          <article><span>01</span><h3>電車でお越しの方</h3><p>北陸新幹線「軽井沢駅」北口より車で約15分です。</p></article>
          <article><span>02</span><h3>送迎バス</h3><p>軽井沢駅北口より10:15・10:35発の無料送迎バスをご用意します。</p></article>
          <article><span>03</span><h3>お車でお越しの方</h3><p>碓氷軽井沢ICより約25分。会場の無料駐車場をご利用いただけます。</p></article>
          <article><span>04</span><h3>お帰りのご案内</h3><p>披露宴お開き後、軽井沢駅行きの送迎バスを順次運行します。</p></article>
        </div>
        <a className="map-button" href="https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E9%87%8E%E7%9C%8C%E5%8C%97%E4%BD%90%E4%B9%85%E9%83%A1%E8%BB%BD%E4%BA%95%E6%B2%A2%E7%94%BA" target="_blank" rel="noreferrer">Google Mapsで確認する ↗</a>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading"><p className="section-label">INFORMATION</p><h2>よくあるご質問</h2></div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b>＋</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rsvp-section" id="rsvp">
        <div className="rsvp-heading">
          <p className="section-label">R.S.V.P.</p>
          <h2>出欠のご回答</h2>
          <p>恐れ入りますが、2026年9月15日までにご回答ください。</p>
        </div>
        <RsvpForm />
        <a className="response-link" href="/response">回答済みの方：内容を確認・変更する →</a>
      </section>

      <footer>
        <div>H <i>&</i> A</div>
        <p>October 24, 2026 · Karuizawa</p>
      </footer>
    </main>
  );
}
