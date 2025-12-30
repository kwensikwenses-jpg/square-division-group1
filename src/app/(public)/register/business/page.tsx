"use client";

import React, { useState, ChangeEvent } from 'react';
import Navbar from '@/components/Navbar';

export default function PartnerDirectory() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Explicit handlers to ensure type safety
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <header className="border-b-4 border-black pb-8 mb-12">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none text-black">Partners</h1>
          
          {/* Brutalist Search Bar: No separate boxes, shared borders */}
          <div className="mt-12 flex flex-col md:flex-row border-2 border-black divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            <input 
              value={search}
              placeholder="SEARCH NETWORK..."
              onChange={handleSearchChange}
              className="flex-1 bg-transparent p-6 font-bold uppercase outline-none focus:bg-white transition-colors"
            />
            {/* FIX: Added id and title to satisfy the linter */}
            <select 
              id="industry-filter"
              title="Filter by Industry"
              value={filter}
              onChange={handleFilterChange}
              className="bg-black text-white p-6 font-bold uppercase outline-none cursor-pointer appearance-none min-w-[240px]"
            >
              <option value="all">ALL INDUSTRIES</option>
              <option value="food">FOOD STORES</option>
              <option value="transport">TRANSPORT</option>
              <option value="gov">GOVERNMENT</option>
            </select>
          </div>
        </header>
      </div>
    </main>
  );
}