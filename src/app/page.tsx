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
      
      {/* 02: HERO SECTION (PROPOSAL HOOK) */}
      <section className="relative pt-32 pb-24 px-12 md:px-24 flex flex-col items-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 h-full divide-x divide-black">
            {[...Array(12)].map((_, i) => <div key={i} />)}
          </div>
        </div>
        
        <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 animate-in fade-in slide-in-from-bottom duration-700">
          KZN_Digital_Infrastructure_Layer
        </p>
        <h1 className="text-7xl md:text-[10rem] font-black italic uppercase leading-[0.8] tracking-tighter mb-12">
          THE<br/><span className="text-[#6082a3]">GRID.</span>
        </h1>
        {/* Linked to the master registration controller */}
        <Link href="/business/register" className="bg-black text-white px-12 py-6 text-xl font-black italic uppercase hover:bg-[#6082a3] transition-all shadow-[15px_15px_0px_0px_rgba(96,130,163,1)] hover:translate-x-[-5px] hover:translate-y-[-5px]">
          Initialize_Node →
        </Link>
      </section>

      {/* 03: SYSTEM STATS (SOCIAL PROOF FOR CLIENTS) */}
      <section className="border-y-4 border-black flex flex-col md:flex-row bg-white">
        <StatRow value="2.4k" label="Active_Nodes" bgColor="bg-white" />
        <StatRow value="98%" label="Connectivity" bgColor="bg-[#edeae7]" />
        <StatRow value="R12m" label="Local_Circulation" bgColor="bg-[#6082a3]" />
      </section>

      {/* 04: CORE CAPABILITIES */}
      <section className="grid grid-cols-1 md:grid-cols-4 border-b-4 border-black divide-x-0 md:divide-x-4 divide-y-4 md:divide-y-0 divide-black">
        <FeatureCell number="01" title="Node_Analytics" desc="Real-time traffic and consumer behavior tracking across your specific location." />
        <FeatureCell number="02" title="Partner_Sync" desc="Instant connection to 400+ local suppliers and logistic transport nodes." />
        <FeatureCell number="03" title="Smart_Deals" desc="Deploy dynamic pricing models that adapt to local grid demand." />
        <FeatureCell number="04" title="Secure_Vault" desc="Blockchain-backed transaction logging for total transparency." />
      </section>

      {/* 05: STRATEGIC PARTNERS */}
      <section className="bg-white border-t-4 border-black p-12 md:p-24">
        <h2 className="text-xl font-black uppercase tracking-[0.3em] mb-12 italic border-b-2 border-black pb-4">Strategic_Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border-4 border-black divide-x-2 divide-y-2 divide-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map(p => (
            <div key={p} className="p-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all bg-white hover:bg-[#edeae7]">
              <span className="text-4xl font-black italic">{p}</span>
            </div>
          ))}
          <Link href="/business/register" className="p-16 flex flex-col items-center justify-center bg-black text-white hover:bg-[#6082a3] transition-all group">
            <span className="text-xs font-black uppercase tracking-widest mb-2">Join_Ecosystem</span>
            <span className="text-4xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

      {/* 06: TECHNICAL FOOTER */}
      <footer className="bg-black text-white p-12 md:p-24 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              KAI<span className="text-[#6082a3]">.</span>
            </h2>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 leading-relaxed">
              KZN Partner Ecosystem // v.2026.01<br/>
              Connecting local commerce through technical innovation.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4">Navigation</p>
            <Link href="/explore" className="text-xs font-bold uppercase hover:text-[#6082a3] transition-colors">Explore_Grid</Link>
            <Link href="/partners" className="text-xs font-bold uppercase hover:text-[#6082a3] transition-colors">Partners</Link>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4">Support</p>
            <Link href="/help" className="text-xs font-bold uppercase hover:text-[#6082a3] transition-colors">System_Manual</Link>
            <Link href="/contact" className="text-xs font-bold uppercase hover:text-[#6082a3] transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Terminal</p>
            <p className="text-[8px] font-bold uppercase opacity-60">© 2026 KAI_GROUP_SYSTEMS</p>
            <p className="text-[8px] font-bold uppercase opacity-40 italic mt-1">STATUS: OPERATIONAL</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- TECHNICAL HELPER COMPONENTS ---

function FeatureCell({ number, title, desc }: any) { 
  return (
    <div className="p-10 space-y-4 hover:bg-white transition-all group cursor-default">
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