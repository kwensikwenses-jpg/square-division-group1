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
    <div className="fixed inset-0 z-[300] bg-white flex flex-col animate-in fade-in duration-300 font-mono">
      {/* Top Header Bar */}
      <nav className="flex border-b-4 border-black divide-x-4 divide-black h-24">
        <button 
          onClick={onClose}
          type="button" 
          className="px-12 bg-black text-white font-black uppercase text-[11px] tracking-[0.4em] hover:bg-red-600 transition-all"
        >
          Close_[X]
        </button>
        <div className="flex-1 flex items-center px-10 text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">
          system_navigation // index_01
        </div>
      </nav>

      {/* Main Link Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 divide-x-4 divide-black border-b-4 border-black">
        <div className="flex flex-col divide-y-4 divide-black overflow-y-auto">
          <MenuLink href="/" label="Home" sub="Return_To_Landing" onClose={onClose} />
          <MenuLink href="/explore" label="Explore" sub="Discover_Business_Nodes" onClose={onClose} />
          <MenuLink href="/partners" label="Partners" sub="Network_Directory" onClose={onClose} />
          <MenuLink href="/business/analytics" label="Insights" sub="Market_Data_Portal" onClose={onClose} />
        </div>

        {/* Quick Links / Metadata Column */}
        <div className="bg-[#edeae7] p-16 flex flex-col justify-between italic">
          <div className="space-y-12">
            <h3 className="text-[12px] font-black uppercase tracking-[0.4em] opacity-40 border-b-2 border-black pb-2">Quick_Links</h3>
            <div className="grid grid-cols-1 gap-6 text-4xl font-black uppercase italic tracking-tighter">
              <Link href="/faq" onClick={onClose} className="hover:text-[#6082a3] transition-colors">01. FAQ</Link>
              <Link href="/contact" onClick={onClose} className="hover:text-[#6082a3] transition-colors">02. CONTACT</Link>
              <Link href="/legal" onClick={onClose} className="hover:text-[#6082a3] transition-colors">03. LEGAL_DOCS</Link>
            </div>
          </div>
          
          <div className="pt-10 border-t-2 border-black/10">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-40">KAI_GROUP_SYSTEMS</p>
            <p className="text-[10px] font-black uppercase italic mt-1">Durban, South Africa // 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuLink({ href, label, sub, onClose }: any) {
  return (
    <Link 
      href={href} 
      onClick={onClose} 
      className="p-16 group hover:bg-black hover:text-white transition-all flex justify-between items-end"
    >
      <div className="space-y-2">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity">{sub}</p>
        <h2 className="text-7xl font-black italic uppercase tracking-tighter leading-none">{label}</h2>
      </div>
      <span className="text-5xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">→</span>
    </Link>
  );
}