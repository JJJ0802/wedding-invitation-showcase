export const celebrationConfig = {
  title: "BLUE NOTE STUDIO 10th ANNIVERSARY",
  tagline: "10年分のありがとうを、みんなで乾杯しよう。",
  date: "2026.12.05 SAT",
  receptionTime: "16:30", startTime: "17:00", closeTime: "20:00",
  venue: "SKY LOUNGE HORIZON", address: "東京都渋谷区恵比寿 4-20-3 38F",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%81%B5%E6%AF%94%E5%AF%BF",
  fee: "¥5,000", payment: "事前決済または当日キャッシュレス決済",
  deadline: "2026年11月15日",
  message: "BLUE NOTE STUDIOは、この冬で10周年を迎えます。\nこれまで関わってくださった皆さまと、肩ひじ張らずに節目を祝う一夜を企画しました。\nおいしい料理と音楽、ゲストとのトークを楽しみながら、気軽に乾杯しましょう。",
  guests: [
    { role: "SPECIAL TALK", name: "MIZUKI KATO", note: "クリエイティブディレクター" },
    { role: "LIVE MUSIC", name: "THE WEEKEND TRIO", note: "アコースティックライブ" },
    { role: "GUEST DJ", name: "DJ LENA", note: "サンセットDJセット" },
  ],
  schedule: ["16:30 受付・ウェルカムドリンク", "17:00 オープニング＆乾杯", "17:30 スペシャルゲストトーク", "18:20 フード＆フリータイム", "19:10 アニバーサリーライブ", "20:00 クロージング"],
} as const;
