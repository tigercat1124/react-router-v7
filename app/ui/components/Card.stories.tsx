import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from './Card';
import { Button } from './Button';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'elevated', 'outlined', 'feature'],
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'default',
        children: (
            <>
                <CardHeader>
                    <CardTitle>カードタイトル</CardTitle>
                    <CardSubtitle>サブタイトル</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <p>カードの本文コンテンツがここに入ります。このカードは標準のスタイルです。</p>
                </CardBody>
                <CardFooter>
                    <Button variant="primary">アクション</Button>
                </CardFooter>
            </>
        ),
    },
};

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        children: (
            <>
                <CardHeader>
                    <CardTitle>エレベーテッドカード</CardTitle>
                    <CardSubtitle>より強いシャドウ</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <p>このカードはより強いシャドウを持ち、重要な情報の強調に使用されます。</p>
                </CardBody>
                <CardFooter>
                    <Button variant="primary">詳細を見る</Button>
                </CardFooter>
            </>
        ),
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: (
            <>
                <CardHeader>
                    <CardTitle>アウトラインカード</CardTitle>
                    <CardSubtitle>ボーダーのみ</CardSubtitle>
                </CardHeader>
                <CardBody>
                    <p>このカードはボーダーのみで、軽量な情報表示に適しています。</p>
                </CardFooter>
                <CardFooter>
                    <Button variant="secondary">詳細</Button>
                </CardFooter>
            </>
        ),
    },
};

export const Feature: Story = {
    args: {
        variant: 'feature',
        children: (
            <>
                <div className="w-12 h-12 mx-auto mb-4 bg-[#8b7355] rounded-full flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                        <path d="M2 17L12 22L22 17" />
                        <path d="M2 12L12 17L22 12" />
                    </svg>
                </div>
                <CardTitle>機能カード</CardTitle>
                <CardBody>
                    <p className="text-[#6b6b6b]">機能紹介用のカードです。中央揃えでアイコンとタイトル、説明を表示します。</p>
                </CardBody>
            </>
        ),
    },
};

export const Grid: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default">
                <CardHeader>
                    <CardTitle>カード 1</CardTitle>
                </CardHeader>
                <CardBody>
                    <p>デフォルトスタイルのカードです。</p>
                </CardBody>
            </Card>
            <Card variant="elevated">
                <CardHeader>
                    <CardTitle>カード 2</CardTitle>
                </CardHeader>
                <CardBody>
                    <p>エレベーテッドスタイルのカードです。</p>
                </CardBody>
            </Card>
            <Card variant="outlined">
                <CardHeader>
                    <CardTitle>カード 3</CardTitle>
                </CardHeader>
                <CardBody>
                    <p>アウトラインスタイルのカードです。</p>
                </CardBody>
            </Card>
        </div>
    ),
};

