"use client";

import React from 'react';

export default function LeadManager() {
  const leads = [
    { id: 'LD-882', user: 'USER_882', service: 'MEETING_ROOM_B', value: 'R350.00', status: 'UNREAD', time: '10_MIN_AGO' },
    { id: 'LD-879', user: 'NODE_ALPHA', service: 'WORKSPACE_PASS', value: 'R150.00', status: 'CONFIRMED', time: '2_HOURS_AGO' },
    { id: 'LD-875', user: 'TRANSIT_GURU', service: 'EVENT_SPACE', value: 'R2,500.00', status: 'PENDING', time: '1_DAY_AGO' },
  ];

  return (
    <main className="min-h-screen bg-[#edeae7] p-8 font-mono animate-in fade-in duration-700">
      
      {/* 01: PERFORMANCE OVERVIEW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-[9px] font-black uppercase opacity-40 italic tracking-widest">Active_Inquiries</p>
          <p className="text-5xl font-black italic tracking-tighter mt-2">14</p>
          <div className="mt-4 h-1 w-full bg-black/5"><div className="h-full bg-[#6082a3] w-2/3"></div></div>
        </div>
        <div className="border-4 border-black bg-black text-white p-6 shadow-[10px_10px_0px_0px_rgba(96,130,163,0.5)]">
          <p className="text-[9px] font-black uppercase opacity-40 italic tracking-widest">Conversion_Rate</p>
          <p className="text-5xl font-black italic tracking-tighter mt-2">82%</p>
          <p className="text-[8px] font-black uppercase text-green-400 mt-2">↑ 5% Above_Average</p>
        </div>
        <div className="border-4 border-black bg-white p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-[9px] font-black uppercase opacity-40 italic tracking-widest">Pending_Revenue</p>
          <p className="text-5xl font-black italic tracking-tighter mt-2">R5.2K</p>
          <p className="text-[8px] font-black uppercase opacity-40 mt-2">Pipeline_Valuation</p>
        </div>
      </div>

      {/* 02: LEAD REGISTRY */}
      <div className="space-y-6">
        <div className="flex justify-between items-end border-b-4 border-black pb-4">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">Inbound_Transmission_Log</p>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">Lead_Management</h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-black text-white px-4 py-2 text-[9px] font-black uppercase">All_Leads</button>
            <button className="border-2 border-black px-4 py-2 text-[9px] font-black uppercase hover:bg-black hover:text-white transition-all">Action_Required</button>
          </div>
        </div>

        <div className="space-y-4">
          {leads.map((lead) => (
            <div key={lead.id} className={`border-4 border-black p-6 bg-white flex flex-col md:flex-row justify-between items-center gap-6 hover:translate-x-2 transition-all cursor-pointer group ${lead.status === 'UNREAD' ? 'shadow-[10px_10px_0px_0px_rgba(220,20,60,0.2)]' : 'shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'}`}>
              <div className="flex items-center gap-8 w-full md:w-