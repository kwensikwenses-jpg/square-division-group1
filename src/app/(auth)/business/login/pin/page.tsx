"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { useRouter } from 'next/navigation';

export default function SecurityPinVerification() {
  const [pin, setPin] = useState<string[]>([]);
  const [attempts, setAttempts] = useState(2);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Fix for Navbar requirement
  const router = useRouter();

  const handleKeyPress = (num: string) => {
    if (pin.length < 6) {
      const newPin = [...pin, num];
      setPin(newPin);
      
      // Auto-submit if 6 digits are reached
      if (newPin.length === 6) {
        setTimeout(() => router.push('/business/login/location'), 500);
      }
    }
  };

  const clearPin = () => setPin([]);

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20 font-mono">
      {/* 01: NAVIGATION SYNC */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <h1 className="text-3xl font-black mb-4 normal-case tracking-tighter">security_pin</h1>
        <p className="mb-12 opacity-50 normal-case font-medium lowercase leading-relaxed">
          enter your personal identification number to verify your identity and secure access to your account.
        </p>

        {/* Auth Steps Tracker */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black text-[9px]">
          <div className="p-4 opacity-30">1. login</div>
          <div className="p-4 opacity-30">2. authenticate(2fa)</div>
          <div className="p-4 bg-black text-white">3. security pin</div>
          <div className="p-4 opacity-30">4. location</div>
        </div>

        {/* PIN Entry & Keypad Container */}
        <div className="border-4 border-black grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Display Area */}
          <div className="md:col-span-2 p-12 flex flex-col justify-center items-start relative bg-[#edeae7]">
            <span className="absolute top-4 right-4 text-[9px] font-black opacity-30 tracking-widest">{pin.length}/6</span>
            <p className="mb-8 opacity-40 lowercase italic">enter your pin.</p>
            
            <div className="flex gap-3">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-14 w-14 border-4 border-black flex items-center justify-center text-3xl transition-all duration-100 ${pin[i] ? 'bg-black text-white scale-105' : 'bg-white'}`}
                >
                  {pin[i] ? '•' : ''}
                </div>
              ))}
            </div>
          </div>

          {/* Keypad Area */}
          <div className="grid grid-cols-3 divide-x-2 divide-y-2 divide-black bg-white">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
              <button 
                key={num} 
                onClick={() => handleKeyPress(num)}
                className="p-8 text-2xl font-black hover:bg-black hover:text-white transition-all active:bg-[#6082a3] active:text-white"
              >
                {num}
              </button>
            ))}
            <button onClick={clearPin} className="p-8 text-[9px] font-black hover:bg-red-500 hover:text-white transition-all">CLR</button>
            <button onClick={() => handleKeyPress('0')} className="p-8 text-2xl font-black hover:bg-black hover:text-white transition-all">0</button>
            <button 
              onClick={() => pin.length === 6 && router.push('/business/login/location')}
              className="p-8 text-2xl font-black bg-white hover:bg-[#6082a3] hover:text-white transition-all"
              title="Verify PIN"
            >
              →
            </button>
          </div>
        </div>

        <p className="mt-12 text-center opacity-40 lowercase italic text-[10px] tracking-widest">
          attempts remaining: {attempts}/3
        </p>
      </div>
    </main>
  );
}