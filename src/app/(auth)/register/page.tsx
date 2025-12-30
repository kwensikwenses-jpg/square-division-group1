"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Required for Navbar functionality
import { supabase } from '@/utils/supabase';

const RegisterPage: React.FC = () => {
  const router = useRouter();
  
  // Menu State (Fixes Vercel Build Error)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    const { data, error: authError } = await supabase.auth.signUp({
      email: cleanEmail,
      password: password,
    });

    if (authError) {
      alert(`Registration Error: ${authError.message}`);
      setLoading(false);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: data.user.id, 
            business_name: businessName, 
            category: category,
            tier: 'silver' 
          },
        ]);

      if (profileError) {
        alert("Account created, but profile database failed: " + profileError.message);
      } else {
        alert("Registration successful! Check your email if verification is enabled.");
        router.push('/business/login');
      }
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono">
      {/* 01: NAVIGATION & MENU OVERLAY */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
        
        {/* LEFT SIDE: Fixed Branding */}
        <div className="w-full md:w-1/3 p-12 bg-black text-[#edeae7] flex flex-col justify-between border-r border-black">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none italic">
              Join the<br/>Ecosystem.
            </h1>
            <p className="opacity-60 text-[10px] font-bold uppercase tracking-[0.3em] leading-relaxed">
              Partner with the leading local B2B network.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-9xl font-black opacity-10 italic uppercase tracking-tighter">Kai</span>
          </div>
        </div>

        {/* RIGHT SIDE: Form Section */}
        <div className="w-full md:w-2/3 p-8 md:p-24 overflow-y-auto">
          <form onSubmit={handleSignUp} className="space-y-12 max-w-xl">
            
            {/* Identity Section */}
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-black pb-2 opacity-40">01. Identity</h2>
              
              <div className="space-y-2">
                <label htmlFor="business-name" className="hidden">Business Name</label>
                <input 
                  id="business-name"
                  type="text" 
                  title="Business Name"
                  placeholder="BUSINESS NAME" 
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none placeholder:opacity-20 focus:border-[#6082a3] transition-colors" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email-address" className="hidden">Email Address</label>
                <input 
                  id="email-address"
                  type="email" 
                  title="Email Address"
                  placeholder="EMAIL ADDRESS" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none placeholder:opacity-20 focus:border-[#6082a3] transition-colors" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="hidden">Password</label>
                <input 
                  id="password"
                  type="password" 
                  title="Password"
                  placeholder="PASSWORD" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none placeholder:opacity-20 focus:border-[#6082a3] transition-colors" 
                />
              </div>
            </section>

            {/* Category Section */}
            <section className="space-y-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.4em] border-b border-black pb-2 opacity-40">02. Industry</h2>
              <div className="relative">
                <select 
                  id="industry-select"
                  title="Select Industry Category"
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none cursor-pointer appearance-none"
                >
                  <option value="" disabled className="text-black">SELECT INDUSTRY</option>
                  <option value="food" className="text-black">FOOD & BEVERAGE</option>
                  <option value="transport" className="text-black">LOGISTICS / TRANSPORT</option>
                  <option value="gov" className="text-black">GOVERNMENT SERVICES</option>
                  <option value="events" className="text-black">EVENT PRODUCTION</option>
                  <option value="tech" className="text-black">TECHNOLOGY</option>
                </select>
                <span className="absolute right-0 bottom-4 pointer-events-none text-xl">↓</span>
              </div>
            </section>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-black text-[#edeae7] py-6 font-black uppercase tracking-[0.3em] text-xs hover:bg-[#6082a3] transition-all disabled:opacity-50 active:scale-[0.98] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)]"
            >
              {loading ? "Processing Network Node..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default RegisterPage;