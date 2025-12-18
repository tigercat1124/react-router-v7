import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import type { SidebarProps } from './Sidebar';
import { Header } from './Header';
import type { HeaderProps } from './Header';

export interface AdminLayoutProps {
  sidebar?: React.ReactNode;
  sidebarProps?: Omit<SidebarProps, 'collapsed'>;
  header?: React.ReactNode;
  headerTitle?: string;
  headerActions?: React.ReactNode;
  headerProps?: Omit<HeaderProps, 'title' | 'actions'>;
  children: React.ReactNode;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  className?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  sidebar,
  sidebarProps,
  header,
  headerTitle,
  headerActions,
  headerProps,
  children,
  collapsed: controlledCollapsed,
  onCollapse,
  className = '',
}) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  
  const isControlled = controlledCollapsed !== undefined;
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed;
  
  const handleCollapse = (newCollapsed: boolean) => {
    if (!isControlled) {
      setInternalCollapsed(newCollapsed);
    }
    if (onCollapse) {
      onCollapse(newCollapsed);
    }
  };

  return (
    <div className={`flex min-h-screen bg-[#fafafa] ${className}`}>
      {sidebar ? (
        sidebar
      ) : (
        <Sidebar
          {...sidebarProps}
          collapsed={collapsed}
        />
      )}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          collapsed ? 'md:ml-20' : 'md:ml-[260px]'
        }`}
      >
        {header ? (
          header
        ) : (
          <Header
            title={headerTitle}
            actions={headerActions}
            {...headerProps}
          />
        )}
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
      
      {/* Mobile overlay */}
      {!collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] md:hidden"
          onClick={() => handleCollapse(true)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

