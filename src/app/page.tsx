"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MenuOverlay from '@/components/MenuOverlay';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page-container">
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* TOP-BUTTONS */}
      <div className="top-buttons">
        <button onClick={() => setIsMenuOpen(true)}>Login</button>
        <Link href="/register"><button className="border-l border-[#004080]">Sign Up</button></Link>
        <button className="border-l border-[#004080]">Language</button>
      </div>

      {/* CONTENT-WRAPPER */}
      <div className="content-wrapper">
        
        {/* BRAND-TITLE */}
        <div className="brand-title pt-10">
          <h1 className="font-bold tracking-tight">Mahady</h1>
          <h2 className="font-medium opacity-60 italic">By Auger Leaf</h2>
        </div>

        {/* DESCRIPTION-BOX */}
        <div className="description-box">
          <p>Precision meets elegance. A new standard in design and utility.</p>
        </div>

        {/* HOVER-LINKS (Interactive Split) */}
        <div className="hover-links border-y border-black/5">
          <Link href="/user" className="hover-link-item">
            For User
          </Link>
          <Link href="/business" className="hover-link-item border-l border-black/5">
            For Business
          </Link>
        </div>

        {/* INFO-BLOCK */}
        <div className="info-block mt-8">
          <p className="font-bold uppercase tracking-widest text-sm mb-4">Core_System_Registry</p>
          <p className="opacity-80 leading-relaxed">
            This is where your main content or visual will live. 
            The KZN Partner Ecosystem is now operating under the Mahady Protocol.
          </p>
        </div>

      </div>

      {/* STYLE TAG FOR HOVER LOGIC */}
      <style jsx>{`
        .hover-link-item {
          flex: 1;
          text-align: center;
          text-decoration: none;
          color: #0055a5;
          padding: 1.5rem 0;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.75rem;
          transition: all 0.3s ease;
        }
        .hover-link-item:hover {
          background-color: #0055a5;
          color: white;
        }
      `}</style>
    </div>
  );
}