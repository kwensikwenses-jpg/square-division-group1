"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import Navbar from '@/components/Navbar';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

export default function PartnerDirectory() {
  const [partners, setPartners] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
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
    // This logic simulates opening a chat with a pre-filled lead
    alert(`Initiating B2B request for: ${businessName}`);
    router.push('/register'); // Encites them to join the ecosystem to chat
  };

  const filteredPartners = partners.filter(p => {
    const matchesSearch = p.business_name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || p.category?.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="border-b-4 border-black pb-8 mb-12">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">Partners</h1>
          
          <div className="mt-12 flex flex-col md:flex-row gap-4">
            <input 
              value={search}
              placeholder="SEARCH NETWORK..."
              onChange={handleSearchChange}
              className="flex-1 bg-transparent border-2 border-black p-4 font-bold uppercase outline-none focus:bg-white"
            />
            {/* FIX: Added id and title to clear the red line */}
            <select 
              id="industry-select"
              title="Filter by Industry"
              value={filter}
              onChange={handleFilterChange}
              className="bg-black text-white p-4 font-bold uppercase outline-none cursor-pointer"
            >
              <option value="all">ALL INDUSTRIES</option>
              <option value="food">FOOD STORES</option>
              <option value="transport">TRANSPORT</option>
              <option value="gov">GOVERNMENT</option>
            </select>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black border border-black">
          {filteredPartners.map((partner) => (
            <div key={partner.id} className="bg-white p-10 group hover:bg-black hover:text-white transition-all">
              <h2 className="text-4xl font-black uppercase mb-2 leading-none">{partner.business_name}</h2>
              <p className="text-[10px] font-bold uppercase opacity-50 tracking-widest">{partner.category}</p>
              <button 
                onClick={() => handleRequestQuote(partner.business_name)}
                className="mt-12 w-full border border-black py-4 uppercase text-[10px] font-black group-hover:border-white transition-colors"
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}