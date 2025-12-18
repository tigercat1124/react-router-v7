import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { Button } from '../components/Button';

const meta = {
  title: 'Components/Layout/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'ダッシュボード',
  },
};

export const WithActions: Story = {
  args: {
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
};

export const WithMultipleActions: Story = {
  args: {
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
};

export const LongTitle: Story = {
  args: {
    title: '非常に長いタイトルが設定された場合の表示',
    actions: (
      <Button variant="primary" size="small">
        アクション
      </Button>
    ),
  },
};

