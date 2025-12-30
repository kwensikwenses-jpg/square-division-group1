"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-black selection:text-white">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* --- HERO SECTION: GIANT TYPE & COLOR BLOCK --- */}
      <section className="pt-24 md:pt-32 px-4 md:px-10">
        <div className="border-[6px] border-black bg-[#6082a3] p-6 md:p-12 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[70vh]">
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] bg-black text-white px-2 py-1">v.2026.01</span>
            <span className="text-sm font-black italic uppercase tracking-tighter">South Africa / KZN</span>
          </div>
          
          <h1 className="text-[12vw] md:text-[10vw] font-black uppercase italic leading-[0.8] tracking-tighter text-white mt-12 mb-8">
            The Grid<br/>Ecosystem
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <p className="max-w-md text-sm md:text-base font-bold uppercase leading-tight text-white">
              Connecting local industry nodes into a single, high-performance B2B marketplace.
            </p>
            <Link href="/choice" className="w-full md:w-auto px-12 py-6 bg-black text-white text-xl font-black uppercase italic hover:bg-white hover:text-black transition-all border-4 border-black text-center">
              Join the Network →
            </Link>
          </div>
        </div>
      </section>

      {/* --- BENTO GRID: STATS & INFO --- */}
      <section className="px-4 md:px-10 py-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Block 1: The "Why" */}
        <div className="border-[4px] border-black p-8 bg-white flex flex-col justify-between aspect-square">
          <h2 className="text-4xl font-black uppercase italic leading-none">Hyper<br/>Local.</h2>
          <p className="text-xs font-bold uppercase opacity-60">Focusing exclusively on KwaZulu-Natal supply chains.</p>
        </div>

        {/* Block 2: Dark Mode Callout */}
        <div className="border-[4px] border-black p-8 bg-black text-white flex flex-col justify-between aspect-square">
          <div className="flex justify-between">
            <span className="text-6xl font-black italic opacity-20">02</span>
            <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse" />
          </div>
          <h2 className="text-3xl font-black uppercase leading-tight">Verified<br/>Business<br/>Nodes</h2>
        </div>

        {/* Block 3: The Value */}
        <div className="border-[4px] border-black p-8 bg-white flex flex-col justify-between aspect-square shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <h2 className="text-4xl font-black uppercase italic leading-none">Direct<br/>Trade.</h2>
          <p className="text-[10px] font-black uppercase tracking-widest border-t-2 border-black pt-4">No middle-men. Pure B2B interaction.</p>
        </div>
      </section>

      {/* --- SCROLLING TICKER (SwimClub Signature Style) --- */}
      <div className="bg-black py-6 overflow-hidden border-y-4 border-black whitespace-nowrap">
        <div className="flex animate-marquee text-white font-black uppercase italic text-4xl gap-20">
          <span>Durban Port</span>
          <span>Rossburgh Logistics</span>
          <span>KZN Food Supply</span>
          <span>Coastal Transport</span>
          <span>Government Tenders</span>
          <span>Durban Port</span>
          <span>Rossburgh Logistics</span>
        </div>
      </div>

      {/* --- FOOTER / CALL TO ACTION --- */}
      <footer className="p-10 md:p-20 text-center">
        <Link href="/marketplace" className="text-[15vw] font-black uppercase italic tracking-tighter hover:text-[#6082a3] transition-colors leading-none">
          Explore_The_Grid
        </Link>
        <div className="mt-20 flex flex-col md:flex-row justify-between items-center border-t-4 border-black pt-8 gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40">System_Monetization_v1</p>
          <div className="flex gap-8 text-[10px] font-black uppercase">
            <Link href="/investor-pitch">Investor Deck</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/support">Support</Link>
          </div>
        </div>
      </footer>

      {/* Tailwind Marquee Animation Logic */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </main>
  );
}