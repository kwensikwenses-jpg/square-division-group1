"use client";

import React from 'react';

export default function AnalyticsNode() {
  return (
    <div className="border-2 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col">
      {/* Technical Header */}
      <div className="bg-[#2a2d30] text-white p-4 flex justify-between items-center border-b-2 border-black">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Analytics_Node_V.1</h3>
        <span className="text-[8px] opacity-40 font-mono italic">013 // SAT 19 JAN</span>
      </div>

      {/* Futuristic Data Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        {/* Frequency Graph */}
        <div className="p-6 space-y-4">
          <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Profile_Rotation_Freq</p>
          <div className="h-24 flex items-end gap-1">
            {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
              <div 
                key={i} 
                style={{ height: `${h}%` }} 
                className="flex-1 bg-black hover:bg-[#6082a3] transition-all cursor-crosshair"
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-[7px] font-mono opacity-30">
            <span>00:00</span>
            <span>12:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Technical Sliders */}
        <div className="p-6 space-y-6">
          <p className="text-[8px] font-black uppercase tracking-widest opacity-40">Shadow_Control_Nodes</p>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-bold uppercase"><span>Density</span><span>67%</span></div>
              <div className="h-1 bg-black/10 w-full relative">
                <div className="absolute left-0 top-0 h-full bg-black w-[67%]"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-bold uppercase"><span>Contrast</span><span>42%</span></div>
              <div className="h-1 bg-black/10 w-full relative">
                <div className="absolute left-0 top-0 h-full bg-black w-[42%]"></div>
              </div>
            </div>
            <div className="pt-2 text-[8px] font-black uppercase italic opacity-40">
              Visual_Engine: Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}