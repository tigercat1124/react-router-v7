import React from 'react';

export interface TwoColumnLayoutProps {
  mainContent: React.ReactNode;
  sidebar: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  className?: string;
}

export const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  mainContent,
  sidebar,
  sidebarPosition = 'right',
  className = '',
}) => {
  return (
    <div className={`min-h-screen bg-[#fafafa] ${className}`}>
      <div className="container mx-auto px-10 py-10">
        <div
          className={`grid gap-6 ${
            sidebarPosition === 'right'
              ? 'grid-cols-1 lg:grid-cols-[1fr_300px]'
              : 'grid-cols-1 lg:grid-cols-[300px_1fr]'
          }`}
        >
          {sidebarPosition === 'left' && (
            <aside className="order-1 lg:order-none">
              {sidebar}
            </aside>
          )}
          <main className="order-2 lg:order-none">
            {mainContent}
          </main>
          {sidebarPosition === 'right' && (
            <aside className="order-3 lg:order-none">
              {sidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
};

