"use client";

import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#edeae7] font-mono p-8 md:p-24">
      <Link href="/" className="fixed top-8 left-8 font-black underline">← HOME</Link>
      
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 text-center">
          Subscription<br/>Matrix
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black">
          {/* SILVER */}
          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black uppercase mb-4">Silver</h2>
              <div className="text-5xl font-black mb-8">R0<span className="text-sm align-top">/mo</span></div>
              <ul className="space-y-4 text-sm font-bold opacity-70">
                <li>[✓] Basic Listing</li>
                <li>[✓] Search Indexing</li>
                <li>[x] Verified Badge</li>
                <li>[x] Analytics</li>
              </ul>
            </div>
            <button className="w-full mt-8 border-4 border-black py-3 font-black uppercase hover:bg-black hover:text-white transition-all">Select Basic</button>
          </div>

          {/* GOLD */}
          <div className="p-8 border-b-4 md:border-b-0 md:border-r-4 border-black bg-[#FF9500] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold px-3 py-1 uppercase">Recommended</div>
            <div>
              <h2 className="text-4xl font-black uppercase mb-4">Gold</h2>
              <div className="text-5xl font-black mb-8">R499<span className="text-sm align-top">/mo</span></div>
              <ul className="space-y-4 text-sm font-black">
                <li>[✓] Verified Badge</li>
                <li>[✓] Priority Ranking</li>
                <li>[✓] 5 Active Deals</li>
                <li>[✓] Direct Chat</li>
              </ul>
            </div>
            <button className="w-full mt-8 bg-black text-white border-4 border-black py-3 font-black uppercase hover:bg-white hover:text-black transition-all">Select Pro</button>
          </div>

          {/* PLATINUM */}
          <div className="p-8 bg-black text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black uppercase mb-4">Platinum</h2>
              <div className="text-5xl font-black mb-8">Custom</div>
              <ul className="space-y-4 text-sm font-bold opacity-70">
                <li>[✓] Full API Access</li>
                <li>[✓] Unlimited Deals</li>
                <li>[✓] Dedicated Manager</li>
                <li>[✓] Multi-Location</li>
              </ul>
            </div>
            <button className="w-full mt-8 border-4 border-white py-3 font-black uppercase hover:bg-white hover:text-black transition-all">Contact Sales</button>
          </div>
        </div>
      </div>
    </main>
  );
}