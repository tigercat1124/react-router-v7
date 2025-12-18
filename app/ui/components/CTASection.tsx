import React from 'react';
import { Button, type ButtonVariant, type ButtonSize } from './Button';

export type CTASectionVariant = 'primary' | 'secondary' | 'minimal' | 'split';

export interface CTASectionProps {
    variant?: CTASectionVariant;
    title: string;
    description?: string;
    button?: {
        text: string;
        variant?: ButtonVariant;
        size?: ButtonSize;
        onClick?: () => void;
    };
    splitItems?: Array<{
        title: string;
        description?: string;
        button: {
            text: string;
            variant?: ButtonVariant;
            onClick?: () => void;
        };
    }>;
    className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
    variant = 'primary',
    title,
    description,
    button,
    splitItems,
    className = '',
}) => {
    if (variant === 'split' && splitItems) {
        return (
            <section className={`bg-white py-16 px-6 sm:py-12 sm:px-4 ${className}`}>
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-6">
                    {splitItems.map((item, index) => (
                        <div
                            key={index}
                            className="border border-[#e5e5e5] rounded p-8 sm:p-6 text-center hover:border-[#8b7355] transition-all bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                        >
                            <h3 className="text-2xl font-medium mb-3 text-[#1a1a1a]">{item.title}</h3>
                            {item.description && (
                                <p className="text-base mb-5 text-[#6b6b6b]">{item.description}</p>
                            )}
                            <Button
                                variant={item.button.variant || 'primary'}
                                onClick={item.button.onClick}
                            >
                                {item.button.text}
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    const variantClasses = {
        primary: 'bg-[#1a1a1a] text-white',
        secondary: 'bg-[#fafafa] text-[#1a1a1a]',
        minimal: 'bg-transparent border-t border-b border-[#d4d4d4]',
    };

    const titleClasses = {
        primary: 'text-4xl sm:text-[32px] font-medium leading-tight mb-4 text-white',
        secondary: 'text-[32px] sm:text-[28px] font-medium leading-snug mb-4 text-[#1a1a1a]',
        minimal: 'text-2xl font-medium mb-3 text-[#1a1a1a]',
    };

    const descriptionClasses = {
        primary: 'text-lg sm:text-base leading-relaxed mb-8 text-white/90',
        secondary: 'text-base leading-relaxed mb-6 text-[#6b6b6b]',
        minimal: 'text-base mb-5 text-[#6b6b6b]',
    };

    const contentMaxWidth = variant === 'minimal' ? 'max-w-2xl' : 'max-w-3xl';

    return (
        <section className={`${variantClasses[variant]} py-20 sm:py-16 px-6 sm:px-4 ${className}`}>
            <div className={`${contentMaxWidth} mx-auto text-center`}>
                <h2 className={titleClasses[variant]}>{title}</h2>
                {description && <p className={descriptionClasses[variant]}>{description}</p>}
                {button && (
                    <Button
                        variant={variant === 'primary' ? 'secondary' : 'primary'}
                        size={button.size || 'medium'}
                        onClick={button.onClick}
                        className={variant === 'primary' ? 'bg-white text-[#1a1a1a] border-white hover:bg-[#fafafa] hover:border-[#8b7355]' : ''}
                    >
                        {button.text}
                    </Button>
                )}
            </div>
        </section>
    );
};

