"use client";

import React from 'react';

export default function DocumentVault() {
  const documents = [
    { name: "COMPANY_REG.PDF", status: "VERIFIED", date: "2025-12-01" },
    { name: "ID_DIRECTOR.PDF", status: "PENDING", date: "2025-12-28" },
    { name: "TAX_CLEARANCE.PDF", status: "EXPIRED", date: "2024-11-15" }
  ];

  return (
    <div className="border-2 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
      <div className="p-4 bg-black text-white flex justify-between items-center">
        <h3 className="text-[9px] font-black uppercase tracking-[0.4em]">Vault_Sector_04</h3>
        <button type="button" className="text-[8px] border border-white/20 px-2 py-1 hover:bg-white hover:text-black transition-all">
          Upload_New +
        </button>
      </div>

      <div className="divide-y-2 divide-black">
        {documents.map((doc) => (
          <div key={doc.name} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center group hover:bg-[#edeae7] transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-tighter">{doc.name}</span>
            </div>
            
            <div className="text-[8px] font-bold uppercase opacity-40 italic">
              Processed: {doc.date}
            </div>

            <div className="flex justify-end items-center gap-4">
              <span className={`text-[8px] font-black px-2 py-1 border ${
                doc.status === 'VERIFIED' ? 'border-green-500 text-green-600' : 
                doc.status === 'EXPIRED' ? 'border-red-500 text-red-600' : 'border-black opacity-30'
              }`}>
                {doc.status}
              </span>
              <button type="button" className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">↓</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}