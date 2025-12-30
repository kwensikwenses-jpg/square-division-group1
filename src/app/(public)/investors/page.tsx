"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

export default function InvestorPitch() {
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 pb-20 font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-6xl mx-auto">
        <header className="border-b-[12px] border-black pb-12 mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-4 opacity-40">Pitch_Deck_v.2026.01</p>
          <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter italic leading-[0.8] mb-8">
            The Vision /<br/><span className="text-[#6082a3]">2026 Scale.</span>
          </h1>
          <p className="mt-6 uppercase text-sm font-black tracking-[0.4em] opacity-60">
            Localized Hyper-Growth Infrastructure
          </p>
        </header>

        {/* The "Problem & Solution" Blocks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-black border-4 border-black mb-20 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
          <div className="bg-white p-12 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-black group hover:bg-[#edeae7] transition-colors">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-40">01_The_Problem</h2>
            <p className="text-4xl md:text-5xl font-black uppercase leading-[1.1] tracking-tighter italic">
              Small businesses in KZN are <span className="text-red-600 underline">invisible</span> to regional supply chains.
            </p>
          </div>
          <div className="bg-[#6082a3] text-white p-12 md:p-16 group hover:bg-black transition-colors">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 opacity-70">02_The_Solution</h2>
            <p className="text-4xl md:text-5xl font-black uppercase leading-[1.1] tracking-tighter italic">
              A brutalist discovery engine connecting Transport, Food, and Services.
            </p>
          </div>
        </section>

        {/* Monetization Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black mb-20 bg-white">
          <div className="p-12 hover:bg-black hover:text-white transition-all group">
            <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-[#6082a3] mb-4 block">Starting_Subscription</span>
            <span className="text-7xl font-black block tracking-tighter italic leading-none">R299+</span>
            <p className="text-[10px] font-bold uppercase mt-4 tracking-widest">Monthly_SaaS_Revenue</p>
          </div>
          <div className="p-12 hover:bg-black hover:text-white transition-all group">
            <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-[#6082a3] mb-4 block">Marketplace_Model</span>
            <span className="text-7xl font-black block tracking-tighter italic leading-none">B2B</span>
            <p className="text-[10px] font-bold uppercase mt-4 tracking-widest">Commission_Structure</p>
          </div>
          <div className="p-12 hover:bg-black hover:text-white transition-all group">
            <span className="text-xs font-black uppercase tracking-widest opacity-40 group-hover:text-[#6082a3] mb-4 block">Growth_Projection</span>
            <span className="text-7xl font-black block tracking-tighter italic leading-none text-[#6082a3]">35%</span>
            <p className="text-[10px] font-bold uppercase mt-4 tracking-widest">Projected_MoM_Scale</p>
          </div>
        </div>

        {/* Roadmap Visual Placeholder */}
        <div className="border-4 border-black p-12 bg-white mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-9xl italic">DATA</div>
          <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 border-b-2 border-black pb-2">Technical_Milestones:</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="font-bold">PHASE_01: DURBAN_NODE_LAUNCH</span>
              <span className="text-green-600 font-black">✓ COMPLETED</span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="font-bold">PHASE_02: REGIONAL_LOGISTICS_SYNC</span>
              <span className="opacity-40 font-black italic">Q2_2026</span>
            </div>
            <div className="flex justify-between items-center border-b border-black/10 pb-2">
              <span className="font-bold">PHASE_03: KZN_ECOSYSTEM_MATURITY</span>
              <span className="opacity-40 font-black italic">Q4_2026</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}