"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-[#6082a3] selection:text-white">
      {/* HEADER SECTION */}
     
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* CORE CONTENT NODES: 
          If you have Hero, Stats, or Feature sections, 
          ensure they are pasted here. 
      */}

      {/* SECTION 05: STRATEGIC PARTNERS */}
      <section className="bg-white border-t-4 border-black p-12 md:p-24">
        <h2 className="text-xl font-black uppercase tracking-[0.3em] mb-12 italic border-b-2 border-black pb-4">Strategic_Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border-4 border-black divide-x-2 divide-y-2 divide-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map(p => (
            <div key={p} className="p-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all bg-white hover:bg-[#edeae7]">
              <span className="text-4xl font-black italic">{p}</span>
            </div>
          ))}
          <Link href="/register" className="p-16 flex flex-col items-center justify-center bg-black text-white hover:bg-[#6082a3] transition-all group">
            <span className="text-xs font-black uppercase tracking-widest mb-2">Join_Ecosystem</span>
            <span className="text-4xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

    {/* SECTION 06: TECHNICAL FOOTER */}
      <footer className="bg-black text-white p-12 md:p-24 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          <div className="space-y-6">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white">
              KAI<span className="text-[#6082a3]">.</span>
            </h2>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 leading-relaxed text-white">
              KZN Partner Ecosystem // v.2026.01<br/>
              Connecting local commerce through technical innovation.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Navigation</p>
            <Link href="/explore" className="text-xs font-bold uppercase hover:text-[#6082a3] text-white">Explore_Grid</Link>
            <Link href="/partners" className="text-xs font-bold uppercase hover:text-[#6082a3] text-white">Partners</Link>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Support</p>
            <Link href="/help" className="text-xs font-bold uppercase hover:text-[#6082a3] text-white">System_Manual</Link>
            <Link href="/contact" className="text-xs font-bold uppercase hover:text-[#6082a3] text-white">Contact</Link>
          </div>

          <div className="flex flex-col gap-2 md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mb-4 text-white">Terminal</p>
            <p className="text-[8px] font-bold uppercase opacity-60 text-white">© 2026 KAI_GROUP_SYSTEMS</p>
            <p className="text-[8px] font-bold uppercase opacity-40 italic mt-1 text-white">STATUS: OPERATIONAL</p>
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

function ProcessStep({ number, title, desc }: any) {
  return (
    <div className="bg-white border-4 border-black p-10 flex flex-col gap-6 group hover:bg-black hover:text-white transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      <span className="text-7xl font-black opacity-10 italic group-hover:opacity-20 transition-opacity">{number}</span>
      <div>
        <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{title}</h4>
        <p className="text-[10px] uppercase font-bold opacity-60 group-hover:text-white/60">{desc}</p>
      </div>
    </div>
  );
}

function CommunityBlock({ title, content }: any) {
  return (
    <div className="space-y-4 border-l-4 border-black pl-8">
      <h3 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">{title}</h3>
      <p className="text-lg font-bold leading-tight uppercase tracking-tight">{content}</p>
    </div>
  );
}