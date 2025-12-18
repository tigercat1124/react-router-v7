import type { Route } from "./+types/about";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "About - React Router v7 SSR Template" },
    { name: "description", content: "このページはReact Router v7のルーティング機能のデモです" },
  ];
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About</h1>
        <p className="text-lg text-gray-600 mb-6">
          このページはReact Router v7のルーティング機能のデモです。
        </p>
        <div className="space-y-4">
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-purple-900 mb-2">
              技術スタック
            </h2>
            <ul className="list-disc list-inside space-y-1 text-purple-800">
              <li>React Router v7</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Vite</li>
            </ul>
          </div>
          <Link
            to="/"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}

