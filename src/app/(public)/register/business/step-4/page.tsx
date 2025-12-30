"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { useRouter } from 'next/navigation';

export default function RegistrationComplete() {
  const router = useRouter();
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20 font-mono">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase opacity-40 text-center">registration_status / terminal_exit</p>

        {/* Step Indicator Bar: All Finished */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-4 opacity-30">1. info</div>
          <div className="p-4 opacity-30">2. security</div>
          <div className="p-4 opacity-30">3. verification</div>
          <div className="p-4 bg-black text-white italic">4. complete</div>
        </div>

        {/* PENDING REVIEW STATUS BOX */}
        <div className="border-[6px] border-black mb-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-10 bg-black text-white flex justify-between items-center">
            <h1 className="text-5xl font-black italic uppercase leading-[0.85] tracking-tighter">
              Application<br/>Submitted.
            </h1>
            <span className="text-8xl animate-in fade-in zoom-in duration-700">✓</span>
          </div>
          
          <div className="p-10 bg-white border-t-[6px] border-black space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-5 w-5 bg-yellow-400 border-2 border-black animate-pulse"></div>
              <span className="text-sm font-black italic tracking-tight">Status: PENDING_ADMIN_REVIEW_NODE_01</span>
            </div>
            <p className="opacity-60 leading-relaxed normal-case font-bold text-sm">
              Your application for the KZN Partner Ecosystem has been received. Our team will verify your documents and social links within 24-48 business hours.
            </p>
          </div>
        </div>

        {/* WHAT HAPPENS NEXT SECTION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12 bg-white">
          <div className="p-4 bg-[#edeae7]/50 uppercase border-b-2 border-black flex justify-between font-black text-[10px]">
            <span>Next_Steps_Protocol</span>
            <span className="opacity-30 italic">04.</span>
          </div>
          
          <div className="p-8 space-y-8">
            <div className="flex gap-6 group">
              <span className="font-black text-2xl opacity-10 group-hover:opacity-100 transition-opacity">01</span>
              <div>
                <p className="mb-2 text-sm font-black italic">Access Limited Dashboard</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic font-bold">You can explore the interface, but marketplace posting is disabled until verified.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <span className="font-black text-2xl opacity-10 group-hover:opacity-100 transition-opacity">02</span>
              <div>
                <p className="mb-2 text-sm font-black italic">Watch your inbox</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic font-bold">We will notify you via x@gmail.com once your tier status (SILVER) is activated.</p>
              </div>
            </div>

            <div className="flex gap-6 group">
              <span className="font-black text-2xl opacity-10 group-hover:opacity-100 transition-opacity">03</span>
              <div>
                <p className="mb-2 text-sm font-black italic">Prepare your first lead</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic font-bold">Think about your first B2B request to post once you go live in the marketplace.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <button 
            onClick={() => router.push('/business')}
            className="p-10 bg-white hover:bg-black hover:text-white transition-all group flex flex-col items-start"
          >
            <span className="text-[9px] font-black opacity-40 mb-2 uppercase tracking-widest">Go_to_dashboard</span>
            <span className="text-2xl font-black italic group-hover:translate-x-4 transition-transform leading-none">EXPLORE INTERFACE →</span>
          </button>
          
          <button 
            onClick={() => router.push('/')}
            className="p-10 bg-black text-white hover:bg-white hover:text-black transition-all group flex flex-col items-start"
          >
            <span className="text-[9px] font-black opacity-40 mb-2 uppercase tracking-widest">System_Logout</span>
            <span className="text-2xl font-black italic group-hover:translate-x-4 transition-transform leading-none">EXIT TO HOME →</span>
          </button>
        </div>

        <p className="mt-16 text-center opacity-30 italic lowercase text-[10px] font-black tracking-widest">
          reference_id: {Math.random().toString(36).substring(7).toUpperCase()}_TERMINAL_X
        </p>
      </div>
    </main>
  );
}