"use client";

import React from 'react';
import Link from 'next/link';

// businessName is passed from the Master Controller to show the client's actual name
export default function RegisterComplete({ businessName = "ENTITY_NAME" }: { businessName?: string }) {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in zoom-in-95 duration-500">
      
      {/* SUCCESS HEADER */}
      <div className="bg-black text-white p-8 text-center border-b-4 border-black">
        <div className="inline-block bg-green-500 text-black px-4 py-1 text-[10px] font-black uppercase mb-4">
          Registration_Successful
        </div>
        <h2 className="text-4xl font-black italic uppercase tracking-tighter">
          Welcome_to_the_Grid
        </h2>
      </div>

      {/* BODY CONTENT */}
      <div className="p-10 space-y-8">
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Registered_Entity</p>
          <p className="text-2xl font-black uppercase italic border-l-4 border-black pl-4">
            {businessName}
          </p>
        </div>

        <div className="bg-[#edeae7] border-2 border-black p-6 space-y-4">
          <p className="text-xs font-bold leading-relaxed">
            Your business profile is now propagating through the KZN Partner Ecosystem. 
            Access your control panel to begin configuring your node data and live deals.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* This Link connects the registration flow directly to the live dashboard demo */}
          <Link 
            href="/business" 
            className="w-full bg-black text-white p-6 text-center text-xl font-black italic uppercase hover:bg-[#6082a3] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] active:translate-y-1 active:shadow-none"
          >
            Enter_Dashboard →
          </Link>
          <button 
            onClick={() => window.print()} 
            className="text-[10px] font-black uppercase underline opacity-40 hover:opacity-100 transition-opacity"
          >
            Print_Registration_Receipt
          </button>
        </div>
      </div>
    </div> 
  );
}