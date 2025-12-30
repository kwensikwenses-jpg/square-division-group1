"use client";

import React from 'react';
import Link from 'next/link';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { name: "The Grid", path: "/marketplace", id: "01" },
    { name: "Partners", path: "/partners", id: "02" },
    { name: "Logistics", path: "/transport", id: "03" },
    { name: "Pricing", path: "/pricing", id: "04" },
    { name: "Pitch", path: "/investor-pitch", id: "05" },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white font-mono flex flex-col animate-in fade-in duration-300">
      
      {/* --- HEADER: TECHNICAL NAVIGATION --- */}
      <div className="flex justify-between items-center p-6 md:p-10 border-b-4 border-white/20">
        <span className="text-[10px] font-black uppercase tracking-[0.5em] italic animate-pulse text-[#6082a3]">
          Navigation_Protocol / v.1.0
        </span>
        
        {/* CUSTOM BRUTALIST CLOSE BUTTON (No Dependencies) */}
        <button 
          onClick={onClose}
          className="group flex items-center gap-4 bg-white text-black px-6 py-3 border-4 border-white hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          <span className="font-black uppercase italic text-sm">Close_System</span>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="4" 
            strokeLinecap="square" 
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* --- MENU LINKS: SWIM CLUB STYLE --- */}
      <nav className="flex-1 flex flex-col justify-center px-6 md:px-20 overflow-hidden relative">
        {/* Massive Background Decorative Text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[35vw] font-black opacity-[0.03] pointer-events-none uppercase italic whitespace-nowrap leading-none select-none">
          KZN_GRID
        </div>

        <div className="relative z-10 flex flex-col items-start w-full">
          {menuItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.path}
              onClick={onClose}
              className="group relative flex items-end gap-6 py-4 md:py-6 w-full border-b border-white/10 hover:border-white transition-all duration-300"
            >
              <span className="text-xl md:text-4xl font-black opacity-20 group-hover:opacity-100 group-hover:text-[#6082a3] italic transition-all">
                {item.id}
              </span>
              <span className="text-[12vw] md:text-[9vw] font-black uppercase italic leading-[0.75] tracking-[calc(-0.06em)] group-hover:translate-x-6 transition-transform duration-500">
                {item.name}
              </span>
              <span className="hidden lg:block text-xs font-black opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all uppercase tracking-[0.4em] pb-6 text-[#6082a3]">
                Access_Node →
              </span>
            </Link>
          ))}
        </div>
      </nav>

      {/* --- FOOTER: SYSTEM LOGS --- */}
      <div className="p-6 md:p-10 flex flex-col md:flex-row justify-between items-center border-t-4 border-white/20 gap-6">
        <div className="flex items-center gap-4 bg-white/5 px-4 py-2 border border-white/10">
          <div className="h-3 w-3 bg-green-500 rounded-none animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.8)]" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            Status: Synchronized // Port: Durban_South
          </span>
        </div>
        
        <div className="flex gap-10 text-[9px] font-black uppercase opacity-30 tracking-widest">
          <span className="hover:opacity-100 cursor-help transition-opacity">Privacy_Shield_Active</span>
          <span className="hover:opacity-100 cursor-help transition-opacity">Ecosystem_License_2026</span>
        </div>
      </div>

    </div>
  );
};

export default MenuOverlay;