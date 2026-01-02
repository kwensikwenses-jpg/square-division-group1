"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="relative min-h-screen bg-white text-black font-mono selection:bg-[#6082a3] selection:text-white">
      
      {/* 01: CONTROL UNIT - Top Right Buttons */}
      <div className="absolute top-10 right-[30%] z-[70] flex bg-[#f0f0f0] p-[2px] border border-black/10 shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]">
        <button className="px-6 py-2 text-[9px] font-black uppercase tracking-widest border-r border-black/5 hover:bg-white/60 transition-all">
          Menu
        </button>
        <Link href="/explore" className="px-6 py-2 text-[9px] font-black uppercase tracking-widest hover:bg-white/60 transition-all">
          Explore
        </Link>
      </div>

      {/* 02: HERO SECTION */}
      <section className="hero pt-48 pb-32 px-12 md:px-24 border-b-4 border-black bg-white">
        <h1 className="text-7xl md:text-[11rem] font-black italic uppercase leading-[0.8] tracking-tighter mb-16">
          Connecting Communities.<br />Empowering Local Business.
        </h1>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-10">
          Join a platform designed to elevate local businesses and connect communities through verified impact.
        </p>
      </section>

      {/* 03: CARDS SECTION (80% WIDTH) */}
      <section className="cards-section container-80 grid grid-cols-1 md:grid-cols-2 gap-4 px-10 pt-10">
        <div className="card bg-black text-white p-0 border-0">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 z-10">
              <h3 className="text-2xl font-black uppercase italic">Join the Movement</h3>
              <p className="text-xs font-bold uppercase mt-2 opacity-70">
                Helping men on their journey to fatherhood with the most comprehensive fertility support.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-black text-white p-0 border-0">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 z-10">
              <h3 className="text-2xl font-black uppercase italic">Start Your Journey</h3>
              <p className="text-xs font-bold uppercase mt-2 opacity-70">
                Take control of your fertility and give your future family the best start possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04: STATS SECTION (80% WIDTH) */}
      <section className="stats-bar container-80 grid grid-cols-1 md:grid-cols-3 gap-4 px-10 py-16">
        <StatItem value="5K+" label="Local businesses trust us" />
        <StatItem value="50K+" label="Community members active" />
        <StatItem value="100K+" label="Meaningful interactions" />
      </section>

      {/* 05: USER & BUSINESS SECTION (80% WIDTH) */}
      <section className="features container-80 grid grid-cols-1 lg:grid-cols-2 gap-4 px-10">
        <div className="column bg-black text-white p-12">
          <h3 className="text-xl font-black uppercase mb-8 border-b border-white/20 pb-4">For Users</h3>
          <div className="space-y-6">
             <FeatureItem word="Discover" desc="Find verified local businesses tailored to your needs." />
             <FeatureItem word="Connect" desc="Engage directly with trusted community providers." />
             <FeatureItem word="Earn" desc="Get rewarded for local engagement and referrals." />
          </div>
        </div>
        <div className="column bg-black text-white p-12">
          <h3 className="text-xl font-black uppercase mb-8 border-b border-white/20 pb-4">For Business</h3>
          <div className="space-y-6">
             <FeatureItem word="Verify" desc="Build trust with official business credentials." />
             <FeatureItem word="Promote" desc="Boost visibility with targeted campaigns." />
             <FeatureItem word="Grow" desc="Scale operations using real-time data insights." />
          </div>
        </div>
      </section>

      {/* 06: CTA SECTION */}
      <section className="cta-block container-80 px-10 py-24">
        <div className="cta-buttons w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <button className="bg-black text-white border-4 border-black px-12 py-8 text-xl font-black uppercase hover:bg-white hover:text-black transition-colors">
            Join Now
          </button>
          <button className="bg-white text-black border-4 border-black px-12 py-8 text-xl font-black uppercase hover:bg-black hover:text-white transition-colors">
            Explore Hub
          </button>
        </div>
      </section>
    </main>
  );
}

/* HELPER COMPONENTS */
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-block bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h3 className="text-5xl font-black italic">{value}</h3>
      <p className="text-xs font-bold uppercase mt-4 tracking-wider">{label}</p>
    </div>
  );
}

function FeatureItem({ word, desc }: { word: string; desc: string }) {
  return (
    <div className="group cursor-default">
      <h4 className="text-lg font-black uppercase tracking-tighter group-hover:text-[#6082a3] transition-colors">
        {word} →
      </h4>
      <p className="text-[10px] uppercase tracking-widest opacity-50 mt-1">{desc}</p>
    </div>
  );
}