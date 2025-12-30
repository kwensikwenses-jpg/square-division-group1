"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added missing import

export default function LocationVerification() {
  // Menu State to satisfy Navbar requirements
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timestamp = new Date().toLocaleString();

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20 font-mono">
      {/* Fixed: Navbar now receives the required prop and Overlay is present */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <h1 className="text-3xl font-black mb-4 normal-case tracking-tighter">location_verification</h1>
        <p className="mb-12 opacity-50 normal-case font-medium lowercase leading-relaxed">
          confirm your current location to ensure secure access from authorized locations and prevent unauthorized login attempts.
        </p>

        {/* Auth Steps Tracker */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black text-[9px]">
          <div className="p-4 opacity-30">1. login</div>
          <div className="p-4 opacity-30">2. authenticate(2fa)</div>
          <div className="p-4 opacity-30">3. security pin</div>
          <div className="p-4 bg-black text-white">4. location</div>
        </div>

        {/* Map Visualization Area */}
        <div className="border-2 border-black p-12 mb-8 bg-white relative overflow-hidden aspect-video flex flex-col items-center justify-center">
          <div className="absolute h-[300px] w-[300px] border border-green-500/20 rounded-full animate-ping"></div>
          <div className="absolute h-[200px] w-[200px] border border-green-500/40 rounded-full"></div>
          <div className="absolute h-[100px] w-[100px] border border-green-500/60 rounded-full"></div>
          
          <div className="z-10 bg-green-500 h-6 w-6 rounded-full border-4 border-white shadow-lg mb-4"></div>
          <p className="z-10 text-green-600 font-black animate-pulse">location verified successfully</p>
        </div>

        {/* Technical Metadata Table */}
        <div className="border-2 border-black divide-y-2 divide-black bg-white">
          <div className="grid grid-cols-2 p-4">
            <span className="opacity-50">location:</span>
            <span className="text-right">durban, kwazulu-natal</span>
          </div>
          <div className="grid grid-cols-2 p-4">
            <span className="opacity-50">ip address:</span>
            <span className="text-right font-mono tracking-normal">192.168.1.163</span>
          </div>
          <div className="grid grid-cols-2 p-4">
            <span className="opacity-50">timestamp:</span>
            <span className="text-right">{timestamp}</span>
          </div>
        </div>

        <p className="mt-8 text-center opacity-40 lowercase italic text-[10px]">
          location not recognized? <span className="underline cursor-pointer">contact support</span>
        </p>
      </div>
    </main>
  );
}