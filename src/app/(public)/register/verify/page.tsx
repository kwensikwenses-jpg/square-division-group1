"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function VerifyEmail() {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-2xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase">account status: verification required</p>

        <div className="border-2 border-black divide-y-2 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-10 bg-black text-white italic text-3xl font-black">
            Check your inbox.
          </div>
          
          <div className="p-10 space-y-6 bg-white">
            <p className="leading-relaxed opacity-70 italic lowercase">
              We have dispatched a secure authentication link to your email address. 
              Please verify your account to activate your partner profile.
            </p>
            
            <div className="border-2 border-black p-6 bg-gray-50 font-black flex justify-between items-center">
              <span>Resend Verification</span>
              <button className="bg-black text-white px-6 py-2 hover:bg-[#6082a3] transition-all">
                →
              </button>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full p-6 text-center hover:bg-black hover:text-white transition-all border-t-2 border-black"
          >
            back to login
          </button>
        </div>
      </div>
    </main>
  );
}