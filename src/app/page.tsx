"use client";

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

// --- SUB-COMPONENT: ANIMATED STAT BLOCK ---
function StatBlock({ num, text }: { num: string; text: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const target = parseInt(num.replace(/[^0-9]/g, ''));
  const suffix = num.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else { setCount(Math.floor(start)); }
        }, 16);
        setHasAnimated(true);
      }
    }, { threshold: 0.5 });
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div ref={elementRef} className="bg-[#FF9500] p-16 border-r-2 border-white last:border-0 flex flex-col justify-center min-h-[300px]">
      <div className="text-7xl font-bold font-mono mb-4 text-[#1a1a1a] leading-none">
        {count}{suffix}
      </div>
      <p className="text-sm font-medium leading-relaxed text-[#1a1a1a]">
        {text}
      </p>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center py-5 px-10 md:px-20 border-b border-gray-200 bg-white">
        <div className="text-2xl font-bold text-[#0066cc]">LOGO</div>
        <div className="flex gap-4">
          <button className="px-6 py-3 border border-black font-bold text-sm uppercase">About</button>
          <button className="px-6 py-3 bg-[#0066cc] text-white font-bold text-sm uppercase">Join</button>
          <button className="px-6 py-3 text-sm font-bold uppercase underline">Explore</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-32 px-10 md:px-20 max-w-[85%]">
        <h1 className="text-6xl font-bold leading-tight mb-6 tracking-tight">
          Connecting Communities.<br /> Empowering Local Business.
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          We bridge the gap between local businesses and community members, creating meaningful connections that drive growth and prosperity for everyone.
        </p>
      </section>

      {/* CARDS SECTION (Vertical Stack) */}
      <section className="px-10 md:px-20 py-20 flex flex-col gap-0">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-gray-500">Whether you're discovering local gems or showcasing your business, we've got you covered.</p>
        </div>
        <PathCard title="For Users" img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" desc="Discover local businesses and connect with your community." btnText="Join as User" />
        <PathCard title="For Business" img="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200" desc="Reach more customers and grow your presence in the community." btnText="Join as Business" />
      </section>

      {/* STATS SECTION */}
      <section className="stats-section border-y-2 border-black">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <StatBlock num="5000+" text="Local businesses trust our platform to connect with customers" />
          <StatBlock num="50000+" text="Active community members discover new businesses every month" />
          <StatBlock num="100000+" text="Meaningful interactions created between businesses and customers" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#e5e5e5] p-10 md:p-20 border-t-2 border-black">
        <div className="text-7xl font-bold font-mono tracking-tighter mb-10 text-black">COMMUNITY</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pb-10 border-b-2 border-black">
          <p className="text-sm leading-relaxed max-w-sm">
            Connecting communities and empowering local businesses since 2024.
          </p>
          <div className="space-y-4">
            <h4 className="font-bold">Stay Updated</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="flex-1 p-3 border border-black bg-white" />
              <button className="bg-black text-white px-6 font-bold uppercase text-xs">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function PathCard({ title, img, desc, btnText }: any) {
  return (
    <div className="relative h-[500px] overflow-hidden group">
      <img src={img} alt={title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-10">
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="max-w-md mb-8">{desc}</p>
        <button className="px-10 py-4 bg-white text-black font-bold uppercase hover:bg-[#0066cc] hover:text-white transition-all">{btnText}</button>
      </div>
    </div>
  );
}