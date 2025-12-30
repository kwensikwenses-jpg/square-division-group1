"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

const TransportPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-[#6082a3] selection:text-white">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* 01: HEADER SECTION */}
      <section className="pt-32 px-6 md:px-12 border-b-4 border-black pb-12 bg-white">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-40 italic">Logistics_Protocol / Route_Engine</p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
          Transport<br/>& <span className="text-[#6082a3]">Logistics</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-8 gap-4">
            <p className="uppercase text-xs font-black tracking-[0.3em] opacity-60">KZN Regional Hub / Active Node Discovery</p>
            <div className="flex gap-4">
                <span className="text-[10px] font-black border-2 border-black px-3 py-1 bg-[#edeae7]">LIVE_FEED</span>
                <span className="text-[10px] font-black border-2 border-black px-3 py-1 bg-green-500 text-white animate-pulse">SYSTEM_ONLINE</span>
            </div>
        </div>
      </section>

      {/* 02: THE SIMULATED MAP */}
      <section className="w-full aspect-video bg-white border-b-4 border-black relative overflow-hidden flex items-center justify-center p-12">
        {/* FIXED: changed 'size' to 'backgroundSize' to resolve the redline/build error */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Animated Radar Rings */}
        <div className="absolute h-[600px] w-[600px] border-2 border-black/5 rounded-full animate-[ping_3s_infinite]" />
        <div className="absolute h-[400px] w-[400px] border-2 border-black/10 rounded-full animate-[ping_5s_infinite]" />
        
        <div className="z-10 text-center">
          <div className="inline-block px-6 py-2 bg-black text-white text-[10px] font-black mb-8 tracking-[0.5em] italic">
            SCANNING_DURBAN_PORT_SECTOR
          </div>
          
          {/* Mock Node Points */}
          <div className="relative flex justify-center gap-20">
             <div className="flex flex-col items-center group cursor-crosshair">
                <div className="h-4 w-4 bg-green-500 border-2 border-black rounded-full mb-2 group-hover:scale-150 transition-transform" />
                <span className="text-[8px] font-black uppercase group-hover:bg-black group-hover:text-white px-1">Rossburgh_Node</span>
             </div>
             <div className="flex flex-col items-center mt-12 group cursor-crosshair">
                <div className="h-4 w-4 bg-[#6082a3] border-2 border-black rounded-full mb-2 animate-pulse group-hover:scale-150 transition-transform" />
                <span className="text-[8px] font-black uppercase group-hover:bg-black group-hover:text-white px-1">Container_Terminal</span>
             </div>
             <div className="flex flex-col items-center group cursor-crosshair">
                <div className="h-4 w-4 bg-black border-2 border-black rounded-full mb-2 group-hover:scale-150 transition-transform" />
                <span className="text-[8px] font-black uppercase group-hover:bg-black group-hover:text-white px-1">Umgeni_Hub</span>
             </div>
          </div>
        </div>

        {/* Technical Sidebar */}
        <div className="absolute left-8 bottom-8 border-2 border-black p-4 bg-white hidden md:block">
           <p className="text-[8px] font-black uppercase opacity-40 mb-2">Network_Coordinates</p>
           <p className="text-[10px] font-bold">LAT: -29.8587</p>
           <p className="text-[10px] font-bold">LONG: 31.0218</p>
        </div>
      </section>

      {/* 03: DIRECTORY GRID */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-4 border-black bg-black gap-px">
        {[
          { id: '01', name: "Rossburgh Rail", status: "On Time" },
          { id: '02', name: "Durban Container Terminal", status: "Active" },
          { id: '03', name: "Coastal Freight", status: "Delay - 15m" },
        ].map((item) => (
          <div key={item.id} className="p-12 group bg-white hover:bg-black hover:text-[#edeae7] transition-all duration-300 cursor-pointer flex flex-col justify-between h-64">
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
    </main>
  );
};

export default TransportPage;