import type { Meta, StoryObj } from '@storybook/react';
import { TwoColumnLayout } from './TwoColumnLayout';
import { Card, CardBody, CardTitle } from '../components/Card';

const meta = {
  title: 'Components/Layout/TwoColumnLayout',
  component: TwoColumnLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    sidebarPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof TwoColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const sidebarContent = (
  <Card>
    <CardTitle>サイドバー</CardTitle>
    <CardBody>
      <div className="space-y-4">
        <div className="p-3 bg-[#fafafa] rounded">
          <div className="font-medium">カテゴリ 1</div>
          <div className="text-sm text-[#6b6b6b] mt-1">説明文</div>
        </div>
        <div className="p-3 bg-[#fafafa] rounded">
          <div className="font-medium">カテゴリ 2</div>
          <div className="text-sm text-[#6b6b6b] mt-1">説明文</div>
        </div>
        <div className="p-3 bg-[#fafafa] rounded">
          <div className="font-medium">カテゴリ 3</div>
          <div className="text-sm text-[#6b6b6b] mt-1">説明文</div>
        </div>
      </div>
    </CardBody>
  </Card>
);

const mainContent = (
  <div className="space-y-6">
    <Card>
      <CardTitle>メインコンテンツ</CardTitle>
      <CardBody>
        <p>2カラムレイアウトのメインコンテンツエリアです。</p>
        <p className="mt-4">
          このレイアウトは、メインコンテンツとサイドバーを横並びに表示します。
          レスポンシブ対応で、モバイル表示では縦並びになります。
        </p>
      </CardBody>
    </Card>
    <Card>
      <CardTitle>追加情報</CardTitle>
      <CardBody>
        <p>サイドバーには補足情報や関連リンクを配置できます。</p>
      </CardBody>
    </Card>
  </div>
);

export const Default: Story = {
  args: {
    mainContent,
    sidebar: sidebarContent,
    sidebarPosition: 'right',
  },
};

export const SidebarLeft: Story = {
  args: {
    mainContent,
    sidebar: sidebarContent,
    sidebarPosition: 'left',
  },
};

export const WithLongContent: Story = {
  args: {
    mainContent: (
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardTitle>セクション {i + 1}</CardTitle>
            <CardBody>
              <p>長いコンテンツの例です。スクロール可能なコンテンツを表示できます。</p>
            </CardBody>
          </Card>
        ))}
      </div>
    ),
    sidebar: sidebarContent,
    sidebarPosition: 'right',
  },
};

export const Responsive: Story = {
  args: {
    mainContent,
    sidebar: sidebarContent,
    sidebarPosition: 'right',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

