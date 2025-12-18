import type { Meta, StoryObj } from '@storybook/react';
import { AdminLayout } from './AdminLayout';
import type { SidebarMenuItem } from './Sidebar';
import { Button } from '../components/Button';
import { Card, CardBody, CardTitle } from '../components/Card';

const meta = {
  title: 'Components/Layout/AdminLayout',
  component: AdminLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
    },
    headerTitle: {
      control: 'text',
    },
  },
} satisfies Meta<typeof AdminLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: SidebarMenuItem[] = [
  {
    label: 'ダッシュボード',
    href: '/dashboard',
    active: true,
  },
  {
    label: 'ユーザー管理',
    href: '/users',
  },
  {
    label: '商品管理',
    href: '/products',
    children: [
      {
        label: '商品一覧',
        href: '/products/list',
      },
      {
        label: '商品登録',
        href: '/products/create',
      },
      {
        label: 'カテゴリ管理',
        href: '/products/categories',
      },
    ],
  },
  {
    label: '注文管理',
    href: '/orders',
  },
  {
    label: 'レポート',
    href: '/reports',
  },
  {
    label: '設定',
    href: '/settings',
    children: [
      {
        label: '一般設定',
        href: '/settings/general',
      },
      {
        label: '通知設定',
        href: '/settings/notifications',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/dashboard',
    },
    headerTitle: 'ダッシュボード',
    children: (
      <Card>
        <CardTitle>メインコンテンツ</CardTitle>
        <CardBody>
          <p>管理画面レイアウトのメインコンテンツエリアです。</p>
        </CardBody>
      </Card>
    ),
  },
};

export const WithContent: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/dashboard',
    },
    headerTitle: 'ダッシュボード',
    headerActions: (
      <>
        <Button variant="secondary" size="small">
          検索
        </Button>
        <Button variant="primary" size="small">
          新規作成
        </Button>
      </>
    ),
    children: (
      <div className="space-y-6">
        <Card>
          <CardTitle>概要</CardTitle>
          <CardBody>
            <p>システムの概要情報を表示します。</p>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>統計情報</CardTitle>
          <CardBody>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-[#fafafa] rounded">
                <div className="text-2xl font-semibold">1,234</div>
                <div className="text-sm text-[#6b6b6b]">総ユーザー数</div>
              </div>
              <div className="p-4 bg-[#fafafa] rounded">
                <div className="text-2xl font-semibold">567</div>
                <div className="text-sm text-[#6b6b6b]">アクティブユーザー</div>
              </div>
              <div className="p-4 bg-[#fafafa] rounded">
                <div className="text-2xl font-semibold">89</div>
                <div className="text-sm text-[#6b6b6b]">新規登録（今月）</div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardTitle>データテーブル</CardTitle>
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

export const Collapsed: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/dashboard',
    },
    headerTitle: 'ダッシュボード',
    collapsed: true,
    children: (
      <Card>
        <CardTitle>折りたたみ状態</CardTitle>
        <CardBody>
          <p>サイドバーが折りたたまれた状態です。</p>
        </CardBody>
      </Card>
    ),
  },
};

export const WithNestedMenu: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/products/list',
    },
    headerTitle: '商品管理',
    headerActions: (
      <Button variant="primary" size="small">
        新規登録
      </Button>
    ),
    children: (
      <Card>
        <CardTitle>階層メニュー</CardTitle>
        <CardBody>
          <p>サイドバーに階層メニューが表示されています。</p>
        </CardBody>
      </Card>
    ),
  },
};

export const Responsive: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/dashboard',
    },
    headerTitle: 'ダッシュボード',
    children: (
      <Card>
        <CardTitle>レスポンシブ表示</CardTitle>
        <CardBody>
          <p>モバイル表示ではサイドバーがオーバーレイ表示されます。</p>
        </CardBody>
      </Card>
    ),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

