"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

// --- TECHNICAL COMPONENT IMPORTS ---
import AnalyticsNode from './components/AnalyticsNode';
import DocumentVault from './components/DocumentVault';
import SystemLogs from './components/SystemLogs';
import LeadResponseNode from '@/components/LeadResponseNode'; 
import SearchOverlay from '@/components/SearchOverlay'; 

// Local interface for Lead Data handling
interface Lead {
  id: string;
  title: string;
  budget: string;
}

export default function BusinessDashboard() {
  // --- STATE MANAGEMENT ---
  const [businessName, setBusinessName] = useState("Loading...");
  const [tier, setTier] = useState("Silver");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // --- 1. SYSTEM INITIALIZATION EFFECT ---
  // Fetches real business data and listens for 'CMD+K' search shortcut
  useEffect(() => {
    const getProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('business_name, tier')
          .eq('id', user.id)
          .single();

        if (data && !error) {
          setBusinessName(data.business_name);
          setTier(data.tier);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger search overlay on Ctrl+K or Meta+K
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };

    getProfile();
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen bg-[#edeae7] flex flex-col font-mono animate-in fade-in duration-500">
      
      {/* --- SCROLLABLE CONTENT AREA --- */}
      <div className="flex-1 p-8 space-y-8 pb-32">
        
        {/* SECTION 00: SYSTEM HEADER [Logic: Greets user with real DB Name] */}
        <header className="border-b-4 border-black pb-8">
          <div className="flex justify-between items-end">
            <div className="space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 italic">System_User_Greeting</p>
              <h1 className="text-7xl font-black uppercase tracking-tighter italic leading-none">
                Welcome, {businessName}
              </h1>
            </div>
            <div className="text-right">
              {/* Tier status reflected from DB Profile */}
              <span className="bg-black text-[#edeae7] px-6 py-2 text-[10px] font-black uppercase tracking-[0.3em] inline-block mb-2 shadow-[4px_4px_0px_0px_rgba(96,130,163,1)]">
                {tier} Status
              </span>
              <p className="text-[9px] uppercase font-bold opacity-40">Operational Overview // {new Date().getFullYear()}</p>
            </div>
          </div>
        </header>

        {/* SECTION 01: TECHNICAL TELEMETRY [Logic: Real-time business metrics] */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-2 border-black divide-x-2 divide-black bg