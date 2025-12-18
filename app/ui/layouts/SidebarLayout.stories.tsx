import type { Meta, StoryObj } from '@storybook/react';
import { SidebarLayout } from './SidebarLayout';
import { Sidebar } from './Sidebar';
import type { SidebarMenuItem } from './Sidebar';
import { Card, CardBody, CardTitle } from '../components/Card';

const meta = {
  title: 'Components/Layout/SidebarLayout',
  component: SidebarLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SidebarLayout>;

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
  },
];

export const Default: Story = {
  args: {
    sidebarProps: {
      logo: '管理画面',
      items: menuItems,
      activeItem: '/dashboard',
    },
    children: (
      <Card>
        <CardTitle>メインコンテンツ</CardTitle>
        <CardBody>
          <p>サイドバーレイアウトのメインコンテンツエリアです。</p>
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

