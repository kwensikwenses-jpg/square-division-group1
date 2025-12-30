"use client";

import React, { useState } from 'react';

export default function RegisterStep2() {
  const [showBackupCodes, setShowBackupCodes] = useState(false);

  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500 relative">
      
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">Registration_Phase_02</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Security_Protocol_Setup</h2>
        </div>
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-white/40"></div>
          <div className="h-3 w-3 bg-white"></div>
          <div className="h-3 w-3 border border-white/20"></div>
          <div className="h-3 w-3 border border-white/20"></div>
        </div>
      </div>

      <form className="p-8 space-y-10">
        {/* Section: Access Key Configuration */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">01_Access_Credentials</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase opacity-40">Create_Master_Password_*</label>
              <input type="password" placeholder="••••••••••••" className="w-full border-2 border-black p-3 text-xs focus:bg-[#edeae7] outline-none" />
              {/* Strength Meter */}
              <div className="flex gap-1 h-1 w-full bg-gray-100">
                <div className="bg-green-500 w-3/4 h-full"></div>
              </div>
              <p className="text-[7px] font-black uppercase text-green-600 italic">Strength: Optimal_Security</p>
            </div>
          </div>
        </div>

        {/* Section: Multi-Factor Configuration */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">02_MFA_Authentication</h3>