"use client";
import React, { useState } from 'react';

export default function DirectChat() {
  const [message, setMessage] = useState("");

  return (
    <div className="h-[calc(100vh-180px)] border-2 border-black flex flex-col md:flex-row bg-white">
      
      {/* Sidebar: Contacts */}
      <aside className="w-full md:w-80 border-r-2 border-black overflow-y-auto">
        <div className="p-4 border-b border-black bg-[#edeae7]">
          <h2 className="text-[10px] font-bold uppercase tracking-widest">Active Leads</h2>
        </div>
        <div className="divide-y divide-black">
          {['Durban Logistics', 'Coastal Fresh', 'Eco-Package Co'].map((name, i) => (
            <div key={i} className="p-6 hover:bg-black hover:text-white cursor-pointer transition-all">
              <p className="font-bold uppercase text-sm italic">{name}</p>
              <p className="text-[8px] uppercase mt-1 opacity-50">Last active: 2m ago</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main: Message Window */}
      <div className="flex-1 flex flex-col">
        <header className="p-4 border-b border-black flex justify-between items-center">
          <span className="font-bold uppercase tracking-tighter">Durban Logistics / Discussion</span>
          <span className="text-[8px] bg-green-500 text-white px-2 py-1 font-bold">LIVE</span>
        </header>

        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#edeae7]/30">
          <div className="max-w-xs bg-black text-white p-4 text-xs uppercase font-medium">
            Hi, we saw your route map. Can you handle cold storage for 500 units?
          </div>
          <div className="max-w-xs ml-auto bg-[#6082a3] text-white p-4 text-xs uppercase font-medium">
            Yes, we have availability for the Rossburgh route starting Monday.
          </div>
        </div>

        {/* Message Input */}
        <form className="p-4 border-t-2 border-black flex gap-4">
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="TYPE PROPOSAL..."
            className="flex-1 bg-transparent outline-none font-bold uppercase text-sm"
          />
          <button type="submit" className="bg-black text-white px-8 py-2 font-black uppercase text-xs hover:bg-[#6082a3]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}