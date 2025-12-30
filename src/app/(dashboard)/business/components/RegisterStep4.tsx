"use client";

import React from 'react';

export default function RegisterStep4({ data, onConfirm, onBack }: any) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Review_State</p>
          <h2 className="text-xl font-black italic uppercase">Final_Submission</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">04</div>
      </div>

      <div className="p-10 space-y-8">
        <div className="bg-[#edeae7] border-4 border-black p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[8px] font-black opacity-40 uppercase">Entity</p>
              <p className="text-sm font-black uppercase">{data.businessName || "NOT_PROVIDED"}</p>
            </div>
            <div>
              <p className="text-[8px] font-black opacity-40 uppercase">Sector</p>
              <p className="text-sm font-black uppercase">{data.sector}</p>
            </div>
            <div className="col-span-2 border-t-2 border-black/10 pt-2">
              <p className="text-[8px] font-black opacity-40 uppercase">Contact</p>
              <p className="text-sm font-black uppercase">{data.email} | {data.phone}</p>
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-4 border-l-4 border-black">
          <p className="text-[9px] font-bold leading-tight uppercase">
            Notice: Finalizing will synchronize this node's parameters with the KAI_GRID ecosystem.
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          <button onClick={onBack} className="w-1/3 border-4 border-black p-4 font-black uppercase hover:bg-black/5 transition-all">
            Edit
          </button>
          <button onClick={onConfirm} className="w-2/3 bg-black text-white p-4 font-black uppercase hover:bg-[#6082a3] transition-all">
            Authorize_Submission →
          </button>
        </div>
      </div>
    </div>
  );
}