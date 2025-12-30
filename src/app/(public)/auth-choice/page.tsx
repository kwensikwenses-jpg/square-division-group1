"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';
import { useRouter } from 'next/navigation';

export default function AuthChoice() {
  const router = useRouter();
  // State for the required Navbar prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#edeae7] text-black pt-32 px-6 font-mono">
      {/* Fixed: Navbar and MenuOverlay integration */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center py-20">
        <h1 className="text-xs font-black uppercase tracking-[0.4em] mb-12 opacity-40">
          choose_sign_up_type
        </h1>

        {/* MAIN CHOICE GRID */}
        <div className="w-full border-4 border-black divide-y-4 divide-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
          <ChoiceButton 
            title="user sign up" 
            sub="Find local gems & support your community"
            onClick={() => router.push('/user/signup')} 
          />
          <ChoiceButton 
            title="business sign up" 
            sub="Grow your reach & connect with new leads"
            onClick={() => router.push('/business/register')} 
            isBlack
          />
        </div>

        <div className="mt-16 w-full">
          <p className="text-[10px] font-bold uppercase tracking-widest mb-8 opacity-40">
            already have an account?
          </p>
          
          <div className="grid grid-cols-2 border-4 border-black divide-x-4 divide-black bg-white">
            <button 
              onClick={() => router.push('/user/login')}
              className="p-8 text-[11px] font-black uppercase hover:bg-black hover:text-white transition-all active:bg-[#6082a3]"
            >
              login as user
            </button>
            <button 
              onClick={() => router.push('/business/login')}
              className="p-8 text-[11px] font-black uppercase hover:bg-black hover:text-white transition-all active:bg-[#6082a3]"
            >
              login as business
            </button>
          </div>
        </div>

        <button 
          onClick={() => router.back()}
          className="mt-12 text-[32px] border-4 border-black p-6 hover:bg-black hover:text-white transition-all active:translate-x-[-5px]"
          title="Go Back"
        >
          ←
        </button>
      </div>
    </main>
  );
}

// --- HELPER COMPONENT ---

function ChoiceButton({ title, sub, onClick, isBlack = false }: { title: string, sub: string, onClick: () => void, isBlack?: boolean }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-12 flex flex-col items-center group transition-all ${isBlack ? 'bg-black text-white hover:bg-[#6082a3]' : 'bg-white text-black hover:bg-black hover:text-white'}`}
    >
      <span className="text-4xl font-black uppercase italic tracking-tighter mb-2 group-hover:translate-x-4 transition-transform">
        {title}
      </span>
      <span className={`text-[10px] uppercase font-bold tracking-widest opacity-60`}>
        {sub}
      </span>
    </button>
  );
}