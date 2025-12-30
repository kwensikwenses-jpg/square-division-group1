"use client";

import React from 'react';

export default function BusinessDashboard() {
  return (
    <main className="min-h-screen bg-[#edeae7] flex flex-col font-mono pb-20">
      <div className="flex-1 p-8 space-y-8 pb-32">
        {/* HEADER SECTION */}
        <header className="border-b-4 border-black pb-8">
          <h1 className="text-5xl font-black italic uppercase tracking-tighter text-black">
            Control_Center
          </h1>
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] mt-2">
            Node_Status: Active // RSA_KZN_GRID
          </p>
        </header>

        {/* SECTION 01: TECHNICAL TELEMETRY */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-4 border-black divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-8">
            <p className="text-[10px] font-black opacity-40 uppercase mb-2">Total_Leads</p>
            <h3 className="text-5xl font-black italic tracking-tighter">142</h3>
          </div>
          <div className="p-8">
            <p className="text-[10px] font-black opacity-40 uppercase mb-2">Conversion</p>
            <h3 className="text-5xl font-black italic tracking-tighter">12%</h3>
          </div>
          <div className="p-8">
            <p className="text-[10px] font-black opacity-40 uppercase mb-2">Grid_Rank</p>
            <h3 className="text-5xl font-black italic tracking-tighter">#04</h3>
          </div>
          <div className="p-8 bg-black text-white">
            <p className="text-[10px] font-black opacity-40 uppercase mb-2 text-white/50">System_Uptime</p>
            <h3 className="text-5xl font-black italic tracking-tighter">99.9</h3>
          </div>
        </div>

        {/* SECTION 02: RECENT DATA LOGS */}
        <section className="space-y-4">
          <h2 className="text-xs font-black uppercase tracking-widest italic border-b-2 border-black pb-2">Recent_Activity_Logs</h2>
          <div className="bg-white border-4 border-black divide-y-2 divide-black">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 flex justify-between items-center hover:bg-black hover:text-white transition-all group">
                <span className="text-[10px] font-bold">INBOUND_INQUIRY_00{i}</span>
                <span className="text-[10px] opacity-40 group-hover:opacity-100 uppercase italic">Status: Pending_Relay</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}