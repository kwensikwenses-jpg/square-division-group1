"use client";

import React from 'react';

export default function LoginNode({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  return (
    <div className="w-full max-w-md border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in-95 duration-500">
      {/* Technical Header */}
      <div className="bg-black text-white p-6 flex justify-between items-center border-b-4 border-black">
        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] italic">Auth_Portal_v.2.6</h2>
        <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
      </div>

      <form className="p-8 space-y-6">
        <div className="space-y-2">
          <label className="text-[8px] font-black uppercase opacity-40 tracking-widest">Identity_Node (Email/ID)</label>
          <input 
            type="text" 
            placeholder="ENTER_IDENTIFIER..."
            className="w-full border-2 border-black p-4 font-mono text-xs uppercase focus:bg-[#edeae7] outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[8px] font-black uppercase opacity-40 tracking-widest">Access_Key (Password)</label>
          <div className="relative">
            <input 
              type="password" 
              placeholder="••••••••••••"
              className="w-full border-2 border-black p-4 font-mono text-xs focus:bg-[#edeae7] outline-none transition-all"
            />
            <span className="absolute right-4 top-4 text-[10px] opacity-30 cursor-pointer hover:opacity-100">EYE_OPEN</span>
          </div>
        </div>

        <div className="flex items-center gap-3 py-2">
          <div className="h-4 w-4 border-2 border-black flex items-center justify-center cursor-pointer">
            <div className="h-2 w-2 bg-black"></div>
          </div>
          <span className="text-[9px] font-black uppercase opacity-40">Persistence_Mode (Remember Me)</span>
        </div>

        <button 
          onClick={(e) => { e.preventDefault(); onLoginSuccess(); }}
          className="w-full bg-black text-white py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-[#6082a3] transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
        >
          Execute_Login →
        </button>

        <div className="flex justify-between text-[8px] font-black uppercase opacity-40 pt-4 border-t border-black/10">
          <span className="hover:opacity-100 cursor-pointer underline">Recover_Key?</span>
          <span className="hover:opacity-100 cursor-pointer underline">System_Help</span>
        </div>
      </form>
    </div>
  );
}