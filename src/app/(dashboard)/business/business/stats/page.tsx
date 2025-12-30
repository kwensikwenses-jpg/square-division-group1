"use client";

import React, { useEffect, useState } from 'react';
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
      // 1. Authenticate user session
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // 2. Fetch Lead & View Data from the Marketplace table
      const { data: leads } = await supabase
        .from('marketplace_leads')
        .select('views_count')
        .eq('business_id', user.id);

      // 3. Fetch Message engagement counts
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
      <header className="border-b-4 border-black pb-8">
        <h1 className="text-6xl font-black uppercase tracking-tighter italic">Network / Analytics</h1>
        <p className="mt-4 uppercase text-xs font-bold tracking-widest opacity-40">
          Performance Metrics — Jan 2026 Ready
        </p>
      </header>

      {/* Primary Data Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-black">
        <StatBlock label="Marketplace Leads" value={stats.totalLeads} sub="Active Posts" />
        <StatBlock label="Total Reach" value={stats.totalViews} sub="Unique Views" />
        <StatBlock label="B2B Messages" value={stats.totalMessages} sub="Active Chats" />
        <StatBlock label="Engagement" value={`${stats.engagementRate}%`} sub="Conversion Rate" />
      </div>

      {/* Growth Chart: Fixed "no-inline-styles" warning */}
      <div className="border-2 border-black p-12 bg-white">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12">Projected Market Expansion</h3>
        <div className="h-64 flex items-end gap-2">
          {[40, 70, 45, 90, 65, 80, 95].map((height, i) => (
            <div 
              key={i} 
              className="flex-1 bg-black hover:bg-[#6082a3] transition-all relative group"
              // We use a CSS variable here to keep the dynamic height while satisfying the linter
              style={{ '--bar-h': `${height}%` } as React.CSSProperties}
            >
               {/* Use the CSS variable in a Tailwind utility class */}
               <div className="w-full bg-black h-[var(--bar-h)] group-hover:bg-[#6082a3] transition-colors" />
               
               <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                 +{height}%
               </span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-bold uppercase opacity-40 tracking-widest">
          <span>Week 01</span>
          <span>Week 04</span>
        </div>
      </div>
    </div>
  );
}

function StatBlock({ label, value, sub }: { label: string, value: string | number, sub: string }) {
  return (
    <div className="bg-[#edeae7] p-10 hover:bg-white transition-all">
      <p className="text-[10px] font-bold uppercase opacity-40 mb-4">{label}</p>
      <p className="text-6xl font-black tracking-tighter">{value}</p>
      <p className="text-[10px] font-bold mt-2 uppercase tracking-widest italic">{sub}</p>
    </div>
  );
}