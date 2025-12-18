import type { Meta, StoryObj } from '@storybook/react';
import { HeaderLayout } from './HeaderLayout';
import { Header } from './Header';
import { Button } from '../components/Button';
import { Card, CardBody, CardTitle } from '../components/Card';

const meta = {
  title: 'Components/Layout/HeaderLayout',
  component: HeaderLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof HeaderLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerProps: {
      title: 'ダッシュボード',
    },
    children: (
      <Card>
        <CardTitle>メインコンテンツ</CardTitle>
        <CardBody>
          <p>ヘッダーレイアウトのメインコンテンツエリアです。</p>
        </CardBody>
      </Card>
    ),
  },
};

export const WithContent: Story = {
  args: {
    headerProps: {
      title: 'ユーザー管理',
      actions: (
        <>
          <Button variant="secondary" size="small">
            検索
          </Button>
          <Button variant="primary" size="small">
            新規作成
          </Button>
        </>
      ),
    },
    children: (
      <div className="space-y-6">
        <Card>
          <CardTitle>ユーザー一覧</CardTitle>
          <CardBody>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fafafa]">
                  <th className="p-3 text-left text-xs font-medium text-[#6b6b6b] uppercase tracking-wider border-b border-[#d4d4d4]">
                    ID
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-[#6b6b6b] uppercase tracking-wider border-b border-[#d4d4d4]">
                    名前
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-[#6b6b6b] uppercase tracking-wider border-b border-[#d4d4d4]">
                    メール
                  </th>
                  <th className="p-3 text-left text-xs font-medium text-[#6b6b6b] uppercase tracking-wider border-b border-[#d4d4d4]">
                    ステータス
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[#fafafa]">
                  <td className="p-3 border-b border-[#d4d4d4]">001</td>
                  <td className="p-3 border-b border-[#d4d4d4]">山田 太郎</td>
                  <td className="p-3 border-b border-[#d4d4d4]">yamada@example.com</td>
                  <td className="p-3 border-b border-[#d4d4d4]">
                    <span className="px-3 py-1 text-xs font-medium bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9] rounded">
                      有効
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#fafafa]">
                  <td className="p-3 border-b border-[#d4d4d4]">002</td>
                  <td className="p-3 border-b border-[#d4d4d4]">佐藤 花子</td>
                  <td className="p-3 border-b border-[#d4d4d4]">sato@example.com</td>
                  <td className="p-3 border-b border-[#d4d4d4]">
                    <span className="px-3 py-1 text-xs font-medium bg-[#e8f5e9] text-[#2e7d32] border border-[#c8e6c9] rounded">
                      有効
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    ),
  },
};

export const WithMultipleActions: Story = {
  args: {
    headerProps: {
      title: '商品管理',
      actions: (
        <>
          <Button variant="tertiary" size="small">
            フィルター
          </Button>
          <Button variant="secondary" size="small">
            エクスポート
          </Button>
          <Button variant="primary" size="small">
            新規登録
          </Button>
        </>
      ),
    },
    children: (
      <Card>
        <CardTitle>商品一覧</CardTitle>
        <CardBody>
          <p>複数のアクションボタンが表示されています。</p>
        </CardBody>
      </Card>
    ),
  },
};

export const LongContent: Story = {
  args: {
    headerProps: {
      title: 'レポート',
    },
    children: (
      <div className="space-y-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i}>
            <CardTitle>セクション {i + 1}</CardTitle>
            <CardBody>
              <p>スクロール可能な長いコンテンツです。ヘッダーは固定表示されます。</p>
            </CardBody>
          </Card>
        ))}
      </div>
    ),
  },
};

