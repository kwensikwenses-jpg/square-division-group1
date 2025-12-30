"use client";

import React, { useState } from 'react';

export default function InventoryManager() {
  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      
      {/* 01: INVENTORY TELEMETRY */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'TOTAL_SKU', val: '42' },
          { label: 'ACTIVE_LISTINGS', val: '38' },
          { label: 'LOW_STOCK_ALERTS', val: '04', alert: true },
          { label: 'MONTHLY_SALES_VOLUME', val: 'R12.4K' },
        ].map((stat, i) => (
          <div key={i} className="border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-[8px] font-black uppercase opacity-40">{stat.label}</p>
            <p className={`text-2xl font-black italic ${stat.alert ? 'text-red-600 animate-pulse' : ''}`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* 02: INVENTORY ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">Asset_Registry_v.1.0</p>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">Product_Manager</h1>
        </div>
        <button className="bg-black text-white px-8 py-4 text-xs font-black uppercase hover:bg-[#6082a3] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
          + ADD_NEW_PRODUCT
        </button>
      </div>

      {/* 03: PRODUCT GRID */}
      <div className="border-4 border-black bg-white shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-black text-white text-[9px] font-black uppercase tracking-widest italic">
              <th className="p-4 border-r border-white/20">UID</th>
              <th className="p-4 border-r border-white/20">Product_Identifier</th>
              <th className="p-4 border-r border-white/20">Category</th>
              <th className="p-4 border-r border-white/20">Price_Node</th>
              <th className="p-4 border-r border-white/20">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-black">
            {[
              { id: 'SKU-001', name: 'ARTISANAL_ESPRESSO', cat: 'BEVERAGE', price: 'R45.00', status: 'ACTIVE' },
              { id: 'SKU-002', name: 'CYBER_JACKET_v2', cat: 'APPAREL', price: 'R850.00', status: 'LOW_STOCK' },
              { id: 'SKU-003', name: 'WORKSPACE_DAILY_PASS', cat: 'SERVICES', price: 'R150.00', status: 'ACTIVE' },
              { id: 'SKU-004', name: 'MEETING_ROOM_B', cat: 'SERVICES', price: 'R350.00', status: 'INACTIVE' },
            ].map((item) => (
              <tr key={item.id} className="hover:bg-[#edeae7] transition-all group">
                <td className="p-4 text-[10px] font-bold opacity-40 border-r-2 border-black">{item.id}</td>
                <td className="p-4 text-sm font-black uppercase italic group-hover:text-[#6082a3] border-r-2 border-black">{item.name}</td>
                <td className="p-4 text-[10px] font-black uppercase border-r-2 border-black">{item.cat}</td>
                <td className="p-4 text-sm font-black tabular-nums border-r-2 border-black">{item.price}</td>
                <td className="p-4 border-r-2 border-black">
                  <span className={`text-[8px] font-black px-2 py-1 uppercase ${
                    item.status === 'ACTIVE' ? 'bg-green-100 text-green-700' : 
                    item.status === 'LOW_STOCK' ? 'bg-red-100 text-red-700 animate-pulse' : 
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-center space-x-4">
                  <button className="text-[9px] font-black uppercase underline hover:text-[#6082a3]">EDIT</button>
                  <button className="text-[9px] font-black uppercase underline text-red-600 opacity-40 hover:opacity-100">PURGE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </main>
  );
}