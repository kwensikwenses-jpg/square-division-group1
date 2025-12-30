"use client";

import React, { useState } from 'react';

interface LeadProps {
  isOpen: boolean;
  onClose: () => void;
  leadData: { id: string; title: string; budget: string };
}

export default function LeadResponseNode({ isOpen, onClose, leadData }: LeadProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border-4 border-black w-full max-w-4xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-300">
        
        {/* HEADER: Technical Metadata */}
        <div className="flex border-b-4 border-black divide-x-2 divide-black bg-white">
          <div className="p-6 flex-1">
            <p className="text-[8px] uppercase tracking-[0.4em] opacity-40 mb-1">Node_ID</p>
            <h2 className="text-2xl font-black italic uppercase tracking-tighter">{leadData.id} // {leadData.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="px-10 hover:bg-red-600 hover:text-white font-black uppercase text-[10px] transition-all"
          >
            Close [X]
          </button>
        </div>

        {/* CONTENT GRID: Two-Column Tech Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x-4 divide-black">
          
          {/* Left: Lead Details */}
          <div className="p-8 space-y-12 bg-[#edeae7]">
            <div className="space-y-4">
              <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Parameter_Value</p>
              <div className="border-2 border-black p-4 bg-white">
                <p className="text-[9px] uppercase font-bold opacity-40">Estimated_Budget</p>
                <p className="text-2xl font-black italic">{leadData.budget}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Technical_Specs</p>
              <ul className="text-[9px] font-bold uppercase space-y-2">
                <li>• Verification: Verified_Partner</li>
                <li>• Location: Durban_North</li>
                <li>• Latency: Realtime_Active</li>
              </ul>
            </div>
          </div>

          {/* Right: Realtime Chat Interface */}
          <div className="md:col-span-2 flex flex-col h-[500px]">
            <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-white font-mono text-[11px] uppercase">
              <div className="p-3 bg-[#6082a3] text-white self-start w-fit max-w-[80%]">
                [SYS]: LEAD_OPENED. START CONVERSATION.
              </div>
              <div className="p-3 border-2 border-black self-end w-fit max-w-[80%] ml-auto">
                USER: HELLO, I AM INTERESTED IN THIS SERVICE.
              </div>
            </div>

            {/* Input Cell */}
            <div className="border-t-4 border-black flex">
              <input 
                type="text" 
                placeholder="ENTER_MESSAGE..." 
                className="flex-1 p-6 outline-none uppercase font-black text-xs"
              />
              <button className="px-10 bg-black text-white font-black uppercase text-[10px] hover:bg-[#6082a3] transition-all">
                Send_Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}