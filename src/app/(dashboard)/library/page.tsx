"use client";

import React, { useState } from 'react';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<'NODES' | 'ROUTES'>('NODES');

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      
      {/* 01: REPOSITORY HEADER */}
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-2">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] opacity-40 italic">System_Archive_v.2.6</p>
            <h1 className="text-5xl font-black italic uppercase tracking-tighter">Personal_Vault</h1>
          </div>
          
          {/* TAB SWITCHER */}
          <div className="flex border-4 border-black bg-white overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <button 
              onClick={() => setActiveTab('NODES')}
              className={`px-8 py-4 text-[10px] font-black uppercase transition-all ${activeTab === 'NODES' ? 'bg-black text-white' : 'hover:bg-[#edeae7]'}`}
            >
              Saved_Nodes
            </button>
            <button 
              onClick={() => setActiveTab('ROUTES')}
              className={`px-8 py-4 text-[10px] font-black uppercase border-l-4 border-black transition-all ${activeTab === 'ROUTES' ? 'bg-black text-white' : 'hover:bg-[#edeae7]'}`}
            >
              Transit_Logs
            </button>
          </div>
        </header>

        {/* 02: CONTENT GRID */}
        {activeTab === 'NODES' ? (
          /* SAVED BUSINESSES GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: '001', name: 'THE_DURBAN_HUB', type: 'CAFÉ', dist: '0.8KM', date: '30_DEC' },
              { id: '002', name: 'RETAIL_SECTOR_7', type: 'APPAREL', dist: '1.2KM', date: '28_DEC' },
              { id: '003', name: 'CYBER_LOGISTICS', type: 'OFFICE', dist: '2.5KM', date: '15_DEC' },
            ].map((node) => (
              <div key={node.id} className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 transition-all">
                <div className="flex justify-between items-start border-b-2 border-black pb-4 mb-4">
                  <div>
                    <p className="text-[8px] font-bold opacity-40 uppercase">Entity_ID: {node.id}</p>
                    <h3 className="text-xl font-black italic uppercase tracking-tighter group-hover:text-[#6082a3]">{node.name}</h3>
                  </div>
                  <span className="text-[10px] font-black italic">★ 4.8</span>
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase opacity-40">
                  <span>Type: {node.type}</span>
                  <span>Dist: {node.dist}</span>
                </div>
               <button className="w-full mt-6 border-2 border-black py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white transition-all">