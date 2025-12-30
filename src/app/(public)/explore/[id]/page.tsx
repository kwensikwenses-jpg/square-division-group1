"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function BusinessProfile() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      
      {/* 1. MASSIVE HERO LOGO */}
      <section className="pt-24 border-b-4 border-black bg-white flex items-center justify-center py-20">
        <h1 className="text-[15vw] font-black italic tracking-tighter uppercase leading-none opacity-10">
          LOGO
        </h1>
      </section>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* 2. LEFT COLUMN: Description & Services */}
        <div className="md:col-span-2 space-y-12">
          <div className="border-2 border-black p-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-6 opacity-40">Business Brief</h2>
            <p className="text-xl font-bold uppercase italic tracking-tight leading-relaxed">
              Providing world-class logistics and supply chain solutions across the KwaZulu-Natal region since 2012.
            </p>
          </div>

          <div className="border-2 border-black divide-y-2 divide-black">
            <div className="p-4 bg-gray-50 uppercase text-[10px] font-black tracking-widest">Services Rendered</div>
            <div className="grid grid-cols-2 divide-x-2 divide-black">
              <div className="p-6 font-bold uppercase text-xs hover:bg-black hover:text-white transition-all">Warehousing</div>
              <div className="p-6 font-bold uppercase text-xs hover:bg-black hover:text-white transition-all">Distribution</div>
            </div>
            <div className="grid grid-cols-2 divide-x-2 divide-black">
              <div className="p-6 font-bold uppercase text-xs hover:bg-black hover:text-white transition-all">Fleet Mgmt</div>
              <div className="p-6 font-bold uppercase text-xs hover:bg-black hover:text-white transition-all">Customs</div>
            </div>
          </div>
        </div>

        {/* 3. RIGHT COLUMN: Actions & Partners */}
        <div className="space-y-8">
          <div className="border-2 border-black divide-y-2 divide-black bg-white">
            <button type="button" className="w-full p-6 bg-[#ff4d4d] text-white font-black uppercase italic text-xl hover:bg-black transition-all">Enquire Now</button>
            <button type="button" className="w-full p-6 font-black uppercase text-xs hover:bg-gray-100 transition-all">Save Profile</button>
            <button type="button" className="w-full p-6 font-black uppercase text-xs hover:bg-gray-100 transition-all">Compare</button>
          </div>

          <div className="border-2 border-black p-6 bg-white">
            <h3 className="text-[10px] font-black uppercase tracking-widest mb-4 opacity-40">Current Partners</h3>
            <div className="flex gap-2">
              <div className="h-10 w-10 border border-black bg-gray-100"></div>
              <div className="h-10 w-10 border border-black bg-gray-100"></div>
              <div className="h-10 w-10 border border-black bg-gray-100"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. RECOMMENDATIONS (Horizontal Scroll) */}
      <section className="p-8 border-t-2 border-black bg-[#edeae7] mt-20">
        <h2 className="text-xs font-black uppercase tracking-[0.4em] mb-8">Recommendations</h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="min-w-[280px] border-2 border-black bg-white p-4 aspect-square flex flex-col justify-between">
              <div className="text-4xl font-thin italic opacity-10">{i}</div>
              <button type="button" className="text-right font-black uppercase text-[10px]">View →</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}