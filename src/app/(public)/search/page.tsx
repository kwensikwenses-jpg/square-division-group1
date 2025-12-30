"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

// Mock data for your different categories
const MOCK_DATA = [
  { id: '01', name: "Durban Fresh Market", category: "Food Stores", status: "Open" },
  { id: '02', name: "Rossburgh Transport Hub", category: "Transport", status: "Active" },
  { id: '03', name: "Municipal Services", category: "Government", status: "Available" },
  { id: '04', name: "Coastal Tech Supplies", category: "Private Business", status: "Open" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filteredData = MOCK_DATA.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 md:px-12">
      <Navbar />

      {/* SEARCH HEADER - Brutalist Style */}
      <header className="mb-16 border-b-2 border-black pb-8">
        <h1 className="text-sm uppercase tracking-[0.3em] font-bold mb-4 opacity-50">Discovery Engine</h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
            Search<br />Results
          </h2>
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="FILTER BY NAME OR INDUSTRY..."
              className="w-full bg-transparent border-b-2 border-black py-4 text-2xl uppercase font-bold outline-none placeholder:opacity-20"
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* RESULTS GRID - SwimClub Block Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-black">
        {filteredData.map((item) => (
          <div 
            key={item.id} 
            className="group p-8 border-r border-b border-black hover:bg-black hover:text-[#edeae7] transition-colors cursor-pointer min-h-[300px] flex flex-col justify-between"
          >
            <div>
              <span className="text-6xl font-black opacity-10 group-hover:opacity-100 transition-opacity">
                {item.id}
              </span>
              <p className="text-[10px] uppercase font-bold tracking-widest mt-4">
                {item.category}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-black uppercase leading-tight mb-2">
                {item.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] uppercase font-bold opacity-60">{item.status}</span>
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty state if nothing found */}
        {filteredData.length === 0 && (
          <div className="col-span-full p-20 text-center border-r border-b border-black">
            <p className="text-2xl font-bold uppercase opacity-30">No entities found matching "{query}"</p>
          </div>
        )}
      </section>
    </main>
  );
}