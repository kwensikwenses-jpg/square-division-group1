"use client";

import React from 'react';

interface DealProps {
  businessName: string;
  offer: string;
  expiresIn: string; // e.g., "03:45:12"
  discountBadge: string; // e.g., "20% OFF"
}

export default function DealCard({ businessName, offer, expiresIn, discountBadge }: DealProps) {
  return (
    <div className="min-w-[300px] border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(220,20,60,0.2)] flex flex-col font-mono animate-in fade-in duration-500">
      
      {/* Urgency Header */}
      <div className="bg-red-600 text-white p-2 flex justify-between items-center px-4">
        <span className="text-[8px] font-black uppercase tracking-[0.3em] italic">Limited_Time_Node</span>
        <span className="text-[9px] font-black tabular-nums">{expiresIn} ⏱️</span>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="text-[10px] font-black uppercase opacity-40 italic leading-tight tracking-widest">
            {businessName}
          </h4>
          <span className="border-2 border-black px-2 py-1 text-[10px] font-black bg-yellow-400">
            {discountBadge}
          </span>
        </div>

        <p className="text-xl font-black italic uppercase tracking-tighter leading-none py-2">
          {offer}
        </p>

        {/* Technical Progress (Time Remaining) */}
        <div className="space-y-1">
          <div className="flex justify-between text-[7px] font-bold uppercase opacity-40 italic">
            <span>Expiring_Soon</span>
            <span>Critical</span>
          </div>
          <div className="h-1.5 w-full bg-black/5 relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full bg-red-600 w-4/5 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Claim Action */}
      <button className="w-full border-t-2 border-black py-4 bg-black text-white font-black uppercase text-[10px] tracking-widest hover:bg-red-600 transition-all group">
        Claim_Offer <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
      </button>
    </div>
  );
}