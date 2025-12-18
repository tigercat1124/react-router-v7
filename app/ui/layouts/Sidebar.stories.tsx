import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import type { SidebarMenuItem } from './Sidebar';

const meta = {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
    },
    activeItem: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Sidebar>;

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
    logo: '管理画面',
    items: menuItems,
    activeItem: '/dashboard',
    collapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    logo: '管理画面',
    items: menuItems,
    activeItem: '/dashboard',
    collapsed: true,
  },
};

export const WithNestedMenu: Story = {
  args: {
    logo: '管理画面',
    items: menuItems,
    activeItem: '/products/list',
    collapsed: false,
  },
};

export const WithIcons: Story = {
  args: {
    logo: '管理画面',
    items: menuItems.map(item => ({
      ...item,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    })),
    activeItem: '/dashboard',
    collapsed: false,
  },
};

export const Responsive: Story = {
  args: {
    logo: '管理画面',
    items: menuItems,
    activeItem: '/dashboard',
    collapsed: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

