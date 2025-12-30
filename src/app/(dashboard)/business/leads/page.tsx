"use client";

import React, { useState } from 'react';

export default function LeadManager() {
  // --- MOCK DATA LOGS ---
  const [leads] = useState([
    { id: 1, name: "Node_Inquiry_01", sector: "RETAIL", status: "UNREAD", timestamp: "12:04" },
    { id: 2, name: "Node_Inquiry_02", sector: "FOOD", status: "READ", timestamp: "09:45" }
  ]);

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="border-b-4 border-black pb-8">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter">Lead_Relay</h1>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] mt-2">
            Incoming_Transmission_Logs // KZN_GRID
          </p>
        </header>

        <div className="space-y-4">
          {leads.map((lead) => (
            <div 
              key={lead.id} 
              className={`border-4 border-black p-6 bg-white flex flex-col md:flex-row justify-between items-center gap-6 hover:translate-x-2 transition-all cursor-pointer group ${
                lead.status === 'UNREAD' ? 'shadow-[10px_10px_0px_0px_rgba(96,130,163,1)]' : 'shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
              }`}
            >
              <div className="flex items-center gap-8 w-full md:w-auto">
                <div className="space-y-1">
                  <p className="text-[10px] font-black opacity-40 uppercase tracking-widest">{lead.sector}</p>
                  <h3 className="text-xl font-black uppercase italic tracking-tighter">{lead.name}</h3>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-auto justify-between border-t-2 md:border-t-0 border-black pt-4 md:pt-0">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic">{lead.timestamp}_HRS</span>
                <span className={`px-3 py-1 text-[10px] font-black uppercase border-2 border-black ${
                  lead.status === 'UNREAD' ? 'bg-black text-white' : 'bg-transparent text-black opacity-30'
                }`}>
                  {lead.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}