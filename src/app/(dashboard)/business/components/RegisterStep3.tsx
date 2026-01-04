"use client";

import React from 'react';

interface Step3Props {
  data: {
    email: string;
    locationVerified: boolean;
    bizType: string;
  };
  updateFields: (fields: any) => void;
  onNext: () => void;
  onBack: () => void;
  loading: boolean;
}

const RegisterStep3: React.FC<Step3Props> = ({ data, updateFields, onNext, onBack, loading }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">Location & Verification</h2>
      
      <div className="border-2 border-black p-8 space-y-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        
        {/* 01: MAP MOCKUP */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase opacity-40 tracking-widest text-center">Verify Physical Operating Node</p>
          <div className="border-2 border-black aspect-video bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden group">
             {/* Map Grid Background Effect */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             
             {/* Animated GPS Ping */}
             <div className="w-16 h-16 bg-green-500 rounded-full animate-ping absolute opacity-20" />
             <div className="w-6 h-6 bg-green-600 rounded-full z-10 border-2 border-white shadow-lg" />
             
             <div className="mt-12 text-center z-20">
               <p className="text-[11px] font-black uppercase text-green-700 bg-white border border-green-700 px-3 py-1">
                 {data.locationVerified ? "Location Secured" : "Verifying Signal..."}
               </p>
             </div>
          </div>
          <button 
            type="button"
            onClick={() => updateFields({ locationVerified: true })}
            className="w-full text-[10px] font-black uppercase underline hover:text-orange-600"
          >
            Click to re-calibrate GPS
          </button>
        </div>

        {/* 02: EMAIL VERIFICATION NOTICE */}
        <div className="border-t-2 border-black/5 pt-6">
           <div className="bg-gray-100 p-4 border border-black">
              <p className="text-[10px] font-black uppercase mb-1">Protocol: Email Verification Sent</p>
              <p className="text-xs font-bold opacity-60">We sent a link to: <span className="text-black">{data.email || 'your-email@node.com'}</span></p>
              <button type="button" className="text-[9px] font-black uppercase underline mt-2 hover:text-blue-600">Resend Packet</button>
           </div>
        </div>

        {/* 03: DOCUMENT UPLOAD */}
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase opacity-40 tracking-widest">Compliance Documents</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-black p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors group">
              <p className="text-[10px] font-black uppercase group-hover:text-orange-600">↑ Upload Identity Doc</p>
              <p className="text-[8px] opacity-40 mt-1">(Required for all)</p>
            </div>
            
            {/* Conditional logic: Formal businesses require more docs */}
            {data.bizType === 'company' && (
              <div className="border-2 border-dashed border-black p-6 text-center hover:bg-gray-50 cursor-pointer transition-colors group">
                <p className="text-[10px] font-black uppercase group-hover:text-orange-600">↑ Upload Tax Clearance</p>
                <p className="text-[8px] opacity-40 mt-1">(Formal Entities Only)</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className="flex gap-4">
        <button 
          onClick={onBack}
          className="flex-1 border-2 border-black p-6 font-black uppercase italic hover:bg-gray-200 transition-colors"
        >
          Back
        </button>
        <button 
          onClick={onNext} 
          disabled={loading}
          className="flex-[2] bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none disabled:opacity-50"
        >
          {loading ? "Transmitting..." : "Finalize & Submit Application →"}
        </button>
      </div>
    </div>
  );
};

export default RegisterStep3;