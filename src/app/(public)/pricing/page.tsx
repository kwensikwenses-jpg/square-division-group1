"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

const tiers = [
  { name: "Silver", price: "Free", features: ["Basic Profile", "Search Listing", "Direct Chat (Limited)"], color: "bg-white" },
  { name: "Gold", price: "R299", features: ["Featured Search Placement", "Analytics Dashboard", "Unlimited Chat", "Route Map Integration"], color: "bg-[#edeae7]" },
  { name: "Platinum", price: "R899", features: ["Priority Support", "Investor Network Access", "Verified Badge", "Custom Sketch Branding"], color: "bg-[#6082a3]" }
];

export default function PricingPage() {
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] font-mono text-black selection:bg-[#6082a3] selection:text-white">
      {/* 01: NAVIGATION SYNC */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <header className="max-w-7xl mx-auto pt-48 px-8 mb-16">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">System_Monetization_v2026</p>
        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
          Tier / <span className="text-[#6082a3]">Growth</span>
        </h1>
        <p className="uppercase text-xs font-bold tracking-[0.3em] opacity-60 mt-6 max-w-xl leading-relaxed">
          Scalable infrastructure access for local partners and regional business nodes.
        </p>
      </header>
      
      {/* PRICING GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-y-4 md:border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black max-w-7xl mx-auto bg-white mb-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
        {tiers.map((tier) => (
          <div key={tier.name} className={`p-12 hover:bg-black hover:text-white transition-all duration-300 group flex flex-col justify-between min-h-[650px] ${tier.color === 'bg-[#6082a3]' ? 'md:bg-[#6082a3]' : ''}`}>
            <div>
              <div className="flex justify-between items-start mb-12">
                <h2 className="text-4xl font-black uppercase italic tracking-tighter">{tier.name}</h2>
                <span className="text-[10px] font-black border-2 border-current px-2 py-1 uppercase opacity-40 group-hover:opacity-100">Node_v.{tier.name[0]}</span>
              </div>
              
              <div className="mb-12">
                <p className="text-6xl font-black tracking-tighter leading-none">{tier.price}</p>
                {tier.price !== "Free" && <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">per_month / access_fee</span>}
              </div>

              <ul className="space-y-6 uppercase text-[11px] font-bold tracking-[0.1em]">
                {tier.features.map(f => (
                  <li key={f} className="flex gap-4 items-start border-b-2 border-black/10 group-hover:border-white/20 pb-4">
                    <span className="opacity-40">→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full border-4 border-black py-6 uppercase font-black tracking-widest text-sm bg-transparent group-hover:border-white group-hover:bg-white group-hover:text-black transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_rgba(96,130,163,1)]">
              Initialize_{tier.name}_Tier
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}