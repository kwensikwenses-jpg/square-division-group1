"use client";

import React from 'react';

export default function UserStatsNode() {
  return (
    <div className="border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] font-mono animate-in slide-in-from-right-4 duration-500">
      {/* Technical Header */}
      <div className="bg-black text-white p-3 flex justify-between items-center border-b-2 border-black">
        <h3 className="text-[8px] font-black uppercase tracking-[0.4em]">Personal_Discovery_Metrics</h3>
        <span className="text-[8px] opacity-40 font-mono">USER_ID: 882_KZN</span>
      </div>

      <div className="grid grid-cols-3 divide-x-2 divide-black">
        {/* Metric 1: Discovery */}
        <div className="p-6 space-y-2">
          <p className="text-[8px] font-black uppercase opacity-40 tracking-widest leading-none">Discovered</p>
          <p className="text-4xl font-black italic tracking-tighter">42</p>
          <p className="text-[7px] font-bold uppercase text-green-600">↑ 4 This Week</p>
        </div>

        {/* Metric 2: Reviews */}
        <div className="p-6 space-y-2">
          <p className="text-[8px] font-black uppercase opacity-40 tracking-widest leading-none">Logs_Written</p>
          <p className="text-4xl font-black italic tracking-tighter">12</p>
          <p className="text-[7px] font-bold uppercase opacity-40 italic">Global_Rank: #242</p>
        </div>

        {/* Metric 3: Deals */}
        <div className="p-6 space-y-2 bg-[#edeae7]">
          <p className="text-[8px] font-black uppercase opacity-40 tracking-widest leading-none">Deals_Claimed</p>
          <p className="text-4xl font-black italic tracking-tighter text-[#6082a3]">08</p>
          <p className="text-[7px] font-bold uppercase opacity-40 italic italic">R1,200_Saved</p>
        </div>
      </div>

      {/* Discovery Progress Engine */}
      <div className="p-6 border-t-2 border-black space-y-3">
        <div className="flex justify-between items-end">
          <p className="text-[9px] font-black uppercase tracking-widest italic">Regional_Coverage_Score</p>
          <p className="text-[10px] font-black">65%</p>
        </div>
        <div className="h-1.5 w-full bg-black/5 relative">
          <div className="absolute left-0 top-0 h-full bg-black w-[65%]"></div>
          {/* Milestone markers */}
          <div className="absolute left-[25%] top-0 h-full w-px bg-white/40"></div>
          <div className="absolute left-[50%] top-0 h-full w-px bg-white/40"></div>
          <div className="absolute left-[75%] top-0 h-full w-px bg-white/40"></div>
        </div>
        <p className="text-[7px] font-black uppercase opacity-40 italic tracking-tighter">
          Unlock "Local Guide" status at 75% coverage.
        </p>
      </div>
    </div>
  );
}