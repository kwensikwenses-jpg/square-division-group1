"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <div className="max-w-4xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase">get in touch</p>
        
        <header className="border-b-4 border-black pb-8 mb-12">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">Contact</h1>
        </header>

        {/* The Grid-Cell Form */}
        <div className="border-2 border-black divide-y-2 divide-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          {/* Row 1: Name and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
            <div className="p-6">
              <label className="block opacity-40 mb-2">full name</label>
              <input type="text" className="w-full outline-none font-black text-xl uppercase bg-transparent" placeholder="John Doe" />
            </div>
            <div className="p-6">
              <label className="block opacity-40 mb-2">subject</label>
              <select title="Subject" className="w-full outline-none font-black text-xl uppercase bg-transparent cursor-pointer appearance-none">
                <option>General Inquiry</option>
                <option>Partnership</option>
                <option>Support</option>
              </select>
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="p-6">
            <label className="block opacity-40 mb-2">email address</label>
            <input type="email" className="w-full outline-none font-black text-xl uppercase bg-transparent" placeholder="x@example.com" />
          </div>

          {/* Row 3: Message Content */}
          <div className="p-6">
            <label className="block opacity-40 mb-2">your message</label>
            <textarea rows={6} className="w-full outline-none font-black text-xl uppercase bg-transparent resize-none" placeholder="How can we help?" />
          </div>

          {/* Row 4: Action Button */}
          <button type="submit" className="w-full p-8 bg-black text-white hover:bg-[#6082a3] transition-all font-black text-2xl italic flex justify-between items-center">
            <span>Send Message</span>
            <span>→</span>
          </button>
        </div>

        {/* Support Metadata Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-60 lowercase italic">
          <p>durban, kwazulu-natal, sa</p>
          <p>support@kainetwork.co.za</p>
          <p>response time: 24h</p>
        </div>
      </div>
    </main>
  );
}