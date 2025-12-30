"use client";

import React from 'react';
import Link from 'next/link';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuOverlay({ isOpen, onClose }: MenuOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#edeae7] flex flex-col p-10 animate-in fade-in slide-in-from-top duration-500 font-mono">
      {/* Menu Header */}
      <div className="flex justify-between items-center mb-20">
        <span className="text-2xl font-black italic tracking-tighter">KAI<span className="text-[#6082a3]">.</span></span>
        <button 
          onClick={onClose}
          className="text-xs font-black uppercase border-4 border-black px-4 py-2 hover:bg-black hover:text-white transition-all"
        >
          Close_Terminal [X]
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex flex-col gap-8">
        <Link 
          href="/business/register" 
          onClick={onClose}
          className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter hover:text-[#6082a3] transition-colors"
        >
          Join_Grid
        </Link>
        <Link 
          href="/explore" 
          onClick={onClose}
          className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter hover:text-[#6082a3] transition-colors"
        >
          Explore
        </Link>
        <Link 
          href="/partners" 
          onClick={onClose}
          className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter hover:text-[#6082a3] transition-colors"
        >
          Partners
        </Link>
      </nav>

      {/* Secondary Bottom Links */}
      <div className="mt-auto pt-10 border-t-4 border-black flex flex-col gap-4">
        <div className="flex gap-6">
          <Link href="/help" className="text-[10px] font-black uppercase opacity-40 hover:opacity-100 transition-opacity">System_Manual</Link>
          <Link href="/contact" className="text-[10px] font-black uppercase opacity-40 hover:opacity-100 transition-opacity">Contact_Node</Link>
        </div>
        <p className="text-[8px] font-bold opacity-20 uppercase tracking-[0.4em]">© 2026 KAI_GROUP_SYSTEMS // STATUS: OPERATIONAL</p>
      </div>
    </div>
  );
}