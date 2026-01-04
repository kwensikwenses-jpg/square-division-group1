"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { supabase } from '@/utils/supabase';

const LoginPage: React.FC = () => {
  const router = useRouter();
  
  // UI State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Security Protocol State
  const [attempts, setAttempts] = useState(3);
  const [isLocked, setIsLocked] = useState(false);
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });

    if (error) {
      const remaining = attempts - 1;
      setAttempts(remaining);

      if (remaining <= 0) {
        setIsLocked(true);
        setErrorMessage("NODE LOCKDOWN: MAXIMUM ATTEMPTS EXCEEDED."); //
      } else {
        setErrorMessage(`${error.message} (${remaining} attempts remaining)`);
      }
      
      setLoading(false);
      return;
    }

    if (data.session) {
      router.push('/business');
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono">
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
        
        {/* LEFT SIDE: Identity Protocol */}
        <div className={`w-full md:w-1/3 p-12 flex flex-col justify-between border-r border-black transition-colors duration-500 ${isLocked ? 'bg-red-600 text-white' : 'bg-black text-[#edeae7]'}`}>
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">
              {isLocked ? "Node Locked." : "Back Online."}
            </h1>
            <p className="opacity-60 text-xs uppercase tracking-widest leading-relaxed">
              {isLocked 
                ? "Security breach detected. Access to this node is restricted." 
                : "Access your business hub and marketplace tools."}
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-8xl font-black opacity-10 uppercase tracking-tighter">
              {isLocked ? "Alert" : "Portal"}
            </span>
          </div>
        </div>

        {/* RIGHT SIDE: Login / Lockdown UI */}
        <div className="w-full md:w-2/3 p-12 md:p-24 flex items-center bg-white md:bg-transparent">
          {!isLocked ? (
            <form onSubmit={handleLogin} className="space-y-12 max-w-xl w-full animate-in fade-in slide-in-from-right-4">
              <section className="space-y-6">
                <h2 className="text-sm uppercase font-bold tracking-[0.3em] border-b border-black pb-2 italic">Credentials</h2>
                
                {errorMessage && (
                  <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-[10px] font-black uppercase animate-shake">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="email-field" className="hidden">Email Address</label>
                  <input 
                    id="email-field"
                    type="email" 
                    placeholder="EMAIL ADDRESS" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none focus:border-blue-600 transition-colors" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password-field" className="hidden">Password</label>
                  <input 
                    id="password-field"
                    type="password" 
                    placeholder="PASSWORD" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none focus:border-blue-600 transition-colors" 
                  />
                </div>
              </section>

              <div className="space-y-4">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-black text-white py-6 font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1 active:shadow-none"
                >
                  {loading ? "Authenticating..." : "Enter Dashboard"}
                </button>
                <div className="flex justify-between text-[10px] font-black uppercase opacity-40 tracking-widest">
                  <a href="/business/register" className="underline hover:text-black">Request Access</a>
                  <span>Attempts: {attempts}/3</span>
                </div>
              </div>
            </form>
          ) : (
            /* LOCKDOWN OVERRIDE UI */
            <div className="max-w-xl w-full border-4 border-black p-10 bg-white shadow-[20px_20px_0px_0px_rgba(220,38,38,1)] animate-in zoom-in-95">
              <h2 className="text-3xl font-black uppercase text-red-600 italic leading-none mb-6 underline decoration-4 underline-offset-8">Manual Override Required</h2>
              
              <div className="space-y-6 text-xs font-bold uppercase leading-tight">
                <p>Security protocol engaged. A recovery packet has been dispatched to your registered email.</p>
                
                <div className="border-2 border-black p-6 bg-gray-50 space-y-4">
                  <p className="text-orange-600">Recovery Procedures:</p>
                  <ul className="space-y-3 opacity-80 list-none">
                    <li><span className="text-black">1.</span> Access your email node and locate the recovery link.</li>
                    <li><span className="text-black">2.</span> Perform the mandatory identity verification.</li>
                    <li><span className="text-black">3.</span> Reset your security parameters via the link.</li>
                  </ul>
                </div>
              </div>

              <button 
                onClick={() => window.location.reload()}
                className="w-full mt-10 bg-black text-white p-5 font-black uppercase italic tracking-widest hover:bg-red-600 transition-all"
              >
                Acknowledge & Refresh Node
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default LoginPage;