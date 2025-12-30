"use client";

import React, { useState } from 'react';

export default function RegisterStep3() {
  const [files, setFiles] = useState([
    { id: 'REG_CERT', label: 'BUSINESS_REG_CERT', status: 'PENDING' },
    { id: 'ADDR_PROOF', label: 'PROOF_OF_ADDRESS', status: 'PENDING' },
    { id: 'ID_OWNER', label: 'DIRECTOR_ID_COPY', status: 'PENDING' }
  ]);

  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">Registration_Phase_03</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Identity_Verification</h2>
        </div>
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-white/20"></div>
          <div className="h-3 w-3 bg-white/40"></div>
          <div className="h-3 w-3 bg-white"></div>
          <div className="h-3 w-3 border border-white/20"></div>
        </div>
      </div>

      <div className="p-8 space-y-10">
        {/* Section: Document Vault */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">01_Required_Documentation</h3>
          <div className="divide-y-2 divide-black border-2 border-black">
            {files.map((file) => (
              <div key={file.id} className="p-4 flex justify-between items-center hover:bg-[#edeae7] transition-all group">
                <div>
                  <p className="text-[8px] opacity-40 uppercase font-black">{file.id}</p>
                  <p className="text-[10px] font-black uppercase">{file.label}</p>
                </div>
                <button type="button" className="px-4 py-2 bg-black text-white text-[9px] font-black uppercase hover:bg-[#6082a3]">
                  Upload_File
                </button>
              </div>
            ))}
          </div>
          <p className="text-[7px] font-bold uppercase opacity-40">Accepted_Formats: PDF, JPG, PNG // Max_Size: 5MB</p>
        </div>

        {/* Section: Video Node */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2