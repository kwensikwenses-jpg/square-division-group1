"use client";

import React from 'react';

export default function RecentActivity() {
  const activities = [
    { type: 'VISIT', target: 'THE_DURBAN_HUB', time: '2H_AGO', status: 'COMPLETED' },
    { type: 'ROUTE', target: 'PARK_STATION_RED_LINE', time: '5H_AGO', status: 'SAVED' },
    { type: 'DEAL', target: 'COFFEE_GRID_50%_OFF', time: '1D_AGO', status: 'CLAIMED' },
  ];

  return (
    <div className="border-4 border-black bg-white p-6 font-mono space-y-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-baseline">
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] italic opacity-40">User_Activity_Logs</h3>
        <button className="text-[8px] font-black uppercase underline hover:text-[#6082a3]">Clear_History</button>
      </div>

      <div className="space-y-3">
        {activities.map((act, i) => (
          <div key={i} className="flex items-center justify-between border-2 border-black p-4 hover:bg-[#edeae7] transition-all cursor-pointer group">
            <div className="flex items-center gap-4">
               <span className="text-[8px] border border-black px-1.5 py-0.5 font-black">{act.type}</span>
               <div>
                 <p className="text-[10px] font-black uppercase tracking-tighter italic group-hover:text-[#6082a3]">{act.target}</p>
                 <p className="text-[7px] font-bold opacity-40 uppercase">{act.time} // {act.status}</p>
               </div>
            </div>
            <span className="text-xs opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}