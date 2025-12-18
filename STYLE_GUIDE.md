# スタイルガイド

## スタイリング規則

### ❌ CSSファイルの使用禁止

このプロジェクトでは、**CSSファイル（.css）の作成・使用は禁止されています**。

- `.css` ファイルを新規作成しないでください
- 既存のCSSファイルを編集しないでください（`app/app.css` の `@import "tailwindcss"` のみ例外）
- インラインスタイル（`style` 属性）の使用も避けてください

### ✅ 推奨される方法

すべてのスタイリングは **Tailwind CSS のユーティリティクラス** を使用してください。

#### 良い例

```tsx
// ✅ Tailwind CSSクラスを使用
<button className="bg-[#0066CC] text-white px-8 py-3 rounded font-semibold hover:bg-[#0052A3]">
  ボタン
</button>
```

#### 悪い例

```tsx
// ❌ CSSファイルを作成
// button.css
.button {
  background: #0066CC;
  color: white;
}

// ❌ インラインスタイルを使用
<button style={{ background: '#0066CC', color: 'white' }}>
  ボタン
</button>
```

### カスタムスタイルが必要な場合

カスタムスタイルが必要な場合は、以下の方法を検討してください：

1. **Tailwind設定の拡張** (`tailwind.config.js` または `vite.config.ts`)
2. **Tailwindの任意値構文** (`bg-[#0066CC]` など)
3. **Tailwindプラグインの作成**

### 例外

以下のファイルのみCSSを含めることができます：

- `app/app.css`: Tailwind CSSのインポートのみ（`@import "tailwindcss"`）
- Storybookの設定ファイル（`.storybook/preview.ts` で `app.css` をインポート）

## コンポーネント開発規則

### TypeScript

- すべてのコンポーネントはTypeScriptで記述
- Propsには必ず型定義を追加
- `any` 型の使用を避ける

### コンポーネント構造

```tsx
// ✅ 推奨される構造
import React from 'react';

export interface ComponentProps {
  title: string;
  description?: string;
}

export const Component: React.FC<ComponentProps> = ({
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <div className={`base-classes ${className}`} {...props}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};
```

### ファイル命名規則

- コンポーネントファイル: `PascalCase.tsx` (例: `Button.tsx`)
- ストーリーファイル: `ComponentName.stories.tsx` (例: `Button.stories.tsx`)
- インデックスファイル: `index.ts`

## ディレクトリ構造

```
app/
├── components/        # 再利用可能なコンポーネント
│   ├── Button.tsx
│   └── index.ts
├── routes/           # ルートコンポーネント
└── app.css          # Tailwind CSSインポートのみ
```

## 参考リンク

- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/)
- [React TypeScript ベストプラクティス](https://react-typescript-cheatsheet.netlify.app/)

