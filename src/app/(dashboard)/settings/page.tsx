"use client";

import React, { useState } from 'react';

export default function UserSettingsPage() {
  const [activeTab, setActiveTab] = useState<'PROFILE' | 'SECURITY' | 'PREFS'>('PROFILE');

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      <div className="max-w-4xl mx-auto border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
        
        {/* 01: MODULE NAVIGATION */}
        <aside className="w-full md:w-64 bg-black text-white p-6 space-y-8">
          <div className="space-y-1">
            <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">User_Control_v.1</p>
            <h2 className="text-xl font-black italic uppercase tracking-tighter">Settings_Node</h2>
          </div>
          
          <nav className="flex flex-col gap-4">
            {['PROFILE', 'SECURITY', 'PREFS'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`text-left text-[10px] font-black uppercase tracking-widest py-2 px-4 border-l-2 transition-all ${activeTab === tab ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white'}`}
              >
                {tab}_IDENTIFIER
              </button>
            ))}
          </nav>
        </aside>

        {/* 02: CONFIGURATION PANELS */}
        <section className="flex-1 p-10">
          
          {/* PROFILE TAB: Personal Identity */}
          {activeTab === 'PROFILE' && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter border-b-2 border-black pb-2">Profile_Details</h3>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[8px] font-black uppercase opacity-40">Display_Name</label>
                  <input type="text" defaultValue="USER_882_KZN" className="w-full border-2 border-black p-3 text-xs uppercase outline-none focus:bg-[#edeae7]" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] font-black uppercase opacity-40">Primary_Email_Node</label>
                  <input type="email" defaultValue="user@platform.com" className="w-full border-2 border-black p-3 text-xs focus:bg-[#edeae7]" />
                </div>
              </div>
            </div>
          )}

          {/* SECURITY TAB: 2FA & PIN */}
          {activeTab === 'SECURITY' && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <h3 className="text-2xl font-black italic uppercase tracking-tighter border-b-2 border-black pb-2">Security_Protocol</h3>
              
              <div className="border-2 border-black p-6 space-y-4 bg-[#edeae7]">
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-black uppercase">Multi-Factor_Auth (2FA)</p>
                  <span className="text-[8px] font-black bg-green-600 text-white px-2 py-1">ACTIVE</span>
                </div>
                <p className="text-[8px] opacity-60 leading-relaxed uppercase">Codes sent to +27 *** *** **8