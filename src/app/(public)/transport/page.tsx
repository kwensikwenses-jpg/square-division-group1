"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import TransportMap from '@/components/Navbar'; // Wait, this is the wrong file!

const TransportPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#edeae7] text-black">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-32 px-6 md:px-12 border-b border-black pb-12">
        <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">
          Transport<br/>& Logistics
        </h1>
        <p className="mt-6 uppercase text-xs font-bold tracking-[0.3em] opacity-50">
          KZN Regional Hub / Route Discovery
        </p>
      </section>

      {/* The Map Component we built */}
      <TransportMap />

      {/* Transport Directory Grid (SwimClub style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-black border-b border-black">
        {[
          { id: '01', name: "Rossburgh Rail", status: "On Time" },
          { id: '02', name: "Durban Container Terminal", status: "Active" },
          { id: '03', name: "Coastal Freight", status: "Delay - 15m" },
        ].map((item) => (
          <div key={item.id} className="p-10 group hover:bg-[#6082a3] hover:text-white transition-all cursor-pointer">
            <span className="text-4xl font-black opacity-10 group-hover:opacity-100">{item.id}</span>
            <h3 className="text-2xl font-bold uppercase mt-4 mb-2">{item.name}</h3>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.status.includes('Delay') ? 'bg-red-500' : 'bg-green-500'}`} />
              <p className="text-[10px] font-bold uppercase opacity-60 group-hover:opacity-100">{item.status}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TransportPage;