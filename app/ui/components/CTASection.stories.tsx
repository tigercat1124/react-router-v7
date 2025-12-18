import type { Meta, StoryObj } from '@storybook/react';
import { CTASection } from './CTASection';

const meta = {
    title: 'Components/CTASection',
    component: CTASection,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'minimal', 'split'],
        },
    },
} satisfies Meta<typeof CTASection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        title: '「3分でわかる Sansan」',
        description: '資料をダウンロード',
        button: {
            text: '資料をダウンロード',
        },
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        title: 'お問い合わせ',
        description: 'お気軽にお問い合わせください',
        button: {
            text: 'お問い合わせ',
        },
    },
};

export const Minimal: Story = {
    args: {
        variant: 'minimal',
        title: 'NEW デジタル名刺について 詳しく知りたい',
        description: '資料ダウンロード',
        button: {
            text: '資料ダウンロード',
        },
    },
};

export const Split: Story = {
    args: {
        variant: 'split',
        title: 'オプションを選択',
        splitItems: [
            {
                title: '資料をダウンロード',
                description: '詳細な資料をダウンロードできます',
                button: {
                    text: 'ダウンロード',
                    variant: 'primary',
                },
            },
            {
                title: 'お問い合わせ',
                description: 'お気軽にお問い合わせください',
                button: {
                    text: 'お問い合わせ',
                    variant: 'secondary',
                },
            },
        ],
    },
};

export const ComparisonCTA: Story = {
    args: {
        variant: 'primary',
        title: '比較検討に使える資料を ダウンロードした',
        description: '他社との比較資料をダウンロード',
        button: {
            text: '比較資料をダウンロード',
        },
    },
};

export const AllVariants: Story = {
    args: { title: '' },
    render: () => (
        <div className="space-y-0">
            <CTASection
                variant="primary"
                title="Primary CTA"
                description="プライマリスタイルのCTAセクション"
                button={{ text: 'アクション' }}
            />
            <CTASection
                variant="secondary"
                title="Secondary CTA"
                description="セカンダリスタイルのCTAセクション"
                button={{ text: 'アクション' }}
            />
            <CTASection
                variant="minimal"
                title="Minimal CTA"
                description="ミニマルスタイルのCTAセクション"
                button={{ text: 'アクション' }}
            />
            <CTASection
                variant="split"
                title="Split CTA"
                splitItems={[
                    {
                        title: 'オプション 1',
                        description: '説明文1',
                        button: { text: 'アクション1', variant: 'primary' },
                    },
                    {
                        title: 'オプション 2',
                        description: '説明文2',
                        button: { text: 'アクション2', variant: 'secondary' },
                    },
                ]}
            />
        </div>
    ),
};

