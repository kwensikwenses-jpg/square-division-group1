"use client";

import React, { useState } from 'react';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState('NODES');
  
  const nodes = [
    { id: 1, name: "Node_01", type: "RETAIL", dist: "0.5km" },
    { id: 2, name: "Node_02", type: "FOOD", dist: "1.2km" }
  ];

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-4xl font-black italic uppercase border-b-4 border-black pb-4">Personal_Vault</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nodes.map((node) => (
            <div key={node.id} className="bg-white border-4 border-black p-6 space-y-4">
              <h3 className="text-xl font-black uppercase">{node.name}</h3>
              <div className="flex justify-between text-[10px] font-bold opacity-60">
                <span>Type: {node.type}</span>
                <span>Dist: {node.dist}</span>
              </div>
              <button className="w-full mt-6 border-2 border-black py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white transition-all">
                Access_Node
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}