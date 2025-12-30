"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { supabase } from '@/utils/supabase';

export default function PublicMarketplace() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLeads = async () => {
      // Updated to fetch 'id' and 'views_count'
      const { data, error } = await supabase
        .from('marketplace_leads')
        .select(`
          id,
          title,
          description,
          created_at,
          views_count,
          profiles (business_name)
        `)
        .order('created_at', { ascending: false });

      if (!error && data) setLeads(data);
      setLoading(false);
    };
    fetchLeads();
  }, []);

  const handleViewLead = async (leadId: string) => {
    // 1. Call the SQL function to increment views
    const { error } = await supabase.rpc('increment_view_count', { row_id: leadId });
    
    if (!error) {
      // 2. Update local state so the number jumps instantly for the demo
      setLeads(prev => prev.map(l => 
        l.id === leadId ? { ...l, views_count: (l.views_count || 0) + 1 } : l
      ));
      
      // 3. Optional: Alert or redirect to a chat initiation page
      console.log("View recorded for lead:", leadId);
    }
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="border-b-4 border-black pb-8 mb-12 flex justify-between items-end">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">Market</h1>
          <div className="text-right uppercase font-bold text-xs tracking-[0.2em] opacity-40">
            <p>B2B Activity</p>
            <p>{leads.length} Live Opportunities</p>
          </div>
        </header>

        {loading ? (
          <p className="animate-pulse uppercase font-black text-2xl">Scanning Network...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white p-8 group hover:bg-black hover:text-white transition-all cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] font-bold uppercase text-[#6082a3] group-hover:text-white">
                    {lead.profiles?.business_name || "Verified Partner"}
                  </p>
                  <span className="text-[9px] font-mono opacity-40 uppercase group-hover:opacity-100">
                    Views: {lead.views_count || 0}
                  </span>
                </div>
                <h2 className="text-3xl font-black uppercase mb-4 leading-none">{lead.title}</h2>
                <p className="text-xs uppercase opacity-60 mb-8 line-clamp-3">{lead.description}</p>
                <button 
                  onClick={() => handleViewLead(lead.id)}
                  className="w-full border border-black py-4 uppercase text-[10px] font-bold group-hover:border-white transition-colors"
                >
                  Discuss Lead
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}