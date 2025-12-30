"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/navigation';

export default function AuthChoice() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6">
      <Navbar />
      
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center py-20">
        <h1 className="text-xs font-black uppercase tracking-[0.4em] mb-12 opacity-40">
          choose sign up type
        </h1>

        {/* MAIN CHOICE GRID */}
        <div className="w-full border-2 border-black divide-y-2 divide-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <ChoiceButton 
            title="user sign up" 
            sub="Find local gems & support your community"
            onClick={() => router.push('/register/user')} 
          />
          <ChoiceButton 
            title="business sign up" 
            sub="Grow your reach & connect with new leads"
            onClick={() => router.push('/register/business')} 
            isBlack
          />
        </div>

        <div className="mt-16 w-full">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">
            already have an account?
          </p>
          
          <div className="grid grid-cols-2 border-2 border-black divide-x-2 divide-black bg-white">
            <button 
              onClick={() => router.push('/login/user')}
              className="p-6 text-[11px] font-black uppercase hover:bg-gray-100 transition-colors"
            >
              login as user
            </button>
            <button 
              onClick={() => router.push('/login/business')}
              className="p-6 text-[11px] font-black uppercase hover:bg-gray-100 transition-colors"
            >
              login as business
            </button>
          </div>
        </div>

        <button 
          onClick={() => router.back()}
          className="mt-12 text-[24px] border-2 border-black p-4 hover:bg-black hover:text-white transition-all"
          title="Go Back"
        >
          ←
        </button>
      </div>
    </main>
  );
}

function ChoiceButton({ title, sub, onClick, isBlack = false }: { title: string, sub: string, onClick: () => void, isBlack?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-10 flex flex-col items-center group transition-all ${isBlack ? 'bg-black text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-black hover:text-white'}`}
    >
      <span className="text-3xl font-black uppercase italic tracking-tighter mb-2 group-hover:translate-x-2 transition-transform">
        {title}
      </span>
      <span className={`text-[10px] uppercase font-bold tracking-widest opacity-60`}>
        {sub}
      </span>
    </button>
  );
}