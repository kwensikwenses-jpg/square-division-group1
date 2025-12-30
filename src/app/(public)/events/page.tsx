"use client";

import React from 'react';
import Link from 'next/link'; // Added for dynamic routing
import Navbar from '../../../components/Navbar';

const EventsPage: React.FC = () => {
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
    <main className="min-h-screen bg-[#edeae7] text-[#2b3a8c] p-8 md:p-20">
      <Navbar />
      
      <div className="max-w-5xl mx-auto space-y-16 pt-24">
        {/* Header Block */}
        <header className="border-b border-[#2b3a8c] pb-8">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
            Shallow Basin / Group Show
          </h1>
          <div className="flex justify-between items-end mt-4">
            <p className="text-xl font-medium uppercase">December 13th — 15th, 2025</p>
            <p className="text-sm font-bold opacity-60 uppercase tracking-widest">6:00 PM — 9:00 PM</p>
          </div>
        </header>

        {/* Interactive Calendar Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingDates.map((item) => (
            <div key={item.date} className="border-2 border-[#2b3a8c] p-6 hover:bg-[#2b3a8c] hover:text-[#edeae7] transition-all group cursor-pointer">
              <p className="text-4xl font-black tracking-tighter italic">{item.date}</p>
              <p className="text-[10px] font-bold uppercase mt-2 tracking-widest">{item.label}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-[8px] border border-current px-2 py-1 uppercase">{item.status}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column: Clickable Numbered List */}
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-6 opacity-50">Works By:</h2>
            <div className="grid grid-cols-1 gap-1">
              {exhibitors.map((name, index) => (
                <Link 
                  key={index} 
                  href={`/events/${name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-baseline gap-4 border-b border-[#2b3a8c]/10 py-1 hover:bg-[#2b3a8c] hover:text-[#edeae7] transition-all group px-2"
                >
                  <span className="text-[10px] font-mono opacity-40 group-hover:text-[#edeae7]">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <span className="text-lg font-medium tracking-tight uppercase">
                    {name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Location & Map Placeholder */}
          <div className="space-y-12">
            <div className="border-l-4 border-[#2b3a8c] pl-6 py-2">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-2">Location</h3>
              <p className="text-2xl font-black uppercase tracking-tighter">Maps Good Space</p>
              <p className="text-lg italic opacity-70">640 SE Stark St, Durban, KZN</p>
            </div>

            {/* Sketch Area */}
            <div className="aspect-square border-2 border-[#2b3a8c] border-dashed relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[#2b3a8c]/5" />
               <p className="text-[10px] uppercase font-bold tracking-[0.5em] animate-pulse">Hand-Drawn Map Rendering</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EventsPage;