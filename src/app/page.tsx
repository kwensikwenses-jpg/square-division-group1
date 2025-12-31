"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page-wrapper">
      {/* 01: SKEUOMORPHIC NAVIGATION UNIT (Floating Top Right) */}
      <div className="absolute top-8 right-8 z-[100] hidden md:flex items-center">
        <div className="flex p-[3px] bg-[#e0e0e0] rounded-xl border border-black/5 shadow-[6px_6px_12px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]">
          <div className="flex bg-[#dcdcdc] rounded-lg overflow-hidden divide-x divide-black/10 shadow-[inset_2px_2px_5px_rgba(0,0,0,0.05),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]">
            <button onClick={() => setIsMenuOpen(true)} className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black hover:bg-[#f5f5f5] transition-all">
              Menu
            </button>
            <Link href="/business/register" className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black hover:bg-[#f5f5f5] transition-all">
              Join
            </Link>
            <Link href="/explore" className="px-5 py-2 text-[9px] font-black uppercase tracking-widest text-black/50 hover:text-black hover:bg-[#f5f5f5] transition-all">
              Explore
            </Link>
          </div>
        </div>
      </div>

      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* SWISS HEADER */}
      <header className="page-header border-b border-black/5 pb-6">
        <h1 className="font-bold tracking-tighter italic">THE KZN PARTNER ECOSYSTEM</h1>
        <p className="italic lowercase">The portal of the Swiss-inspired South African Grid</p>
      </header>

      {/* SWISS NAV */}
      <nav className="page-nav">
        <ul>
          <li><Link href="/explore">THE GRID</Link></li>
          <li><Link href="/partners">PARTNERS</Link></li>
          <li><Link href="/transport">LOGISTICS</Link></li>
          <li><Link href="/pricing">DEPARTMENTS</Link></li>
          <li><Link href="/support">DOCUMENTATION</Link></li>
        </ul>
      </nav>

      {/* 02: HERO SECTION (Inside Content) */}
      <main className="page-content space-y-12 py-10">
        <section className="text-center py-20 border-b-4 border-black">
           <h2 className="text-[8vw] md:text-[6rem] font-black uppercase italic leading-[0.8] tracking-tighter mb-8">
            THE<br/><span className="text-[#6082a3]">GRID.</span>
          </h2>
          <Link href="/business/register" className="inline-block bg-black text-white px-10 py-5 text-lg font-black italic uppercase hover:bg-[#6082a3] transition-all">
            Initialize_Node →
          </Link>
        </section>

        {/* 03: STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           <StatBox value="35%" label="Growth" color="var(--color-accent)" />
           <StatBox value="150+" label="Partners" color="black" textColor="white" />
           <StatBox value="Durban" label="Hub Sector" color="white" />
           <StatBox value="Live" label="Status" color="var(--color-accent)" />
        </div>
      </main>

      <footer className="page-footer border-t border-black/5 pt-10">
        <p>&copy; 2025 KZN Partner Ecosystem // Terminal_v.2026.01</p>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatBox({ value, label, color, textColor = "black" }: any) {
  return (
    <div className="p-6 aspect-square border-2 border-black flex flex-col justify-between" style={{ backgroundColor: color, color: textColor }}>
      <span className="text-4xl font-black italic">{value}</span>
      <p className="text-[9px] font-black uppercase tracking-widest">{label}</p>
    </div>
  );
}