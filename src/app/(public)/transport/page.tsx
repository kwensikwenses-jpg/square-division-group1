"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import TransportMap from '@/components/TransportMap'; // Corrected import path

const TransportPage: React.FC = () => {
  // State for mobile menu satisfying TypeScript NavbarProps requirement
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-[#6082a3] selection:text-white">
      {/* 01: FIXED NAVIGATION & OVERLAY */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* Header Section */}
      <section className="pt-32 px-6 md:px-12 border-b-4 border-black pb-12 bg-white">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">Logistics_Protocol / Route_Engine</p>
        <h1 className="text-7xl md:text-9xl font-black tracking-[calc(-0.05em)] uppercase italic leading-[0.85]">
          Transport<br/>& <span className="text-[#6082a3]">Logistics</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-4">
            <p className="uppercase text-xs font-black tracking-[0.3em] opacity-60">
                KZN Regional Hub / Active Node Discovery
            </p>
            <div className="flex gap-4">
                <span className="text-[10px] font-black border-2 border-black px-3 py-1 bg-[#edeae7]">LIVE_FEED</span>
                <span className="text-[10px] font-black border-2 border-black px-3 py-1 bg-green-500 text-white animate-pulse">SYSTEM_ONLINE</span>
            </div>
        </div>
      </section>

      {/* The Visual Map Component */}
      <div className="border-b-4 border-black bg-white">
        <TransportMap />
      </div>

      {/* Transport Directory Grid (Brutalist style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-4 border-black bg-black gap-px">
        {[
          { id: '01', name: "Rossburgh Rail", status: "On Time" },
          { id: '02', name: "Durban Container Terminal", status: "Active" },
          { id: '03', name: "Coastal Freight", status: "Delay - 15m" },
        ].map((item) => (
          <div 
            key={item.id} 
            className="p-12 group bg-white hover:bg-black hover:text-[#edeae7] transition-all duration-300 cursor-pointer flex flex-col justify-between h-64 shadow-[inset_0_0_0_0_rgba(0,0,0,1)] hover:shadow-[inset_0_-10px_0_0_rgba(96,130,163,1)]"
          >
            <div>
              <span className="text-5xl font-black opacity-10 group-hover:opacity-100 italic transition-opacity">{item.id}</span>
              <h3 className="text-3xl font-black uppercase mt-4 mb-2 tracking-tighter leading-none italic">{item.name}</h3>
            </div>
            
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 border-2 border-black group-hover:border-white ${item.status.includes('Delay') ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
              <p className="text-[11px] font-black uppercase tracking-widest opacity-60 group-hover:opacity-100">{item.status}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="p-8 text-center text-[10px] font-black uppercase tracking-[0.5em] opacity-20">
        Data_Stream_Synchronized_with_Port_of_Durban_API
      </footer>
    </main>
  );
};

export default TransportPage;