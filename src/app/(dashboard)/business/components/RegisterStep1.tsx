"use client";

import React from 'react';

export default function RegisterStep1() {
  return (
    <div className="w-full max-w-2xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">Registration_Phase_01</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Business_Information</h2>
        </div>
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-white"></div>
          <div className="h-3 w-3 border border-white/20"></div>
          <div className="h-3 w-3 border border-white/20"></div>
          <div className="h-3 w-3 border border-white/20"></div>
        </div>
      </div>

      <form className="p-8 space-y-10">
        {/* Section: Legal Identity */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">01_Legal_Identity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase opacity-40">Business_Name_*</label>
              <input type="text" placeholder="LEGAL_ENTITY_NAME" className="w-full border-2 border-black p-3 text-xs uppercase focus:bg-[#edeae7] outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-[8px] font-black uppercase opacity-40">Reg_Number_*</label>
              <input type="text" placeholder="202X / 000000 / 00" className="w-full border-2 border-black p-3 text-xs uppercase focus:bg-[#edeae7] outline-none" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[8px] font-black uppercase opacity-40">Category_Node</label>
            <select className="w-full border-2 border-black p-3 text-xs uppercase bg-white outline-none appearance-none cursor-pointer">
              <option>SELECT_CATEGORY</option>
              <option>RETAIL_GRID</option>
              <option>LOGISTICS_HUB</option>
              <option>TECH_SECTOR</option>
            </select>
          </div>
        </div>

        {/* Section: Geographic Node (The Map Block) */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-widest italic border-b-2 border-black pb-2">02_Geographic_Node</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <input type="text" placeholder="STREET_ADDRESS" className="border-2 border-black p-3 text-xs uppercase col-span-full" />
             <input type="text" placeholder="SUBURB" className="border-2 border-black p-3 text-xs uppercase" />