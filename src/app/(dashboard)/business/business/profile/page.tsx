"use client";
import React from 'react';

export default function ProfileEditor() {
  return (
    <div className="space-y-12 max-w-4xl">
      <header className="border-b-2 border-black pb-6">
        <h1 className="text-5xl font-black uppercase tracking-tighter">Edit Identity</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Basic Info */}
        <section className="space-y-8">
         <div className="flex flex-col gap-2">
  <label htmlFor="industry-category" className="text-[10px] font-bold uppercase tracking-widest">
    Industry Category
  </label>
  <select 
    id="industry-category"
    name="industry"
    title="Select Industry Category" 
    defaultValue=""
    className="bg-transparent border-b border-black p-2 outline-none uppercase font-bold text-lg cursor-pointer"
  >
    <option value="" disabled>Select Category</option>
    <option value="food">Food Store</option>
    <option value="transport">Transport</option>
    <option value="events">Events</option>
  </select>
</div>
        </section>

        {/* Branding Upload (The Sketch Map) */}
        <section className="border-4 border-black border-dashed p-8 flex flex-col items-center justify-center text-center hover:bg-white transition-all cursor-pointer group">
          <div className="w-12 h-12 border-2 border-black rounded-full mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">+</div>
          <p className="text-[10px] font-bold uppercase tracking-widest">Upload Custom Sketch Map</p>
          <p className="text-[8px] opacity-50 mt-2 uppercase">(PNG or SVG / Blue Ink Aesthetic)</p>
        </section>
      </div>

      <button className="bg-black text-[#edeae7] px-12 py-6 font-black uppercase tracking-widest hover:bg-[#6082a3] transition-colors">
        Update Live Profile
      </button>
    </div>
  );
}