"use client";

import React from 'react';

export default function RegisterStep3({ data, updateFields, onNext, onBack }: any) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Step_03/03</p>
          <h2 className="text-xl font-black italic uppercase">Contact_Protocol</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">03</div>
      </div>

      <div className="p-10 space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-black uppercase tracking-widest">Business_Email</label>
            <input 
              id="email"
              type="email" 
              value={data.email}
              onChange={(e) => updateFields({ email: e.target.value })}
              placeholder="NODEMAIL@KAI.CO.ZA" 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-black uppercase tracking-widest">Support_Phone</label>
            <input 
              id="phone"
              type="tel" 
              value={data.phone}
              onChange={(e) => updateFields({ phone: e.target.value })}
              placeholder="+27..." 
              className="w-full border-4 border-black p-4 text-sm font-bold uppercase focus:bg-[#edeae7] outline-none"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={onBack} className="w-1/3 border-4 border-black p-4 font-black uppercase hover:bg-black/5">Back</button>
          <button onClick={onNext} className="w-2/3 bg-black text-white p-4 font-black uppercase hover:bg-[#6082a3]">Review_Data →</button>
        </div>
      </div>
    </div>
  );
}