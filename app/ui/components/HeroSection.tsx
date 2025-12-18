import React from 'react';
import { Button, type ButtonVariant, type ButtonSize } from './Button';

export interface HeroSectionProps {
    title: string;
    description: string;
    ctaButtons?: Array<{
        text: string;
        variant?: ButtonVariant;
        size?: ButtonSize;
        onClick?: () => void;
    }>;
    className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    description,
    ctaButtons = [],
    className = '',
}) => {
    return (
        <section className={`py-20 px-6 text-center bg-[#fafafa] ${className}`}>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-4xl sm:text-[32px] font-medium leading-tight tracking-[0.01em] text-[#1a1a1a] mb-6 sm:mb-4">
                    {title}
                </h1>
                <p className="text-lg md:text-base sm:text-base leading-relaxed text-[#6b6b6b] max-w-2xl mx-auto mb-12 sm:mb-8">
                    {description}
                </p>
                {ctaButtons.length > 0 && (
                    <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 justify-center items-center flex-wrap mt-8 sm:mt-6">
                        {ctaButtons.map((button, index) => (
                            <Button
                                key={index}
                                variant={button.variant || 'primary'}
                                size={button.size || 'medium'}
                                onClick={button.onClick}
                            >
                                {button.text}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

