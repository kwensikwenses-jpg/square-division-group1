"use client";

import React from 'react';

export default function CategoryGrid() {
  const categories = [
    { label: 'RESTAURANTS', icon: '🍽️', count: '124' },
    { label: 'RETAIL', icon: '🛍️', count: '89' },
    { label: 'HEALTH', icon: '💊', count: '45' },
    { label: 'SERVICES', icon: '💼', count: '67' },
    { label: 'AUTO', icon: '🚗', count: '32' },
    { label: 'BEAUTY', icon: '✨', count: '51' },
  ];

  return (
    <div className="w-full border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden font-mono animate-in zoom-in-95 duration-500">
      <div className="grid grid-cols-3 md:grid-cols-6 divide-x-2 md:divide-x-4 divide-black border-b-2 border-black">
        {categories.map((cat) => (
          <button 
            key={cat.label} 
            className="p-6 flex flex-col items-center justify-center gap-3 hover:bg-[#6082a3] hover:text-white transition-all group relative overflow-hidden"
          >
            {/* Hover Glitch Effect */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            
            <span className="text-2xl group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
              {cat.icon}
            </span>
            <div className="text-center">
              <p className="text-[9px] font-black uppercase tracking-widest">{cat.label}</p>
              <p className="text-[7px] font-bold opacity-40 group-hover:opacity-100 uppercase mt-1 italic">
                Nodes: {cat.count}
              </p>
            </div>
          </button>
        ))}
      </div>
      
      {/* Technical Footer */}
      <div className="p-2 bg-black text-white text-center">
        <p className="text-[7px] font-black uppercase tracking-[0.6em] opacity-60">Grid_Sector_Filter_Active</p>
      </div>
    </div>
  );
}