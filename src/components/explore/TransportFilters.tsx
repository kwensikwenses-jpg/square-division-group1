"use client";

import React from 'react';

export default function TransportFilters() {
  return (
    <div className="w-full border-x-4 border-b-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        {/* BUS ROUTE FILTER */}
        <div className="p-4 bg-[#edeae7] flex flex-col gap-2 flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Route_Alpha</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-black italic">NORTH_BOUND</span>
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <div className="h-1 w-full bg-black/10 relative mt-2">
            <div className="absolute left-0 top-0 h-full bg-black w-2/3"></div>
            <div className="absolute left-2/3 top-[-4px] h-3 w-1 bg-black"></div>
          </div>
        </div>

        {/* RAIL SYSTEM FILTER */}
        <div className="p-4 bg-white flex flex-col gap-2 flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Grid_Transit</p>
          <div className="flex justify-between items-center">
            <span className="text-xs font-black italic">RAIL_LINK_04</span>
            <span className="text-[8px] font-bold px-2 py-0.5 border border-black uppercase">Delayed</span>
          </div>
          <div className="h-1 w-full bg-black/10 relative mt-2">
            <div className="absolute left-0 top-0 h-full bg-[#6082a3] w-1/4"></div>
            <div className="absolute left-1/4 top-[-4px] h-3 w-1 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
}