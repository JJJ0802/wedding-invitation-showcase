import Link from "next/link";
import "./service.css";

export const metadata = {
  title: "イベント専用Webページ制作 | Wedding Invitation Product",
  description: "二次会、同窓会、周年イベントの空気まで伝わるWebページを、内容整理から公開までまとめて制作します。",
  openGraph: { title: "イベント専用Webページ制作", description: "大切な集まりのための、イベント専用Webページ。", images: [] },
  twitter: { card: "summary", title: "イベント専用Webページ制作", description: "大切な集まりのための、イベント専用Webページ。", images: [] },
};

const plans = [
  { name: "LIGHT", price: "19,800円〜", text: "まずは案内ページをきれいに整えたい方へ。", items: ["テンプレート選択", "写真・文章の差し替え", "スマートフォン対応", "公開設定"] },
  { name: "STANDARD", price: "39,800円〜", text: "出欠管理まで、幹事の仕事をまとめたい方へ。", items: ["LIGHTの内容すべて", "出欠回答フォーム", "回答変更・管理画面", "CSV出力・メール通知"] },
  { name: "PREMIUM", price: "69,800円〜", text: "イベントの世界観を一から作り込みたい方へ。", items: ["STANDARDの内容すべて", "オリジナル構成・デザイン調整", "複数ページ対応", "写真・文章の相談"] },
];

export default function ServicePage() {
  return <main className="service-page">
    <nav className="service-nav"><strong>EVENT PAGES</strong><div><a href="#works">EXAMPLES</a><a href="#plans">PLANS</a><a href="#flow">FLOW</a><Link href="/admin-demo">ADMIN DEMO</Link><a className="service-nav-cta" href="mailto:hello@example.com">相談する</a></div></nav>
    <section className="service-hero"><p className="service-kicker">FOR WEDDINGS / REUNIONS / ANNIVERSARIES</p><h1>イベントの空気まで<br /><i>伝わる</i>Webページ。</h1><p>招待状を作るのではなく、集まりの時間を楽しみにしてもらうページを。内容整理から出欠管理、公開までまとめてお手伝いします。</p><a className="service-button" href="mailto:hello@example.com">制作について相談する ↗</a><span className="service-hero-note">二次会・同窓会・周年イベント・記念パーティー</span></section>
    <section className="service-works" id="works"><header><p className="service-kicker">EXAMPLES</p><h2>こんな集まりに。</h2></header><div className="service-work-grid"><Link href="/wedding"><b>01</b><strong>結婚式・和</strong><span>門出の日を、丁寧に伝える。</span><em>VIEW PAGE ↗</em></Link><Link href="/western"><b>02</b><strong>結婚式・洋</strong><span>ふたりらしい祝宴を、軽やかに。</span><em>VIEW PAGE ↗</em></Link><Link href="/after-party-calm"><b>03</b><strong>二次会</strong><span>披露宴の余韻を、もう少しだけ。</span><em>VIEW PAGE ↗</em></Link><Link href="/reunion"><b>04</b><strong>同窓会</strong><span>あの頃の仲間に、会いにいこう。</span><em>VIEW PAGE ↗</em></Link><Link href="/celebration"><b>05</b><strong>周年・記念</strong><span>節目の一日を、みんなで祝う。</span><em>VIEW PAGE ↗</em></Link></div></section>
    <section className="service-plans" id="plans"><header><p className="service-kicker">PLANS</p><h2>必要なところから<br />選べます。</h2></header><div className="service-plan-grid">{plans.map(plan => <article key={plan.name}><p>{plan.name}</p><h3>{plan.price}</h3><span>{plan.text}</span><ul>{plan.items.map(item => <li key={item}>{item}</li>)}</ul><a href="mailto:hello@example.com">このプランで相談 ↗</a></article>)}</div><small>※料金は内容・納期・公開期間により変動します。正式なお見積もりは相談後にご案内します。</small></section>
    <section className="service-prep" id="prep"><header><p className="service-kicker">WHAT TO PREPARE</p><h2>お客様に<br />ご用意いただくもの。</h2></header><div className="service-prep-grid"><article><b>01</b><h3>イベント情報</h3><p>イベント名、日時、会場名、住所、アクセス、会費、出欠期限をご共有ください。</p></article><article><b>02</b><h3>写真・素材</h3><p>メイン写真1〜3枚、ロゴやプロフィール写真など。スマホ撮影の写真でも大丈夫です。</p></article><article><b>03</b><h3>文章・連絡先</h3><p>挨拶文、当日の流れ、幹事・問い合わせ先、ゲストへの注意事項をご用意ください。</p></article><article><b>04</b><h3>確認と承認</h3><p>確認用URLをご覧いただき、内容・表記・公開日を最終承認いただきます。</p></article></div><p className="service-note">素材が揃っていない場合も、ヒアリングしながら文章整理をお手伝いします。</p></section>
    <section className="service-options"><header><p className="service-kicker">OPTIONS</p><h2>必要に応じて<br />追加できます。</h2></header><div className="service-option-list"><div><strong>デザイン調整</strong><span>色・フォント・余白・雰囲気をイベントに合わせて調整</span><b>＋5,000円〜</b></div><div><strong>写真の補正・選定</strong><span>明るさ補正、トリミング、掲載写真の相談</span><b>＋3,000円〜</b></div><div><strong>独自ドメイン</strong><span>お好きなURLで公開（ドメイン費用は実費）</span><b>実費＋設定費</b></div><div><strong>公開期間の延長</strong><span>標準公開期間終了後もページを継続</span><b>月額相談</b></div><div><strong>追加ページ・多言語</strong><span>プロフィール、タイムライン、英語案内などを追加</span><b>個別見積</b></div></div><p className="service-note">料金は内容・納期・素材の状態により変動します。正式なお見積もりを先にご案内します。</p></section>
    <section className="service-flow" id="flow"><p className="service-kicker">HOW IT WORKS</p><h2>相談から公開まで、<br />シンプルに。</h2><ol><li><b>01</b><strong>相談・お見積もり</strong><span>イベントの種類、日程、希望の雰囲気をお聞きします。</span></li><li><b>02</b><strong>素材を入力</strong><span>専用フォームから写真・文章・会場情報をお送りください。</span></li><li><b>03</b><strong>制作・確認</strong><span>ページを制作し、確認用URLで修正をお受けします。</span></li><li><b>04</b><strong>公開</strong><span>完成したページをURLでゲストへ共有できます。</span></li></ol></section>
    <section className="service-final"><p className="service-kicker">YOUR NEXT GATHERING</p><h2>次の集まりを、<br />楽しみに変える。</h2><a className="service-button" href="mailto:hello@example.com">まずは相談する ↗</a><p><Link href="/admin-demo" className="service-demo-link">管理画面のデモを見る →</Link></p></section>
    <footer className="service-footer"><span>EVENT PAGES</span><span>© 2026</span></footer>
  </main>;
}
