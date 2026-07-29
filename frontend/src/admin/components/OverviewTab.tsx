import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { type LeadStatsResponse } from '../types';

interface OverviewTabProps {
  leadStats: LeadStatsResponse | null;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ leadStats }) => {
  const overviewStats = [
    { label: 'Total Leads', value: leadStats?.stats?.total || 0, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'New Apps', value: leadStats?.stats?.NEW || 0, icon: UserPlus, color: 'text-emerald-600', bg: 'bg-emerald-50' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-black text-slate-800">Dashboard Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {overviewStats.map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-sm border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-sm ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-black text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
