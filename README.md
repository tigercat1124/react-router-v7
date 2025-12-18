# React Router v7 SSR Template

React Router v7を使用したサーバーサイドレンダリング（SSR）対応のテンプレートサイトです。
公式テンプレートに基づいて作成されています。

## 技術スタック

- **React Router v7**: ルーティングとSSR
- **TypeScript**: 型安全性
- **Tailwind CSS v4**: スタイリング（@tailwindcss/viteプラグイン使用）
- **Vite**: ビルドツール
- **@react-router/dev**: React Router開発ツール
- **@react-router/serve**: 本番サーバー
- **Storybook 10.1.9**: コンポーネント開発環境

## セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは自動的に起動します（通常は `http://localhost:5173`）。

### ビルド

```bash
npm run build
```

### 本番サーバーの起動

```bash
npm start
```

本番サーバーは `http://localhost:3000` で起動します。

### 型チェック

```bash
npm run typecheck
```

### Storybookの起動

```bash
npm run storybook
```

Storybookは `http://localhost:6006` で起動します。

## コンポーネント

`app/components/` ディレクトリに以下のコンポーネントが実装されています：

- **Button**: プライマリ、セカンダリ、ターシャリの3つのバリアントと3つのサイズ
- **Card**: デフォルト、エレベーテッド、アウトライン、フィーチャーの4つのバリアント
- **HeroSection**: ランディングページのヒーローセクション
- **Navigation**: 固定ナビゲーションバー（モバイルメニュー対応）
- **CTASection**: プライマリ、セカンダリ、ミニマル、スプリットの4つのバリアント

各コンポーネントは `ai/design/` ディレクトリのYAMLファイルに基づいて実装されています。

## プロジェクト構成

```
/
├── app/
│   ├── app.css            # Tailwind CSS（@import "tailwindcss"）
│   ├── root.tsx           # ルートコンポーネント
│   ├── routes.ts          # ルート設定ファイル
│   ├── components/        # 再利用可能なコンポーネント
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── CTASection.tsx
│   │   └── index.ts
│   └── routes/            # ルートコンポーネント
│       ├── _index.tsx     # ホームページ（/）
│       └── about.tsx      # Aboutページ（/about）
├── stories/               # Storybookのストーリーファイル
│   ├── Button.stories.tsx
│   ├── Card.stories.tsx
│   ├── HeroSection.stories.tsx
│   ├── Navigation.stories.tsx
│   └── CTASection.stories.tsx
├── .storybook/            # Storybook設定
│   ├── main.ts
│   └── preview.ts
├── ai/design/             # デザイン仕様（YAML）
│   ├── button.yaml
│   ├── card.yaml
│   ├── hero-section.yaml
│   ├── navigation.yaml
│   ├── cta-section.yaml
│   └── root.yaml
├── public/                # 静的ファイル
├── react-router.config.ts # React Router設定（SSR有効）
├── vite.config.ts         # Vite設定
└── package.json
```

## 主な機能

- ✅ サーバーサイドレンダリング（SSR）
- ✅ ルート設定ファイル（app/routes.ts）
- ✅ TypeScriptサポート
- ✅ Tailwind CSS v4統合（@tailwindcss/vite）
- ✅ 開発サーバー（HMR対応）
- ✅ 本番ビルド
- ✅ エラーバウンダリー
- ✅ Storybookによるコンポーネント開発環境
- ✅ デザインシステムに基づいたコンポーネント実装

## ⚠️ 重要なスタイリング規則

**このプロジェクトでは、CSSファイル（.css）の作成・使用は禁止されています。**

すべてのスタイリングは **Tailwind CSS のユーティリティクラス** を使用してください。

- ❌ `.css` ファイルを新規作成しない
- ❌ インラインスタイル（`style` 属性）を使用しない
- ✅ Tailwind CSSクラス（`className`）を使用する

詳細は [STYLE_GUIDE.md](./STYLE_GUIDE.md) を参照してください。

## ルートの追加

新しいルートを追加するには：

1. `app/routes/` ディレクトリに新しいファイルを作成（例: `contact.tsx`）
2. `app/routes.ts` にルートを追加：

```typescript
import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"), // 追加
] satisfies RouteConfig;
```

## 参考リンク

- [React Router 公式ドキュメント](https://reactrouter.com/)
- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/)

