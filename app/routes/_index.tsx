import type { Route } from "./+types/_index";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router v7 SSR Template" },
    { name: "description", content: "サーバーサイドレンダリング（SSR）対応のテンプレートサイト" },
  ];
}

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          React Router v7 SSR Template
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          サーバーサイドレンダリング（SSR）対応のテンプレートサイトです。
        </p>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              主な機能
            </h2>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>サーバーサイドレンダリング（SSR）</li>
              <li>ファイルベースルーティング</li>
              <li>TypeScriptサポート</li>
              <li>Tailwind CSS統合</li>
              <li>開発サーバー（HMR対応）</li>
            </ul>
          </div>
          <div className="flex gap-4">
            <Link
              to="/about"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Aboutページへ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
