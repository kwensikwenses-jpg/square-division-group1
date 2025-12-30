"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-[#6082a3] selection:text-white">
      
      {/* 01: HEADER & NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* 02: HERO SECTION - This creates the "Swim Club" / High-End Look */}
      <section className="relative pt-48 pb-32 px-12 md:px-24 flex flex-col items-center text-center overflow-hidden border-b-4 border-black bg-white">
        {/* Decorative Grid Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full divide-x divide-black">
            {[...Array(12)].map((_, i) => <div key={i} />)}
          </div>
        </div>
        
        <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-10 animate-in fade-in slide-in-from-bottom duration-700">
          KZN_Digital_Infrastructure_Layer
        </p>
        
        <h1 className="text-7xl md:text-[11rem] font-black italic uppercase leading-[0.8] tracking-tighter mb-16">
          THE<br/><span className="text-[#6082a3]">GRID.</span>
        </h1>

        {/* PRIMARY ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl z-10">
          <Link href="/business/register" className="flex-1 bg-black text-white px-12 py-8 text-xl font-black italic uppercase hover:bg-[#6082a3] transition-all shadow-[15px_15px_0px_0px_rgba(96,130,163,1)] hover:translate-x-[-5px] hover:translate-y-[-5px]">
            Initialize_Node →
          </Link>
          <Link href="/explore" className="flex-1 bg-white border-4 border-black px-12 py-8 text-xl font-black italic uppercase hover:bg-black hover:text-white transition-all shadow-[15px_15px_0px_0px_rgba(0,0,0,0.1)] hover:translate-x-[-5px] hover:translate-y-[-5px]">
            Explore_Grid
          </Link>
        </div>
      </section>

      {/* --- KZN ECOSYSTEM STATS SECTION --- */}
<section 
  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-2 lg:gap-2 p-16 xl:p-32 bg-[var(--color-background)]"
  style={{ 
    padding: 'calc(var(--spacing) * 16)', 
    rowGap: 'calc(var(--spacing) * 2)',
    columnGap: 'calc(var(--spacing) * 2)' 
  } as React.CSSProperties}
>
  {/* BLOCK 01: GROWTH METRIC */}
  <div className="bg-[var(--color-accent)] p-8 md:p-12 flex flex-col justify-between aspect-square border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-black text-white px-2 py-1">Node_01</span>
      <span className="text-4xl font-black italic">↗</span>
    </div>
    <div>
      <h2 className="text-7xl font-black uppercase italic leading-none tracking-tighter">35%</h2>
      <p className="text-[10px] font-black uppercase mt-4 tracking-widest leading-tight">Projected_Monthly_Growth</p>
    </div>
  </div>

  {/* BLOCK 02: ACTIVE PARTNERS */}
  <div className="bg-black text-white p-8 md:p-12 flex flex-col justify-between aspect-square border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,158,0,0.3)]">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] border border-white/20 px-2 py-1">Node_02</span>
      <div className="h-4 w-4 bg-[var(--color-accent)] rounded-full animate-pulse" />
    </div>
    <div>
      <h2 className="text-7xl font-black uppercase italic leading-none tracking-tighter">150+</h2>
      <p className="text-[10px] font-black uppercase mt-4 tracking-widest leading-tight">Verified_Business_Partners</p>
    </div>
  </div>

  {/* BLOCK 03: REGIONAL COVERAGE */}
  <div className="bg-white text-black p-8 md:p-12 flex flex-col justify-between aspect-square border-4 border-black">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-30">Node_03</span>
    </div>
    <div>
      <h2 className="text-5xl font-black uppercase leading-[0.85] tracking-tighter italic">Durban<br/>Central<br/>Sector</h2>
      <p className="text-[10px] font-black uppercase mt-6 tracking-widest leading-tight border-t-2 border-black pt-4">Primary_Logistics_Hub</p>
    </div>
  </div>

  {/* BLOCK 04: SYSTEM STATUS */}
  <div className="bg-[var(--color-accent)] p-8 md:p-12 flex flex-col justify-between aspect-square border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <div className="flex justify-between items-start">
      <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-black text-white px-2 py-1">Node_04</span>
    </div>
    <div className="space-y-4">
      <div className="h-1 w-full bg-black/20">
        <div className="h-full bg-black w-3/4" />
      </div>
      <h2 className="text-3xl font-black uppercase italic leading-none">System_Live</h2>
      <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Network_Latency: 14ms</p>
    </div>
  </div>
</section>

      {/* 04: CORE CAPABILITIES */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b-4 border-black divide-x-0 md:divide-x-4 divide-y-4 md:divide-y-0 divide-black">
        <FeatureCell number="01" title="Node_Analytics" desc="Real-time traffic tracking." />
        <FeatureCell number="02" title="Partner_Sync" desc="Instant connection to 400+ nodes." />
        <FeatureCell number="03" title="Smart_Deals" desc="Deploy dynamic pricing models." />
        <FeatureCell number="04" title="Secure_Vault" desc="Blockchain-backed logging." />
      </section>

      {/* 05: STRATEGIC PARTNERS */}
      <section className="bg-white p-12 md:p-24">
        <h2 className="text-xl font-black uppercase tracking-[0.3em] mb-12 italic border-b-2 border-black pb-4">Strategic_Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border-4 border-black divide-x-2 divide-y-2 divide-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map(p => (
            <div key={p} className="p-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all bg-white hover:bg-[#edeae7]">
              <span className="text-4xl font-black italic">{p}</span>
            </div>
          ))}
          <Link href="/business/register" className="p-16 flex flex-col items-center justify-center bg-black text-white hover:bg-[#6082a3] transition-all group">
            <span className="text-xs font-black uppercase tracking-widest mb-2 text-white">Join_Ecosystem</span>
            <span className="text-4xl group-hover:translate-x-2 transition-transform text-white">→</span>
          </Link>
        </div>
      </section>

      {/* 06: TECHNICAL FOOTER */}
      <footer className="bg-black text-white p-12 md:p-24 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">KAI<span className="text-[#6082a3]">.</span></h2>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 leading-relaxed text-white">
              KZN Partner Ecosystem // v.2026.01
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Navigation</p>
            <Link href="/explore" className="text-xs font-bold uppercase hover:text-[#6082a3] text-white">Explore_Grid</Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Terminal</p>
            <p className="text-[8px] font-bold uppercase opacity-40 text-white italic">STATUS: OPERATIONAL</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- HELPER COMPONENTS ---

function FeatureCell({ number, title, desc }: any) { 
  return (
    <div className="p-10 space-y-4 hover:bg-white transition-all group cursor-default bg-[#edeae7]">
      <span className="text-6xl font-thin italic opacity-10 group-hover:opacity-100 transition-opacity text-[#6082a3]">{number}</span>
      <h4 className="font-black uppercase text-xs tracking-widest">{title}</h4>
      <p className="text-[11px] font-bold opacity-60 leading-relaxed uppercase">{desc}</p>
    </div>
  );
}

function StatRow({ value, label, bgColor }: any) {
  return (
    <div className={`flex-1 p-12 ${bgColor} border-r-4 border-black last:border-r-0 flex flex-col justify-center min-h-[300px]`}>
      <h3 className="text-8xl font-black italic tracking-tighter">{value}</h3>
      <p className="text-xl font-bold uppercase mt-4 tracking-tight">{label}</p>
    </div>
  );
}