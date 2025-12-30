"use client";
import React from 'react';
import Navbar from '../../../components/Navbar';

export default function InvestorPitch() {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 pb-20">
      <Navbar />
      
      <div className="max-w-6xl mx-auto">
        <header className="border-b-4 border-black pb-12 mb-20">
          <h1 className="text-8xl font-black uppercase tracking-tighter italic leading-none">
            The Vision /<br/>2026 Scale.
          </h1>
          <p className="mt-6 uppercase text-sm font-bold tracking-[0.4em] opacity-50">
            Localized Hyper-Growth Marketplace
          </p>
        </header>

        {/* The "Problem & Solution" Blocks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black border border-black mb-20">
          <div className="bg-[#edeae7] p-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-40">The Problem</h2>
            <p className="text-3xl font-bold uppercase leading-tight">
              Small businesses in KZN are invisible to regional supply chains.
            </p>
          </div>
          <div className="bg-[#6082a3] text-white p-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-70">The Solution</h2>
            <p className="text-3xl font-bold uppercase leading-tight">
              A brutalist discovery engine connecting Transport, Food, and Services.
            </p>
          </div>
        </section>

        {/* Monetization Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-black border border-black mb-20">
          <div className="p-10 bg-white">
            <span className="text-6xl font-black block mb-2">R299+</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">Starting Subscription</p>
          </div>
          <div className="p-10 bg-white">
            <span className="text-6xl font-black block mb-2">B2B</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">Marketplace Model</p>
          </div>
          <div className="p-10 bg-white">
            <span className="text-6xl font-black block mb-2">35%</span>
            <p className="text-[10px] font-bold uppercase tracking-widest">Projected MoM Growth</p>
          </div>
        </div>
      </div>
    </main>
  );
}