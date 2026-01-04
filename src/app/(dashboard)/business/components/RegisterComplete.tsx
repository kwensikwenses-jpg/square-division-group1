"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

interface CompleteProps {
  businessName: string;
}

const RegisterComplete: React.FC<CompleteProps> = ({ businessName }) => {
  const router = useRouter();

  return (
    <div className="animate-in zoom-in-95 duration-500">
      <div className="border-4 border-black p-12 bg-white text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        {/* 01: HEADER */}
        <div className="space-y-2">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none">
            Registration Complete
          </h2>
          <p className="text-sm font-bold uppercase tracking-widest border-y border-black py-4 inline-block px-8">
            Thanks for registering, {businessName || "x"}
          </p>
        </div>

        {/* 02: NEXT STEPS PROTOCOL */}
        <div className="border-2 border-black p-8 text-left bg-gray-50 space-y-4">
          <h4 className="font-black uppercase text-xs text-orange-600 tracking-widest">
            Protocol: What happens next
          </h4>
          <ul className="text-[11px] font-bold space-y-4 uppercase leading-tight">
            <li className="flex gap-3">
              <span className="text-orange-500">01.</span>
              <span>Our team will review your application within 24-48 hours</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500">02.</span>
              <span>Account approval - you will receive an email confirmation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500">03.</span>
              <span>Complete your profile setup and list your services</span>
            </li>
          </ul>
        </div>

        {/* 03: CURRENT STATUS INDICATOR */}
        <div className="flex justify-between items-center border-2 border-black p-5 text-[10px] font-black uppercase bg-white">
          <span className="opacity-40 tracking-widest">Current Node Status:</span>
          <span className="text-orange-500 italic animate-pulse">Pending Review</span>
        </div>

        <div className="space-y-4 pt-4">
          <button 
            onClick={() => router.push('/business/login')}
            className="w-full bg-black text-white p-6 font-black uppercase italic text-xs tracking-[0.2em] hover:bg-orange-600 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
          >
            Go to Login Gateway
          </button>
          
          <p className="text-[9px] font-black uppercase opacity-40">
            Questions? <span className="underline cursor-pointer hover:text-black">Contact Support</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;