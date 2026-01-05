"use client";

import React, { useState } from 'react';

export default function VerificationNode() {
  return (
    <div className="w-full max-w-md border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-bottom-8 duration-500">
      <div className="p-8 space-y-8">
        <header className="space-y-2">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Step_02 // Security_Protocol</p>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Two-Factor_Auth</h2>
        </header>

        <div className="border-2 border-black p-6 bg-[#edeae7] space-y-4">
          <p className="text-[10px] font-black leading-relaxed">
            SYSTEM_SENT_6_DIGIT_CODE_TO:<br/>
            <span className="text-[#6082a3]">+27 *** *** **89</span>
          </p>
          
          {/* OTP Input Grid */}
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <input 
                key={i}
                type="text"
                maxLength={1}
                placeholder="0"
                aria-label={`Digit ${i} of 6`}
                className="w-full aspect-square border-2 border-black bg-white text-center font-black text-xl outline-none focus:bg-black focus:text-white transition-all"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] font-black uppercase">
          <span className="opacity-40 italic tracking-widest">Expires_In: 04:59</span>
          <button className="underline hover:text-[#6082a3]">Resend_Signal</button>
        </div>

        <button className="w-full border-4 border-black py-4 font-black uppercase text-xs hover:bg-black hover:text-white transition-all">
          Verify_Identity
        </button>
      </div>
    </div>
  );
}