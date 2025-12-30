"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { supabase } from '@/utils/supabase';

export default function PublicMarketplace() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Fix for Navbar prop
  const router = useRouter();

  useEffect(() => {
    const fetchLeads = async () => {
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
    const { error } = await supabase.rpc('increment_view_count', { row_id: leadId });
    
    if (!error) {
      setLeads(prev => prev.map(l => 
        l.id === leadId ? { ...l, views_count: (l.views_count || 0) + 1 } : l
      ));
      console.log("View recorded for lead:", leadId);
    }
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-7xl mx-auto">
        <header className="border-b-[12px] border-black pb-8 mb-12 flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">System_Exchange_v.2026</p>
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">Market<span className="text-[#6082a3]">.</span></h1>
          </div>
          <div className="text-right uppercase font-black text-[10px] tracking-[0.2em] opacity-40 hidden md:block leading-tight">
            <p className="text-[#6082a3]">✓ LIVE_NETWORK_FEED</p>
            <p>{leads.length} ACTIVE_LEADS_DETECTED</p>
          </div>
        </header>

        {loading ? (
          <div className="space-y-4">
            <p className="animate-pulse uppercase font-black text-4xl italic">Scanning_Network_Nodes...</p>
            <div className="h-2 w-64 bg-black/10 rounded-full overflow-hidden">
                <div className="h-full bg-black w-1/2 animate-[loading_1.5s_infinite]" />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-black bg-black shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white p-10 border-[2px] border-black group hover:bg-black hover:text-white transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#6082a3] group-hover:text-white">
                    {lead.profiles?.business_name || "Verified_Node"}
                  </p>
                  <div className="text-right">
                    <span className="text-[9px] font-black opacity-30 uppercase group-hover:opacity-100 block">
                      ENGAGEMENT: {lead.views_count || 0}
                    </span>
                    <span className="text-[8px] font-black opacity-20 uppercase block italic">REF: {lead.id.substring(0, 6)}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-black uppercase mb-4 leading-none tracking-tighter italic">{lead.title}</h2>
                <p className="text-[11px] font-bold uppercase opacity-60 mb-12 line-clamp-3 leading-relaxed">{lead.description}</p>
                
                <button 
                  onClick={() => handleViewLead(lead.id)}
                  className="w-full border-4 border-black py-5 uppercase text-xs font-black group-hover:border-white group-hover:bg-white group-hover:text-black transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_rgba(96,130,163,1)]"
                >
                  Discuss_Lead →
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}