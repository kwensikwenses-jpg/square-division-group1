"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';

const tiers = [
  { name: "Silver", price: "Free", features: ["Basic Profile", "Search Listing", "Direct Chat (Limited)"] },
  { name: "Gold", price: "R299/mo", features: ["Featured Search Placement", "Analytics Dashboard", "Unlimited Chat", "Route Map Integration"] },
  { name: "Platinum", price: "R899/mo", features: ["Priority Support", "Investor Network Access", "Verified Badge", "Custom Sketch Branding"] }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#edeae7] pt-32 px-6">
      <Navbar />
      <header className="max-w-7xl mx-auto mb-16">
        <h1 className="text-8xl font-black uppercase tracking-tighter italic">Tier / Growth</h1>
        <p className="uppercase text-sm font-bold tracking-[0.3em] opacity-50 mt-4">Scalability for Local Partners</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black divide-y md:divide-y-0 md:divide-x divide-black max-w-7xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.name} className="p-12 hover:bg-black hover:text-[#edeae7] transition-all group flex flex-col justify-between min-h-[500px]">
            <div>
              <h2 className="text-4xl font-black uppercase mb-2 italic">{tier.name}</h2>
              <p className="text-5xl font-light tracking-tighter mb-8">{tier.price}</p>
              <ul className="space-y-4 uppercase text-[10px] font-bold tracking-widest">
                {tier.features.map(f => (
                  <li key={f} className="flex gap-2 border-b border-black group-hover:border-[#edeae7]/30 pb-2 italic">
                    — {f}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full border-2 border-black group-hover:border-[#edeae7] py-4 uppercase font-black tracking-widest text-xs hover:bg-[#6082a3]">
              Join Tier
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}