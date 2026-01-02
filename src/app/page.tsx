"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 01: HEADER */}
      <header className="flex justify-end bg-[var(--orange)] p-4 pr-12 sticky top-0 z-[1000]">
        <Link href="#about" className="text-white font-bold ml-8 uppercase text-xs tracking-widest">About</Link>
        <Link href="#join" className="text-white font-bold ml-8 uppercase text-xs tracking-widest">Join</Link>
        <Link href="#explore" className="text-white font-bold ml-8 uppercase text-xs tracking-widest">Explore</Link>
      </header>

      {/* 02: HERO */}
      <section className="text-center py-24 px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Connecting Communities.</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-70">Empowering local business through technology and verified impact.</p>
      </section>

      {/* 03: BLUE CARDS (80% WIDTH) */}
      <section className="container-80 bg-[var(--blue)] flex flex-col">
        <div className="bg-white border-b border-gray-100">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" alt="Join" className="w-full h-[500px] object-cover" />
          <div className="p-12">
            <h3 className="text-3xl font-bold mb-4">Join the Movement</h3>
            <button className="bg-[var(--orange)] text-white px-10 py-4 font-bold rounded uppercase text-sm">Join Now</button>
          </div>
        </div>
      </section>

      {/* 04: STATS SECTION (80% WIDTH) */}
      <section className="container-80 stats-grid-80">
        <div className="stat-item">
          <h3 className="stat-number-large">5K+</h3>
          <p>Local Businesses</p>
        </div>
        <div className="stat-item border-l border-black/10 pl-12">
          <h3 className="stat-number-large">50K+</h3>
          <p>Community Members</p>
        </div>
        <div className="stat-item border-l border-black/10 pl-12">
          <h3 className="stat-number-large">100K+</h3>
          <p>Interactions</p>
        </div>
      </section>

      {/* 05: FEATURES (HORIZONTAL PILLS) */}
      <section className="container-80 py-24 px-12">
        <h3 className="text-2xl font-bold mb-12 border-b-2 border-gray-100 pb-4">Platform Capabilities</h3>
        <div className="flex flex-wrap gap-6">
          <FeaturePill title="Discover" desc="Find verified local businesses tailored to your needs." />
          <FeaturePill title="Connect" desc="Engage directly with trusted community providers." />
          <FeaturePill title="Verify" desc="Build trust with official business credentials." />
          <FeaturePill title="Grow" desc="Scale operations using real-time data insights." />
        </div>
      </section>

      {/* 06: FOOTER */}
      <footer className="container-80 footer-80">
        <div className="max-w-xs space-y-4">
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Accessibility</p>
          <p className="text-sm">hello@mahady.com</p>
        </div>
        <div className="space-y-4">
          <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Registry</p>
          <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 text-sm" />
          <p className="text-[10px]">© 2026 Mahady Global</p>
        </div>
      </footer>
    </main>
  );
}

/* SUB-COMPONENT FOR CLEANER CODE */
function FeaturePill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="feature-word-pill">
      {title}
      <div className="feature-hover-card">
        <h4 className="font-bold text-[var(--blue)] mb-2">{title}</h4>
        <p className="text-sm font-normal text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}