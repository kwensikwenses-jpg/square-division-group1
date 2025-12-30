"use client";

import React from 'react';

interface FilterNodeProps {
  activeFilter?: string;
  setActiveFilter?: (filter: string) => void;
}

export default function FilterNode({ activeFilter = 'ALL', setActiveFilter }: FilterNodeProps) {
  const categories = ['ALL', 'RETAIL', 'FOOD', 'TECH', 'SERVICES', 'HEALTH'];

  return (
    <div className="bg-white border-4 border-black p-6 space-y-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex justify-between items-center border-b-2 border-black pb-2">
        <h3 className="text-xs font-black uppercase tracking-widest italic">Filter_Parameters</h3>
        <span className="text-[8px] font-bold opacity-40">v1.0.4</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter?.(cat)}
            className={`px-3 py-1 text-[10px] font-black uppercase border-2 border-black transition-all ${
              activeFilter === cat 
                ? 'bg-black text-white' 
                : 'bg-transparent text-black hover:bg-[#6082a3] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <label className="text-[8px] font-black uppercase opacity-40">Proximity_Radius</label>
          <input 
            type="range" 
            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-black"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" id="open-now" className="w-3 h-3 border-2 border-black accent-black" />
          <label htmlFor="open-now" className="text-[10px] font-black uppercase tracking-tighter">
            Show_Active_Nodes_Only
          </label>
        </div>
      </div>
    </div>
  );
}