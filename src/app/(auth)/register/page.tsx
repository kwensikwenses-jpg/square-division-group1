"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar'; // Ensure this exists
import MenuOverlay from '@/components/MenuOverlay'; // Ensure this exists
import { supabase } from '@/utils/supabase';

// ==========================================
// INTERNAL COMPONENT: STEP 1 (IDENTITY)
// ==========================================
interface Step1Props {
  data: any;
  updateFields: (fields: any) => void;
  onNext: () => void;
}
const RegisterStep1: React.FC<Step1Props> = ({ data, updateFields, onNext }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">Business Details</h2>
      <div className="border-2 border-black p-8 space-y-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Trading Name */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Trading Name</p>
          <input 
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="ENTER BUSINESS NAME"
            value={data.businessName || ""}
            onChange={(e) => updateFields({ businessName: e.target.value })}
          />
        </div>
        
        {/* Email & Password (Added to Step 1 for logic flow) */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Email Address</p>
          <input 
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="USER@DOMAIN.COM"
            value={data.email || ""}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </div>
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Password</p>
          <input 
            type="password"
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="••••••••"
            value={data.password || ""}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </div>

        {/* Business Structure */}
        <div className="space-y-4 py-4 border-y border-black/10">
          <p className="text-[10px] font-black uppercase opacity-40">Business Structure</p>
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" checked={data.bizType === 'sole'} onChange={() => updateFields({ bizType: 'sole' })} className="w-5 h-5 accent-black" />
              <span className="text-sm font-bold uppercase">Sole Proprietor / Informal</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="radio" checked={data.bizType === 'company'} onChange={() => updateFields({ bizType: 'company' })} className="w-5 h-5 accent-black" />
              <span className="text-sm font-bold uppercase">Private Company / Formal</span>
            </label>
          </div>
        </div>

        {/* Industry Category */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Industry Sector</p>
          <div className="relative">
            <select 
              aria-label="Industry Sector"
              className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none cursor-pointer appearance-none"
              value={data.category || ""} 
              onChange={(e) => updateFields({ category: e.target.value })}
            >
              <option value="" disabled>SELECT CATEGORY</option>
              <option value="auto">MECHANIC / AUTO REPAIR</option>
              <option value="food">FOOD & BEVERAGE</option>
              <option value="tech">TECHNOLOGY</option>
              <option value="retail">RETAIL</option>
            </select>
            <span className="absolute right-0 top-3 pointer-events-none text-2xl font-black italic">↓</span>
          </div>
        </div>
      </div>
      <button onClick={onNext} className="w-full bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
        Continue to Security →
      </button>
    </div>
  );
};

// ==========================================
// INTERNAL COMPONENT: STEP 2 (SECURITY PIN)
// ==========================================
interface Step2Props {
  data: any;
  updateFields: (fields: any) => void;
  onNext: () => void;
  onBack: () => void;
}
const RegisterStep2: React.FC<Step2Props> = ({ data, updateFields, onNext, onBack }) => {
  const [pin, setPin] = useState<string[]>(
    data.pin ? data.pin.split('').concat(Array(6 - data.pin.length).fill('')) : Array(6).fill('')
  );

  useEffect(() => {
    updateFields({ pin: pin.join('') });
  }, [pin]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleInput(e.key);
      if (e.key === 'Backspace') handleBackspace();
      if (e.key === 'Enter' && pin.every(d => d !== '')) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  const handleInput = (val: string) => {
    const nextIndex = pin.findIndex(d => d === '');
    if (nextIndex !== -1) {
      const newPin = [...pin];
      newPin[nextIndex] = val;
      setPin(newPin);
    }
  };

  const handleBackspace = () => {
    const filledIndices = pin.map((d, i) => d !== '' ? i : -1).filter(i => i !== -1);
    const lastIndex = filledIndices.length > 0 ? filledIndices[filledIndices.length - 1] : -1;
    if (lastIndex !== -1) {
      const newPin = [...pin];
      newPin[lastIndex] = '';
      setPin(newPin);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 font-mono">
      <div className="space-y-2">
        <h2 className="text-2xl font-black italic uppercase">Security Pin</h2>
        <p className="text-[10px] opacity-60 uppercase leading-tight">
          Enter a 6-digit personal identification number. You will use this to access your business node.
        </p>
      </div>
      <div className="border-4 border-black bg-white flex flex-col md:flex-row shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex-1 p-10 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
          <p className="text-[10px] font-black uppercase mb-6 opacity-40">Security Sequence</p>
          <div className="flex gap-2">
            {pin.map((digit, i) => (
              <div key={i} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50 relative overflow-hidden">
                <span className={`text-xl font-black transition-all duration-300 transform ${digit ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>*</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[9px] font-black opacity-30 uppercase">Status: {pin.every(d => d !== '') ? 'Ready' : 'Input Required'}</p>
        </div>
        <div className="grid grid-cols-3 bg-black gap-1 border-t-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button key={num} onClick={() => handleInput(num.toString())} className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl transition-colors active:bg-black active:text-white">
              {num}
            </button>
          ))}
          <div className="bg-gray-200 w-20 h-20" />
          <button onClick={() => handleInput('0')} className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl active:bg-black active:text-white">0</button>
          <button onClick={handleBackspace} className="w-20 h-20 bg-gray-200 hover:bg-red-600 hover:text-white font-black text-xs uppercase">DEL</button>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-4 border-black p-4 font-black uppercase italic hover:bg-gray-200 text-sm">Back</button>
        <button onClick={onNext} disabled={pin.some(d => d === '')} className="flex-[2] bg-black text-white p-4 font-black uppercase italic hover:bg-orange-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] disabled:opacity-20 disabled:cursor-not-allowed text-sm active:translate-y-1 active:shadow-none transition-all">
          Verify Pin →
        </button>
      </div>
    </div>
  );
};

// ==========================================
// INTERNAL COMPONENT: STEP 3 (LOCATION)
// ==========================================
interface Step3Props {
  data: any;
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
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase opacity-40 tracking-widest text-center">Verify Physical Operating Node</p>
          <div className="border-2 border-black aspect-video bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden group">
             <div className="w-16 h-16 bg-green-500 rounded-full animate-ping absolute opacity-20" />
             <div className="w-6 h-6 bg-green-600 rounded-full z-10 border-2 border-white shadow-lg" />
             <div className="mt-12 text-center z-20">
               <p className="text-[11px] font-black uppercase text-green-700 bg-white border border-green-700 px-3 py-1">
                 {data.locationVerified ? "Location Secured" : "Verifying Signal..."}
               </p>
             </div>
          </div>
          <button type="button" onClick={() => updateFields({ locationVerified: true })} className="w-full text-[10px] font-black uppercase underline hover:text-orange-600">
            Click to re-calibrate GPS
          </button>
        </div>
        <div className="border-t-2 border-black/5 pt-6">
           <div className="bg-gray-100 p-4 border border-black">
              <p className="text-[10px] font-black uppercase mb-1">Protocol: Email Verification Sent</p>
              <p className="text-xs font-bold opacity-60">We sent a link to: <span className="text-black">{data.email || 'your-email@node.com'}</span></p>
           </div>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-2 border-black p-6 font-black uppercase italic hover:bg-gray-200 transition-colors">Back</button>
        <button onClick={onNext} disabled={loading} className="flex-[2] bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none disabled:opacity-50">
          {loading ? "Transmitting..." : "Finalize & Submit Application →"}
        </button>
      </div>
    </div>
  );
};

// ==========================================
// INTERNAL COMPONENT: STEP 4 (REVIEW)
// ==========================================
interface Step4Props {
  data: any;
  onConfirm: () => void;
  onBack: () => void;
}
const RegisterStep4: React.FC<Step4Props> = ({ data, onConfirm, onBack }) => {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Review_State</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Final_Submission</h2>
        </div>
        <div className="h-10 w-10 border-2 border-white flex items-center justify-center font-black text-xs">04</div>
      </div>
      <div className="p-10 space-y-8">
        <div className="bg-[#edeae7] border-4 border-black p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Entity_Name</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">{data.businessName || "UNSPECIFIED"}</p>
            </div>
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Sector_Classification</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">{data.category || "GENERAL"}</p>
            </div>
            <div className="md:col-span-2 border-t-2 border-black/10 pt-4">
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Registration_Type</p>
              <p className="text-sm font-black uppercase mt-1">{data.bizType === 'company' ? `Formal_Entity (${data.registrationNumber})` : 'Informal_Proprietor'}</p>
            </div>
          </div>
        </div>
        <div className="bg-orange-500/10 p-4 border-l-8 border-orange-500">
          <p className="text-[10px] font-black leading-tight uppercase tracking-tight">
            Protocol Notice: Finalizing this action will synchronize your parameters with the KAI_GRID local ecosystem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button onClick={onBack} className="flex-1 border-4 border-black p-5 font-black uppercase hover:bg-black/5 transition-all text-sm italic">← Modify_Data</button>
          <button onClick={onConfirm} className="flex-[2] bg-black text-white p-5 font-black uppercase tracking-widest hover:bg-orange-600 transition-all text-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none">Authorize_Sync →</button>
        </div>
      </div>
    </div>
  ); 
};

// ==========================================
// INTERNAL COMPONENT: COMPLETE (SUCCESS)
// ==========================================
interface CompleteProps {
  businessName: string;
}
const RegisterComplete: React.FC<CompleteProps> = ({ businessName }) => {
  const router = useRouter();
  return (
    <div className="animate-in zoom-in-95 duration-500">
      <div className="border-4 border-black p-12 bg-white text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-2">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none">Registration Complete</h2>
          <p className="text-sm font-bold uppercase tracking-widest border-y border-black py-4 inline-block px-8">Thanks for registering, {businessName || "x"}</p>
        </div>
        <div className="border-2 border-black p-8 text-left bg-gray-50 space-y-4">
          <h4 className="font-black uppercase text-xs text-orange-600 tracking-widest">Protocol: What happens next</h4>
          <ul className="text-[11px] font-bold space-y-4 uppercase leading-tight">
            <li className="flex gap-3"><span className="text-orange-500">01.</span><span>Our team will review your application within 24-48 hours</span></li>
            <li className="flex gap-3"><span className="text-orange-500">02.</span><span>Account approval - you will receive an email confirmation</span></li>
          </ul>
        </div>
        <div className="flex justify-between items-center border-2 border-black p-5 text-[10px] font-black uppercase bg-white">
          <span className="opacity-40 tracking-widest">Current Node Status:</span>
          <span className="text-orange-500 italic animate-pulse">Pending Review</span>
        </div>
        <div className="space-y-4 pt-4">
          <button onClick={() => router.push('/business/login')} className="w-full bg-black text-white p-6 font-black uppercase italic text-xs tracking-[0.2em] hover:bg-orange-600 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none">Go to Login Gateway</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// INTERNAL COMPONENT: SYSTEM LOGS (FOOTER)
// ==========================================
function SystemLogs() {
  const [logs, setLogs] = useState([
    { time: "03:21:04", event: "INITIALIZING_VAULT_DECRYPT", status: "OK" },
    { time: "03:21:12", event: "METADATA_SYNC_COORD_29.8S", status: "SYNC" },
    { time: "03:21:25", event: "INCOMING_LEAD_L-99_DETECTED", status: "ALERT" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        event: "CORE_SYSTEM_HEARTBEAT_STABLE",
        status: "LIVE"
      };
      setLogs(prev => [...prev.slice(-4), newLog]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-[#6082a3] p-4 border-t-4 border-black font-mono text-[9px] uppercase tracking-widest overflow-hidden mt-8">
      <div className="flex gap-2 items-center text-white shrink-0 mb-2">
        <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
        <span className="font-black">SYS_LOGS:</span>
      </div>
      <div className="flex flex-col gap-1">
        {logs.map((log, i) => (
          <div key={i} className="whitespace-nowrap flex gap-3">
            <span className="opacity-40">[{log.time}]</span>
            <span className="text-white">{log.event}</span>
            <span className="opacity-40 italic">// {log.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MAIN PAGE: BUSINESS REGISTER
// ==========================================
export default function BusinessRegister() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    businessName: '',
    bizType: 'sole',
    category: '',
    email: '',
    password: '',
    pin: '',
    registrationNumber: '',
    agreeToTerms: false,
    locationVerified: false,
    address: '',
    tier: 'silver'
  });

  const updateFields = (fields: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleFinalSubmit = async () => {
    setLoading(true);
    // 1. Create Auth User
    const { data, error: authError } = await supabase.auth.signUp({
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    });

    if (authError) {
      alert(`Registration Error: ${authError.message}`);
      setLoading(false);
      return;
    }

    if (data.user) {
      // 2. Create Profile
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ 
          id: data.user.id, 
          business_name: formData.businessName, 
          category: formData.category,
          business_type: formData.bizType,
          pin_code: formData.pin,
          tier: formData.tier,
          status: 'pending_verification' 
        }]);

      if (profileError) {
        alert("Account created, but profile failed: " + profileError.message);
      } else {
        setStep(5); // Success
      }
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
        
        {/* LEFT PANEL: Branding */}
        <div className="w-full md:w-1/3 p-12 bg-black text-[#edeae7] flex flex-col justify-between border-r border-black">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none italic">
              Join the<br/>Ecosystem.
            </h1>
            <p className="opacity-60 text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">
              Secure B2B Node Registration Protocol.
            </p>
          </div>
          
          <div className="space-y-4 my-8">
             <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Sequence Progress</p>
             <div className="flex gap-2">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className={`h-1 flex-1 transition-all ${step >= i ? 'bg-white' : 'bg-white/20'}`} />
               ))}
             </div>
             <p className="text-xs font-black uppercase italic">
               Step 0{step} // {step === 1 ? 'Identity' : step === 2 ? 'Security' : step === 3 ? 'Location' : 'Confirm'}
             </p>
          </div>

          <SystemLogs />
        </div>

        {/* RIGHT PANEL: Form Steps */}
        <div className="w-full md:w-2/3 p-8 md:p-24 overflow-y-auto bg-[#edeae7]">
          <div className="max-w-xl w-full mx-auto">
            {step === 1 && <RegisterStep1 data={formData} updateFields={updateFields} onNext={nextStep} />}
            {step === 2 && <RegisterStep2 data={formData} updateFields={updateFields} onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <RegisterStep3 data={formData} updateFields={updateFields} onNext={nextStep} onBack={prevStep} loading={loading} />}
            {step === 4 && <RegisterStep4 data={formData} onConfirm={handleFinalSubmit} onBack={prevStep} />}
            {step === 5 && <RegisterComplete businessName={formData.businessName} />}
          </div>
        </div>

      </div>
    </main>
  );
}