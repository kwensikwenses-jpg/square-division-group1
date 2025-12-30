"use client";

import React from 'react';

export default function AnalyticsHub() {
  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      
      {/* 01: TIER STATUS BAR */}
      <div className="flex justify-between items-center bg-black text-white p-4 mb-10 border-b-4 border-black">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 bg-[#6082a3] animate-pulse"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em]">Enterprise_Tier_Analytics_Active</p>
        </div>
        <p className="text-[8px] font-black opacity-40 italic">Last_Sync: 10_MINS_AGO</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: CORE METRICS (8/12) */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Market Position Radar */}
          <section className="border-4 border-black bg-white p-8 space-y-6 shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex justify-between items-end border-b-2 border-black pb-4">
              <h3 className="text-[12px] font-black uppercase tracking-widest">Market_Position_Radar</h3>
              <p className="text-[8px] font-black uppercase opacity-40">Vs_Category_Average</p>
            </div>
            
            {/* Visual Placeholder for Radar Chart */}
            <div className="h-80 flex items-center justify-center relative">
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
               <div className="w-64 h-64 border-2 border-black rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-px bg-black/20 rotate-45"></div>
                    <div className="w-full h-px bg-black/20 -rotate-45"></div>
                    <div className="h-full w-px bg-black/20"></div>
                  </div>
                  {/* The Performance Polygon */}
                  <div className="w-48 h-40 bg-[#6082a3]/40 border-2 border-[#6082a3] clip-path-polygon animate-pulse"></div>
               </div>
               <div className="absolute top-0 text-[8px] font-black">RATING</div>
               <div className="absolute bottom-0 text-[8px] font-black">PRICING</div>
               <div className="absolute left-0 text-[8px] font-black">REVIEWS</div>
               <div className="absolute right-0 text-[8px] font-black">TRAFFIC</div>
            </div>
          </section>

          {/* Revenue & Growth Trends */}
          <section className="border-4 border-black bg-white p-8 space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-black pb-2">Revenue_Trajectory</h3>
            <div className="h-64 flex items-end gap-2">
              {[40, 65, 45, 90, 85, 100, 75].map((h, i) => (
                <div key={i} className="flex-1 bg-black hover:bg-[#6082a3] transition-colors relative group" style={{ height: `${h}%` }}>
                  <span className="absolute -top-6 left-0 right-0 text-center text-[8px] font-black opacity-0 group-hover:opacity-100 italic">R{h}K</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[8px] font-black uppercase opacity-40">
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: INSIGHTS & DEMOGRAPHICS (4/12) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* AI-Powered Recommendations */}
          <div className="border-4 border-black bg-black text-white p-6 space-y-4 shadow-[10px_10px_0px_0px_rgba(96,130,163,1)]">
<p className="text-[8px] font-black uppercase tracking-widest">Recommendation_Payload</p>
</div> {/* Added missing closing div */}