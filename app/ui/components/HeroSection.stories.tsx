import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta = {
    title: 'Components/HeroSection',
    component: HeroSection,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
        },
        description: {
            control: 'text',
        },
    },
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: '名刺管理から、収益を最大化する',
        description: 'Sansanは、名刺や企業情報、営業履歴を一元管理して全社で共有できるようにすることで、売上拡大とコスト削減を同時に実現するビジネスデータベースです。',
        ctaButtons: [
            {
                text: '「3分でわかる Sansan」資料をダウンロード',
                variant: 'primary',
            },
            {
                text: 'お問い合わせ',
                variant: 'secondary',
            },
        ],
    },
};

export const SingleButton: Story = {
    args: {
        title: 'シンプルなヒーローセクション',
        description: '1つのCTAボタンを持つシンプルなヒーローセクションです。',
        ctaButtons: [
            {
                text: '今すぐ始める',
                variant: 'primary',
            },
        ],
    },
};

export const ThreeButtons: Story = {
    args: {
        title: '複数のCTAボタン',
        description: '3つのCTAボタンを持つヒーローセクションです。',
        ctaButtons: [
            {
                text: '資料ダウンロード',
                variant: 'primary',
            },
            {
                text: 'お問い合わせ',
                variant: 'secondary',
            },
            {
                text: '詳しく見る',
                variant: 'tertiary',
            },
        ],
    },
};

export const NoButtons: Story = {
    args: {
        title: 'ボタンなしのヒーローセクション',
        description: 'CTAボタンがないシンプルなヒーローセクションです。',
    },
};

