"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import Link from 'next/link';

export default function ArtistProfile({ params }: { params: { slug: string } }) {
  // Menu State for Navbar satisfying TypeScript requirements
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Convert slug back to name (e.g., 'leigh-annand' to 'Leigh Annand')
  const artistName = params.slug.replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-[#edeae7] text-[#2b3a8c] font-mono selection:bg-[#2b3a8c] selection:text-white">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-4xl mx-auto pt-32 px-8 pb-20">
        <Link href="/events" className="text-[10px] font-black uppercase tracking-[0.4em] hover:italic flex items-center gap-2 group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back_to_Show_List
        </Link>
        
        <header className="mt-12 border-b-[10px] border-[#2b3a8c] pb-8">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.85]">
            {artistName}
          </h1>
          <div className="flex justify-between items-center mt-6">
            <p className="uppercase text-xs font-black tracking-[0.3em]">Exhibiting_Artist / Shallow_Basin</p>
            <span className="text-[10px] font-black opacity-30 uppercase tracking-widest">Node_Ref: {params.slug.substring(0, 5)}</span>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 border-b border-[#2b3a8c]/20 pb-2">Statement_Protocol:</h3>
              <p className="text-xl leading-tight font-bold uppercase italic">
                Exploring the intersection of industrial landscapes and local South African textures through mixed media and spatial intervention.
              </p>
            </div>

            <div className="p-6 border-4 border-[#2b3a8c] bg-white shadow-[8px_8px_0px_0px_rgba(43,58,140,1)]">
              <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">Exhibition_Details</h4>
              <ul className="text-[11px] font-bold uppercase space-y-2">
                <li className="flex justify-between"><span>Medium:</span> <span className="opacity-60">Mixed Media</span></li>
                <li className="flex justify-between"><span>Floor:</span> <span className="opacity-60">GND_Level</span></li>
                <li className="flex justify-between"><span>Status:</span> <span className="text-green-600">On_Display</span></li>
              </ul>
            </div>
          </div>
          
          <div className="aspect-[3/4] border-4 border-[#2b3a8c] border-dashed flex flex-col items-center justify-center p-8 text-center bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)] relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#2b3a8c]/5 group-hover:bg-transparent transition-colors" />
            <p className="text-[10px] font-black uppercase tracking-[0.5em] italic opacity-40 group-hover:opacity-100 transition-opacity">
              [ High-Res_Work_Documentation ]
            </p>
            <div className="mt-4 flex gap-2">
               <div className="h-1 w-8 bg-[#2b3a8c] animate-pulse" />
               <div className="h-1 w-2 bg-[#2b3a8c] opacity-30" />
               <div className="h-1 w-2 bg-[#2b3a8c] opacity-30" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}