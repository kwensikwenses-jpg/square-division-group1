"use client";

import React from 'react';

export default function TermsPage() {
  const sections = [
    { id: "01", title: "Acceptance of Terms", content: "By accessing the KAI Network, you agree to comply with our ecosystem standards and verification protocols." },
    { id: "02", title: "User Conduct", content: "Users must provide accurate location and identity data for the security of the B2B marketplace." },
    { id: "03", title: "Business Verification", content: "All partners undergo a 4-step manual review. Approval is subject to document authenticity." }
  ];

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto uppercase font-bold text-[11px] tracking-widest">
        <p className="mb-8 italic lowercase">legal documentation</p>
        
        <header className="border-b-4 border-black pb-8 mb-12">
          <h1 className="text-8xl font-black tracking-tighter uppercase italic leading-none">Terms</h1>
        </header>

        {/* Legal Index Table */}
        <div className="border-2 border-black divide-y-2 divide-black">
          {sections.map((section) => (
            <div key={section.id} className="grid grid-cols-1 md:grid-cols-4 divide-x-0 md:divide-x-2 divide-black group">
              <div className="p-8 bg-gray-50 flex items-center justify-center text-4xl font-thin italic opacity-20 group-hover:opacity-100 transition-opacity">
                {section.id}
              </div>
              <div className="md:col-span-3 p-8 space-y-4 bg-white">
                <h2 className="text-xl font-black italic uppercase tracking-tighter">{section.title}</h2>
                <p className="normal-case font-medium text-sm leading-relaxed opacity-60">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="mt-12 flex justify-between items-center border-t-2 border-black pt-8">
          <span className="opacity-40 italic">last updated: jan 2026</span>
          <button type="button" onClick={() => window.print()} className="underline hover:no-underline">Print PDF</button>
        </div>
      </div>
    </main>
  );
}