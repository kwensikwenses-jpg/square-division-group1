"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

const EventsPage: React.FC = () => {
  // Menu State for Navbar satisfying TypeScript requirements
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // The 15 names from your hand-drawn reference
  const exhibitors = [
    "Leigh Annand", "Forest Bailey", "Morgan Corbitt", "Marino Deboer", 
    "Victoria Dusseau", "James Folgarelli Fink", "Alexander Fitch", "Dylan Hayes",
    "Sarah Jenkins", "Kevin Larimer", "Brendan Loftus", "Hannah May",
    "Oliver Reed", "Tasha Silver", "Zoe Vagner"
  ];

  // Dynamic Calendar Data
  const upcomingDates = [
    { date: "DEC 13", label: "Opening Night / 6PM", status: "Open" },
    { date: "DEC 14", label: "Artist Talk / 2PM", status: "Limited" },
    { date: "DEC 15", label: "Closing / 6PM", status: "Open" }
  ];

  return (
    <main className="min-h-screen bg-[#edeae7] text-[#2b3a8c] font-mono selection:bg-[#2b3a8c] selection:text-white">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-5xl mx-auto space-y-16 pt-32 px-8">
        {/* Header Block */}
        <header className="border-b-4 border-[#2b3a8c] pb-8">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-[calc(-0.05em)] italic leading-[0.85]">
            Shallow Basin /<br/>Group Show
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-4">
            <p className="text-2xl font-bold uppercase tracking-tight">December 13th — 15th, 2025</p>
            <p className="text-xs font-black opacity-60 uppercase tracking-[0.3em]">6:00 PM — 9:00 PM SAST</p>
          </div>
        </header>

        {/* Interactive Calendar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#2b3a8c] divide-y-4 md:divide-y-0 md:divide-x-4 divide-[#2b3a8c] bg-white shadow-[12px_12px_0px_0px_rgba(43,58,140,1)]">
          {upcomingDates.map((item) => (
            <div key={item.date} className="p-8 hover:bg-[#2b3a8c] hover:text-[#edeae7] transition-all group cursor-pointer flex flex-col justify-between h-48">
              <div>
                <p className="text-5xl font-black tracking-tighter italic">{item.date}</p>
                <p className="text-[10px] font-bold uppercase mt-2 tracking-widest leading-tight">{item.label}</p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black border-2 border-current px-3 py-1 uppercase">{item.status}</span>
                <span className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Clickable Numbered List */}
          <div className="bg-white border-4 border-[#2b3a8c] p-8 shadow-[12px_12px_0px_0px_rgba(43,58,140,0.1)]">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 border-b-2 border-[#2b3a8c] pb-2">EXHIBITORS_INDEX:</h2>
            <div className="grid grid-cols-1 gap-0">
              {exhibitors.map((name, index) => (
                <Link 
                  key={index} 
                  href={`/events/${name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-baseline gap-4 border-b-2 border-[#2b3a8c]/10 py-2 hover:bg-[#2b3a8c] hover:text-[#edeae7] transition-all group px-2"
                >
                  <span className="text-[10px] font-black opacity-30 group-hover:text-white group-hover:opacity-100">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-xl font-black tracking-tighter uppercase italic">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Location & Map Placeholder */}
          <div className="space-y-12">
            <div className="border-l-[12px] border-[#2b3a8c] pl-8 py-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40">Operational_Site</h3>
              <p className="text-4xl font-black uppercase tracking-tighter italic leading-none">Maps Good Space</p>
              <p className="text-lg font-bold mt-2 opacity-80 uppercase">640 SE Stark St, Durban, KZN</p>
            </div>

            {/* Sketch Area / Map Rendering */}
            <div className="aspect-square border-4 border-[#2b3a8c] border-dashed relative flex items-center justify-center overflow-hidden bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,0.05)]">
               <div className="absolute inset-0 bg-[#2b3a8c]/5" />
               <div className="z-10 text-center p-8">
                <p className="text-[10px] uppercase font-black tracking-[0.5em] animate-pulse">Node_Location_Rendering</p>
                <div className="mt-4 h-1 w-full bg-[#2b3a8c]/20 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2b3a8c] w-1/3 animate-[loading_2s_infinite]" />
                </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventsPage;