"use client";

import React, { useState } from 'react';

export default function ChatInterface() {
  return (
    <main className="h-[calc(100vh-80px)] bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      <div className="h-full border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] flex divide-x-4 divide-black overflow-hidden">
        
        {/* 01: ACTIVE TRANSMISSIONS (Sidebar) */}
        <aside className="w-80 flex flex-col">
          <div className="p-6 bg-black text-white border-b-4 border-black">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] italic">Active_Channels</h2>
          </div>
          <div className="flex-1 overflow-y-auto divide-y-2 divide-black">
            {[
              { name: 'THE_DURBAN_HUB', msg: 'Your booking is confirmed...', time: '12:45', unread: true },
              { name: 'RETAIL_SECTOR_7', msg: 'In stock: Cyber_Jacket_v2', time: 'Yesterday', unread: false },
              { name: 'TECH_LOGISTICS', msg: 'System update complete.', time: '02_DEC', unread: false },
            ].map((chat, i) => (
              <div key={i} className={`p-6 cursor-pointer hover:bg-[#edeae7] transition-all group ${chat.unread ? 'bg-[#6082a3]/10' : ''}`}>
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-black uppercase italic group-hover:text-[#6082a3]">{chat.name}</span>
                  <span className="text-[7px] font-bold opacity-40">{chat.time}</span>
                </div>
                <p className="text-[9px] opacity-60 uppercase line-clamp-1">{chat.msg}</p>
                {chat.unread && <div className="mt-2 h-1.5 w-1.5 bg-[#6082a3] animate-pulse"></div>}
              </div>
            ))}
          </div>
        </aside>

        {/* 02: MESSAGE STREAM (Main Window) */}
        <section className="flex-1 flex flex-col bg-[#fafafa]">
          {/* Channel Header */}
          <header className="p-6 border-b-4 border-black flex justify-between items-center bg-white">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 border-2 border-black bg-[#edeae7] flex items-center justify-center font-black">DH</div>
              <div>
                <h3 className="text-sm font-black uppercase italic">The_Durban_Hub</h3>
                <p className="text-[8px] font-bold text-green-600 uppercase">● Online_Node</p>
              </div>
            </div>
            <button className="text-[9px] font-black border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all">VIEW_PROFILE</button>
          </header>

          {/* Chat History */}
          <div className="flex-1 p-8 overflow-y-auto space-y-8 bg-[url('/grid-subtle.png')] bg-repeat">
            <div className="flex justify-center">
              <span className="text-[8px] font-black uppercase bg-black text-white px-3 py-1 italic">Channel_Opened: 30_DEC_2025</span>
            </div>

            {/* Business Message */}
            <div className="flex flex-col items-start space-y-2 max-w-[70%]">
              <div className="border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs font-black uppercase leading-tight">Your booking for "Meeting_Room_Hire" is confirmed for tomorrow at 10:00.</p>
              </div>
              <span className="text-[7px] font-bold opacity-40 uppercase">12:44 // DH_SYSTEM</span>
            </div>

            {/* User Message */}
            <div className="flex flex-col items-end space-y-2 ml-auto max-w-[70%]">
              <div className="border-2 border-black p-4 bg-[#6082a3] text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs font-black uppercase leading-tight italic">Confirmed. Will there be parking nodes available?</p>
              </div>
              <span className="text-[7px] font-bold opacity-40 uppercase">12:45 // USER_882</span>
            </div>
          </div>

          {/* Message Input */}
          <footer className="p-6 border-t-4 border-black bg-white">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="ENTER_TRANSMISSION..." 
                className="flex-1 border-2 border-black p-4 font-mono text-xs uppercase outline-none focus:bg-[#edeae7]"
              />
              <button className="bg-black text-white px-8 font-black uppercase text-xs hover:bg-[#6082a3] transition-all">
                SEND →
              </button>
            </div>
          </footer>
        </section>

      </div>
    </main>
  );
}