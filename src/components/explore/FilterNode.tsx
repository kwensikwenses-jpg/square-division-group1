"use client";

import React, { useState } from 'react';

export default function FilterNode() {
  const [radius, setRadius] = useState(15);

  return (
    <div className="border-4 border-black bg-white p-6 font-mono space-y-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-black pb-2">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Search_Parameters</h3>
        <button className="text-[8px] font-black uppercase underline opacity-40 hover:opacity-100">Reset</button>
      </div>

      {/* Distance Slider */}
      <div className="space-y-4">
        <div className="flex justify-between text-[9px] font-black uppercase">
          <span>Proximity_Radius</span>
          <span className="text-[#6082a3]">{radius}KM</span>
        </div>
        <input 
          type="range" 
          min="1" 
          max="50" 
          value={radius}
          onChange={(e) => setRadius(parseInt(e.target.value))}
          className="w-full h-2 bg-[#edeae7] appearance-none cursor-pointer accent-black border border-black"
        />
        <div className="flex justify-between text-[7px] opacity-40 font-bold uppercase italic">
          <span>Local_Node</span>
          <span>Regional_Grid</span>
        </div>
      </div>

      {/* Operational Status */}
      <div className="space-y-3">
        <p className="text-[9px] font-black uppercase tracking-widest opacity-40">System_Status</p>
        <button className="w-full flex justify-between items-center border-2 border-black p-3 hover:bg-black hover:text-white transition-all group">
          <span className="text-[10px] font-black uppercase">Open_Now_Only</span>
          <div className="h-4 w-4 border-2 border-black group-hover:border-white flex items-center justify-center">
            <div className="h-2 w-2 bg-green-500"></div>
          </div>
        </button>
      </div>

      {/* Price Tier Selection */}
      <div className="space-y-3">
        <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Economic_Tier</p>
        <div className="grid grid-cols-4 border-2 border-black divide-x-2 divide-black">
          {['$', '$$', '$$$', '$$$$'].map((tier) => (
            <button key={tier} className="py-2 text-[10px] font-black hover:bg-black hover:text-white transition-all">
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Sort Engine */}
      <div className="space-y-3">
        <p className="text-[9px] font-black uppercase tracking-widest opacity-40">Heuristic_Sort</p>
        <select className="w-full border-2 border-black p-3 text-[10px] font-black uppercase bg-white outline-none cursor-pointer">
          <option>Sort: Highest_Rated</option>
          <option>Sort: Nearest_Node</option>
          <option>Sort: Most_Recent</option>
        </select>
      </div>
    </div>
  );
}