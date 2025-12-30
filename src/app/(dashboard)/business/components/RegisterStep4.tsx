"use client";

import React from 'react';

export default function RegisterStep4() {
  const tiers = [
    {
      name: 'BASIC_NODE',
      price: 'FREE',
      features: ['5_PHOTOS', 'BASIC_STATS', 'REVIEW_HUB'],
      color: 'bg-white',
      textColor: 'text-black'
    },
    {
      name: 'PREMIUM_GRID',
      price: 'R499/MO',
      features: ['20_PHOTOS', 'ADV_ANALYTICS', 'MARKET_INSIGHTS', 'PRIORITY_SUPPORT'],
      color: 'bg-[#6082a3]',
      textColor: 'text-white'
    },
    {
      name: 'ENTERPRISE_CORE',
      price: 'R1,999/MO',
      features: ['100_PHOTOS', 'REALTIME_DATA', 'API_ACCESS', 'ACCOUNT_MANAGER'],
      color: 'bg-black',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="w-full max-w-4xl border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] font-mono animate-in fade-in duration-500">
      
      {/* Progress Header */}
      <div className="border-b-4 border-black p-6 bg-black text-white flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-[8px] font-black uppercase tracking-[0.4em] opacity-60">Registration_Phase_04</p>
          <h2 className="text-xl font-black italic uppercase tracking-tighter">Subscription_Selection</h2>
        </div>
        <div className="flex gap-2">
          <div className="h-3 w-3 bg-white/20"></div>
          <div className="h-3 w-3 bg-white/40"></div>
          <div className="h-3 w-3 bg-white/60"></div>
          <div className="h-3 w-3 bg-white"></div>
        </div>
      </div>

      <div className="p-8 space-y-10">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-black italic uppercase tracking-tighter italic">Choose_Your_System_Tier</h3>
          <p className="text-[9px] font-black uppercase opacity-40 italic tracking-widest">30-Day_Free_Trial_Enabled_For_All_Plans</p>
        </div>

        {/* Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-4 border-black divide-y-4 md:divide-y-0 md:divide-x-4 divide-black">
          {tiers.map((tier) => (
            <div key={tier.name} className={`${tier.color} ${tier.textColor} p-8 flex flex-col justify-between group transition-all`}>
              <div className="space-y-6">
                <header className="space-y-1">
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] opacity-50 italic">{tier.name}</p>
                  <p className="text-4xl font-black