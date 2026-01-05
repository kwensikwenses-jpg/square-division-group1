"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'; 
import MenuOverlay from '@/components/MenuOverlay'; 
import { supabase } from '@/utils/supabase';

// ==========================================
// 0. TYPES
// ==========================================
interface RegistrationData {
  businessName: string;
  bizType: string;
  category: string;
  email: string;
  password: string;
  pin: string;
  registrationNumber: string;
  agreeToTerms: boolean;
  locationVerified: boolean;
  address: string;
  tier: string;
}

// ==========================================
// 1. SYSTEM LOGS
// ==========================================
function SystemLogs() {
  const [logs, setLogs] = useState([
    { time: "03:21:04", event: "INITIALIZING_VAULT_DECRYPT", status: "OK" },
    { time: "03:21:12", event: "METADATA_SYNC_COORD_29.8S", status: "SYNC" },
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
    <div className="bg-black text-[#6082a3] p-4 border-t-4 border-black font-mono text-[9px] uppercase tracking-widest overflow-hidden mt-8 hidden md:block">
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
// 2. STEP 1: IDENTITY (Fixed Select Red Line)
// ==========================================
interface Step1Props {
  data: RegistrationData;
  updateFields: (fields: Partial<RegistrationData>) => void;
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
            aria-label="Trading Name"
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="ENTER BUSINESS NAME"
            value={data.businessName || ""}
            onChange={(e) => updateFields({ businessName: e.target.value })}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Email Node</p>
          <input 
            aria-label="Email Address"
            type="email"
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="USER@DOMAIN.COM"
            value={data.email || ""}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <p className="text-[10px] font-black uppercase opacity-40">Access Key</p>
          <input 
            aria-label="Password"
            type="password"
            className="w-full bg-transparent border-b-2 border-black py-3 text-xl font-bold uppercase outline-none focus:border-orange-500"
            placeholder="••••••••"
            value={data.password || ""}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
        </div>

        {/* Category - Fixed Red Line by adding aria-label and simplifying onChange */}
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
              <option value="logistics">LOGISTICS</option>
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
// 3. STEP 2: PIN
// ==========================================
interface Step2Props {
  data: RegistrationData;
  updateFields: (fields: Partial<RegistrationData>) => void;
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
        <p className="text-[10px] opacity-60 uppercase leading-tight">Create a 6-digit access code.</p>
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
        </div>
        <div className="grid grid-cols-3 bg-black gap-1 border-t-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button type="button" key={num} onClick={() => handleInput(num.toString())} className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl transition-colors active:bg-black active:text-white">{num}</button>
          ))}
          <div className="bg-gray-200 w-20 h-20" />
          <button type="button" onClick={() => handleInput('0')} className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl active:bg-black active:text-white">0</button>
          <button type="button" onClick={handleBackspace} className="w-20 h-20 bg-gray-200 hover:bg-red-600 hover:text-white font-black text-xs uppercase">DEL</button>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-4 border-black p-4 font-black uppercase italic hover:bg-gray-200 text-sm">Back</button>
        <button onClick={onNext} disabled={pin.some(d => d === '')} className="flex-[2] bg-black text-white p-4 font-black uppercase italic hover:bg-orange-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] disabled:opacity-20 text-sm">Verify Pin →</button>
      </div>
    </div>
  );
};

// ==========================================
// 4. STEP 3: OTP VERIFICATION (Fixed Red Input)
// ==========================================
interface Step3Props {
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep3: React.FC<Step3Props> = ({ onNext, onBack }) => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (isNaN(Number(val))) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && e.target.nextSibling) {
      (e.target.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="w-full border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-bottom-8 duration-500 font-mono">
      <div className="p-8 space-y-8">
        <header className="space-y-2">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Step_03 // Security_Protocol</p>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter">Two-Factor_Auth</h2>
        </header>

        <div className="border-2 border-black p-6 bg-[#edeae7] space-y-4">
          <p className="text-[10px] font-black leading-relaxed">
            SYSTEM_SENT_6_DIGIT_CODE_TO:<br/>
            <span className="text-[#6082a3]">+27 *** *** **89</span>
          </p>
          
          {/* OTP Input Grid */}
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input 
                key={index}
                aria-label={`OTP Digit ${index + 1}`} // Fixed: Added aria-label to clear Red Line
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onFocus={(e) => e.target.select()}
                className="w-full aspect-square border-2 border-black bg-white text-center font-black text-xl outline-none focus:bg-black focus:text-white transition-all"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center text-[9px] font-black uppercase">
          <span className="opacity-40 italic tracking-widest">Expires_In: 04:59</span>
          <button className="underline hover:text-[#6082a3]">Resend_Signal</button>
        </div>

        <div className="flex gap-4">
          <button onClick={onBack} className="flex-1 border-4 border-black py-4 font-black uppercase text-xs hover:bg-gray-100">Back</button>
          <button 
            onClick={onNext} 
            disabled={otp.some(d => d === '')}
            className="flex-[2] border-4 border-black bg-black text-white py-4 font-black uppercase text-xs hover:bg-[#6082a3] disabled:opacity-50"
          >
            Verify_Identity
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. STEP 4: LOCATION
// ==========================================
interface Step4Props {
  data: RegistrationData;
  updateFields: (fields: Partial<RegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep4: React.FC<Step4Props> = ({ data, updateFields, onNext, onBack }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
      <h2 className="text-3xl font-black italic uppercase tracking-tighter">Location Verification</h2>
      <div className="border-2 border-black p-8 space-y-8 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-4">
          <p className="text-[10px] font-black uppercase opacity-40 tracking-widest text-center">Physical Node Lock</p>
          <div className="border-2 border-black aspect-video bg-gray-50 flex flex-col items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <div className="w-16 h-16 bg-green-500 rounded-full animate-ping absolute opacity-20" />
             <div className="w-6 h-6 bg-green-600 rounded-full z-10 border-2 border-white shadow-lg" />
             <div className="mt-12 text-center z-20">
               <p className="text-[11px] font-black uppercase text-green-700 bg-white border border-green-700 px-3 py-1">
                 {data.locationVerified ? "GPS LOCKED" : "Scanning..."}
               </p>
             </div>
          </div>
          <button type="button" onClick={() => updateFields({ locationVerified: true })} className="w-full text-[10px] font-black uppercase underline hover:text-orange-600">
            [ SIMULATE_GPS_LOCK ]
          </button>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-2 border-black p-6 font-black uppercase italic hover:bg-gray-200">Back</button>
        <button onClick={onNext} className="flex-[2] bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">Confirm Coordinates →</button>
      </div>
    </div>
  );
};

// ==========================================
// 6. STEP 5: REVIEW
// ==========================================
interface Step5Props {
  data: RegistrationData;
  onConfirm: () => void;
  onBack: () => void;
}

const RegisterStep5: React.FC<Step5Props> = ({ data, onConfirm, onBack }) => {
  return (
    <div className="w-full border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40">Review_State</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Final_Submission</h2>
        </div>
        <div className="h-10 w-10 border-2 border-white flex items-center justify-center font-black text-xs">05</div>
      </div>
      <div className="p-10 space-y-8">
        <div className="bg-[#edeae7] border-4 border-black p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Entity_Name</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">{data.businessName || "UNSPECIFIED"}</p>
            </div>
            <div>
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Sector</p>
              <p className="text-lg font-black uppercase italic leading-none mt-1">{data.category || "GENERAL"}</p>
            </div>
            <div className="md:col-span-2 border-t-2 border-black/10 pt-4">
              <p className="text-[9px] font-black opacity-40 uppercase tracking-widest">Registration_Type</p>
              <p className="text-sm font-black uppercase mt-1">{data.bizType === 'company' ? `Formal_Entity` : 'Informal_Proprietor'}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 pt-4">
          <button onClick={onBack} className="flex-1 border-4 border-black p-5 font-black uppercase hover:bg-black/5 italic">← Modify</button>
          <button onClick={onConfirm} className="flex-[2] bg-black text-white p-5 font-black uppercase tracking-widest hover:bg-orange-600 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">Authorize_Sync →</button>
        </div>
      </div>
    </div>
  ); 
};

// ==========================================
// 7. COMPLETE
// ==========================================
const RegisterComplete = ({ businessName }: { businessName: string }) => {
  const router = useRouter();
  return (
    <div className="animate-in zoom-in-95 duration-500">
      <div className="border-4 border-black p-12 bg-white text-center space-y-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-2">
          <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none">Node Active</h2>
          <p className="text-sm font-bold uppercase tracking-widest border-y border-black py-4 inline-block px-8">Welcome, {businessName || "User"}</p>
        </div>
        <div className="space-y-4 pt-4">
          <button onClick={() => router.push('/business/login')} className="w-full bg-black text-white p-6 font-black uppercase italic text-xs tracking-[0.2em] hover:bg-orange-600 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">Go to Login Gateway</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN PAGE
// ==========================================
export default function BusinessRegister() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<RegistrationData>({
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

  const updateFields = (fields: Partial<RegistrationData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleFinalSubmit = async () => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    if (data.user) {
      await supabase.from('profiles').insert([{ 
        id: data.user.id, 
        business_name: formData.businessName, 
        tier: formData.tier 
      }]);
      setStep(6);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
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
               {[1, 2, 3, 4, 5].map(i => (
                 <div key={i} className={`h-1 flex-1 transition-all ${step >= i ? 'bg-white' : 'bg-white/20'}`} />
               ))}
             </div>
             <p className="text-xs font-black uppercase italic">
               Step 0{step} // {step === 1 ? 'Identity' : step === 2 ? 'Security' : step === 3 ? 'Auth' : step === 4 ? 'Location' : 'Confirm'}
             </p>
          </div>
          <SystemLogs />
        </div>

        <div className="w-full md:w-2/3 p-8 md:p-24 overflow-y-auto bg-[#edeae7]">
          <div className="max-w-xl w-full mx-auto">
            {step === 1 && <RegisterStep1 data={formData} updateFields={updateFields} onNext={nextStep} />}
            {step === 2 && <RegisterStep2 data={formData} updateFields={updateFields} onNext={nextStep} onBack={prevStep} />}
            {step === 3 && <RegisterStep3 onNext={nextStep} onBack={prevStep} />}
            {step === 4 && <RegisterStep4 data={formData} updateFields={updateFields} onNext={nextStep} onBack={prevStep} />}
            {step === 5 && <RegisterStep5 data={formData} onConfirm={handleFinalSubmit} onBack={prevStep} />}
            {step === 6 && <RegisterComplete businessName={formData.businessName} />}
          </div>
        </div>
      </div>
    </main>
  );
}