"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

const faqs = [
  { 
    q: "How do I join the ecosystem?", 
    a: "Businesses can register for a Silver tier account immediately. Platinum status requires an application review to maintain network integrity." 
  },
  { 
    q: "What is a 'Marketplace Lead'?", 
    a: "A lead is a B2B request for services or goods. Verified partners can post these to find local collaborators within the KZN network." 
  },
  { 
    q: "Are the analytics real-time?", 
    a: "Yes. Every view and message is tracked instantly and displayed in your partner dashboard to show live ROI." 
  }
];

export default function FAQPage() {
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: FIXED NAVIGATION & OVERLAY */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-4xl mx-auto pb-20">
        <header className="border-b-[10px] border-black pb-8 mb-16">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">Knowledge_Base / Protocol_v1</p>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
            Support<span className="text-[#6082a3]">.</span>
          </h1>
          <p className="uppercase font-bold text-xs tracking-[0.2em] opacity-40 mt-6">Platform Intelligence & Network Protocol</p>
        </header>

        <div className="space-y-12">
          {faqs.map((item, i) => (
            <div key={i} className="group border-b-2 border-black/10 pb-12 hover:border-black transition-colors duration-300">
              <div className="flex gap-6 items-start">
                <span className="text-xl font-black opacity-20 italic">0{i + 1}</span>
                <div>
                  <h2 className="text-3xl font-black uppercase mb-6 group-hover:text-[#6082a3] transition-colors italic tracking-tighter">
                    {item.q}
                  </h2>
                  <p className="text-sm uppercase font-bold leading-relaxed opacity-60 max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Protocol Footer */}
        
        <section className="mt-24 p-12 bg-black text-white italic border-l-[12px] border-[#6082a3] shadow-[20px_20px_0px_0px_rgba(0,0,0,0.1)]">
          <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-6 text-[#6082a3]">January 2026_Security_Protocol</h3>
          <p className="text-xs opacity-60 font-bold leading-relaxed uppercase space-y-4">
            All partner interactions are governed by the Kai Network agreement. 
            Data security is strictly managed via Supabase Row Level Security (RLS) protocols 
            to ensure absolute B2B privacy across the Durban business grid.
          </p>
        </section>
      </div>
    </main>
  );
}