"use client";

import React from 'react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-md flex items-start justify-center pt-[10vh] px-4 font-mono">
      <div className="bg-white border-4 border-black w-full max-w-2xl shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-top-4 duration-300">
        
        {/* Technical Search Header */}
        <div className="p-6 border-b-4 border-black flex items-center gap-4">
          <span className="text-2xl font-black italic">⌘</span>
          <input 
            autoFocus
            placeholder="SEARCH_SYSTEM_NODES..." 
            className="flex-1 bg-transparent outline-none font-black uppercase text-xl tracking-tighter placeholder:opacity-20"
          />
          <button onClick={onClose} className="text-[10px] font-black border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-all">ESC</button>
        </div>

        {/* Search Results Grid */}
        <div className="divide-y-2 divide-black max-h-[60vh] overflow-y-auto">
          <SearchRow label="Active_Leads" count="14" sub="Marketplace_Node" />
          <SearchRow label="Vault_Documents" count="03" sub="Security_Sector" />
          <SearchRow label="Business_Profile" count="VERIFIED" sub="Identity_Node" />
          <SearchRow label="System_Settings" count="CONFIG" sub="Core_Build" />
        </div>

        {/* Technical Footer */}
        <div className="p-4 bg-[#edeae7] flex justify-between text-[8px] font-black uppercase tracking-widest opacity-40">
          <span>Search_Engine: v.2.0</span>
          <span>Index_Status: Optimized</span>
        </div>
      </div>
      {/* Click outside to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />
    </div>
  );
}

function SearchRow({ label, count, sub }: { label: string; count: string; sub: string }) {
  return (
    <div className="p-6 flex justify-between items-center hover:bg-black hover:text-white transition-all cursor-pointer group">
      <div>
        <p className="text-[8px] font-bold opacity-40 group-hover:opacity-100 mb-1">{sub}</p>
        <h4 className="text-lg font-black uppercase italic tracking-tighter">{label}</h4>
      </div>
      <span className="border border-black group-hover:border-white px-2 py-1 text-[9px] font-black italic">{count}</span>
    </div>
  );
}