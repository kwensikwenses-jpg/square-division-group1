"use client";

import React from 'react';

export default function RegisterStep2({ data, updateFields, onNext, onBack }: any) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Step_02/03</p>
          <h2 className="text-xl font-black italic uppercase">Location_Parameters</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">02</div>
      </div>

      <div className="p-10 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest">Physical_Address</label>
            <input 
              type="text" 
              value={data.address}
              onChange={(e) => updateFields({ address: e.target.value })}
              placeholder="STREET_NAME_NUMBER..." 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black uppercase tracking-widest">Suburb_Node</label>
            <input 
              type="text" 
              value={data.suburb}
              onChange={(e) => updateFields({ suburb: e.target.value })}
              placeholder="e.g. DURBAN_CENTRAL..." 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none transition-colors"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={onBack} className="w-1/3 border-4 border-black p-4 font-black uppercase hover:bg-black/5 transition-all">
            Back
          </button>
          <button onClick={onNext} className="w-2/3 bg-black text-white p-4 font-black uppercase hover:bg-[#6082a3] transition-all">
            Next_Step →
          </button>
        </div>
      </div>
    </div>
  );
}