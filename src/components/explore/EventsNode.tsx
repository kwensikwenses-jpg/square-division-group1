"use client";

import React from 'react';

export default function EventsNode() {
  const events = [
    { title: 'GRAND_OPENING: TECH_HUB_S7', type: 'LAUNCH', date: 'JAN_05', time: '10:00', coord: 'ZONE_1' },
    { title: 'WORKSHOP: B2B_MARKET_STRATEGY', type: 'CLASS', date: 'JAN_08', time: '14:00', coord: 'CORE_NODE' },
    { title: 'PROMOTION: SUMMER_FEST_2026', type: 'SALE', date: 'JAN_12', time: '09:00', coord: 'DURBAN_SOUTH' },
  ];

  return (
    <div className="border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(96,130,163,0.3)] font-mono overflow-hidden animate-in fade-in duration-700">
      {/* Technical Header */}
      <div className="bg-black text-white p-4 flex justify-between items-center border-b-2 border-black">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em]">Local_Events_Registry</h3>
        <span className="text-[8px] opacity-40 italic uppercase">Sync: Active</span>
      </div>

      <div className="divide-y-2 divide-black">
        {events.map((event, i) => (
          <div key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#edeae7] transition-all group cursor-pointer">
            <div className="flex gap-6 items-center">
              {/* Date Block */}
              <div className="flex flex-col items-center border-2 border-black p-2 min-w-[60px] group-hover:bg-black group-hover:text-white transition-colors">
                <span className="text-[8px] font-black uppercase opacity-40">{event.date.split('_')[0]}</span>
                <span className="text-xl font-black italic tracking-tighter">{event.date.split('_')[1]}</span>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[7px] font-black border border-black px-1 leading-none">{event.type}</span>
                  <p className="text-[8px] font-bold opacity-40 uppercase tracking-widest">{event.coord}</p>
                </div>
                <h4 className="text-lg font-black uppercase italic tracking-tighter leading-none group-hover:text-[#6082a3] transition-colors">
                  {event.title}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="text-right">
                 <p className="text-[8px] font-black opacity-40 uppercase">T-Minus_Commence</p>
                 <p className="text-sm font-black italic uppercase">{event.time}_HRS</p>
               </div>
               <span className="text-xl opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-black text-white py-4 text-[9px] font-black uppercase tracking-[0.3em] hover:bg-[#6082a3] transition-all">
        View_Community_Calendar
      </button>
    </div>
  );
}