import React from 'react';
import { Header } from './Header';
import type { HeaderProps } from './Header';

export interface HeaderLayoutProps {
  header?: React.ReactNode;
  headerProps?: HeaderProps;
  children: React.ReactNode;
  className?: string;
}

export const HeaderLayout: React.FC<HeaderLayoutProps> = ({
  header,
  headerProps,
  children,
  className = '',
}) => {
  return (
    <div className={`flex flex-col min-h-screen bg-[#fafafa] ${className}`}>
      {header ? (
        header
      ) : (
        <Header {...headerProps} />
      )}
      <main className="flex-1 p-10">
        {children}
      </main>
    </div>
  );
};

