"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Onboarding content data
const onboardingSteps = [
  {
    title: "Initialize Map View",
    desc: "Navigate the local grid. Pinch to zoom, drag to scan sectors.",
    // Using a placeholder div instead of an image for the demo
    media: <div className="w-full h-48 bg-gray-200 border-2 border-black flex items-center justify-center font-black uppercase">Map Interface Placeholder</div>
  },
  {
    title: "Filter & Locate",
    desc: "Use the top controls to filter by category, distance, or rating.",
    media: <div className="w-full h-48 bg-gray-200 border-2 border-black flex items-center justify-center font-black uppercase">Filter Controls Placeholder</div>
  },
  {
    title: "Engage Business Nodes",
    desc: "Click any marker to view profile, initiate chat, or see local deals.",
    media: <div className="w-full h-48 bg-gray-200 border-2 border-black flex items-center justify-center font-black uppercase">Business Profile Placeholder</div>
  }
];

export default function ExplorePage() {
  // State for onboarding modal
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Check LocalStorage on component mount
  useEffect(() => {
    const hasSeen = localStorage.getItem('hasSeenExploreOnboarding');
    if (!hasSeen) {
      setShowOnboarding(true);
      // Disable scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  // Handle closing the modal
  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem('hasSeenExploreOnboarding', 'true');
    }
    setShowOnboarding(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };

  // Handle next step
  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleClose();
    }
  };

  return (
    <main className="min-h-screen bg-[#edeae7] font-mono">
        {/* --- Basic Header for Context --- */}
        <nav className="border-b-4 border-black bg-white p-4 flex justify-between items-center sticky top-0 z-10">
            <Link href="/" className="font-black underline">← Home</Link>
            <h1 className="text-xl font-black uppercase">Explore Grid</h1>
            <div className="w-20"></div> {/* Balancer */}
        </nav>

        {/* --- Placeholder Map Content --- */}
        <div className="p-8 text-center opacity-50 mt-20">
            <h2 className="text-4xl font-black uppercase mb-4">Map System Offline</h2>
            <p className="font-bold">Integrate map provider (e.g., Mapbox/Google Maps) here.</p>
        </div>


      {/* ========================================= */}
      {/* === BRUTALIST ONBOARDING MODAL START === */}
      {/* ========================================= */}
      {showOnboarding && (
        // 1. Dimmed Overlay Background
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          
          {/* 2. The Modal Container */}
          <div className="bg-white border-4 border-black w-full max-w-md relative shadow-[15px_15px_0px_0px_rgba(255,149,0,1)] animate-in zoom-in-95 duration-300">
            
            {/* Close 'X' Button */}
            <button 
                onClick={handleClose}
                className="absolute top-0 right-0 border-l-4 border-b-4 border-black p-3 font-black hover:bg-[#FF9500] transition-colors"
            >
                X
            </button>

            {/* Step Counter */}
            <div className="border-b-4 border-black p-4 bg-black text-white">
                <p className="font-black text-xs uppercase tracking-widest">
                    System Briefing // Step {currentStep + 1}/{onboardingSteps.length}
                </p>
            </div>
            
            {/* Content Area (Simulating the "Spotlight") */}
            <div className="p-8">
                {/* Media Placeholder representing the highlighted feature */}
                <div className="mb-6">
                    {onboardingSteps[currentStep].media}
                </div>

                <h3 className="text-2xl font-black uppercase mb-4 italic">
                    {onboardingSteps[currentStep].title}
                </h3>
                <p className="font-bold leading-relaxed">
                    {onboardingSteps[currentStep].desc}
                </p>
            </div>

            {/* Footer Actions */}
            <div className="border-t-4 border-black p-6 bg-[#f4f4f4]">
                
                {/* "Don't show again" Checkbox */}
                <label className="flex items-center gap-3 mb-6 cursor-pointer group">
                    <input 
                        type="checkbox" 
                        checked={dontShowAgain}
                        onChange={(e) => setDontShowAgain(e.target.checked)}
                        className="appearance-none w-6 h-6 border-4 border-black checked:bg-black checked:after:content-['✓'] checked:after:text-white checked:after:flex checked:after:justify-center checked:after:items-center font-black transition-all"
                    />
                    <span className="font-bold text-sm uppercase group-hover:underline">Don't show this briefing again on this device.</span>
                </label>

                {/* Next Button */}
                <button 
                    onClick={handleNext}
                    className="w-full py-4 bg-black text-white border-4 border-black font-black uppercase tracking-widest text-lg hover:bg-[#FF9500] hover:text-black transition-all active:translate-y-1"
                >
                    {currentStep < onboardingSteps.length - 1 ? "Next Protocol →" : "Initialize Map →"}
                </button>
            </div>

          </div>
        </div>
      )}
       {/* ========================================= */}
      {/* === BRUTALIST ONBOARDING MODAL END === */}
      {/* ========================================= */}

    </main>
  );
}