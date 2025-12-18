import React from 'react';

export type CardVariant = 'default' | 'elevated' | 'outlined' | 'feature';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    children: React.ReactNode;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
}

export interface CardSubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    children: React.ReactNode;
}

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
    variant = 'default',
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'rounded transition-all duration-200 focus-within:outline-2 focus-within:outline-[#8b7355] focus-within:outline-offset-2';

    const variantClasses = {
        default: 'bg-white border border-[#e5e5e5] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:border-[#8b7355]',
        elevated: 'bg-white border-0 p-8 shadow-[0_2px_6px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
        outlined: 'bg-transparent border border-[#e5e5e5] p-8 shadow-none hover:border-[#8b7355] hover:bg-[#fafafa]',
        feature: 'bg-white border border-[#e5e5e5] p-8 text-center shadow-[0_1px_3px_rgba(0,0,0,0.06)] hover:border-[#8b7355]',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    return (
        <div className={classes} {...props}>
            {children}
        </div>
    );
};

export const CardHeader: React.FC<CardHeaderProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={`pb-3 border-b border-[#d4d4d4] mb-6 ${className}`} {...props}>
            {children}
        </div>
    );
};

export const CardTitle: React.FC<CardTitleProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <h3 className={`text-xl font-medium text-[#1a1a1a] mb-2 ${className}`} {...props}>
            {children}
        </h3>
    );
};

export const CardSubtitle: React.FC<CardSubtitleProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <p className={`text-[0.8125rem] text-[#6b6b6b] ${className}`} {...props}>
            {children}
        </p>
    );
};

export const CardBody: React.FC<CardBodyProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={`py-4 text-[#6b6b6b] ${className}`} {...props}>
            {children}
        </div>
    );
};

export const CardFooter: React.FC<CardFooterProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={`pt-4 border-t border-[#d4d4d4] mt-4 ${className}`} {...props}>
            {children}
        </div>
    );
};

