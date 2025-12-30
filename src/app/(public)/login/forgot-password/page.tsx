"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { supabase } from '@/utils/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    // Supabase sends a password reset link to the user's email
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim());
    if (!error) setSent(true);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-xl mx-auto">
        <h1 className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-40">recovery / reset password</h1>
        
        <div className="border-2 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] divide-y-2 divide-black">
          {!sent ? (
            <form onSubmit={handleReset}>
              <div className="p-8">
                <label className="block text-[9px] font-bold uppercase mb-4 opacity-40 italic">enter your registered email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="X@GMAIL.COM" 
                  className="w-full bg-transparent outline-none font-black text-2xl uppercase placeholder:opacity-10" 
                  required
                />
              </div>
              <button type="submit" className="w-full p-8 bg-black text-white hover:bg-[#6082a3] transition-colors font-black uppercase tracking-widest italic">
                Send Reset Link →
              </button>
            </form>
          ) : (
            <div className="p-12 text-center space-y-6">
              <span className="text-6xl italic">✓</span>
              <p className="font-bold uppercase tracking-widest text-sm italic">Instructions Sent.</p>
              <p className="text-[10px] opacity-60 leading-relaxed uppercase">Check your inbox for a secure link to update your network credentials.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}