import Image from "next/image";
import Link from "next/link";
import RsvpForm from "../rsvp-form";
import { afterPartyConfig as party } from "../after-party-config";

export const metadata = {
  title: `${party.hosts} | 落ち着いた二次会のご案内`,
  description: `${party.date} ${party.venue}で開催する二次会のご案内です。`,
  openGraph: { title: `${party.hosts} | 落ち着いた二次会のご案内`, description: `${party.date} ${party.venue}で開催する二次会のご案内です。`, images: [] },
  twitter: { card: "summary", title: `${party.hosts} | 落ち着いた二次会のご案内`, description: `${party.date} ${party.venue}で開催する二次会のご案内です。`, images: [] },
};

export default function CalmAfterPartyPage() {
  const calmMessage = "披露宴の余韻をそのままに、\n大切な皆さまとゆっくり言葉を交わせる時間にしたいと思っています。";
  return (
    <main className="after-party after-party-calm" id="top">
      <section className="ap-hero">
        <nav><span>02 / RECEPTION</span><div><a href="#info">INFO</a><a href="#faq">FAQ</a><a href="#rsvp">RSVP</a></div></nav>
        <div className="ap-hero-copy">
          <p>AN EVENING<br />WITH OUR FAVORITE PEOPLE</p>
          <h1>AFTER<br /><i>PARTY</i></h1>
          <div><strong>{party.hosts}</strong><span>{party.date}</span></div>
        </div>
        <figure><Image src={party.heroImage} alt="向かい合う新郎新婦" fill priority sizes="(max-width: 760px) 100vw, 55vw" /></figure>
        <a className="ap-hero-cta" href="#rsvp">JOIN US <b>↘</b></a>
      </section>
      <section className="ap-intro">
        <p className="ap-index">01 — HELLO</p>
        <h2>披露宴のあとは、<br />もう少しだけ一緒に。</h2>
        <p>{calmMessage.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</p>
        <div className="ap-marquee" aria-hidden="true"><span>GOOD FOOD · WARM CONVERSATION · BEAUTIFUL MEMORIES</span></div>
      </section>
      <section className="ap-info" id="info">
        <header><p className="ap-index">02 — INFORMATION</p><h2>THE EVENING</h2></header>
        <div className="ap-info-grid">
          <article><span>DATE</span><strong>{party.date}</strong><p>OPEN {party.receptionTime}<br />START {party.startTime} / CLOSE {party.closeTime}</p></article>
          <article><span>VENUE</span><strong>{party.venue}</strong><p>{party.address}</p><a href={party.mapUrl} target="_blank" rel="noreferrer">OPEN MAP ↗</a></article>
          <article><span>FEE</span><strong>{party.fee}</strong><p>当日受付にて<br />お預かりします</p></article>
          <article><span>DRESS</span><strong>{party.dressCode}</strong><p>どうぞお好きな装いで<br />お越しください</p></article>
        </div>
      </section>
      <section className="ap-faq" id="faq">
        <header><p className="ap-index">03 — FAQ</p><h2>BEFORE YOU COME</h2></header>
        <div>{party.faqs.map((faq, index) => <details key={faq.question}><summary><b>0{index + 1}</b>{faq.question}<span>＋</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>
      <section className="ap-rsvp" id="rsvp">
        <header><p className="ap-index">04 — RSVP</p><h2>WILL YOU JOIN US?</h2><p>{party.deadline}までにご回答ください</p></header>
        <RsvpForm variant="afterParty" />
        <Link href="/after-party/response">回答済みの方はこちら →</Link>
      </section>
      <footer><strong>{party.hosts}</strong><span>WE LOOK FORWARD TO SEEING YOU.</span><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
