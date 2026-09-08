import Image from "next/image";
import Link from "next/link";
import RsvpForm from "../rsvp-form";
import { celebrationConfig as event } from "../celebration-config";
import "./celebration.css";

export const metadata = { title: event.title, description: event.tagline, openGraph: { title: event.title, description: event.tagline, images: [] }, twitter: { card: "summary", title: event.title, description: event.tagline, images: [] } };

export default function CelebrationPage() { return <main className="celebration-page" id="top">
  <section className="cp-hero"><nav><strong>BN / 10</strong><div><a href="#about">ABOUT</a><a href="#guests">GUESTS</a><a href="#rsvp">JOIN</a></div></nav><figure><Image src="/celebration-10th.png" alt="10周年を祝うバルーン装飾" fill priority sizes="100vw" /></figure><div className="cp-hero-copy"><p>THANK YOU FOR THE PAST 10 YEARS</p><h1>10<sup>th</sup><br /><i>ANNIVERSARY</i></h1><span>{event.date}</span></div><a className="cp-ticket" href="#rsvp">JOIN THE PARTY ↘</a></section>
  <section className="cp-about" id="about"><p className="cp-label">OUR MILESTONE</p><h2>{event.tagline}</h2><div>{event.message.split("\n").map(line => <p key={line}>{line}</p>)}</div></section>
  <section className="cp-info"><article><b>WHEN</b><strong>{event.date}</strong><p>OPEN {event.receptionTime} / START {event.startTime}<br />CLOSE {event.closeTime}</p></article><article><b>WHERE</b><strong>{event.venue}</strong><p>{event.address}</p><a href={event.mapUrl} target="_blank" rel="noreferrer">MAP ↗</a></article><article><b>FEE</b><strong>{event.fee}</strong><p>{event.payment}</p></article></section>
  <section className="cp-guests" id="guests"><header><p className="cp-label">SPECIAL GUESTS</p><h2>この夜を一緒につくる<br />ゲストのみなさん</h2></header><div>{event.guests.map((guest, i) => <article key={guest.name}><span>0{i + 1}</span><b>{guest.role}</b><h3>{guest.name}</h3><p>{guest.note}</p></article>)}</div></section>
  <section className="cp-program"><header><p className="cp-label">TIME TABLE</p><h2>PROGRAM</h2></header><ol>{event.schedule.map(item => <li key={item}>{item}</li>)}</ol></section>
  <section className="cp-rsvp" id="rsvp"><header><p className="cp-label">RSVP</p><h2>LET&apos;S CELEBRATE!</h2><p>{event.deadline}までにご回答ください</p></header><RsvpForm variant="lightParty" /><Link href="/celebration/response">回答済みの方はこちら →</Link></section>
  <footer><strong>BLUE NOTE STUDIO / 10 YEARS</strong><span>SEE YOU AT THE PARTY.</span><a href="#top">TOP ↑</a></footer>
</main>; }
