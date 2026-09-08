import Link from "next/link";
import "../globals.css";
import "./admin-demo.css";

const guests = [
  ["山田 花子", "洋風ウェディング", "出席", "2026/08/08"],
  ["佐藤 一郎", "洋風ウェディング", "出席", "2026/08/07"],
  ["鈴木 美咲", "二次会", "未回答", "—"],
  ["高橋 健", "同窓会", "欠席", "2026/08/05"],
  ["田中 直子", "周年イベント", "出席", "2026/08/04"],
];

export default function AdminDemoPage() {
  return <main className="admin demo-admin"><header className="admin-nav"><Link href="/service">Admin</Link><div><span>デモデータ</span><button disabled>ログアウト</button></div></header><section className="admin-title"><p>GUEST MANAGEMENT / DEMO</p><h1>出欠管理</h1><span>公開用プレビュー。実際のFirebaseや個人情報には接続していません。</span></section><section className="guest-dashboard"><div className="stats"><div><span>総回答数</span><strong>24</strong><small>TOTAL RESPONSES</small></div><div><span>出席</span><strong>18</strong><small>ATTENDING</small></div><div><span>未回答</span><strong>4</strong><small>PENDING</small></div><div><span>欠席</span><strong>2</strong><small>DECLINED</small></div></div><div className="guest-table"><div className="guest-table-head"><strong>参加者一覧</strong><button disabled>CSVを出力</button></div><table><thead><tr><th>名前</th><th>イベント</th><th>回答</th><th>更新日</th></tr></thead><tbody>{guests.map((guest) => <tr key={guest[0]}>{guest.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div></section></main>;
}
