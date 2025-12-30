"use client";

import React from 'react';
import Link from 'next/link';

// This interface tells TypeScript exactly what "Props" the Navbar is allowed to take.
interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#edeae7]/80 backdrop-blur-md border-b-4 border-black px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-black italic uppercase tracking-tighter">
          KAI<span className="text-[#6082a3]">.</span>
        </Link>
        
        <div className="hidden md:flex gap-6">
          <Link href="/explore" className="text-[10px] font-black uppercase hover:text-[#6082a3] transition-colors">Explore_Grid</Link>
          <Link href="/business/register" className="text-[10px] font-black uppercase hover:text-[#6082a3] transition-colors">Join_Ecosystem</Link>
        </div>
      </div>

      {/* This button now correctly uses the prop you passed from LandingPage */}
      <button 
        onClick={onMenuClick}
        className="flex flex-col gap-1.5 group p-2"
        aria-label="Open Menu"
      >
        <div className="h-1 w-8 bg-black group-hover:bg-[#6082a3] transition-colors"></div>
        <div className="h-1 w-8 bg-black group-hover:bg-[#6082a3] transition-colors"></div>
        <div className="h-1 w-6 bg-black group-hover:bg-[#6082a3] transition-colors self-end"></div>
      </button>
    </nav>
  );
}