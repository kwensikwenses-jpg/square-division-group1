"use client";

import React from 'react';

export default function RegisterStep1() {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Step_01/03</p>
          <h2 className="text-xl font-black italic uppercase">Basic_Information</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">
          01
        </div>
      </div>

      {/* Form Content */}
      <div className="p-10 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest">Legal_Entity_Name</label>
            <input 
              type="text" 
              placeholder="ENTER_NAME..." 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest">Industry_Sector</label>
            <select className="w-full border-4 border-black p-4 text-sm font-bold uppercase appearance-none bg-white outline-none">
              <option>RETAIL</option>
              <option>FOOD_&_BEVERAGE</option>
              <option>TECHNOLOGY</option>
              <option>HEALTHCARE</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <p className="text-[9px] font-bold opacity-40 uppercase leading-relaxed">
            By proceeding, you agree to the KAI_GRID technical protocols and data synchronization terms.
          </p>
        </div>
      </div>
    </div> 
    /* This </div> was missing, causing the build error */
  );
}