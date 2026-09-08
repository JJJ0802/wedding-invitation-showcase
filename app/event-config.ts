/**
 * Public, customer-specific event content.
 *
 * Keep secrets and operator email addresses out of this file. Those belong in
 * Firebase runtime configuration (see .env.example).
 */
export type EventConfig = {
  couple: { displayName: string; groomSignature: string; brideSignature: string };
  event: { kind: string; dateIso: string; dateJapanese: string; dateJapaneseHero: string; ceremonyTime: string; meetingTime: string; waitingRoomOpenTime: string; rsvpDeadline: string };
  venue: { name: string; formalName: string; address: string; mapUrl: string; officialFaqUrl: string; officialCeremonyUrl: string };
  images: { heroDesktop: string; heroMobile: string; heroAlt: string; ceremonyHero: string; emblem: string; waitingRoomMap: string; groundsMap: string; greeting: readonly { src: string; alt: string }[] };
  greeting: readonly string[];
  profiles: { groom: { name: string; text: string }; bride: { name: string; text: string } };
  schedule: { waitingRoomNote: string; venueNote: string; dismissalTitle: string; dismissalText: string };
  attendeeGuidance: readonly { text: string; note?: string }[];
  access: readonly { label: string; title: string; text: string }[];
  faqs: readonly { question: string; answer: string }[];
  ceremony: {
    overviewLead: string;
    overviewTitle: string;
    overviewText: string;
    closingNote: string;
    sections: readonly {
      label: string;
      place: string;
      steps: readonly { number: string; mark: string; title: string; description: string; image: string }[];
    }[];
  };
  metadata: { title: string; description: string; socialDescription: string };
};

export const eventConfig = {
  couple: {
    displayName: "太田絢也・祐里香",
    groomSignature: "新郎　太田 絢也　　　　　 　　",
    brideSignature: "新婦　太田 祐里香（旧姓:村山）",
  },
  event: {
    kind: "神前式",
    dateIso: "2026-10-03",
    dateJapanese: "令和八年 十月三日",
    dateJapaneseHero: "令和八年　十月三日　土曜日",
    ceremonyTime: "十三時",
    meetingTime: "十二時半",
    waitingRoomOpenTime: "十二時",
    rsvpDeadline: "九月七日",
  },
  venue: {
    name: "下鴨神社",
    formalName: "賀茂御祖神社（下鴨神社）",
    address: "京都府京都市左京区下鴨泉川町",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E9%B4%A8%E7%A5%9E%E7%A4%BE",
    officialFaqUrl: "https://shimogamo-jinja.jp/reserve/#faq",
    officialCeremonyUrl: "https://shimogamo-jinja.jp/ceremony/",
  },
  images: {
    heroDesktop: "/shimogamo-hero-wakon-pc-final.png",
    heroMobile: "/shimogamo-hero-wakon-mobile-final.png",
    heroAlt: "下鴨神社の境内と紅白の水引をあしらった神前式のご案内",
    ceremonyHero: "/ceremony-top.png",
    emblem: "/awaji-musubi-red-white-v2.png",
    waitingRoomMap: "/wedding-waiting-room-map.jpg",
    groundsMap: "/shimogamo-grounds-map.jpg",
    greeting: [
      { src: "/greeting-venice.jpg", alt: "ヴェネツィアを旅した二人" },
      { src: "/greeting-rings.jpg", alt: "二人の結婚指輪" },
      { src: "/greeting-boat.jpeg", alt: "東京タワーを訪れた二人" },
      { src: "/greeting-mountain.png", alt: "婚姻届を手にした二人" },
    ],
  },
  greeting: [
    "皆さまにおかれましては\nますますご清祥のこととお慶び申し上げます",
    "このたび私たちは\n京都・下鴨神社にて\n結婚式を執り行うこととなりました",
    "これまで私たちを支えてくださった\n大切な皆さまへ感謝の気持ちをお伝えし\n新たな門出を見守っていただきたく\nこの日を迎えることを決めました",
    "日頃お世話になっている皆さまと\nこの大切な一日をともに過ごせますことを\n心より嬉しく思っております",
    "ご多用の折とは存じますが\nぜひご出席いただき\n私たちの門出を見届けていただけましたら幸いです",
    "当日皆さまにお会いできますことを\n心より楽しみにしております",
  ],
  profiles: {
    groom: { name: "絢也", text: "東京都生まれ。珈琲を淹れながら音楽を聴く時間を好みます。祐里香の朗らかな笑顔に、いつも支えられています。" },
    bride: { name: "祐里香", text: "長野県生まれ。季節の花と小さな旅を好みます。絢也の穏やかでまっすぐな人柄に惹かれました。" },
  },
  schedule: {
    waitingRoomNote: "※控室は十二時より使用可能。挙式の説明があるため、十二時半には必ず控室にお入りください。",
    venueNote: "神社内の案内は下記の案内図よりご確認ください。",
    dismissalTitle: "披露宴はございません",
    dismissalText: "挙式後は境内にて自由解散となります\n歩きやすい履物をおすすめいたします",
  },
  attendeeGuidance: [
    { text: "新郎・新婦、ご列席の皆さまは、挙式時間の30分前までに必ず控室にお入りください。", note: "ご両家控室は案内掲示板でご確認ください。" },
    { text: "控室のご利用時間は、挙式時間の1時間前から挙式後30分間です。それ以外の時間帯は、準備の都合上お入りいただけない場合がございますのでご了承ください。" },
    { text: "ご自身でお着替えをされる方は、社務所内更衣室をご利用ください。" },
    { text: "貴重品は皆さまご自身で管理をお願いいたします。貴重品以外のお荷物は控室をご利用ください。" },
    { text: "式場内では、カメラやビデオカメラでの撮影、携帯電話のご使用はご遠慮ください。控室および式場外では撮影いただけます。" },
    { text: "雨天の場合は、雨具のご準備をお願いいたします。" },
    { text: "お車またはタクシーをご利用の方は、結婚式駐車場をご利用ください。" },
  ],
  access: [
    { label: "電　車", title: "出町柳駅より", text: "京阪電車・叡山電車「出町柳駅」より徒歩およそ十二分です。" },
    { label: "市バス", title: "京都駅より", text: "京都駅から市バス4 / 205を利用し、「下鴨神社前」または「糺の森」停でお降りください。" },
    { label: "お　車", title: "お車でお越しの方", text: "有料駐車場ではなく、神社西側の結婚式駐車場をご利用ください。" },
  ],
  faqs: [
    { question: "当日の装いについて", answer: "和装またはフォーマルな装いでお越しください。" },
    { question: "駐車場について", answer: "婚礼用の駐車場は参集殿前に10台ほどございます。満車の場合は、約100台駐車できる西駐車場を無料でご利用いただけます。" },
    { question: "更衣室について", answer: "当日のお着替えにつきましては、男女別の更衣室をご用意しております。" },
    { question: "ご回答の変更について", answer: "最初の回答完了時に表示される変更コードとメールアドレスを使って、回答確認頁からいつでも変更できます。" },
    { question: "挙式中の撮影はできますか", answer: "提携会社（久保田写真館・ダイヤモンドプロ）のみ撮影可能となっております。新郎様・新婦様含むご列席の皆さまの撮影はお断りしております。" },
  ],
  ceremony: {
    overviewLead: "ご参列の皆さまへ",
    overviewTitle: "佳き日の歩みを\nご案内いたします",
    overviewText: "当日は係の者がその都度ご案内いたします。\nどうぞ心穏やかにお過ごしください。",
    closingNote: "式の進行は当日の状況により変更となる場合がございます。\n詳しくは当日のご案内に従ってお進みください。",
    sections: [
      {
        label: "お支度から参進まで",
        place: "両家お控室にて",
        steps: [
          { number: "01", mark: "集", title: "ご集合", description: "挙式30分前までに、新郎様・新婦様・ご列席者様は、控室にご集合ください。お茶菓子と昆布茶をお持ちします。挙式5分程前にお迎えに上がりますので、控室でお待ち下さい。", image: "/ceremony-step-pre-01.png" },
          { number: "02", mark: "案", title: "式次第のご案内", description: "挙式に先立ち、新郎新婦は式の流れと誓詞について案内を受けます。ご列席の皆さまも参進まで控室でお過ごしください。", image: "/ceremony-step-pre-02.png" },
          { number: "03", mark: "進", title: "参進", description: "挙式5分程前に、控室前に整列し、巫女の先導により参進します。新郎様・新婦様を先頭に、父・母・兄・姉・弟・妹・親族の順で並びます。", image: "/ceremony-step-pre-03.png" },
        ],
      },
      {
        label: "神前式の儀式",
        place: "葵生殿にて",
        steps: [
          { number: "01", mark: "祓", title: "修祓", description: "祭儀を行う前にお祓いを受けます。神職が祓詞を奏上し、大麻で新郎新婦・参列者の皆様をお祓い致します。（一同起立）", image: "/ceremony-step-01.png" },
          { number: "02", mark: "祝", title: "祝詞奏上", description: "斎主が祝詞を奏上し、結婚のことを申し上げ新郎新婦の末永いお幸せをご祈願致します。（一同起立）", image: "/ceremony-step-02.png" },
          { number: "03", mark: "盃", title: "三献の儀", description: "三三九度とも呼ばれ、神前に供えた御神酒で新郎新婦が杯を交わし夫婦の契りを結ぶ儀式です。小・中・大、3つの杯をお渡しします。杯ごとに3口でお飲み下さい。（此間奏楽―新郎新婦起立）", image: "/ceremony-step-03.png" },
          { number: "04", mark: "環", title: "指輪交換", description: "夫婦の誓いのしるしとして、神前で指輪を取り交わします。", image: "/ceremony-step-04.png" },
          { number: "05", mark: "誓", title: "誓詞奏上", description: "夫婦結びの結意を神様の前で誓う儀式です。新郎新婦は自席より神前の机の前に進み、誓いの言葉である誓詞を奏上下さい。", image: "/ceremony-step-05.png" },
          { number: "06", mark: "榊", title: "新郎新婦玉串拝礼", description: "玉串を神前に供え拝礼する儀式です。玉串をお受けになったら時計回りに回し、根本の方を神前に向けて感謝と祈りを込めて机の上に供えます。次に二礼二拍手一礼にて拝礼し自席にお着きください。", image: "/ceremony-step-06.png" },
          { number: "07", mark: "礼", title: "親族代表者玉串拝礼", description: "両家代表者1名ずつ神前に進み、玉串をお受けになり机の上に供えます。続いて参列者一同起立し代表者に合わせて二礼二拍手一礼の作法により拝礼下さい。", image: "/ceremony-step-07.png" },
          { number: "08", mark: "親", title: "親子固めの杯", description: "新郎新婦と両家のご両親が杯を交わし親子の契りを結ぶ儀式です。（此間奏楽―新郎新婦・両家ご両親起立）", image: "/ceremony-step-08.png" },
          { number: "09", mark: "縁", title: "親族固めの杯", description: "新郎新婦と両家のご親族が杯を交わすことで新しい親族の契りを結ぶ儀式です。巫女が御神酒を注いだ後、参列者一同起立一礼して同時にご乾杯下さい。（此間奏楽―新郎新婦・参列者一同起立）", image: "/ceremony-step-09.png" },
        ],
      },
    ],
  },
  metadata: {
    title: "太田絢也・祐里香 神前式",
    description: "令和八年十月三日、下鴨神社で執り行う神前式のご案内です。",
    socialDescription: "2026年10月3日 · 下鴨神社",
  },
} as const satisfies EventConfig;

export function lines(value: string) {
  return value.split("\n");
}
