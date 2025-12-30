"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added to prevent build error
import { supabase } from '@/utils/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  // Menu State for Navbar satisfying TypeScript requirements
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase sends a password reset link to the user's email
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim());
    if (!error) setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-xl mx-auto">
        <h1 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">recovery / reset_password</h1>
        
        <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] divide-y-4 border-black">
          {!sent ? (
            <form onSubmit={handleReset}>
              <div className="p-10 bg-white">
                <label 
                  htmlFor="reset-email" 
                  className="block text-[9px] font-black uppercase mb-4 opacity-40 italic tracking-widest"
                >
                  enter your registered email
                </label>
                <input 
                  id="reset-email"
                  type="email" 
                  title="Recovery Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="X@GMAIL.COM" 
                  className="w-full bg-transparent outline-none font-black text-2xl uppercase placeholder:opacity-10 border-b-2 border-black/10 focus:border-black transition-colors pb-2" 
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full p-10 bg-black text-white hover:bg-[#6082a3] transition-all font-black uppercase tracking-[0.2em] italic text-sm active:translate-y-1"
              >
                Send_Reset_Link →
              </button>
            </form>
          ) : (
            <div className="p-16 text-center space-y-8 bg-[#edeae7]/30">
              <div className="text-7xl font-thin italic text-[#6082a3] animate-in zoom-in duration-500">✓</div>
              <div className="space-y-2">
                <p className="font-black uppercase tracking-[0.3em] text-sm italic">Instructions_Sent.</p>
                <p className="text-[10px] font-bold opacity-60 leading-relaxed uppercase tracking-tighter">
                  Check your inbox for a secure link to update your network credentials.
                </p>
              </div>
              <button 
                onClick={() => setSent(false)} 
                className="text-[10px] font-black uppercase underline tracking-widest opacity-40 hover:opacity-100"
              >
                Try_Another_Email
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}