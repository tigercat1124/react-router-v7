import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export interface NavigationItem {
    label: string;
    href: string;
}

export interface NavigationProps {
    logo?: React.ReactNode;
    items?: NavigationItem[];
    ctaButton?: {
        text: string;
        onClick?: () => void;
    };
    className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
    logo = 'Logo',
    items = [],
    ctaButton,
    className = '',
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#d4d4d4] transition-shadow ${isScrolled ? 'shadow-[0_2px_6px_rgba(0,0,0,0.08)]' : ''} ${className}`}>
                <div className="max-w-7xl mx-auto px-10 py-4 sm:px-4 sm:py-3 flex items-center justify-between">
                    <a href="/" className="text-xl font-semibold text-[#1a1a1a] hover:text-[#8b7355] transition-colors">
                        {logo}
                    </a>

                    <ul className="hidden md:flex gap-8 items-center">
                        {items.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="text-[0.9375rem] font-medium text-[#1a1a1a] hover:text-[#8b7355] transition-colors relative py-2"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {ctaButton && (
                        <div className="hidden md:block ml-6">
                            <Button variant="primary" size="small" onClick={ctaButton.onClick}>
                                {ctaButton.text}
                            </Button>
                        </div>
                    )}

                    <button
                        className="md:hidden p-2 text-[#1a1a1a]"
                        onClick={toggleMobileMenu}
                        aria-label="メニューを開く"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12H21M3 6H21M3 18H21" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/50 z-[999] md:hidden"
                        onClick={closeMobileMenu}
                        aria-hidden="true"
                    />
                    <div className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 z-[1001] transform transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                        <button
                            className="absolute top-4 right-4 p-2 text-[#1a1a1a]"
                            onClick={closeMobileMenu}
                            aria-label="メニューを閉じる"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6L18 18" />
                            </svg>
                        </button>
                        <ul className="mt-8 space-y-4">
                            {items.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-[0.9375rem] font-medium text-[#1a1a1a] hover:text-[#8b7355] transition-colors block py-2"
                                        onClick={closeMobileMenu}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            {ctaButton && (
                                <li className="pt-4">
                                    <Button variant="primary" size="medium" onClick={ctaButton.onClick}>
                                        {ctaButton.text}
                                    </Button>
                                </li>
                            )}
                        </ul>
                    </div>
                </>
            )}
        </>
    );
};

