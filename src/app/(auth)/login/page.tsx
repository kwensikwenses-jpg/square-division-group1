"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay'; // Added to support Navbar functionality
import { supabase } from '@/utils/supabase';

const LoginPage: React.FC = () => {
  const router = useRouter();
  
  // State for Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    if (data.session) {
      router.push('/business');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono">
      {/* 01: HEADER & NAVIGATION - Fixed the onMenuClick build error here */}
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <div className="flex flex-col md:flex-row min-h-screen pt-20">
        
        {/* LEFT SIDE: Identity */}
        <div className="w-full md:w-1/3 p-12 bg-black text-[#edeae7] flex flex-col justify-between border-r border-black">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 italic">Back Online.</h1>
            <p className="opacity-60 text-xs uppercase tracking-widest leading-relaxed">
              Access your business hub and marketplace tools.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-8xl font-black opacity-10 uppercase">Portal</span>
          </div>
        </div>

        {/* RIGHT SIDE: Login Form */}
        <div className="w-full md:w-2/3 p-12 md:p-24 flex items-center">
          <form onSubmit={handleLogin} className="space-y-12 max-w-xl w-full">
            
            <section className="space-y-6">
              <h2 className="text-sm uppercase font-bold tracking-[0.3em] border-b border-black pb-2 italic">Credentials</h2>
              
              {errorMessage && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-xs font-bold uppercase">
                  {errorMessage}
                </div>
              )}

              {/* Added id, title, and htmlFor to clear accessibility "red lines" */}
              <div className="space-y-2">
                <label htmlFor="email-field" className="hidden">Email Address</label>
                <input 
                  id="email-field"
                  type="email" 
                  title="Enter your email address"
                  placeholder="EMAIL ADDRESS" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none placeholder:opacity-20" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password-field" className="hidden">Password</label>
                <input 
                  id="password-field"
                  type="password" 
                  title="Enter your password"
                  placeholder="PASSWORD" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b-2 border-black py-4 text-2xl font-bold uppercase outline-none placeholder:opacity-20" 
                />
              </div>
            </section>

            <div className="space-y-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-black text-[#edeae7] py-6 font-black uppercase tracking-widest hover:bg-[#6082a3] transition-colors disabled:opacity-50 shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-1"
              >
                {loading ? "Authenticating..." : "Enter Dashboard"}
              </button>
              
              <p className="text-[10px] font-bold uppercase opacity-40 text-center tracking-widest">
                Don't have an account? <a href="/business/register" className="underline hover:text-black">Request Access</a>
              </p>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
};

export default LoginPage;