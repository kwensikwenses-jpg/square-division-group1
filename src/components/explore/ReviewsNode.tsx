"use client";

import React from 'react';

export default function ReviewsNode() {
  const reviews = [
    { user: "USER_882", business: "THE_DURBAN_HUB", rating: 5, text: "OPTIMAL_SERVICE. TRANSPORT_LINK_WAS_ACCURATE.", time: "1H_AGO" },
    { user: "NODE_ALPHA", business: "CYBER_RETAIL", rating: 4, text: "FAST_TRANSACTION. HIGH_QUALITY_INVENTORY.", time: "3H_AGO" },
  ];

  return (
    <div className="border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] font-mono flex flex-col animate-in fade-in duration-700">
      {/* Community Header */}
      <div className="p-6 border-b-4 border-black bg-[#edeae7] flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">Community_Experience_Feed</p>
          <h3 className="text-xl font-black italic uppercase tracking-tighter">Recent_Reviews</h3>
        </div>
        <button className="bg-black text-white px-4 py-2 text-[9px] font-black uppercase hover:bg-[#6082a3] transition-all">
          Share_Experience +
        </button>
      </div>

      <div className="divide-y-2 divide-black">
        {reviews.map((rev, i) => (
          <div key={i} className="p-6 space-y-3 hover:bg-black group transition-all">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <span className="text-[10px] font-black uppercase text-[#6082a3] group-hover:text-white">{rev.user}</span>
                <span className="text-[7px] opacity-40 uppercase group-hover:text-white font-bold">@ {rev.business}</span>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, star) => (
                  <span key={star} className={`text-[10px] ${star < rev.rating ? 'text-black group-hover:text-[#6082a3]' : 'opacity-20 group-hover:text-white'}`}>★</span>
                ))}
              </div>
            </div>
            
            <p className="text-xs font-black uppercase italic leading-tight group-hover:text-white">
              "{rev.text}"
            </p>
            
            <p className="text-[7px] font-bold opacity-40 uppercase group-hover:text-white italic">Logged: {rev.time}</p>
          </div>
        ))}
      </div>

      <button className="p-4 text-[9px] font-black uppercase tracking-widest opacity-40 hover:opacity-100 transition-all border-t-2 border-black">
        View_All_Community_Logs →
      </button>
    </div>
  );
}