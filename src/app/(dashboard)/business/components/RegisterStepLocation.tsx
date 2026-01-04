"use client";

import React, { useState, useEffect } from 'react';

interface LocationProps {
  data: any;
  updateFields: (fields: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStepLocation: React.FC<LocationProps> = ({ data, updateFields, onNext, onBack }) => {
  const [isVerifying, setIsVerifying] = useState(true);

  // Simulation of GPS Packet Retrieval
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVerifying(false);
      updateFields({ locationVerified: true });
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-10 font-mono text-black space-y-8 animate-in fade-in duration-700">
      
      {/* 01: HEADER PROTOCOL */}
      <div className="space-y-2">
        <h1 className="text-3xl font-black italic uppercase tracking-tighter">Location Security</h1>
        <p className="text-[10px] opacity-60 uppercase leading-relaxed max-w-sm">
          Verify your physical operating node to finalize synchronization with the local marketplace grid.
        </p>
      </div>

      {/* 02: PROGRESS BREADCRUMBS */}
      <div className="grid grid-cols-4 border-2 border-black text-[10px] uppercase font-bold bg-white">
        <div className="p-3 border-r-2 border-black opacity-30 text-center">1. login</div>
        <div className="p-3 border-r-2 border-black opacity-30 text-center">2. authenticate(2fa)</div>
        <div className="p-3 border-r-2 border-black opacity-30 text-center">3. security pin</div>
        <div className="p-3 bg-black text-white text-center italic">4. location</div>
      </div>

      {/* 03: MAP MOCKUP & GPS PING */}
      <div className="border-2 border-black bg-white overflow-hidden shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
        <div className="h-64 bg-[#f4f4f4] relative flex items-center justify-center border-b-2 border-black overflow-hidden group">
          
          {/* Grid Overlay for Brutalist Look */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Animated GPS Ping Component */}
          <div className="relative">
            <div className={`w-16 h-16 rounded-full border-2 border-black absolute -top-5 -left-5 animate-ping opacity-20 ${isVerifying ? 'bg-orange-500' : 'bg-green-500'}`} />
            <div className={`w-6 h-6 rounded-full border-2 border-black z-10 shadow-lg transition-colors duration-1000 ${isVerifying ? 'bg-orange-500 animate-pulse' : 'bg-green-500'}`} />
          </div>

          {/* Status Overlay */}
          <div className="absolute bottom-4 left-4 bg-black text-white p-2 text-[9px] font-black uppercase tracking-widest italic">
            {isVerifying ? "Scanning_Frequencies..." : "Signal_Acquired // GPS_Locked"}
          </div>
        </div>

        {/* Verification Data Footer */}
        <div className="p-6 grid grid-cols-2 gap-4 bg-white">
          <div className="space-y-1">
            <p className="text-[8px] font-black opacity-40 uppercase">Latitude_Node</p>
            <p className="text-xs font-bold">-29.8587° S</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[8px] font-black opacity-40 uppercase">Longitude_Node</p>
            <p className="text-xs font-bold">31.0218° E</p>
          </div>
        </div>
      </div>

      {/* 04: ACTION INTERFACE */}
      <div className="flex gap-4">
        <button 
          onClick={onBack}
          className="flex-1 border-2 border-black p-5 font-black uppercase italic text-xs hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <button 
          onClick={onNext} 
          disabled={isVerifying}
          className="flex-[2] bg-black text-white p-5 font-black uppercase italic text-xs tracking-widest hover:bg-green-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] disabled:opacity-30"
        >
          {isVerifying ? "Verifying_Signal..." : "Authorize & Complete →"}
        </button>
      </div>

      <p className="text-center text-[9px] font-black uppercase opacity-30">
        By authorizing, you confirm your node's physical compliance.
      </p>
    </div>
  );
};

export default RegisterStepLocation;