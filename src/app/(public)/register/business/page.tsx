"use client";

import React, { useState, ChangeEvent } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Required for Navbar functionality

export default function PartnerDirectory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Explicit handlers to ensure type safety
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-7xl mx-auto">
        <header className="border-b-[12px] border-black pb-8 mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">Network_Registry_v.2026</p>
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter uppercase italic leading-none text-black">
            Partners<span className="text-[#6082a3]">.</span>
          </h1>
          
          {/* Brutalist Search Bar: No separate boxes, shared borders */}
          <div className="mt-12 flex flex-col md:flex-row border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex-1 relative">
              <label htmlFor="search-input" className="hidden">Search Network</label>
              <input 
                id="search-input"
                value={search}
                title="Search the Partner Network"
                placeholder="SEARCH_NETWORK..."
                onChange={handleSearchChange}
                className="w-full bg-transparent p-8 font-black uppercase outline-none focus:bg-[#edeae7]/30 transition-colors text-xl placeholder:opacity-20"
              />
            </div>

            <div className="relative min-w-[300px] bg-black">
              <label htmlFor="industry-filter" className="hidden">Filter by Industry</label>
              <select 
                id="industry-filter"
                title="Filter by Industry"
                value={filter}
                onChange={handleFilterChange}
                className="w-full bg-black text-white p-8 font-black uppercase outline-none cursor-pointer appearance-none text-sm tracking-widest hover:text-[#6082a3] transition-colors"
              >
                <option value="all">ALL_INDUSTRIES</option>
                <option value="food">FOOD_STORES</option>
                <option value="transport">TRANSPORT_LOGISTICS</option>
                <option value="gov">GOVERNMENT_NODES</option>
              </select>
              <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white font-black">↓</span>
            </div>
          </div>
        </header>

        {/* Directory Status Feed */}
        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-40 px-2">
           <p>Showing: {filter === 'all' ? 'Entire_Grid' : filter}</p>
           <p>Status: Synchronized</p>
        </div>
      </div>
    </main>
  );
}