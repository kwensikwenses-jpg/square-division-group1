"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added for build compliance

export default function VerifyEmail() {
  // Menu State for Navbar satisfying TypeScript requirements
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-2xl mx-auto uppercase font-bold text-[11px] tracking-[0.4em]">
        <p className="mb-8 italic lowercase opacity-40">account_status / verification_protocol</p>

        <div className="border-4 border-black divide-y-4 divide-black bg-white shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-10 bg-black text-white italic text-4xl font-black tracking-tighter leading-none">
            Check your<br/>inbox.
          </div>
          
          <div className="p-10 space-y-8 bg-white">
            <p className="leading-relaxed opacity-70 italic lowercase font-bold">
              We have dispatched a secure authentication link to your registered email address. 
              Please verify your account to activate your partner profile node on the grid.
            </p>
            
            <div className="border-4 border-black p-8 bg-[#edeae7]/30 font-black flex justify-between items-center group">
              <span className="tracking-widest">RESEND_VERIFICATION</span>
              <button 
                title="Resend Email"
                className="bg-black text-white px-8 py-3 hover:bg-[#6082a3] transition-all active:translate-x-1"
              >
                →
              </button>
            </div>
          </div>

          <button 
            onClick={() => window.location.href = '/login'}
            className="w-full p-8 text-center font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all border-t-4 border-black italic text-sm"
          >
            back_to_login
          </button>
        </div>
        
        <p className="mt-12 text-center opacity-30 italic lowercase text-[10px] tracking-widest">
          awaiting_server_callback...
        </p>
      </div>
    </main>
  );
}