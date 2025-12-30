"use client";

import React from 'react';

export default function RegisterStep4() {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Review_State</p>
          <h2 className="text-xl font-black italic uppercase">Final_Submission</h2>
        </div>
        <div className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center font-black text-xs">
          04
        </div>
      </div>

      {/* Form Content */}
      <div className="p-10 space-y-8">
        <div className="bg-[#edeae7] border-4 border-black p-6">
          <p className="text-xs font-black uppercase tracking-widest opacity-40 mb-2">Notice</p>
          <p className="text-sm font-bold leading-tight">
            Please verify all node parameters before finalizing registration. 
            Once submitted, your data will be synchronized across the KZN Partner Grid.
          </p>
        </div>

        <button className="w-full bg-black text-white p-6 text-xl font-black italic uppercase hover:bg-[#6082a3] transition-all">
          Authorize_Registration
        </button>
      </div>
    </div>
  );
}