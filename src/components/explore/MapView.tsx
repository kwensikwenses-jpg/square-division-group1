"use client";

import React from 'react';

interface MapViewProps {
  mode: 'TRANSPORT' | 'BUSINESS';
}

export default function MapView({ mode }: MapViewProps) {
  return (
    <div className="w-full h-[500px] border-4 border-black bg-[#edeae7] relative overflow-hidden group shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] font-mono">
      
      {/* 01: MAP GRID OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`, 
          backgroundSize: '30px 30px' 
        }}
      ></div>

      {/* 02: TECHNICAL CROSSHAIR */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-black/10"></div>
        <div className="absolute left-1/2 top-0 w-px h-full bg-black/10"></div>
      </div>

      {/* 03: DYNAMIC MODE CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center">
        {mode === 'TRANSPORT' ? (
          /* Transport Visualization: Glowing Route Lines */
          <div className="w-full h-full relative animate-in fade-in duration-1000">
            <svg className="w-full h-full">
              {/* Municipal Bus Route (Blue) */}
              <path d="M 100 400 Q 300 100 700 350" fill="none" stroke="#0066CC" strokeWidth="4" strokeDasharray="10,5" className="animate-pulse" />
              {/* Train Line (Red) */}
              <path d="M 50 50 L 800 450" fill="none" stroke="#DC143C" strokeWidth="6" opacity="0.8" />
            </svg>
            <div className="absolute top-[100px] left-[300px] h-4 w-4 bg-[#0066CC] border-2 border-black rotate-45 shadow-[0_0_10px_#0066CC]"></div>
            <div className="absolute bottom-[50px] right-[150px] h-6 w-6 border-2 border-black bg-white flex items-center justify-center font-black text-[10px]">🚂</div>
          </div>
        ) : (
          /* Business Visualization: Standard Entity Pins */
          <div className="w-full h-full relative animate-in zoom-in-95 duration-700">
            <div className="absolute top-1/4 left-1/3 group/pin cursor-pointer">
              <div className="h-4 w-4 bg-black border-2 border-white rotate-45 group-hover/pin:bg-[#6082a3] transition-colors"></div>
              <div className="absolute top-6 left-2 bg-black text-white text-[8px] font-black p-2 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity uppercase italic">Entity_Node: The_Durban_Hub</div>
            </div>
            <div className="absolute bottom-1/3 right-1/4 group/pin cursor-pointer">
              <div className="h-4 w-4 bg-black border-2 border-white rotate-45 group-hover/pin:bg-[#6082a3] transition-colors"></div>
              <div className="absolute top-6 left-2 bg-black text-white text-[8px] font-black p-2 whitespace-nowrap opacity-0 group-hover/pin:opacity-100 transition-opacity uppercase italic">Entity_Node: Cyber_Retail_S7</div>
            </div>
          </div>
        )}
      </div>

      {/* 04: METADATA OVERLAYS */}
      <div className="absolute top-4 left-4 bg-black/80 text-white p-4 space-y-2 border-2 border-white/20 backdrop-blur-md">
        <p className="text-[9px] font-black uppercase tracking-widest">{mode}_SYSTEM_RENDER</p>
        <div className="text-[7px] font-mono opacity-60 leading-tight">
          LAT: -29.858