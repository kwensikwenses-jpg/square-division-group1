"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { useRouter } from 'next/navigation';

export default function UserSignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 pb-20 font-mono">
      {/* Navigation Fix to resolve Vercel Build Error */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb / Label */}
        <p className="mb-8 uppercase font-black text-[10px] tracking-[0.3em] opacity-40">create account / personal</p>

        {/* Unified Form Grid */}
        <div className="border-2 border-black divide-y-2 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          
          {/* Row 1: Name Fields */}
          <div className="grid grid-cols-2 divide-x-2 divide-black">
            <div className="p-6">
              <label htmlFor="first-name" className="block text-[9px] font-bold uppercase mb-2 opacity-40">first name</label>
              <input id="first-name" type="text" title="First Name" placeholder="John" className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
            <div className="p-6">
              <label htmlFor="last-name" className="block text-[9px] font-bold uppercase mb-2 opacity-40">last name</label>
              <input id="last-name" type="text" title="Last Name" placeholder="Doe" className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
          </div>

          {/* Row 2: Contact Info */}
          <div className="grid grid-cols-2 divide-x-2 divide-black">
            <div className="p-6">
              <label htmlFor="email" className="block text-[9px] font-bold uppercase mb-2 opacity-40">email address</label>
              <input id="email" type="email" title="Email Address" placeholder="email@example.com" className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
            <div className="p-6">
              <label htmlFor="phone" className="block text-[9px] font-bold uppercase mb-2 opacity-40">phone number</label>
              <input id="phone" type="tel" title="Phone Number" placeholder="+27 ..." className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
          </div>

          {/* Row 3: Location */}
          <div className="grid grid-cols-2 divide-x-2 divide-black">
            <div className="p-6">
              <label htmlFor="city" className="block text-[9px] font-bold uppercase mb-2 opacity-40">city</label>
              <input id="city" type="text" title="City" placeholder="Durban" className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
            <div className="p-6">
              <label htmlFor="province" className="block text-[9px] font-bold uppercase mb-2 opacity-40">province</label>
              <input id="province" type="text" title="Province" placeholder="KZN" className="w-full bg-transparent outline-none font-bold text-xl uppercase placeholder:opacity-10" />
            </div>
          </div>

          {/* Row 4: T&C Checkbox */}
          <div className="p-8 bg-gray-50/50">
            <label className="flex items-center gap-4 cursor-pointer group">
              <input type="checkbox" title="Terms and Conditions" className="w-6 h-6 accent-black border-2 border-black rounded-none" />
              <span className="text-[11px] font-bold uppercase tracking-widest group-hover:underline">i have read and agree to the t&cs</span>
            </label>
          </div>

          {/* Row 5: Social Signup */}
          <div className="p-8 bg-white border-t-2 border-black">
            <p className="text-[9px] font-bold uppercase mb-6 opacity-40 text-center tracking-[0.2em]">or sign up with</p>
            <div className="grid grid-cols-5 border-2 border-black divide-x-2 divide-black overflow-hidden bg-white">
              {['G', 'F', 'X', 'A', 'M'].map((icon) => (
                <button key={icon} title={`Sign up with ${icon}`} className="p-5 font-black text-xl hover:bg-black hover:text-white transition-all active:bg-gray-200">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Row 6: Passwords & Submit */}
          <div className="flex divide-x-2 divide-black">
            <div className="flex-1 divide-y-2 divide-black">
              <div className="p-6">
                <label htmlFor="password" className="block text-[9px] font-bold uppercase mb-2 opacity-40">create password</label>
                <input id="password" type="password" title="Create Password" placeholder="••••••••" className="w-full bg-transparent outline-none font-bold text-xl placeholder:opacity-10" />
              </div>
              <div className="p-6">
                <label htmlFor="confirm-password" className="block text-[9px] font-bold uppercase mb-2 opacity-40">confirm password</label>
                <input id="confirm-password" type="password" title="Confirm Password" placeholder="••••••••" className="w-full bg-transparent outline-none font-bold text-xl placeholder:opacity-10" />
              </div>
            </div>
            {/* The Arrow Submit Button */}
            <button 
              onClick={() => setLoading(true)}
              title="Submit Registration"
              className="w-32 bg-black text-white hover:bg-[#6082a3] transition-colors flex items-center justify-center text-5xl font-light active:translate-x-1"
            >
              {loading ? "..." : "→"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}