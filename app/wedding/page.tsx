import Link from "next/link";
import Image from "next/image";
import RsvpForm from "../rsvp-form";
import { assetPath } from "../asset-path";

const washikiFaqs = [
  { question: "当日の装いについて", answer: "和装またはフォーマルな装いでお越しください。" },
  { question: "駐車場について", answer: "婚礼用の駐車場は参集殿前に10台ほどございます。満車の場合は、約100台駐車できる西駐車場を無料でご利用いただけます。" },
  { question: "更衣室について", answer: "当日のお着替えにつきましては、男女別の更衣室をご用意しております。" },
  { question: "ご回答の変更について", answer: "最初の回答完了時に表示される変更コードとメールアドレスを使って、回答確認頁からいつでも変更できます。" },
  { question: "挙式中の撮影はできますか", answer: "提携会社（久保田写真館・ダイヤモンドプロ）のみ撮影可能となっております。新郎様・新婦様含むご列席の皆さまの撮影はお断りしております。" },
];

export const metadata = {
  title: "田中太郎・山田花子 神前式",
  description: "令和九年四月十七日、下鴨神社で執り行う神前式の公開デモです。",
};

export default function WashikiWeddingPage() {
  return (
    <main className="washiki hero-new-default">
      <section className="wa-hero">
        <picture>
          <source media="(max-width: 700px)" srcSet={assetPath("/washiki-demo-pexels-13829008.jpg")} />
          <img className="wa-hero-photo" src={assetPath("/washiki-demo-pexels-13829008.jpg")} alt="神社で執り行われる和婚のイメージ" />
        </picture>
        <div className="wa-hero-shade" />
        <nav className="wa-hero-nav">
          <Link href="/ceremony">当日の流れ</Link>
          <a href="#wa-access">交通案内</a>
          <a href="#wa-faq">よくあるご質問</a>
          <Link href="/response">回答変更</Link>
          <a href="#wa-rsvp">ご出欠</a>
        </nav>
        <div className="wa-hero-center">
          <div className="wa-awaji-musubi" aria-hidden="true">
            <Image src="/awaji-musubi-red-white-v2.png" alt="" fill sizes="(max-width: 700px) 260px, 560px" priority unoptimized />
          </div>
          <p className="wa-kicker">謹　啓</p>
          <div className="wa-title-rule" />
          <p className="wa-subtitle">神 前 式 の ご 案 内</p>
          <div className="wa-event-meta">
            <p className="wa-date">令和九年　四月十七日　土曜日</p>
            <span className="wa-event-divider" aria-hidden="true" />
            <p className="wa-time">挙式　十三時より</p>
          </div>
        </div>
        <div className="wa-scroll">お進みください<br />⌄</div>
      </section>

      <section className="wa-greeting">
        <div className="wa-corner wa-corner-left" />
        <div className="wa-corner wa-corner-right" />
        <h2>ご挨拶</h2>
        <div className="wa-greeting-copy">
          <p className="wa-greeting-salutation">謹啓</p>
          <p>皆さまにおかれましては<br />ますますご清祥のこととお慶び申し上げます</p>
          <p>このたび私たちは<br />京都・下鴨神社にて<br />結婚式を執り行うこととなりました</p>
          <p>これまで私たちを支えてくださった<br />大切な皆さまへ感謝の気持ちをお伝えし<br />新たな門出を見守っていただきたく<br />この日を迎えることを決めました</p>
          <p>日頃お世話になっている皆さまと<br />この大切な一日をともに過ごせますことを<br />心より嬉しく思っております</p>
          <p>ご多用の折とは存じますが<br />ぜひご出席いただき<br />私たちの門出を見届けていただけましたら幸いです</p>
          <p>当日皆さまにお会いできますことを<br />心より楽しみにしております</p>
          <p className="wa-greeting-closing">謹白</p>
        </div>
        <p className="wa-names"><span>新郎　田中 太郎　　　　　 　　</span><span>新婦　山田 花子</span></p>
      </section>

      {/* 将来再表示するため、プロフィールのコードは残しています。 */}
      <section className="wa-profiles" hidden>
        <div className="wa-heading">
          <h2>ふたりのこと</h2>
          <p>佳き日を迎える私たちを 少しだけご紹介いたします</p>
        </div>
        <div className="wa-profile-grid">
          <article>
            <span>新　郎</span>
            <strong>太郎</strong>
            <p>東京都生まれ。珈琲を淹れながら音楽を聴く時間を好みます。花子の朗らかな笑顔に、いつも支えられています。</p>
          </article>
          <div className="wa-musubi" aria-hidden="true">結</div>
          <article>
            <span>新　婦</span>
            <strong>花子</strong>
            <p>長野県生まれ。季節の花と小さな旅を好みます。太郎の穏やかでまっすぐな人柄に惹かれました。</p>
          </article>
        </div>
      </section>

      <section className="wa-schedule" id="wa-schedule">
        <div className="wa-heading">
          <h2>ご列席の皆様へ</h2>
        </div>
        <div className="wa-schedule-grid">
          <article>
            <span>日　時</span>
            <strong>令和九年 四月十七日</strong>
            <p>集合　十二時半</p>
            <p className="wa-schedule-collection-time">※控室は十二時より使用可能。挙式の説明があるため、十二時半には必ず控室にお入りください。</p>
            <p>挙式　十三時</p>
          </article>
          <article>
            <span>場　所</span>
            <strong>下鴨神社</strong>
            <p>京都府京都市左京区下鴨泉川町<br />賀茂御祖神社（下鴨神社）<br />神社内の案内は下記の案内図よりご確認ください。</p>
            <a href="https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E9%B4%A8%E7%A5%9E%E7%A4%BE" target="_blank" rel="noreferrer">地図を開く　↗</a>
          </article>
          <article hidden>
            <span>解　散</span>
            <strong>披露宴はございません</strong>
            <p>挙式後は境内にて自由解散となります<br />歩きやすい履物をおすすめいたします</p>
          </article>
        </div>
        <Link className="wa-ceremony-link" href="/ceremony">神前式の流れを詳しく見る　→</Link>
        <div className="wa-guide-links" aria-label="下鴨神社のご案内図">
          <Link href="/maps?view=waiting">婚礼控室位置図　→</Link>
          <Link href="/maps?view=grounds">下鴨神社境内図　→</Link>
        </div>
        <div className="wa-attendee-guidance">
          <ul>
            <li>新郎・新婦、ご列席の皆さまは、挙式時間の30分前までに必ず控室にお入りください。<small>ご両家控室は案内掲示板でご確認ください。</small></li>
            <li>控室のご利用時間は、挙式時間の1時間前から挙式後30分間です。それ以外の時間帯は、準備の都合上お入りいただけない場合がございますのでご了承ください。</li>
            <li>ご自身でお着替えをされる方は、社務所内更衣室をご利用ください。</li>
            <li>貴重品は皆さまご自身で管理をお願いいたします。貴重品以外のお荷物は控室をご利用ください。</li>
            <li>式場内では、カメラやビデオカメラでの撮影、携帯電話のご使用はご遠慮ください。控室および式場外では撮影いただけます。</li>
            <li>雨天の場合は、雨具のご準備をお願いいたします。</li>
            <li>お車またはタクシーをご利用の方は、結婚式駐車場をご利用ください。</li>
          </ul>
        </div>
      </section>

      <section className="wa-access" id="wa-access">
        <div className="wa-heading">
          <h2>交通のご案内</h2>
          <p>下鴨神社まで どうぞお気をつけてお越しください</p>
        </div>
        <div className="wa-access-grid">
          <article><span>電　車</span><h3>出町柳駅より</h3><p>京阪電車・叡山電車「出町柳駅」より徒歩およそ十二分です。</p></article>
          <article><span>市バス</span><h3>京都駅より</h3><p>京都駅から市バス4 / 205を利用し、「下鴨神社前」または「糺の森」停でお降りください。</p></article>
          <article><span>お　車</span><h3>お車でお越しの方</h3><p>有料駐車場ではなく、神社西側の結婚式駐車場をご利用ください。</p></article>
        </div>
      </section>

      <section className="wa-rsvp" id="wa-rsvp">
        <div className="wa-heading wa-heading-underline">
          <h2>ご出欠</h2>
          <p>九月七日までにお知らせください</p>
        </div>
        <div className="demo-disabled" aria-disabled="true"><RsvpForm /></div>
        <Link className="wa-response-link" href="/response">ご回答済みの方　内容を確かめる・変更する　→</Link>
      </section>

      <section className="wa-faq" id="wa-faq">
        <div className="wa-heading">
          <h2>よくあるご質問</h2>
        </div>
        <div className="wa-faq-list">
          {washikiFaqs.map((faq, index) => (
            <details key={faq.question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b>＋</b></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
        <a className="wa-faq-reference" href="https://shimogamo-jinja.jp/reserve/#faq" target="_blank" rel="noreferrer">
          その他のご質問はこちらを参照してください。　↗
        </a>
      </section>

      <footer className="wa-footer">
        <div className="wa-mon"><span>結</span></div>
        <p>皆様のお越しを 心よりお待ち申し上げます</p>
        <span>令和九年 四月十七日　下鴨神社</span>
      </footer>
    </main>
  );
}
