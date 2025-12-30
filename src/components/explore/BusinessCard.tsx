"use client";

import React from 'react';

interface BusinessCardProps {
  name: string;
  category: string;
  rating: number;
  distance: string;
  image: string;
}

export default function BusinessCard({ name, category, rating, distance, image }: BusinessCardProps) {
  return (
    <div className="border-2 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col font-mono">
      
      {/* Visual Asset Node */}
      <div className="h-40 border-b-2 border-black bg-gray-200 relative overflow-hidden">
        <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-[8px] font-black uppercase tracking-widest z-10">
          {distance}_KM
        </div>
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Metadata Section */}
      <div className="p-4 space-y-3 flex-1">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <p className="text-[7px] font-black uppercase opacity-40 tracking-[0.3em]">{category}</p>
            <h4 className="text-sm font-black uppercase italic tracking-tighter leading-tight">{name}</h4>
          </div>
          <div className="flex items-center gap-1">
             <span className="text-[10px] font-black italic">★</span>
             <span className="text-[10px] font-black italic">{rating}</span>
          </div>
        </div>

        {/* Technical Progress Bar (Popularity) */}
        <div className="h-0.5 w-full bg-black/5 relative">
          <div className="absolute left-0 top-0 h-full bg-[#6082a3] w-3/4"></div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="grid grid-cols-2 border-t-2 border-black divide-x-2 divide-black">
        <button className="py-3 text-[9px] font-black uppercase hover:bg-black hover:text-white transition-all">
          View_Node
        </button>
        <button className="py-3 text-[9px] font-black uppercase bg-black text-white hover:bg-[#6082a3] transition-all">
          Quick_Action
        </button>
      </div>
    </div>
  );
}