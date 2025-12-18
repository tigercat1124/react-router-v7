import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    children,
    className = '',
    disabled,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-sm font-medium cursor-pointer transition-all duration-200 tracking-[0.01em] focus:outline-2 focus:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60';

    const variantClasses = {
        primary: 'bg-[#1a1a1a] text-white border border-[#1a1a1a] hover:bg-[#2d2d2d] hover:border-[#2d2d2d] focus:outline-[#8b7355] active:bg-[#0d0d0d] disabled:bg-[#d4d4d4] disabled:border-[#d4d4d4] disabled:text-[#6b6b6b]',
        secondary: 'bg-white text-[#1a1a1a] border border-[#d4d4d4] hover:bg-[#fafafa] hover:border-[#8b7355] focus:outline-[#8b7355] active:bg-[#f5f5f5] disabled:text-[#d4d4d4] disabled:border-[#e5e5e5]',
        tertiary: 'bg-transparent text-[#1a1a1a] hover:text-[#8b7355] focus:outline-[#8b7355] active:text-[#6b5a45] disabled:text-[#d4d4d4]',
    };

    const sizeClasses = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-2.5 text-[0.9375rem]',
        large: 'px-8 py-3 text-base',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            className={classes}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};

