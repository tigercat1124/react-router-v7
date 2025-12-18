import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const meta = {
    title: 'Components/Navigation',
    component: Navigation,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        logo: {
            control: 'text',
        },
    },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
    { label: '機能', href: '/features' },
    { label: '料金', href: '/pricing' },
    { label: '会社情報', href: '/about' },
    { label: 'お問い合わせ', href: '/contact' },
];

export const Default: Story = {
    args: {
        logo: 'Logo',
        items: defaultItems,
        ctaButton: {
            text: '資料ダウンロード',
        },
    },
};

export const WithoutCTA: Story = {
    args: {
        logo: 'MyApp',
        items: defaultItems,
    },
};

export const Minimal: Story = {
    args: {
        logo: 'Simple',
        items: [
            { label: 'ホーム', href: '/' },
            { label: 'サービス', href: '/services' },
        ],
    },
};

export const WithCustomLogo: Story = {
    args: {
        logo: (
            <span className="text-2xl font-bold bg-gradient-to-r from-[#1a1a1a] to-[#8b7355] bg-clip-text text-transparent">
                Sansan
            </span>
        ),
        items: defaultItems,
        ctaButton: {
            text: '無料トライアル',
        },
    },
};

export const Scrollable: Story = {
    render: () => (
        <div className="h-[200vh]">
            <Navigation
                logo="Scrollable Nav"
                items={defaultItems}
                ctaButton={{ text: 'CTA Button' }}
            />
            <div className="pt-20 p-8">
                <h1 className="text-4xl font-bold mb-4">スクロール可能なページ</h1>
                <p className="text-lg mb-8">
                    このページをスクロールすると、ナビゲーションバーのスタイルが変化します。
                </p>
                <div className="space-y-4">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <div key={i} className="p-4 bg-gray-100 rounded">
                            コンテンツセクション {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};

