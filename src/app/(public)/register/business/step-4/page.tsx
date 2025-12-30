"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function RegistrationComplete() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20">
      <Navbar />
      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase">registration status</p>

        {/* Step Indicator Bar: All Finished */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black bg-gray-50">
          <div className="p-4">1. info</div>
          <div className="p-4">2. security</div>
          <div className="p-4">3. verification</div>
          <div className="p-4 bg-black text-white">4. complete</div>
        </div>

        {/* PENDING REVIEW STATUS BOX */}
        <div className="border-4 border-black mb-12">
          <div className="p-8 bg-black text-white flex justify-between items-center">
            <h1 className="text-4xl font-black italic uppercase leading-none">Application<br/>Submitted.</h1>
            <span className="text-6xl">✓</span>
          </div>
          
          <div className="p-8 bg-white border-t-4 border-black space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 bg-yellow-400 border-2 border-black animate-pulse"></div>
              <span className="text-sm font-black italic">Status: Pending Administrative Review</span>
            </div>
            <p className="opacity-60 leading-relaxed normal-case font-medium text-sm">
              Your application for the KZN Partner Ecosystem has been received. Our team will verify your documents and social links within 24-48 business hours.
            </p>
          </div>
        </div>

        {/* WHAT HAPPENS NEXT SECTION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12">
          <div className="p-4 bg-gray-50 uppercase border-b-2 border-black flex justify-between">
            <span>Next Steps</span>
            <span className="opacity-30">04.</span>
          </div>
          
          <div className="p-8 bg-white space-y-8">
            <div className="flex gap-6">
              <span className="font-black text-xl opacity-20">01</span>
              <div>
                <p className="mb-2">Access Limited Dashboard</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic">You can explore the interface, but marketplace posting is disabled until verified.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="font-black text-xl opacity-20">02</span>
              <div>
                <p className="mb-2">Watch your inbox</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic">We will notify you via x@gmail.com once your tier status (silver) is activated.</p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="font-black text-xl opacity-20">03</span>
              <div>
                <p className="mb-2">Prepare your first lead</p>
                <p className="opacity-50 text-[10px] leading-relaxed lowercase italic">Think about your first B2B request to post once you go live.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-black divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
          <button 
            onClick={() => router.push('/business')}
            className="p-8 bg-white hover:bg-black hover:text-white transition-all group flex flex-col items-start"
          >
            <span className="text-[9px] opacity-40 mb-2">Go to dashboard</span>
            <span className="text-2xl font-black italic group-hover:translate-x-2 transition-transform">EXPLORE INTERFACE →</span>
          </button>
          
          <button 
            onClick={() => router.push('/')}
            className="p-8 bg-black text-white hover:bg-white hover:text-black transition-all group flex flex-col items-start"
          >
            <span className="text-[9px] opacity-40 mb-2">Logout</span>
            <span className="text-2xl font-black italic group-hover:translate-x-2 transition-transform">EXIT TO HOME →</span>
          </button>
        </div>

        <p className="mt-12 text-center opacity-30 italic lowercase text-[10px]">
          reference id: {Math.random().toString(36).substring(7).toUpperCase()}
        </p>
      </div>
    </main>
  );
}