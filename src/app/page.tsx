"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-black font-mono selection:bg-[#FF9500] selection:text-black">
      
      {/* 1. NAV (Sticky Eyebrow) */}
      <nav className="sticky top-0 z-50 bg-white border-b-2 border-black px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-[#0066cc] tracking-tighter">LOGO</div>
        <div className="hidden md:flex gap-4 items-center">
          <button className="px-5 py-2 border-2 border-black font-bold text-sm uppercase hover:bg-black hover:text-white transition-colors">
            About
          </button>
          <button className="px-5 py-2 bg-[#0066cc] text-white border-2 border-[#0066cc] font-bold text-sm uppercase hover:bg-[#0052a3] hover:border-[#0052a3] transition-colors">
            Join
          </button>
          <button className="font-bold text-sm uppercase underline decoration-2 underline-offset-4 hover:text-[#0066cc]">
            Explore
          </button>
        </div>
      </nav>

      {/* 2. HERO SPLIT SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] border-b-2 border-black bg-white">
        {/* Left: Content */}
        <div className="flex flex-col justify-center p-10 md:p-16 border-b-2 md:border-b-0 md:border-r-2 border-black">
          <h1 className="text-5xl md:text-6xl font-black leading-[1.1] mb-6 uppercase tracking-tight">
            Connecting Communities.<br />
            Empowering Local Business.
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-80 leading-relaxed max-w-lg">
            We bridge the gap between local businesses and community members, creating meaningful connections that drive growth.
          </p>
          <div>
            <a href="#" className="inline-block px-10 py-5 border-2 border-black bg-white font-black text-lg uppercase hover:bg-black hover:text-white transition-all">
              Explore Now
            </a>
          </div>
        </div>
        {/* Right: Visual Placeholder */}
        <div className="bg-[#e0e0e0] relative min-h-[300px] md:min-h-auto flex items-center justify-center">
           <span className="font-black opacity-20 text-4xl uppercase">Image Placeholder</span>
        </div>
      </section>

      {/* 3. PATH CARDS (Split Layout) */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b-2 border-black">
        {/* For Users */}
        <div className="relative h-[500px] border-b-2 md:border-b-0 md:border-r-2 border-black group overflow-hidden bg-[#555]">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
          {/* Add <img /> here later */}
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-10 text-white">
            <h2 className="text-4xl font-black uppercase mb-4">For Users</h2>
            <p className="max-w-xs mx-auto mb-8 font-bold leading-relaxed">
              Discover local businesses, exclusive deals, and connect with your community.
            </p>
            <button className="px-8 py-4 border-2 border-white bg-white text-black font-black uppercase hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-all">
              Join as User
            </button>
          </div>
        </div>

        {/* For Business */}
        <div className="relative h-[500px] group overflow-hidden bg-[#777]">
           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
           <div className="relative z-20 h-full flex flex-col items-center justify-center text-center p-10 text-white">
            <h2 className="text-4xl font-black uppercase mb-4">For Business</h2>
            <p className="max-w-xs mx-auto mb-8 font-bold leading-relaxed">
              Reach more customers, showcase your services, and grow your presence.
            </p>
            <button className="px-8 py-4 border-2 border-white bg-white text-black font-black uppercase hover:bg-[#0066cc] hover:text-white hover:border-[#0066cc] transition-all">
              Join as Business
            </button>
          </div>
        </div>
      </section>

      {/* 4. ORANGE STATS BLOCKS */}
      <section className="bg-[#FF9500] border-b-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-2 md:divide-y-0 md:divide-x-2 divide-white">
          <StatBlock num="5K+" text="Local businesses trust our platform" />
          <StatBlock num="50K+" text="Active community members" />
          <StatBlock num="100K+" text="Meaningful interactions created" />
        </div>
      </section>

      {/* 5. VIDEO SECTION */}
      <section className="flex flex-col md:flex-row bg-[#1a1a1a] text-white border-b-2 border-black min-h-[500px]">
        {/* Video Player Side */}
        <div className="flex-1 bg-black border-b-2 md:border-b-0 md:border-r-2 border-[#333] flex items-center justify-center relative min-h-[300px]">
           <div className="text-6xl text-white opacity-80">▶</div>
        </div>
        {/* Description Side */}
        <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight mb-8">
            Built by Community Experts, For Community Growth
          </h2>
          <div className="space-y-4 text-sm font-bold uppercase tracking-widest opacity-80 border-l-2 border-white pl-4">
            <p>• 100+ Local Business Owners</p>
            <p>• Community Development Specialists</p>
            <p>• Technology Innovation Partners</p>
          </div>
          <p className="mt-10 italic opacity-60">"Together, we're creating the future of local commerce."</p>
        </div>
      </section>

      {/* 6. PIXELATED FOOTER */}
      <footer className="bg-[#e5e5e5] p-10 md:p-16 border-t-2 border-black">
        <span className="block text-5xl md:text-6xl font-black tracking-tighter mb-10">COMMUNITY</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 border-b-2 border-black pb-10 mb-10">
          <p className="text-lg font-bold leading-relaxed max-w-md">
            Connecting communities and empowering local businesses since 2024. 
            We believe in the power of local commerce.
          </p>
          <div>
            <h4 className="font-black uppercase mb-4">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="EMAIL" className="flex-1 p-3 border-2 border-black bg-white font-bold uppercase placeholder:text-gray-400" />
              <button className="bg-black text-white px-6 py-3 font-black uppercase border-2 border-black hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between text-xs font-black uppercase opacity-60 gap-4">
          <p>&copy; 2024 Community Hub. All rights reserved.</p>
          <div className="flex gap-6 underline decoration-2">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

// Sub-Component for Stats
function StatBlock({ num, text }: { num: string, text: string }) {
  return (
    <div className="p-10 md:p-16 text-center flex flex-col justify-center items-center">
      <div className="text-6xl md:text-7xl font-black mb-4 font-mono">{num}</div>
      <p className="font-bold uppercase leading-tight max-w-[200px]">{text}</p>
    </div>
  );
}