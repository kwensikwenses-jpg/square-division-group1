"use client";

import React from 'react';

export default function AnalyticsHub() {
  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: PERFORMANCE GRAPHS (8/12) */}
        <div className="lg:col-span-8 space-y-8">
          <header className="border-b-4 border-black pb-6">
            <h1 className="text-4xl font-black italic uppercase tracking-tighter">Analytics_Telemetry</h1>
            <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.4em] mt-2">Data_Stream: Operational // v2.0</p>
          </header>

          <div className="bg-white border-4 border-black p-10 h-96 flex items-center justify-center shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
             <p className="text-sm font-black opacity-20 italic uppercase tracking-widest">[Visual_Data_Mapping_Placeholder]</p>
          </div>
        </div>

        {/* RIGHT COLUMN: INSIGHTS & DEMOGRAPHICS (4/12) */}
        <aside className="lg:col-span-4 space-y-8">
           
           {/* AI-Powered Recommendations */}
           <div className="border-4 border-black bg-black text-white p-6 space-y-4 shadow-[10px_10px_0px_0px_rgba(96,130,163,1)]">
             <div className="flex justify-between items-center border-b border-white/20 pb-2">
               <p className="text-[8px] font-black uppercase tracking-widest opacity-40 text-white">System_Insight</p>
               <span className="h-2 w-2 bg-green-500 rounded-full"></span>
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">
               Recommendation_Payload: Increase node engagement by 14% via localized transit-sync protocols.
             </p>
           </div>

           <div className="bg-white border-4 border-black p-6 space-y-4">
              <h3 className="text-xs font-black uppercase italic border-b-2 border-black pb-2">Demographic_Logs</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold"><span>Durban_Central</span><span>42%</span></div>
                <div className="flex justify-between text-[10px] font-bold"><span>Newlands_East</span><span>28%</span></div>
              </div>
           </div>
        </aside>
      </div>
    </main>
  );
}