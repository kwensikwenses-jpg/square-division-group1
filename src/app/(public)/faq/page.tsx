"use client";

import React from 'react';
import Navbar from '@/components/Navbar';

const faqs = [
  { 
    q: "How do I join the ecosystem?", 
    a: "Businesses can register for a Silver tier account immediately. Platinum status requires an application review to maintain network integrity." 
  },
  { 
    q: "What is a 'Marketplace Lead'?", 
    a: "A lead is a B2B request for services or goods. Verified partners can post these to find local collaborators within the KZN network." 
  },
  { 
    q: "Are the analytics real-time?", 
    a: "Yes. Every view and message is tracked instantly and displayed in your partner dashboard to show live ROI." 
  }
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <header className="border-b-4 border-black pb-8 mb-16">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">Support</h1>
          <p className="uppercase font-bold text-xs tracking-[0.2em] opacity-40 mt-4">Platform Intelligence & Protocol</p>
        </header>

        <div className="space-y-12">
          {faqs.map((item, i) => (
            <div key={i} className="group border-b border-black/10 pb-8">
              <h2 className="text-2xl font-black uppercase mb-4 group-hover:italic transition-all italic">
                {item.q}
              </h2>
              <p className="text-sm uppercase font-medium leading-relaxed opacity-70">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-24 p-12 bg-black text-white italic">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">January 2026 Protocol</h3>
          <p className="text-xs opacity-60 leading-relaxed uppercase">
            All partner interactions are governed by the Kai Network agreement. 
            Data security is managed via Supabase RLS protocols to ensure B2B privacy.
          </p>
        </section>
      </div>
    </main>
  );
}