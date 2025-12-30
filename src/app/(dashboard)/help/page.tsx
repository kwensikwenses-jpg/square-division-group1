"use client";

import React from 'react';

export default function SystemManual() {
  const documentation = [
    { 
      id: "01", 
      title: "NODE_INITIALIZATION", 
      desc: "How to register your business entity and set up your core profile data for public discovery." 
    },
    { 
      id: "02", 
      title: "ASSET_SYNCHRONIZATION", 
      desc: "Integrating your inventory with the real-time grid to broadcast pricing and availability." 
    },
    { 
      id: "03", 
      title: "COMM_RELAY_PROTOCOL", 
      desc: "Using the secure messaging interface to convert inbound leads into confirmed transactions." 
    },
    { 
      id: "04", 
      title: "ANALYTICS_INTERPRETATION", 
      desc: "Understanding radar charts and heatmaps to optimize your business performance in the KZN market." 
    }
  ];

  return (
    <div className="p-8 md:p-12 space-y-12 max-w-5xl">
      <header className="border-b-4 border-black pb-8">
        <h1 className="text-6xl font-black italic tracking-tighter uppercase">System_Manual</h1>
        <p className="text-xs font-bold opacity-40 mt-4 tracking-[0.3em]">KAI_GROUP // OPERATIONAL_GUIDES_v2.0</p>
      </header>

      <div className="grid gap-6">
        {documentation.map((doc) => (
          <div key={doc.id} className="bg-white border-4 border-black p-8 hover:bg-black hover:text-white transition-all group flex gap-8 items-start">
            <span className="text-4xl font-black italic opacity-20 group-hover:opacity-100">{doc.id}</span>
            <div>
              <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tighter">{doc.title}</h3>
              <p className="text-xs font-bold leading-relaxed opacity-60 group-hover:opacity-80">{doc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-black text-white p-8 border-4 border-black italic">
        <p className="text-sm font-bold uppercase">
          Note: If you encounter technical latency or node synchronization errors, 
          please contact the KAI_ADMIN_RELAY immediately.
        </p>
      </section>
    </div>
  );
}