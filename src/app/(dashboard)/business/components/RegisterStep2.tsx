"use client";

import React from 'react';

interface Step2Props {
  data: {
    email: string;
    password?: string;
    securityQuestion?: string;
    agreeToTerms: boolean;
  };
  updateFields: (fields: Partial<Step2Props['data']>) => void;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep2: React.FC<Step2Props> = ({ data, updateFields, onNext, onBack }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">Security Setup</h2>
      
<div className="border-2 border-black p-8 space-y-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
  
  {/* Email Address */}
  <div className="space-y-2">
    <p className="text-[10px] font-black uppercase opacity-40">Network Identity (Email)</p>
    <input 
      type="email"
      className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
      placeholder="EMAIL ADDRESS"
      value={data.email || ""}
      onChange={(e) => updateFields({ email: e.target.value })}
    />
  </div>

  {/* Security Question */}
  <div className="space-y-2">
    <p className="text-[10px] font-black uppercase opacity-40">Recovery Question</p>
    <div className="relative">
      <select 
        aria-label="Recovery Question"
        className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none cursor-pointer appearance-none"
        value={data.securityQuestion || ""} 
        onChange={(e) => updateFields({ securityQuestion: e.target.value })}
      >
        <option value="" disabled>SELECT A QUESTION</option>
        <option value="pet">FIRST PET NAME?</option>
        <option value="city">BIRTH CITY?</option>
      </select>
      <span className="absolute right-0 top-3 pointer-events-none text-2xl font-black italic">↓</span>
    </div>
  </div>

        {/* T&C Checkbox */}
        <label className="flex items-center gap-4 cursor-pointer mt-4">
           <input 
             type="checkbox" 
             checked={data.agreeToTerms || false} 
             onChange={(e) => updateFields({ agreeToTerms: e.target.checked })} 
             className="w-6 h-6 border-2 border-black accent-black" 
           />
           <span className="text-[10px] font-black uppercase tracking-widest">I agree to t&cs</span>
        </label>
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-2 border-black p-6 font-black uppercase italic hover:bg-gray-100 transition-colors">Back</button>
        <button onClick={onNext} className="flex-[2] bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
          Continue to Verification →
        </button>
      </div>
    </div>
  );
};

export default RegisterStep2;