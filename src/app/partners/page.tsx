"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added to resolve build error
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

export default function PartnerDirectory() {
  const [partners, setPartners] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Navigation state
  const router = useRouter();

  useEffect(() => {
    const fetchPartners = async () => {
      const { data } = await supabase.from('profiles').select('*').order('business_name');
      if (data) setPartners(data);
    };
    fetchPartners();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value);

  const handleRequestQuote = (businessName: string) => {
    alert(`Initiating B2B request for: ${businessName}`);
    router.push('/register'); 
  };

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.business_name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || p.category?.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: NAVIGATION & OVERLAY SYNC */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-7xl mx-auto">
        <header className="border-b-[10px] border-black pb-8 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40 italic">Registry_Protocol / KZN_Partner_Nodes</p>
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
            Partners<span className="text-[#6082a3]">.</span>
          </h1>
          
          {/* SEARCH & FILTER TERMINAL */}
          <div className="mt-12 flex flex-col md:flex-row border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex-1 relative">
              <label htmlFor="search-input" className="hidden">Search Network</label>
              <input 
                id="search-input"
                title="Search Partner Registry"
                value={search}
                placeholder="SEARCH_NETWORK_NODES..."
                onChange={handleSearchChange}
                className="w-full bg-transparent p-8 font-black uppercase outline-none focus:bg-[#edeae7]/30 transition-colors text-xl placeholder:opacity-20"
              />
            </div>
            
            <div className="relative min-w-[300px]">
              <select 
                id="industry-select"
                title="Filter by Industry"
                value={filter}
                onChange={handleFilterChange}
                className="w-full bg-black text-white p-8 font-black uppercase outline-none cursor-pointer appearance-none tracking-widest text-sm"
              >
                <option value="all">ALL_INDUSTRIES</option>
                <option value="food">FOOD_STORES</option>
                <option value="transport">TRANSPORT_LOGISTICS</option>
                <option value="gov">GOVERNMENT_SERVICES</option>
              </select>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white font-black">↓</span>
            </div>
          </div>
        </header>

        {/* PARTNER GRID */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-4 border-black bg-black mb-20">
          {filteredPartners.map((partner) => (
            <div 
              key={partner.id} 
              className="bg-white p-12 border-[2px] border-black group hover:bg-black hover:text-[#edeae7] transition-all duration-300 flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black border-2 border-black px-2 py-1 group-hover:border-[#edeae7] transition-colors">
                    {partner.tier?.toUpperCase() || 'SILVER'}_NODE
                  </span>
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </div>
                <h2 className="text-4xl font-black uppercase mb-4 leading-[0.9] italic tracking-tighter">
                  {partner.business_name}
                </h2>
                <p className="text-[10px] font-black uppercase opacity-40 group-hover:opacity-100 tracking-[0.3em] transition-opacity">
                  {partner.category || 'GENERAL_PARTNER'}
                </p>
              </div>

              <button 
                onClick={() => handleRequestQuote(partner.business_name)}
                className="mt-12 w-full border-4 border-black py-5 uppercase text-xs font-black group-hover:border-[#edeae7] group-hover:bg-white group-hover:text-black transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_rgba(96,130,163,1)]"
              >
                Request_Quote_Protocol →
              </button>
            </div>
          ))}
          
          {filteredPartners.length === 0 && (
            <div className="col-span-full p-32 bg-white text-center">
              <p className="text-4xl font-black uppercase italic opacity-20 tracking-tighter">No_Active_Nodes_Found</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}