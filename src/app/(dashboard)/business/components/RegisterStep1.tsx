"use client";

import React from 'react';

// Explicit Interface to stop the "undefined" red lines
interface Step1Props {
  data: {
    businessName: string;
    bizType: string;
    registrationNumber: string;
    category: string;
  };
  updateFields: (fields: Partial<Step1Props['data']>) => void;
  onNext: () => void;
}

const RegisterStep1: React.FC<Step1Props> = ({ data, updateFields, onNext }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">Business Details</h2>
      
      <div className="border-2 border-black p-8 space-y-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Trading Name */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Trading Name</p>
          <input 
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="ENTER BUSINESS NAME"
            value={data.businessName || ""}
            onChange={(e) => updateFields({ businessName: e.target.value })}
          />
        </div>

        {/* Business Structure */}
        <div className="space-y-4 py-4 border-y border-black/10">
          <p className="text-[10px] font-black uppercase opacity-40">Business Structure</p>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" checked={data.bizType === 'sole'} onChange={() => updateFields({ bizType: 'sole' })} className="w-5 h-5 accent-black" />
              <span className="text-sm font-bold uppercase">Sole Proprietor / Informal</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" checked={data.bizType === 'company'} onChange={() => updateFields({ bizType: 'company' })} className="w-5 h-5 accent-black" />
              <span className="text-sm font-bold uppercase">Private Company / Formal</span>
            </label>
          </div>
        </div>

        {/* Industry Category */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Industry Sector</p>
          <div className="relative">
           <select 
  className="w-full bg-transparent ..."
  aria-label="Industry Sector"
  // FIXED: Adding '|| ""' ensures the value is never undefined
  value={data.category || ""} 
  onChange={(e) => updateFields({ category: e.target.value })}
>
              <option value="" disabled>SELECT CATEGORY</option>
              <option value="auto">MECHANIC / AUTO REPAIR</option>
              <option value="food">FOOD & BEVERAGE</option>
              <option value="tech">TECHNOLOGY</option>
            </select>
            <span className="absolute right-0 top-3 pointer-events-none text-2xl font-black italic">↓</span>
          </div>
        </div>
      </div>

      <button onClick={onNext} className="w-full bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
        Continue to Security →
      </button>
    </div>
  );
};

export default RegisterStep1;