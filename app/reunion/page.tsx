import Link from "next/link";
import Image from "next/image";
import RsvpForm from "../rsvp-form";
import { reunionConfig as event } from "../reunion-config";
import { assetPath } from "../asset-path";

export const metadata = {
  title: `${event.school} ${event.graduationYear} ${event.title}`,
  description: `${event.date}開催の同窓会のご案内です。`,
  openGraph: { title: `${event.school} ${event.title}`, description: `${event.date}開催の同窓会のご案内です。`, images: [] },
  twitter: { card: "summary", title: `${event.school} ${event.title}`, description: `${event.date}開催の同窓会のご案内です。`, images: [] },
};

export default function ReunionPage() {
  return <main className="reunion-page" id="top">
    <section className="ru-hero">
      <nav><strong>AOBA H.S. / CLASS OF 2015</strong><div><a href="#about">ABOUT</a><a href="#info">INFO</a><a href="#rsvp">RSVP</a></div></nav>
      <div className="ru-hero-copy"><p>IT&apos;S BEEN A WHILE.</p><h1>あの頃の<br />みんなに、<br /><i>会いにいこう。</i></h1><div><span>{event.school}</span><b>{event.graduationYear}</b></div></div>
      <figure><Image src={assetPath("/reunion-school-ceremony.png")} alt="体育館で行われた学校行事の様子" fill priority sizes="(max-width: 760px) 100vw, 46vw" /></figure>
      <div className="ru-date"><span>NOV.</span><strong>21</strong><small>2026 SAT</small></div>
    </section>
    <section className="ru-letter" id="about"><p className="ru-label">A LETTER TO EVERYONE</p><h2>{event.title}</h2><div>{event.message.split("\n").map(line => <p key={line}>{line}</p>)}</div><span>実行委員会一同</span></section>
    <section className="ru-info" id="info"><header><p className="ru-label">EVENT INFORMATION</p><h2>開催概要</h2></header><div className="ru-info-grid">
      <article><b>01</b><h3>日時</h3><strong>{event.date}</strong><p>受付 {event.receptionTime}<br />開宴 {event.startTime} / 終了予定 {event.closeTime}</p></article>
      <article><b>02</b><h3>会場</h3><strong>{event.venue}</strong><p>{event.address}<br />TEL {event.phone}<br />{event.access}</p><a href={event.mapUrl} target="_blank" rel="noreferrer">GOOGLE MAPS ↗</a></article>
      <article><b>03</b><h3>会費</h3><strong>{event.fee}</strong><p>{event.payment}</p></article>
      <article><b>04</b><h3>服装</h3><strong>{event.dressCode}</strong><p>普段より少しだけおしゃれな装いで、気軽にお越しください。</p></article>
    </div></section>
    <section className="ru-program"><header><p className="ru-label">PROGRAM</p><h2>当日の流れ</h2></header><ol>{event.schedule.map(item => <li key={item.time}><time>{item.time}</time><span>{item.label}</span></li>)}</ol><aside><b>TEACHERS</b><p>{event.teachers}</p></aside></section>
    <section className="ru-notes"><div><p className="ru-label">CONTACT</p><h2>幹事へのお問い合わせ</h2><p>{event.contact}</p></div><div><p className="ru-label">DEADLINE</p><h2>{event.deadline}</h2><p>会場への人数確定のため、期限内のご回答にご協力ください。</p></div></section>
    <section className="ru-rsvp" id="rsvp"><header><p className="ru-label">ATTENDANCE</p><h2>出欠をお聞かせください</h2><p>{event.deadline}まで</p></header><RsvpForm variant="reunion" /><Link href="/reunion/response">回答済みの方はこちら →</Link></section>
    <footer><strong>{event.school} {event.graduationYear}</strong><span>SEE YOU AGAIN.</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
