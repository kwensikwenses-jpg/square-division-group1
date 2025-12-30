"use client";

import React from 'react';

export default function RegisterComplete({ businessName = "ENTITY_NAME" }) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in zoom-in-95 duration-500">
      
      {/* SUCCESS HEADER */}
      <div className="bg-black text-white p-8 text-center border-b-4 border-black">
        <div className="h-16 w-16 border-4 border-white mx-auto mb-6 flex items-center justify-center">
           <span className="text-3xl">✓</span>
        </div>
        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Registration_Complete</h2>
        <p className="text-[10px] uppercase tracking-[0.4em] mt-2 opacity-60">Welcome_To_The_Ecosystem, {businessName}</p>
      </div>

      <div className="p-8 space-y-10">
        
        {/* STATUS TICKER */}
        <div className="border-2 border-black p-6 bg-[#edeae7] relative overflow-hidden">
          <div className="flex justify-between items-center relative z-10">
            <div>
              <p className="text-[8px] font-black uppercase opacity-40 italic">Current_Status</p>
              <p className="text-xl font-black uppercase italic tracking-tighter text-[#6082a3]">Pending_Manual_Review</p>
            </div>
            <div className="text-right">
              <p className="text-[8px] font-black uppercase opacity-40 italic">Estimated_Wait</p>
              <p className="text-xl font-black italic tracking-tighter">24-48_HOURS</p>
            </div>
          </div>
          {/* Progress Bar Background */}
          <div className="h-1 w-full bg-black/10 mt-6 relative">
            <div className="absolute left-0 top-0 h-full bg-black w-1/4 animate-pulse"></div>
          </div>
        </div>

        {/* NEXT STEPS GRID */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">Operational_Next_Steps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-black p-4 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-tighter">01_Email_Verification</p>
              <p className="text-[8px] opacity-60 leading-relaxed uppercase">Check your inbox for the secondary security link.</p>
            </div>
            <div className="border-2 border-black p-4 space-y-2">
              <p className="text-[10px] font-black uppercase tracking-tighter">02_Profile_Drafting</p>
              <p className="text-[8px] opacity-60 leading-relaxed uppercase">You can begin editing your profile while review is in progress.</p>
            </div>
          </div>
        </div>

        {/* RESOURCE DOWNLOAD */}
        <div className="border-2 border-black p-6 flex justify-between items-center group cursor-pointer hover:bg-black hover:text-white transition-all">
          <div className="flex items-center gap-4">
            <div className="h-10 w-8 border-2 border-current flex flex-col justify-end p-1">
              <div className="h-1 w-full bg-current opacity-40"></div>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase italic">Business_Operations_Guide.PDF</p>
              <p className="text-[8px] opacity-40 uppercase">Essential reading for new partners</p>
            </div>
          </div>
          <span className="text-xl font-black group-hover:translate-y-1 transition-