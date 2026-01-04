"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="flex flex-col">
      {/* ===== NAVIGATION ===== */}
      <nav className="flex justify-between items-center py-5 px-10 md:px-20 border-b border-gray-100 sticky top-0 bg-white z-[50]">
        <div className="text-2xl font-bold text-[#0066cc]">LOGO</div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-black font-bold text-sm uppercase hover:bg-black hover:text-white transition-all">About</button>
          <button className="px-6 py-3 bg-[#0066cc] text-white font-bold text-sm uppercase hover:bg-[#0052a3] transition-all">Join</button>
          <button className="px-6 py-3 text-sm font-bold uppercase underline">Explore</button>
        </div>
      </nav>

      {/* ===== HERO SECTION ===== */}
      <section className="py-32 px-10 md:px-20 max-w-[65%]">
        <h1 className="text-6xl font-bold leading-tight mb-6 tracking-tight">
          Connecting Communities.<br />
          Empowering Local Business.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          We bridge the gap between local businesses and community members, 
          creating meaningful connections that drive growth and prosperity for everyone.
        </p>
      </section>

      {/* ===== VERTICAL PATH CARDS ===== */}
      <section className="px-10 md:px-20 py-20 flex flex-col gap-0">
        <PathCard 
          title="For Users" 
          img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
          desc="Discover local businesses, exclusive deals, and connect with your community like never before."
          btnText="Join as User"
        />
        <PathCard 
          title="For Business" 
          img="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200"
          desc="Reach more customers, showcase your services, and grow your presence in the community."
          btnText="Join as Business"
        />
      </section>

      {/* ===== ORANGE STATS BLOCKS ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-20 py-20">
        <StatBlock num="5K+" text="Local businesses trust our platform to connect with customers" />
        <StatBlock num="50K+" text="Active community members discover new businesses every month" />
        <StatBlock num="100K+" text="Meaningful interactions created between businesses and customers" />
      </section>

      {/* ===== VIDEO DIRECTOR SECTION ===== */}
      <section className="bg-[#1a1a1a] text-white py-24 px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-video bg-black relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200" alt="Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-6xl">▶</span>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 leading-snug">Built by Community Experts, For Community Growth</h2>
            <div className="text-gray-400 space-y-4 text-sm leading-loose uppercase tracking-widest">
              <p>• 100+ Local Business Owners</p>
              <p>• Community Development Specialists</p>
              <p>• Technology Innovation Partners</p>
              <p>• Thousands of Community Members</p>
              <p className="mt-8 text-white italic lowercase">Together, we're creating the future of local commerce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PIXELATED FOOTER ===== */}
      <footer className="bg-[#e5e5e5] p-10 md:p-20 border-t-2 border-black">
        <div className="text-7xl font-bold font-mono tracking-tighter mb-10">COMMUNITY</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 border-b-2 border-black">
          <p className="text-sm leading-relaxed max-w-sm">
            Connecting communities and empowering local businesses since 2024. 
            We believe in the power of local commerce and community-driven growth.
          </p>
          <div className="space-y-4">
            <h4 className="font-bold">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 p-3 border border-black bg-white" />
              <button className="bg-black text-white px-6 font-bold">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex justify-between text-[10px] font-bold uppercase opacity-50">
          <p>&copy; 2024 Community Hub. All rights reserved.</p>
          <div className="flex gap-10 underline">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function PathCard({ title, img, desc, btnText }: any) {
  return (
    <div className="relative h-[500px] overflow-hidden group">
      <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-10">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="max-w-md mb-8 leading-relaxed">{desc}</p>
        <button className="px-10 py-4 bg-white text-black font-bold uppercase hover:bg-[#0066cc] hover:text-white transition-all">{btnText}</button>
      </div>
    </div>
  );
}

function StatBlock({ num, text }: any) {
  return (
    <div className="bg-[#FF9500] p-16 border-r-2 border-white last:border-0 flex flex-col justify-center">
      <div className="text-7xl font-bold font-mono mb-4">{num}</div>
      <p className="text-sm font-medium leading-relaxed">{text}</p>
    </div>
  );
}