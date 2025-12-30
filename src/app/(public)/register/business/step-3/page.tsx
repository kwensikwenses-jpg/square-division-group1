"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { useRouter } from 'next/navigation';

export default function BusinessVerification() {
  const router = useRouter();
  // State for mobile menu satisfying TypeScript NavbarProps
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Document labels from your wireframe
  const documents = [
    { label: "1. business registration certificate", id: "doc-registration" },
    { label: "2. proof of business address", id: "doc-address" },
    { label: "3. owner/director id copy", id: "doc-id" },
    { label: "4. bank verification letter", id: "doc-bank" },
    { label: "5. tax clearance certificate", id: "doc-tax" }
  ];

  const socials = ["facebook", "instagram", "linkedin", "twitter/x"];

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20 font-mono">
      {/* 01: FIXED NAVIGATION */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-3xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase opacity-40">business_sign-up / protocol_03</p>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-4 border-2 border-black mb-12 text-center divide-x-2 divide-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="p-4 bg-white opacity-30">1. business</div>
          <div className="p-4 bg-white opacity-30">2. security</div>
          <div className="p-4 bg-black text-white italic">3. verification</div>
          <div className="p-4 bg-white opacity-30">4. complete</div>
        </div>

        {/* REQUIRED DOCUMENTS SECTION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12 bg-white">
          <div className="p-4 bg-black text-white uppercase font-black italic tracking-[0.2em]">
            required_documents_upload
          </div>
          
          {documents.map((doc) => (
            <div key={doc.id} className="p-8 space-y-4 bg-white group hover:bg-[#edeae7]/30 transition-colors">
              <p className="opacity-60">{doc.label}</p>
              <label 
                htmlFor={doc.id} 
                className="flex items-center justify-center gap-4 border-2 border-black p-4 cursor-pointer hover:bg-black hover:text-white transition-all group-active:scale-[0.98]"
              >
                <span className="text-xl group-hover:animate-bounce">↑</span>
                <span>upload_node_credential</span>
                <input 
                  id={doc.id} 
                  type="file" 
                  title={`Upload ${doc.label}`}
                  className="hidden" 
                />
              </label>
            </div>
          ))}

          {/* Business License Toggle */}
          <div className="p-8 bg-white border-t-2 border-black">
            <p className="mb-4 opacity-60 italic lowercase leading-relaxed">business license/permits (if applicable to your industry node)</p>
            <label className="flex items-center gap-4 cursor-pointer group">
              <input 
                id="license-check"
                type="checkbox" 
                title="Business License Possession"
                className="w-6 h-6 accent-black rounded-none border-2 border-black" 
              />
              <span className="group-hover:underline">yes, i hold valid business license/permits</span>
            </label>
          </div>
        </div>

        {/* EMAIL VERIFICATION STATUS */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)]">
          <div className="p-4 bg-gray-50 uppercase font-black">email_verification_status</div>
          <div className="p-8 bg-white space-y-4">
            <p className="text-sm">verification link dispatched to: <span className="italic text-[#6082a3]">x@gmail.com</span></p>
            <button className="underline opacity-40 hover:opacity-100 transition-opacity lowercase italic text-[10px]">
              didn't receive it? resend_verification_protocol
            </button>
          </div>
        </div>

        {/* SOCIAL MEDIA VERIFICATION */}
        <div className="border-2 border-black divide-y-2 divide-black mb-12">
          <div className="p-4 bg-gray-50 uppercase font-black italic">
            social_layer_sync <span className="opacity-40 ml-2 normal-case font-bold">(builds grid trust)</span>
          </div>
          <div className="p-8 bg-white space-y-6">
            <div className="space-y-4">
              {socials.map((platform) => (
                <div key={platform} className="flex border-2 border-black divide-x-2 divide-black group hover:border-[#6082a3] transition-colors">
                  <div className="flex-1 p-4 bg-white uppercase group-hover:bg-[#6082a3] group-hover:text-white transition-colors">{platform}</div>
                  <button 
                    title={`Connect ${platform}`}
                    className="px-8 py-4 bg-black text-white hover:bg-white hover:text-black transition-all uppercase text-[10px] font-black"
                  >
                    connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FINAL SUBMIT ACTION */}
        <div className="flex border-4 border-black divide-x-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex-1 p-8 italic lowercase font-black text-xl leading-none flex items-center">ready to submit node for review?</div>
          <button 
            onClick={() => router.push('/register/business/step-4')}
            title="Submit for Review"
            className="w-40 bg-white hover:bg-black hover:text-white transition-all text-6xl font-thin py-8"
          >
            →
          </button>
        </div>
      </div>
    </main>
  );
}