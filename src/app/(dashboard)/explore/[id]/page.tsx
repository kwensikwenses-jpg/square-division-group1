"use client";

import React from 'react';

export default function BusinessProfilePage() {
  return (
    <main className="min-h-screen bg-[#edeae7] font-mono pb-20 animate-in fade-in duration-700">
      {/* 01: HERO GALLERY NODE */}
      <section className="p-8 pb-0">
        <div className="border-4 border-black h-[400px] bg-black relative group overflow-hidden shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]">
          <div className="absolute inset-0 opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 bg-[url('/business-hero.jpg')] bg-cover bg-center"></div>
          
          {/* Overlay Identity */}
          <div className="absolute bottom-0 left-0 p-10 text-white space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-60">Entity_ID: DB_HUB_001</p>
            <h1 className="text-6xl font-black italic uppercase tracking-tighter">The_Durban_Hub</h1>
            <div className="flex gap-4">
              <span className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase">Restaurants_&_Cafes</span>
              <span className="bg-[#6082a3] text-white px-3 py-1 text-[10px] font-black uppercase">⭐ 4.8 Rating</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 px-8 mt-12">
        {/* LEFT COLUMN: CORE DATA (8/12) */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Description Block */}
          <section className="border-4 border-black bg-white p-8 space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-black pb-2">Business_Overview</h3>
            <p className="text-sm font-black leading-relaxed uppercase opacity-80">
              A premier artisanal coffee and workspace node in the heart of the city. 
              Equipped with high-speed fiber and dedicated meeting zones. 
              Integrated with the Durban Municipal Bus network for seamless transit.
            </p>
          </section>

          {/* Infrastructure Access */}
          <section className="space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-black pb-2">Transport_Infrastructure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-black p-4 flex gap-4 items-center bg-white">
                <span className="text-2xl">🚌</span>
                <div>
                  <p className="text-[10px] font-black uppercase">Municipal_Bus_Route_42</p>
                  <p className="text-[8px] opacity-40 uppercase">Stop: 200m_North</p>
                </div>
              </div>
              <div className="border-2 border-black p-4 flex gap-4 items-center bg-white">
                <span className="text-2xl">🚕</span>
                <div>
                  <p className="text-[10px] font-black uppercase">Greyville_Taxi_Rank</p>
                  <p className="text-[8px] opacity-40 uppercase">Distance: 5min_Walk</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Menu */}
          <section className="border-4 border-black bg-white p-8 space-y-6">
            <h3 className="text-[12px] font-black uppercase tracking-widest border-b-2 border-black pb-2">Service_List</h3>
            <div className="divide-y-2 divide-black">
              {['Artisanal_Espresso', 'Meeting_Room_Hire', 'Daily_Workspace_Pass'].map((item) => (
                <div key={item} className="py-4 flex justify-between items-center group cursor-pointer hover:bg-[#edeae7] px-2 transition-all">
                  <span className="text-sm font-black uppercase italic">{item}</span>
                  <span className="text-sm font-black tabular-nums">R45.00+</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: ACTION & HOURS (4/12) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Action Node */}
          <div className="border-4 border-black bg-black text-white p-8 space-y-6">
            <button className="w-full bg-white text-black py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#6082a3] hover:text-white transition-all">
              Initiate_Booking_Now
            </button>
            <button className="w-full border-2 border-white py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-all">
              Direct_Comm_Message
            </button>
          </div>

          {/* Operating Hours */}
          <div className="border-4 border-black bg-white p-6 space-y-4">
            <h3 className="text-[10px] font-black uppercase tracking-widest border-b-2 border-black pb-2">Operational_Hours</h3>
            <div className="space-y-2 text-[9px] font-black uppercase">
              <div className="flex justify-between"><span>Mon-Fri</span><span>08:00 - 18:00</span></div>
              <div className="flex justify-between"><span>Saturday</span><span>09:00 - 14:00</span></div>
              <div className="flex justify-between text-red-600"><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>

          {/* Location Metadata */}
          <div className="border-4 border-black h-[200px] bg-[#edeae7] p-4 relative">
             <div className="absolute inset-0 bg-[url('/map-crop.jpg')] opacity-30"></div>
             <p className="relative z-10 text-[8px] font-black uppercase">📍 123_Florida_Road, Durban</p>
             <button className="absolute bottom-4 right-4 bg-black text-white px-3 py-1 text-[8px] font-black uppercase">Get_Directions</button>
          </div>
        </aside>
      </div>
    </main>
  );
}