import React from 'react';

export interface HeaderProps {
  title?: string;
  actions?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title = 'ダッシュボード',
  actions,
  className = '',
}) => {
  return (
    <header
      className={`sticky top-0 z-[100] flex items-center justify-between h-16 px-10 bg-white text-[#1a1a1a] border-b border-[#d4d4d4] ${className}`}
    >
      <h1 className="text-2xl font-medium text-[#1a1a1a] tracking-[0.01em]">
        {title}
      </h1>
      {actions && (
        <div className="flex gap-4 items-center">
          {actions}
        </div>
      )}
    </header>
  );
};

