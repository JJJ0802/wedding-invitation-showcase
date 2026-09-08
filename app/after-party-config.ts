export const afterPartyConfig = {
  hosts: "HARUTO & AOI",
  title: "Wedding After Party",
  date: "2026.10.24 SAT",
  receptionTime: "17:30",
  startTime: "18:00",
  closeTime: "20:30",
  venue: "THE ROOFTOP TOKYO",
  address: "東京都渋谷区神宮前 4-12-10 8F",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D",
  fee: "¥8,000",
  deadline: "2026年9月20日",
  heroImage: assetPath("/after-party-couple.png"),
  message: "かしこまらず、音楽と食事を囲んで\nみんなで気楽に過ごす夜にしたいと思っています。",
  dressCode: "SMART CASUAL",
  faqs: [
    { question: "服装について", answer: "スマートカジュアルでお越しください。デニムやスニーカーも歓迎です。" },
    { question: "会費のお支払い", answer: "当日受付にて現金でお預かりします。なるべくお釣りのないようご協力ください。" },
    { question: "披露宴から参加される方", answer: "披露宴会場から二次会会場まで、17時に送迎車をご用意します。" },
    { question: "途中参加・途中退出", answer: "どちらも可能です。おおよその到着時刻をメッセージ欄でお知らせください。" },
  ],
} as const;
import { assetPath } from "./asset-path";
