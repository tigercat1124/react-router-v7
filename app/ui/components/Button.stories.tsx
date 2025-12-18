import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: '資料をダウンロード',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'medium',
        children: 'お問い合わせ',
    },
};

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        size: 'medium',
        children: '詳しく見る',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'small',
        children: '小さいボタン',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'large',
        children: '大きいボタン',
    },
};

export const Disabled: Story = {
    args: {
        variant: 'primary',
        size: 'medium',
        children: '無効なボタン',
        disabled: true,
    },
};

export const AllVariants: Story = {
    args: { children: '' },
    render: () => (
        <div className="flex flex-col gap-4">
            <div className="flex gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="tertiary">Tertiary</Button>
            </div>
            <div className="flex gap-4">
                <Button variant="primary" size="small">Small</Button>
                <Button variant="primary" size="medium">Medium</Button>
                <Button variant="primary" size="large">Large</Button>
            </div>
            <div className="flex gap-4">
                <Button variant="primary" disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
                <Button variant="tertiary" disabled>Disabled</Button>
            </div>
        </div>
    ),
};

