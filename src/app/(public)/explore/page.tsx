"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function UserExplore() {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black flex">
      {/* 1. KAI SIDEBAR: Language Selector & Floating Actions */}
      <aside className="w-24 border-r-2 border-black flex flex-col items-center py-8 gap-12 bg-white sticky top-0 h-screen">
        <div className="h-14 w-14 border-2 border-black flex items-center justify-center font-black text-[10px] uppercase">Logo</div>
        
        {/* Language Grid from Wireframe */}
        <div className="grid grid-cols-2 border border-black divide-x divide-y divide-black text-[8px] font-black">
          {['EN', 'FR', 'IT', 'RM', 'AF'].map((lang) => (
            <button key={lang} type="button" className="p-2 hover:bg-black hover:text-white transition-colors">{lang}</button>
          ))}
        </div>

        <div className="space-y-4">
          <button type="button" aria-label="Search" className="h-12 w-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-black">Q</button>
          <button type="button" aria-label="Filter" className="h-12 w-12 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all font-black">Y</button>
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <section className="flex-1 overflow-y-auto">
        <header className="p-6 border-b-2 border-black bg-white flex justify-between items-center sticky top-0 z-10">
          <div className="flex gap-2">
            {['US', 'CONTACT', 'HELP', 'SETTINGS', 'PROFILE'].map((btn) => (
              <button key={btn} type="button" className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-black hover:text-white transition-colors">
                {btn}
              </button>
            ))}
          </div>
        </header>

        {/* Quick Tabs: Categories */}
        <div className="bg-white border-b-2 border-black flex divide-x-2 divide-black overflow-x-auto">
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button key={num} type="button" className="px-12 py-6 text-xl font-black hover:bg-gray-50 transition-colors">{num}</button>
          ))}
         <button type="button" className="px-8 py-6 font-black ml-auto">
  {">"}
</button>
        </div>

        {/* SEPARATED BLOCKS SECTION */}
        <div className="p-8 space-y-24 pb-40">
          
          {/* SECTION: TOP BUSINESSES */}
          <section>
            <div className="flex justify-between items-end mb-8 border-b border-black pb-2">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Business (1-7)</h2>
              <select title="Sort By" className="bg-transparent border-2 border-black p-2 text-[9px] font-black outline-none uppercase">
                <option>Sort by</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <ExploreBlock key={i} id={i} label="View" />
              ))}
            </div>
          </section>

          {/* SECTION: EVENTS (With Red Primary Action) */}
          <section className="border-2 border-black bg-white p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 opacity-40">Upcoming Nearby</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-2 border-black bg-white group">
                  <div className="aspect-square bg-gray-50 flex items-center justify-center text-6xl font-thin italic opacity-10">{i}</div>
                  <div className="flex divide-x-2 divide-black border-t-2 border-black">
                    <button type="button" className="flex-1 p-4 bg-[#ff4d4d] text-white font-black uppercase text-[9px] hover:bg-black transition-colors">Book</button>
                    <button type="button" className="flex-1 p-4 font-black uppercase text-[9px] hover:bg-black hover:text-white transition-colors">See More</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION: DEALS (Horizontal Highlight Block) */}
          <section className="bg-black text-white p-12 space-y-8">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Deals on This</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-4">
                  <div className="aspect-video border border-white/20 flex items-center justify-center text-4xl font-thin italic opacity-20">{i}</div>
                  <p className="font-black text-xs uppercase tracking-widest italic">Exclusive Partner Deal {i}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function ExploreBlock({ id, label }: { id: number, label: string }) {
  return (
    <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all group">
      <div className="aspect-square bg-gray-50 flex items-center justify-center text-6xl font-thin italic opacity-10 group-hover:bg-white group-hover:opacity-100 transition-all">
        {id}
      </div>
      <button 
        type="button" 
        aria-label={`View Business ${id}`}
        className="w-full p-4 flex justify-between items-center font-black uppercase text-[10px] border-t-2 border-black hover:bg-black hover:text-white transition-colors"
      >
        <span>{label}</span>
        <span>→</span>
      </button>
    </div>
  );
}