"use client";

import React, { useState } from 'react';

type Mode = 'TRANSPORT' | 'BUSINESS';

export default function MapModeSwitcher({ onModeChange }: { onModeChange: (mode: Mode) => void }) {
  const [activeMode, setActiveMode] = useState<Mode>('BUSINESS');

  const handleSwitch = (mode: Mode) => {
    setActiveMode(mode);
    onModeChange(mode);
  };

  return (
    <div className="w-full max-w-xl mx-auto border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] overflow-hidden font-mono animate-in slide-in-from-top-4 duration-500">
      {/* System Status Bar */}
      <div className="bg-black text-white p-2 flex justify-between items-center px-4">
        <p className="text-[7px] font-black uppercase tracking-[0.4em] italic opacity-60">System_Interface_Switcher</p>
        <div className="flex gap-2 items-center">
          <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></span>
          <p className="text-[7px] font-black uppercase">Grid_Active</p>
        </div>
      </div>

      {/* Main Toggle Tabs */}
      <div className="grid grid-cols-2 divide-x-4 divide-black border-t-4 border-black">
        <button 
          onClick={() => handleSwitch('TRANSPORT')}
          className={`p-6 transition-all group relative ${activeMode === 'TRANSPORT' ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#edeae7]'}`}
        >
          <div className="space-y-1">
            <p className="text-[8px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">01_Infrastructure</p>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Transport</h3>
          </div>
          {activeMode === 'TRANSPORT' && <div className="absolute bottom-0 left-0 h-1 w-full bg-[#6082a3]"></div>}
        </button>

        <button 
          onClick={() => handleSwitch('BUSINESS')}
          className={`p-6 transition-all group relative ${activeMode === 'BUSINESS' ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#edeae7]'}`}
        >
          <div className="space-y-1">
            <p className="text-[8px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100">02_Marketplace</p>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">Businesses</h3>
          </div>
          {activeMode === 'BUSINESS' && <div className="absolute bottom-0 left-0 h-1 w-full bg-[#6082a3]"></div>}
        </button>
      </div>

      {/* Mode Description Footer */}
      <div className="p-3 bg-[#edeae7] border-t-2 border-black flex justify-between items-center text-[8px] font-black uppercase italic opacity-60">
        <span>{activeMode === 'TRANSPORT' ? 'Visualizing: Bus_Taxi_Train_Nodes' : 'Visualizing: Commercial_Entity_Grid'}</span>
        <span>Build: v.2026_MAP</span>
      </div>
    </div>
  );
}