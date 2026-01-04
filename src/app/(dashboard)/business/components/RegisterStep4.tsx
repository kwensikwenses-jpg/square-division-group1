"use client";

import React from 'react';

interface Step4Props {
  data: {
    businessName: string;
    category: string;
    email: string;
    bizType: string;
    registrationNumber?: string;
  };
  onConfirm: () => void;
  onBack: () => void;
}

const RegisterStep4: React.FC<Step4Props> = ({ data, onConfirm, onBack }) => {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      
      {/* HEADER: KAI_GRID SYSTEM STYLE */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Review_State</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Final_Submission</h2>
        </div>
        <div className="h-10 w-10 border-2 border-white flex items-center justify-center font-black text-xs">04</div>
      </div>

      <div className="p-10 space-y-8">
        
        {/* DATA REVIEW BOX */}
        <div className="bg-[#edeae7] border-4 border-black p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Entity_Name</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">
                {data.businessName || "UNSPECIFIED"}
              </p>
            </div>
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Sector_Classification</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">
                {data.category || "GENERAL"}
              </p>
            </div>
            <div className="md:col-span-2 border-t-2 border-black/10 pt-4">
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Registration_Type</p>
              <p className="text-sm font-black uppercase mt-1">
                {data.bizType === 'company' ? `Formal_Entity (${data.registrationNumber})` : 'Informal_Proprietor'}
              </p>
            </div>
            <div className="md:col-span-2 border-t-2 border-black/10 pt-4">
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Identity_Packet</p>
              <p className="text-sm font-black uppercase mt-1">
                {data.email}
              </p>
            </div>
          </div>
        </div>

        {/* SYSTEM NOTICE */}
        <div className="bg-orange-500/10 p-4 border-l-8 border-orange-500">
          <p className="text-[10px] font-black leading-tight uppercase tracking-tight">
            Protocol Notice: Finalizing this action will synchronize your parameters with the KAI_GRID local ecosystem and initiate a 24-48 hour manual verification period.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button 
            onClick={onBack} 
            className="flex-1 border-4 border-black p-5 font-black uppercase hover:bg-black/5 transition-all text-sm italic"
          >
            ← Modify_Data
          </button>
          <button 
            onClick={onConfirm} 
            className="flex-[2] bg-black text-white p-5 font-black uppercase tracking-widest hover:bg-orange-600 transition-all text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
          >
            Authorize_Sync →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep4;