"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Collapsible Section Helper Component
const Section = ({ title, children, isOpen, onToggle }: any) => (
  <div className="border-b-4 border-black bg-white">
    <div 
      onClick={onToggle}
      className="p-8 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
    >
      <h2 className="text-2xl font-black uppercase italic tracking-tighter">{title}</h2>
      <span className="text-xl font-black">{isOpen ? "[-]" : "[+]"}</span>
    </div>
    {isOpen && <div className="p-8 pt-0 animate-in slide-in-from-top-4 duration-300">{children}</div>}
  </div>
);

export default function GetListedPage() {
  // State for collapsible sections
  const [sections, setSections] = useState({
    howItWorks: true,
    features: true,
    pricing: true
  });

  const toggle = (key: string) => setSections((prev: any) => ({ ...prev, [key]: !prev[key] }));

  return (
    <main className="min-h-screen bg-[#edeae7] font-mono text-black">
      {/* NAV */}
      <nav className="border-b-4 border-black bg-white p-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="font-black underline">← HOME</Link>
        <div className="font-black uppercase">Get_Listed_Protocol</div>
      </nav>

      {/* HERO */}
      <header className="p-12 md:p-24 border-b-4 border-black bg-[#FF9500]">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
          Plug Into<br/>The Grid.
        </h1>
        <p className="text-xl font-bold max-w-xl mb-8">
          Stop relying on algorithms that hide you. Get verified, get listed, and connect directly with the community.
        </p>
        <Link href="/business/register" className="inline-block bg-black text-white px-8 py-4 font-black uppercase tracking-widest hover:bg-white hover:text-black border-4 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
          Start Registration →
        </Link>
      </header>

      {/* 1. HOW IT WORKS */}
      <Section title="01. Operational Sequence" isOpen={sections.howItWorks} onToggle={() => toggle('howItWorks')}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-2 border-black p-6 bg-gray-50">
            <span className="text-4xl font-black opacity-20">01</span>
            <h3 className="text-xl font-bold uppercase mt-2">Register & Verify</h3>
            <p className="text-sm mt-2 opacity-70">Complete the security protocol. We verify physical location to ensure network integrity.</p>
          </div>
          <div className="border-2 border-black p-6 bg-gray-50">
            <span className="text-4xl font-black opacity-20">02</span>
            <h3 className="text-xl font-bold uppercase mt-2">Access Build Area</h3>
            <p className="text-sm mt-2 opacity-70">Unlock your dashboard. Manage subscription tools, profile data, and analytics.</p>
          </div>
          <div className="border-2 border-black p-6 bg-gray-50">
            <span className="text-4xl font-black opacity-20">03</span>
            <h3 className="text-xl font-bold uppercase mt-2">Deploy & Engage</h3>
            <p className="text-sm mt-2 opacity-70">Broadcast to the grid. Use chat and hyper-local deals to connect immediately.</p>
          </div>
        </div>
      </Section>

      {/* 2. FEATURES */}
      <Section title="02. Platform Features" isOpen={sections.features} onToggle={() => toggle('features')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-black p-6">
            <h4 className="font-black uppercase text-lg mb-2">Direct Comms Link</h4>
            <p className="text-sm opacity-70">Real-time chat protocol allowing users to ask questions and book services directly.</p>
          </div>
          <div className="bg-black text-white border-2 border-black p-6">
            <h4 className="font-black uppercase text-lg mb-2">Hyper-Local Deals</h4>
            <p className="text-sm opacity-70">Geo-fenced promotions that only broadcast to users physically near your node.</p>
          </div>
        </div>
      </Section>

      {/* 3. PRICING PREVIEW */}
      <Section title="03. Subscription Tiers" isOpen={sections.pricing} onToggle={() => toggle('pricing')}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* SILVER */}
          <div className="border-2 border-black p-6 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="bg-gray-200 text-xs font-black uppercase inline-block px-2 py-1 mb-4">Basic Node</div>
            <h3 className="text-3xl font-black uppercase">Silver</h3>
            <p className="text-sm mt-2 font-bold">Free / Verification Only</p>
            <ul className="mt-4 text-xs space-y-2 list-disc pl-4">
              <li>Basic Listing</li>
              <li>Search Visibility</li>
            </ul>
          </div>

          {/* GOLD (Highlighted) */}
          <div className="border-4 border-black p-6 bg-[#FF9500] relative shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transform md:-translate-y-4">
            <div className="bg-black text-white text-xs font-black uppercase inline-block px-2 py-1 mb-4">Recommended</div>
            <h3 className="text-3xl font-black uppercase">Gold</h3>
            <p className="text-sm mt-2 font-bold">R499 / Month</p>
            <ul className="mt-4 text-xs space-y-2 list-disc pl-4 font-bold">
              <li>Verified Badge</li>
              <li>Direct Chat Access</li>
              <li>5 Active Deals</li>
              <li>Priority Support</li>
            </ul>
          </div>

          {/* PLATINUM */}
          <div className="border-2 border-black p-6">
            <div className="bg-blue-600 text-white text-xs font-black uppercase inline-block px-2 py-1 mb-4">Enterprise</div>
            <h3 className="text-3xl font-black uppercase">Platinum</h3>
            <p className="text-sm mt-2 font-bold">Custom Architecture</p>
            <ul className="mt-4 text-xs space-y-2 list-disc pl-4">
              <li>Unlimited Deals</li>
              <li>API Access</li>
              <li>Dedicated Account Manager</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/pricing" className="inline-block border-b-4 border-black pb-1 font-black uppercase hover:text-[#FF9500] transition-colors">
            [ View Full Comparison Matrix ]
          </Link>
        </div>
      </Section>

      {/* FOOTER CTA */}
      <div className="p-12 text-center bg-black text-white">
        <h2 className="text-3xl font-black uppercase mb-6">Ready to Initialize?</h2>
        <Link href="/business/register" className="inline-block bg-white text-black border-4 border-white px-8 py-4 font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
          Register Business Node
        </Link>
      </div>
    </main>
  );
}