"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';

export default function BusinessMarketplace() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchLeads = async () => {
      // Fetch live leads from the database
      const { data, error } = await supabase
        .from('marketplace_leads')
        .select(`
          id,
          title,
          description,
          created_at,
          profiles (business_name)
        `)
        .order('created_at', { ascending: false });

      if (!error && data) {
        setLeads(data);
      }
      setLoading(false);
    };

    fetchLeads();
  }, []);

  const handleStartDiscussion = (leadId: string) => {
    // Navigate to the dynamic real-time chat route
    router.push(`/business/messages/${leadId}`);
  };

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end border-b border-black pb-6">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter">B2B Marketplace</h1>
          <p className="text-[10px] font-bold uppercase opacity-40 tracking-widest mt-2">Active Network Opportunities</p>
        </div>
        <p className="text-[10px] font-bold uppercase opacity-50 tracking-widest text-right">
          Exclusive to Gold & Platinum Tiers
        </p>
      </header>

      {loading ? (
        <p className="animate-pulse uppercase font-black text-xl italic">Loading Market Data...</p>
      ) : (
        <div className="border border-black divide-y divide-black">
          {leads.map((lead) => (
            <div key={lead.id} className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white transition-all group">
              <div className="space-y-1">
                <h2 className="text-xl font-bold uppercase italic group-hover:text-[#6082a3]">
                  {lead.profiles?.business_name || "Verified Partner"}
                </h2>
                <p className="text-sm font-medium uppercase opacity-60">{lead.title}</p>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center gap-6">
                <span className="text-[10px] font-bold uppercase opacity-40">
                  {new Date(lead.created_at).toLocaleDateString()}
                </span>
                <button 
                  onClick={() => handleStartDiscussion(lead.id)}
                  type="button" 
                  className="border border-black px-6 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-[#edeae7] transition-colors"
                >
                  Send Proposal
                </button>
              </div>
            </div>
          ))}

          {leads.length === 0 && (
            <div className="p-12 text-center opacity-30 uppercase font-bold italic">
              No active leads found in the Durban network.
            </div>
          )}
        </div>
      )}
    </div>
  );
}