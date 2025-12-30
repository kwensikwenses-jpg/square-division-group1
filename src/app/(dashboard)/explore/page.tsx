"use client";

import React, { useState } from 'react';

// --- COMPONENT IMPORTS ---
import MapModeSwitcher from '@/components/explore/MapModeSwitcher';
import TransportFilters from '@/components/explore/TransportFilters';
import MapView from '@/components/explore/MapView';
import CategoryGrid from '@/components/explore/CategoryGrid';
import DealCard from '@/components/explore/DealCard';
import BusinessCard from '@/components/explore/BusinessCard';
import RecentActivity from '@/components/explore/RecentActivity';
import EventsNode from '@/components/explore/EventsNode';
import ReviewsNode from '@/components/explore/ReviewsNode';
import UserStatsNode from '@/components/explore/UserStatsNode';
import FilterNode from '@/components/explore/FilterNode';

export default function ExplorePage() {
  // --- STATE MANAGEMENT ---
  const [activeMode, setActiveMode] = useState<'TRANSPORT' | 'BUSINESS'>('BUSINESS');
  const [radius, setRadius] = useState(25);

  return (
    <main className="min-h-screen bg-[#edeae7] font-mono pb-20 animate-in fade-in duration-700">
      
      {/* SECTION 01: SYSTEM NAVIGATION & MAP */}
      <section className="p-8 space-y-8">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Grid_Explorer</p>
            <h1 className="text-3xl font-black italic uppercase">Regional_Discovery</h1>
          </div>
          <div className="border-2 border-black px-4 py-1 text-[10px] font-black uppercase bg-white">
            Node_Status: <span className="text-green-600">Active</span>
          </div>
        </div>

        <div className="space-y-4">
          <MapModeSwitcher onModeChange={(mode) => setActiveMode(mode)} />
          {activeMode === 'TRANSPORT' && <TransportFilters />}
        </div>
        
        <MapView mode={activeMode} />
        <CategoryGrid />
      </section>

      {/* SECTION 02: MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 mt-12">
        
        {/* LEFT COLUMN: PRIMARY FEED */}
        <div className="lg:col-span-8 space-y-12">
          
          <section className="space-y-6">
            <div className="flex justify-between items-end border-b-2 border-black pb-2">
              <h2 className="text-xl font-black italic uppercase tracking-tighter">Live_Deals</h2>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
              <DealCard businessName="Coffee_Grid" offer="50%_OFF_ESPRESSO" expiresIn="02:14:05" discountBadge="HOT" />
              <DealCard businessName="Cyber_Retail" offer="R200_OFF_PLANS" expiresIn="01:45:12" discountBadge="FLASH" />
              <DealCard businessName="Wellness_Node" offer="Bio-Scan_Discount" expiresIn="05:20:00" discountBadge="FREE" />
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-black italic uppercase tracking-tighter border-b-2 border-black pb-2">Recommended_Nodes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BusinessCard name="The Durban Hub" category="RESTAURANTS" rating={4.8} distance="0.8" image="/coffee.jpg" />
              <BusinessCard name="Retail_Sector_7" category="RETAIL" rating={4.5} distance="1.2" image="/retail.jpg" />
            </div>
          </section>

          <EventsNode />
          <ReviewsNode />
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Enhanced FilterNode with Accessibility Fixes */}
          <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xs font-black uppercase mb-4 tracking-widest">Filter_Parameters</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-black uppercase">
                  {/* Linked label to input via htmlFor */}
                  <label htmlFor="radius-slider">Proximity_Radius</label>
                  <span className="text-[#6082a3]">{radius}KM</span>
                </div>
                <input 
                  id="radius-slider"
                  type="range" 
                  min="1" 
                  max="50" 
                  title="Adjust Proximity Radius"
                  value={radius}
                  onChange={(e) => setRadius(parseInt(e.target.value))}
                  className="w-full accent-black h-2 bg-black/10 rounded-lg appearance-none cursor-pointer" 
                />
              </div>
              <FilterNode />
            </div>
          </div>

          <UserStatsNode />
          <RecentActivity />
          
          {/* SYSTEM STATUS TICKER */}
          <div className="border-4 border-black p-6 bg-black text-white space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40">System_Status</p>
                <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
              <p className="text-[10px] font-black italic tracking-tighter">✓ ALL_SYSTEMS_OPTIMAL</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-[10px] font-black italic opacity-40">LOCAL_COORD: -29.8587, 31.0218</p>
                <p className="text-[10px] font-black italic opacity-40">UPTIME: 99.9%</p>
              </div>
          </div>
        </aside>
      </div>
    </main>
  );
}