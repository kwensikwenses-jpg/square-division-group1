"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function ArtistProfile({ params }: { params: { slug: string } }) {
  // Convert slug back to name (e.g., 'leigh-annand' to 'Leigh Annand')
  const artistName = params.slug.replace(/-/g, ' ');

  return (
    <main className="min-h-screen bg-[#edeae7] text-[#2b3a8c] p-8 md:p-20">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-24">
        <Link href="/events" className="text-[10px] font-bold uppercase tracking-widest hover:italic">
          ← Back to Show List
        </Link>
        
        <header className="mt-12 border-b-4 border-[#2b3a8c] pb-8">
          <h1 className="text-7xl font-black uppercase tracking-tighter italic leading-none">
            {artistName}
          </h1>
          <p className="mt-4 uppercase text-sm font-bold tracking-[0.3em]">Exhibiting Artist / Shallow Basin</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold uppercase opacity-50">Statement</h3>
            <p className="text-lg leading-relaxed italic">
              Exploring the intersection of industrial landscapes and local South African textures through mixed media and spatial intervention.
            </p>
          </div>
          
          <div className="aspect-[3/4] border-2 border-[#2b3a8c] border-dashed flex items-center justify-center p-8 text-center italic text-xs">
            [ High-Res Work Documentation Rendering ]
          </div>
        </section>
      </div>
    </main>
  );
}