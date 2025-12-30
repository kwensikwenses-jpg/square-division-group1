"use client";

import React from 'react';

export default function TransportFilters() {
  const transportTypes = [
    { id: 'BUS', label: 'Municipal_Buses', color: 'bg-[#0066CC]', icon: '🚌' },
    { id: 'TAXI', label: 'Local_Taxis', color: 'bg-[#FFD700]', icon: '🚕' },
    { id: 'TRAIN', label: 'Train_Stations', color: 'bg-[#DC143C]', icon: '🚂' },
    { id: 'LONG_DIST', label: 'City-to-City', color: 'bg-[#800080]', icon: '🚐' }
  ];

  return (
    <div className="w-full border-x-4 border-b-4 border-black bg-white font-mono animate-in slide-in-from-top-2 duration-300">
      <div className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-black">
        
        {/* TYPE FILTERS */}
        <div className="flex-1 p-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {transportTypes.map((type) => (
            <div key={type.id} className="flex items-center gap-3 group cursor-pointer">
              <div className="relative h-5 w-5 border-2 border-black flex items-center justify-center group-hover:bg-[#edeae7]">
                <div className={`h-2 w-2 ${type.color} border border-black/20`}></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black uppercase tracking-tighter">{type.label}</span>
                <span className="text-[7px] opacity-40 uppercase font-bold">{type.icon} Node_Active</span>
              </div>
            </div>
          ))}
        </div>

        {/* STATUS & TIME FILTERS */}
        <div className="p-4 bg-[#edeae7] flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="flex items-center gap-4">
            <label className="text-[8px] font-black uppercase opacity-40">Operating_Status</label>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-black text-white text-[8px] font-black uppercase">Now_Active</button>
              <button className="px-3 py-1 border border-black text-[8px] font-black uppercase hover:bg-white transition-all">Show_All</button>
            </div>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <label className="text-[8px] font-black uppercase opacity-40">Price_Range</label>
            <div className="flex-1 md:w-32 h-1 bg-black/10 relative">
              <div className="absolute left-0 top-0 h-full bg-black w-2/3"></div>
              <div className="absolute left-2/3 top-[-4px] h-3 w-1 bg-black"></div>
            </div>