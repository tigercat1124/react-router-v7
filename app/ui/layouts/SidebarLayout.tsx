import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import type { SidebarProps } from './Sidebar';

export interface SidebarLayoutProps {
  sidebar?: React.ReactNode;
  sidebarProps?: Omit<SidebarProps, 'collapsed'>;
  children: React.ReactNode;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  className?: string;
}

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({
  sidebar,
  sidebarProps,
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
      <main
        className={`flex-1 transition-all duration-300 ${
          collapsed ? 'md:ml-20' : 'md:ml-[260px]'
        }`}
      >
        <div className="p-10">
          {children}
        </div>
      </main>
      
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

