"use client";

import React, { useEffect, useState, CSSProperties } from 'react';
import { supabase } from '@/utils/supabase';

export default function BusinessStats() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    totalViews: 0,
    totalMessages: 0,
    engagementRate: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: leads } = await supabase
        .from('marketplace_leads')
        .select('views_count')
        .eq('business_id', user.id);

      const { count: messageCount } = await supabase
        .from('messages')
        .select('*', { count: 'exact', head: true })
        .eq('sender_id', user.id);

      if (leads) {
        const totalLeads = leads.length;
        const totalViews = leads.reduce((acc, curr) => acc + (curr.views_count || 0), 0);
        const engagementRate = totalViews > 0 ? ((messageCount || 0) / totalViews) * 100 : 0;

        setStats({
          totalLeads,
          totalViews,
          totalMessages: messageCount || 0,
          engagementRate: Math.round(engagementRate)
        });
      }
      setLoading(false);
    };
    fetchStats();
  }, []);

  return (
    <div className="space-y-12">
      <header className="border-b-4 border-black pb-8 flex justify-between items-end">
        <h1 className="text-6xl font-black uppercase tracking-tighter italic">Analytics</h1>
        <button 
          onClick={() => {
            const blob = new Blob([JSON.stringify(stats, null, 2)], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Kai_Report.txt';
            a.click();
          }}
          className="bg-black text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#6082a3]"
        >
          Export Report
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black border border-black">
        <StatBlock label="Leads" value={stats.totalLeads} sub="Active" />
        <StatBlock label="Reach" value={stats.totalViews} sub="Views" />
        <StatBlock label="Chats" value={stats.totalMessages} sub="Messages" />
        <StatBlock label="Engage" value={`${stats.engagementRate}%`} sub="Rate" />
      </div>

      <div className="border-2 border-black p-12 bg-white">
        <div className="h-64 flex items-end gap-2">
          {[40, 70, 45, 90, 65, 80, 95].map((height, i) => {
            const barStyle: CSSProperties = { "--bar-h": `${height}%` } as CSSProperties;
            return (
              <div 
                key={`bar-index-${i}`} 
                className="flex-1 bg-black hover:bg-[#6082a3] transition-all relative group h-[var(--bar-h)]"
                style={barStyle}
              >
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100">
                  +{height}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatBlock({ label, value, sub }: { label: string, value: string | number, sub: string }) {
  return (
    <div className="bg-[#edeae7] p-10 hover:bg-white transition-all">
      <p className="text-[10px] font-bold uppercase opacity-40 mb-4">{label}</p>
      <p className="text-5xl font-black tracking-tighter">{value}</p>
      <p className="text-[10px] font-bold mt-2 uppercase tracking-widest">{sub}</p>
    </div>
  );
}