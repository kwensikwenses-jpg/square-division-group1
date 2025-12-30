"use client";

import React, { useState } from 'react';

export default function HelpManual() {
  const [activeTopic, setActiveTopic] = useState('01_GRID_NAVIGATION');

  const topics = [
    { id: '01_GRID_NAVIGATION', title: 'Grid_Navigation', sub: 'Navigating the Explore interface' },
    { id: '02_SECURE_MESSAGING', title: 'Secure_Messaging', sub: 'Transmitting data packets' },
    { id: '03_ENTITY_REGISTRATION', title: 'Entity_Onboarding', sub: 'Business node activation' },
    { id: '04_TRANSIT_INTEGRATION', title: 'Transit_Sync', sub: 'Mapping municipal routes' },
  ];

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
        
        {/* Module 01: The Index */}
        <aside className="w-full md:w-80 flex flex-col">
          <div className="p-6 bg-black text-white border-b-4 border-black">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] italic">Manual_Index</h2>
          </div>
          <div className="flex-1 overflow-y-auto divide-y-2 divide-black bg-[#fafafa]">
            {topics.map((topic) => (
              <button 
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={`w-full p-6 text-left transition-all group ${activeTopic === topic.id ? 'bg-black text-white' : 'hover:bg-[#edeae7]'}`}
              >
                <p className={`text-[8px] font-black uppercase mb-1 ${activeTopic === topic.id ? 'opacity-40' : 'opacity-20'}`}>Ref: {topic.id}</p>
                <h4 className="text-sm font-black uppercase italic tracking-tighter">{topic.title}</h4>
                <p className="text-[9px] opacity-60 uppercase mt-2 leading-tight">{topic.sub}</p>
              </button>
            ))}
          </div>
        </aside>

        {/* Module 02: Documentation Stream */}
        <section className="flex-1 p-12 space-y-10 max-h-[80vh] overflow-y-auto">
          <div className="space-y-4 border-b-2 border-black pb-8">
            <h3 className="text-5xl font-black italic uppercase tracking-tighter">{activeTopic.replace(/_/g, ' ')}</h3>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#6082a3]">Operational_Protocol_v.1.04</p>
          </div>

          <div className="space-y-8 text-sm uppercase font-black leading-relaxed">
            <div className="space-y-4">
              <h4 className="text-xs border-l-4 border-black pl-4">Protocol_Overview:</h4>
              <p className="opacity-70 italic">
                Users can navigate the local KZN ecosystem by toggling between "Business" and "Transport" modes. 
                This allows for real-time visualization of commercial nodes and municipal infrastructure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 bg-[#edeae7]">
                <p className="text-[8px] opacity-40 mb-2">HOTKEY_IDENTIFIER</p>
                <p className="text-xs">CTRL + K : GLOBAL_SEARCH</p>
              </div>
              <div className="border-2 border-black p-4 bg-[#edeae7]">
                <p className="text-[8px] opacity-40 mb-2">HOTKEY_IDENTIFIER</p>
                <p className="text-xs">ESC : CLOSE_ACTIVE_NODE</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs border-l-4 border-black pl-4">Step_by_Step_Execution:</h4>
              <ul className="list-decimal list-inside space-y-2 opacity-80 text-[11px]">
                <li>INITIALIZE_SYSTEM_LOGIN</li>
                <li>SELECT_TARGET_GRID_COORDINATES</li>
                <li>INTERACT_WITH_BUSINESS_OR_TRANSIT_PIN</li>
                <li>ARCHIVE_NODE_TO_PERSONAL_VAULT</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}