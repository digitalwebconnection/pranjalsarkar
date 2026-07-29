import React from 'react';
import { Menu, Search, FileText, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: 'overview' | 'leads';
  setActiveTab: (tab: 'overview' | 'leads') => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  handleLogoutClick: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen, isCollapsed, setIsCollapsed, handleLogoutClick
}) => {
  return (
    <aside className={`
      fixed md:static inset-y-0 left-0 z-20
      bg-white border-r border-slate-200 shadow-xl md:shadow-none
      transform transition-all duration-300 ease-in-out flex flex-col
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      ${isCollapsed ? 'md:w-[80px]' : 'w-[280px] md:w-[280px]'}
    `}>
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        {!isCollapsed && (
          <div className="animate-in fade-in zoom-in duration-200">
            <h2 className="text-lg font-black tracking-tighter text-slate-800 uppercase">Product Leadership</h2>
          </div>
        )}
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden md:flex p-1.5 rounded-sm bg-slate-50 hover:bg-slate-100 text-slate-400 cursor-ew-resize">
          <Menu className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        <nav className="space-y-1">
          <button onClick={() => { setActiveTab('overview'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-start gap-3 px-4'} py-3 rounded-sm transition-all cursor-pointer ${activeTab === 'overview' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>
            <Search className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="text-sm font-bold">Overview</span>}
          </button>
          <button onClick={() => { setActiveTab('leads'); setIsMobileMenuOpen(false); }}
            className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-start gap-3 px-4'} py-3 rounded-sm transition-all cursor-pointer ${activeTab === 'leads' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}>
            <FileText className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="text-sm font-bold">Leads CRM</span>}
          </button>
        </nav>
      </div>

      <div className="p-4 border-t border-slate-100">
        <button onClick={handleLogoutClick} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-sm text-slate-500 bg-slate-200 hover:bg-red-200 hover:text-rose-600 transition-colors font-bold text-sm cursor-pointer">
          <LogOut className="w-4 h-4" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};
