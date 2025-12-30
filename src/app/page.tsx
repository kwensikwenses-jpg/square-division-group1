"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar'; 
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono selection:bg-[#6082a3] selection:text-white">
      <Navbar />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      {/* SECTION 00: THE KAI HERO (Operational Air-Lock) */}
      <section className="bg-white border-b-4 border-black min-h-screen flex flex-col pt-20">
        {/* Sub-Nav / Action Bar */}
        <nav className="flex border-b-2 border-black divide-x-2 divide-black h-20">
          <button 
            onClick={() => setIsMenuOpen(true)}
            type="button" 
            className="px-10 bg-black text-white font-black uppercase text-[10px] tracking-[0.4em] hover:bg-[#6082a3] transition-all"
          >
            Menu_Expand
          </button>
          <div className="flex-1 flex items-center px-8 text-[9px] font-bold uppercase tracking-widest opacity-30 italic">
            kzn_partner_ecosystem // v.2026.01_stable
          </div>
          <Link 
            href="/explore" 
            className="px-10 flex items-center font-black uppercase text-[10px] tracking-[0.4em] hover:bg-black hover:text-white transition-all bg-[#edeae7]"
          >
            Explore_Platform →
          </Link>
        </nav>

        {/* Hero Content Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-4 divide-x-2 divide-black">
          <div className="md:col-span-3 p-12 md:p-24 flex flex-col justify-end border-b-2 md:border-b-0 border-black relative overflow-hidden group">
            {/* Background Branding Node */}
            <div className="absolute top-10 right-10 text-[15vw] font-black opacity-[0.03] select-none pointer-events-none group-hover:opacity-[0.05] transition-opacity">KZN</div>
            
            <h1 className="text-[18vw] font-black italic tracking-tighter uppercase leading-[0.8] mb-8 relative z-10">
              KAI<span className="text-[#6082a3]">.</span>
            </h1>

            <div className="flex border-2 border-black divide-x-2 divide-black w-fit bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative z-10">
              <Link href="/register/user" className="px-10 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-black hover:text-white transition-all">Sign_Up</Link>
              <Link href="/login" className="px-10 py-5 font-black uppercase text-[11px] tracking-widest hover:bg-[#6082a3] hover:text-white transition-all">Login_Portal</Link>
            </div>
          </div>

          {/* Right Sidebar: Context Node */}
          <div className="bg-[#edeae7] p-12 flex flex-col justify-between italic border-t-2 md:border-t-0 border-black">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">System_Description</p>
              <p className="text-xl font-bold uppercase leading-tight tracking-tighter">
                Creating visual narratives that elevate local brands and connect communities through photography, data, and design.
              </p>
            </div>
            <div className="pt-12 border-t border-black/20 text-[9px] font-bold uppercase opacity-60 leading-relaxed">
              built for durban & beyond.<br/>
              protocol: local_commerce_link.<br/>
              status: optimal.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 01: High-Impact Telemetry */}
      <section className="border-b-4 border-black divide-y-4 md:divide-y-0 md:flex divide-black">
        <StatRow value="500+" label="Nodes_Mapped" bgColor="bg-[#6082a3] text-white" />
        <StatRow value="150+" label="Active_Entities" bgColor="bg-[#edeae7]" />
        <StatRow value="12" label="Market_Sectors" bgColor="bg-white" />
      </section>

      {/* SECTION 02: Detailed Features Grid */}
      <section className="bg-white border-b-4 border-black">
        <div className="bg-black text-white p-8 border-b-2 border-black flex justify-between items-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em]">Grid_Capabilities</h2>
          <span className="text-[8px] opacity-40 uppercase">Module_02 // Features</span>
        </div>
        
        {/* User Stream */}
        <div className="bg-[#2a2d30] text-white p-6 border-b-2 border-black">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic">Path_Alpha: Consumer_Tools</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#edeae7]">
          <FeatureCell number="1" title="Discovery_Engine" desc="Locate high-value nodes quickly via our technical map interface." />
          <FeatureCell number="2" title="Data_Verification" desc="Access authentic community logs and verified experience nodes." />
          <FeatureCell number="3" title="Secure_Comm" desc="Direct encrypted messaging with local business entities." />
          <FeatureCell number="4" title="Personal_Vault" desc="Archive your favorite nodes and route history for instant recall." />
        </div>

        {/* Business Stream */}
        <div className="bg-[#2a2d30] text-white p-6 border-t-2 border-b-2 border-black">
          <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 italic">Path_Beta: Business_Operations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black bg-[#edeae7]">
          <FeatureCell number="1" title="Entity_Profile" desc="High-fidelity digital footprint for your business services." />
          <FeatureCell number="2" title="Market_Analytics" desc="Track engagement metrics with enterprise-grade radar charts." />
          <FeatureCell number="3" title="Lead_Triage" desc="Centralized management for inbound inquiries and bookings." />
          <FeatureCell number="4" title="Promo_Blast" desc="Trigger time-sensitive deals to local users in real-time." />
        </div>
      </section>

      {/* SECTION 03: Operational Process */}
      <section className="p-12 md:p-24 space-y-12 bg-[#edeae7] border-b-4 border-black">
        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 text-center">System_Integration_Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <ProcessStep number="01" title="Initialize" desc="Create your profile node in under 120 seconds." />
          <ProcessStep number="02" title="Sync_Grid" desc="Connect with local customers via the map overlay." />
          <ProcessStep number="03" title="Scale_Output" desc="Utilize data insights to optimize your reach." />
        </div>
      </section>

      {/* SECTION 04: Community Objectives */}
      <section className="bg-white border-b-4 border-black">
        <div className="p-12 md:p-32 max-w-5xl mx-auto space-y-20">
          <h2 className="text-3xl font-black uppercase text-center tracking-[0.2em] italic">Building_The_Local_Network</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <CommunityBlock title="The_Challenge" content="Local business nodes struggle with visibility in saturated digital markets while customers lack a technical discovery tool." />
            <CommunityBlock title="The_Solution" content="A unified ecosystem where commerce and transit data intersect, allowing for seamless local discovery and growth." />
          </div>
        </div>
      </section>

      {/* SECTION 05: Partners & Exit Node */}
      <section className="bg-white p-12 md:p-24">
        <h2 className="text-xl font-black uppercase tracking-[0.3em] mb-12 italic border-b-2 border-black pb-4">Strategic_Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 border-4 border-black divide-x-2 divide-y-2 divide-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
          {['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7'].map(p => (
            <div key={p} className="p-16 flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all bg-white hover:bg-[#edeae7]">
              <span className="text-4xl font-black italic">{p}</span>
            </div>
          ))}
          <Link href="/register" className="p-16 flex flex-col items-center justify-center bg-black text-white hover:bg-[#6082a3] transition-all group">
            <span className="text-xs font-black uppercase tracking-widest mb-2">Join_Ecosystem</span>
            <span className="text-4xl group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <footer className="p-8 bg-black text-white text-center">
        <p className="text-[8px] font-black uppercase tracking-[0.8em] opacity-40">© 2026 KAI_GROUP // ALL_RIGHTS_RESERVED</p>
      </footer>
    </main>
  );
}

// --- TECHNICAL HELPERS ---

function StatRow({ value, label, bgColor }: any) {
  return (
    <div className={`flex-1 p-12 ${bgColor} border-r-4 border-black last:border-r-0 flex flex-col justify-center min-h-[300px]`}>
      <h3 className="text-8xl font-black italic tracking-tighter">{value}</h3>
      <p className="text-xl font-