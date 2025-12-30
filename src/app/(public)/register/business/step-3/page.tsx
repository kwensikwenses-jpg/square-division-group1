"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function BusinessVerification() {
  const router = useRouter();

  // Document labels from your wireframe
  const documents = [
    "1. business registration certificate",
    "2. proof of business address",
    "3. owner/director id copy",
    "4. bank verification letter (optional but recommended)",
    "5. tax clearance certificate (optional)"
  ];

  // Social media links from your wireframe
  const socials = ["facebook", "instagram", "linkedin", "twitter/x"];

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20">
      <Navbar />
      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase">business sign-up</p>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black">
          <div className="p-4 bg-white">1. business info</div>
          <div className="p-4 bg-white">2. security setup</div>
          <div className={`p-4 bg-black text-white`}>3. verification</div>
          <div className="p-4 bg-white">4. complete</div>
        </div>

        {/* REQUIRED DOCUMENTS SECTION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12">
          <div className="p-4 bg-gray-50 uppercase border-b-2 border-black">
            required documents
          </div>
          
          {documents.map((doc, i) => (
            <div key={i} className="p-8 space-y-4 bg-white">
              <p className="opacity-60">{doc}</p>
              <label className="flex items-center justify-center gap-4 border-2 border-black p-4 cursor-pointer hover:bg-black hover:text-white transition-all group">
                <span className="text-xl group-hover:animate-bounce">↑</span>
                <span>upload document</span>
                <input type="file" className="hidden" />
              </label>
            </div>
          ))}

          {/* Business License Toggle */}
          <div className="p-8 bg-white">
            <p className="mb-4 opacity-60 italic lowercase">business license/permits (if applicable to your industry)</p>
            <label className="flex items-center gap-4 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-black rounded-none border-2 border-black" />
              <span>yes, i have business license/permits</span>
            </label>
          </div>
        </div>

        {/* EMAIL VERIFICATION STATUS */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12">
          <div className="p-4 bg-gray-50 uppercase border-b-2 border-black">email verification</div>
          <div className="p-8 bg-white space-y-2">
            <p>we sent a verification link to: <span className="italic">x@gmail.com</span></p>
            <button className="underline opacity-50 hover:opacity-100 transition-opacity lowercase">
              didn't receive it? resend verification email
            </button>
          </div>
        </div>

        {/* SOCIAL MEDIA VERIFICATION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12">
          <div className="p-4 bg-gray-50 uppercase border-b-2 border-black">
            social media verification <span className="opacity-40 ml-2">(optional - builds trust)</span>
          </div>
          <div className="p-8 bg-white space-y-6">
            <p className="opacity-50 lowercase">link your business to social accounts</p>
            <div className="space-y-4">
              {socials.map((platform) => (
                <div key={platform} className="flex border-2 border-black divide-x-2 divide-black">
                  <div className="flex-1 p-4 bg-white uppercase">{platform}</div>
                  <button className="px-8 py-4 hover:bg-black hover:text-white transition-all uppercase">
                    connect
                  </button>
                </div>
              ))}
            </div>
            <button className="opacity-40 hover:opacity-100 transition-opacity lowercase italic mt-4">
              skip - add later
            </button>
          </div>
        </div>

        {/* FINAL SUBMIT ACTION */}
        <div className="flex border-2 border-black divide-x-2 divide-black">
          <div className="flex-1 p-6 bg-white italic lowercase">ready to submit for review?</div>
          <button 
            onClick={() => router.push('/register/business/step-4')}
            className="w-32 bg-white hover:bg-black hover:text-white transition-all text-4xl font-black"
          >
            →
          </button>
        </div>
      </div>
    </main>
  );
}