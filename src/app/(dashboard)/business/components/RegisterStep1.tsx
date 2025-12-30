"use client";

import React from 'react';

export default function RegisterStep1({ data, updateFields, onNext }: any) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Step_01/03</p>
          <h2 className="text-xl font-black italic uppercase">Basic_Information</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">
          01
        </div>
      </div>

      <div className="p-10 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="businessName" className="text-xs font-black uppercase tracking-widest">Legal_Entity_Name</label>
            <input 
              id="businessName"
              type="text" 
              value={data.businessName}
              onChange={(e) => updateFields({ businessName: e.target.value })}
              placeholder="ENTER_NAME..." 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="industrySector" className="text-xs font-black uppercase tracking-widest">Industry_Sector</label>
            <select 
              id="industrySector"
              title="Select Industry Sector"
              value={data.sector}
              onChange={(e) => updateFields({ sector: e.target.value })}
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase appearance-none bg-white outline-none"
            >
              <option value="RETAIL">RETAIL</option>
              <option value="FOOD_&_BEVERAGE">FOOD_&_BEVERAGE</option>
              <option value="TECHNOLOGY">TECHNOLOGY</option>
              <option value="HEALTHCARE">HEALTHCARE</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <div className="pt-4">
            <p className="text-[9px] font-bold opacity-40 uppercase leading-relaxed">
              By proceeding, you agree to the KAI_GRID technical protocols and data synchronization terms.
            </p>
          </div>

          <button 
            onClick={onNext}
            className="w-full bg-black text-white p-6 text-xl font-black italic uppercase hover:bg-[#6082a3] transition-all"
          >
            Initialize_Protocol →
          </button>
        </div>
      </div>
    </div> 
  );
}