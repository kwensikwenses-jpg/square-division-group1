"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added for build compliance

// Mock data for your different categories
const MOCK_DATA = [
  { id: '01', name: "Durban Fresh Market", category: "Food Stores", status: "Open" },
  { id: '02', name: "Rossburgh Transport Hub", category: "Transport", status: "Active" },
  { id: '03', name: "Municipal Services", category: "Government", status: "Available" },
  { id: '04', name: "Coastal Tech Supplies", category: "Private Business", status: "Open" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredData = MOCK_DATA.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 md:px-12 font-mono">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* SEARCH HEADER - Brutalist Style */}
      <header className="mb-16 border-b-4 border-black pb-8">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40 italic">Query_Terminal / Discovery_Engine</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="text-6xl md:text-9xl font-black tracking-[calc(-0.05em)] leading-[0.85] uppercase italic">
            Search<br />Results<span className="text-[#6082a3]">.</span>
          </h1>
          <div className="w-full md:w-1/2">
            <label htmlFor="search-discovery" className="hidden">Filter Network</label>
            <input 
              id="search-discovery"
              type="text" 
              title="Filter network results"
              placeholder="FILTER_BY_NAME_OR_INDUSTRY..."
              className="w-full bg-transparent border-b-4 border-black py-4 text-2xl uppercase font-black outline-none placeholder:opacity-20 focus:text-[#6082a3] transition-colors"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* RESULTS GRID - SwimClub Block Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l-4 border-t-4 border-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="group p-10 border-r-4 border-b-4 border-black hover:bg-black hover:text-[#edeae7] transition-all duration-300 cursor-pointer min-h-[350px] flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background ID for depth */}
            <span className="absolute -right-4 -top-4 text-9xl font-black opacity-[0.03] group-hover:opacity-10 transition-opacity">
              {item.id}
            </span>

            <div className="relative z-10">
              <span className="text-6xl font-black opacity-10 group-hover:opacity-100 transition-opacity italic">
                {item.id}
              </span>
              <p className="text-[10px] uppercase font-black tracking-[0.2em] mt-6 bg-[#6082a3] text-white px-2 py-1 inline-block">
                {item.category}
              </p>
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter mb-4 italic">
                {item.name}
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 border-2 border-black group-hover:border-white bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase font-black tracking-widest opacity-60 group-hover:opacity-100">{item.status}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty state if nothing found */}
        {filteredData.length === 0 && (
          <div className="col-span-full p-32 text-center border-r-4 border-b-4 border-black">
            <p className="text-4xl font-black uppercase italic opacity-20 tracking-tighter">
              No_Entities_Detected_Matching "{query}"
            </p>
          </div>
        )}
      </section>
    </main>
  );
}