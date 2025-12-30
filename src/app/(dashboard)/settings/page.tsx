"use client";

import React, { useState } from 'react';

export default function UserSettingsPage() {
  const [activeTab, setActiveTab] = useState<'PROFILE' | 'SECURITY' | 'BILLING'>('PROFILE');

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row">
        
        {/* 01: MODULE NAVIGATION */}
        <aside className="w-full md:w-64 bg-black text-white p-8 space-y-8 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <div className="space-y-1">
            <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">System_Settings</p>
            <h2 className="text-xl font-black italic uppercase">User_Vault</h2>
          </div>
          
          <nav className="flex flex-col gap-4">
            {['PROFILE', 'SECURITY', 'BILLING'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-left text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'text-[#6082a3] translate-x-2' : 'text-white/40 hover:text-white'
                }`}
              >
                {`> ${tab}`}
              </button>
            ))}
          </nav>
        </aside>

        {/* 02: CONFIGURATION PANEL */}
        <div className="flex-1 p-10 space-y-10">
          <header className="border-b-2 border-black pb-4">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">{activeTab}_CONFIG</h3>
          </header>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase opacity-40">Verification_Status</label>
              <div className="flex items-center gap-4">
                <span className="text-[8px] font-black bg-green-600 text-white px-2 py-1">ACTIVE</span>
                <p className="text-[8px] opacity-60 leading-relaxed uppercase">Codes sent to +27 *** *** **8</p>
              </div>
            </div>

            <div className="pt-8">
              <button className="bg-black text-white px-8 py-4 text-xs font-black uppercase hover:bg-[#6082a3] transition-all shadow-[6px_6px_0px_0px_rgba(96,130,163,1)]">
                Update_Protocol
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}