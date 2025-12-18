import React, { useState } from 'react';

export interface SidebarMenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  children?: SidebarMenuItem[];
  active?: boolean;
}

export interface SidebarProps {
  logo?: React.ReactNode;
  items?: SidebarMenuItem[];
  activeItem?: string;
  collapsed?: boolean;
  onItemClick?: (item: SidebarMenuItem) => void;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  logo = '管理画面',
  items = [],
  activeItem,
  collapsed = false,
  onItemClick,
  className = '',
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const isActive = (item: SidebarMenuItem): boolean => {
    if (activeItem) {
      return item.href === activeItem || item.label === activeItem;
    }
    return item.active || false;
  };

  const hasActiveChild = (item: SidebarMenuItem): boolean => {
    if (!item.children) return false;
    return item.children.some(child => isActive(child) || hasActiveChild(child));
  };

  const renderMenuItem = (item: SidebarMenuItem, level: number = 0): React.ReactNode => {
    const active = isActive(item);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.label);
    const hasActive = hasActiveChild(item);

    const baseClasses = 'block w-full text-left px-4 py-3.5 text-[0.9375rem] font-medium transition-all duration-200 cursor-pointer border-l-2';
    const activeClasses = active
      ? 'text-white font-medium bg-[rgba(139,115,85,0.08)] border-l-[#8b7355]'
      : 'text-[#b8b8b8] border-l-transparent hover:text-white hover:bg-[rgba(255,255,255,0.05)]';
    
    const paddingLeft = level > 0 ? `pl-${4 + level * 4}` : 'pl-4';

    if (hasChildren) {
      return (
        <li key={item.label} className="mb-0.5">
          <button
            onClick={() => toggleExpanded(item.label)}
            className={`${baseClasses} ${activeClasses} ${paddingLeft} ${collapsed ? 'px-2' : ''} w-full flex items-center justify-between`}
          >
            <span className={`flex items-center gap-3 ${collapsed ? 'justify-center w-full' : ''}`}>
              {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
              {!collapsed && <span>{item.label}</span>}
            </span>
            {!collapsed && (
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
          {!collapsed && isExpanded && item.children && (
            <ul className="mt-0.5">
              {item.children.map(child => renderMenuItem(child, level + 1))}
            </ul>
          )}
        </li>
      );
    }

    return (
      <li key={item.label} className="mb-0.5">
        <a
          href={item.href || '#'}
          onClick={(e) => {
            if (onItemClick) {
              e.preventDefault();
              onItemClick(item);
            }
          }}
          className={`${baseClasses} ${activeClasses} ${paddingLeft} ${collapsed ? 'px-2 justify-center' : ''} flex items-center gap-3`}
        >
          {item.icon && <span className="flex-shrink-0">{item.icon}</span>}
          {!collapsed && <span>{item.label}</span>}
        </a>
      </li>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-[#1f1f1f] text-[#e8e8e8] overflow-y-auto z-[1000] border-r border-[rgba(255,255,255,0.05)] transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-[260px]'
      } hidden md:block ${className}`}
    >
      <div className="p-6 pb-6">
        <div
          className={`font-semibold text-xl mb-12 text-white tracking-[0.05em] pb-6 border-b border-[rgba(255,255,255,0.1)] ${
            collapsed ? 'text-center text-sm' : ''
          }`}
        >
          {collapsed ? (typeof logo === 'string' ? logo.charAt(0) : logo) : logo}
        </div>
        <ul className="list-none">
          {items.map(item => renderMenuItem(item))}
        </ul>
      </div>
    </aside>
  );
};

