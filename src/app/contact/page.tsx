"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import MenuOverlay from '@/components/MenuOverlay';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <>
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* --- DIRECT STYLING TO FORCE THE LOOK --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { background-color: #edeae7; color: #000; font-family: 'Courier New', Courier, monospace; }
        
        /* LAYOUT CONTAINERS */
        .page-wrapper { padding-top: 100px; padding-bottom: 60px; max-width: 1200px; margin: 0 auto; width: 90%; }
        
        /* HEADER STYLE */
        .header-section { margin-bottom: 40px; border-bottom: 4px solid #000; padding-bottom: 20px; }
        .header-title { font-size: 4rem; font-weight: 900; line-height: 0.9; text-transform: uppercase; margin-bottom: 10px; }
        .header-sub { font-size: 1.1rem; opacity: 0.6; font-weight: bold; max-width: 600px; }

        /* GRID SYSTEM */
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        
        /* FORM BOX */
        .form-box { border: 4px solid #000; background: #fff; padding: 40px; box-shadow: 15px 15px 0px 0px rgba(0,0,0,1); }
        .section-title { font-size: 1.5rem; font-weight: 900; text-transform: uppercase; margin-bottom: 30px; display: flex; align-items: center; gap: 10px; }
        .pulse-dot { width: 12px; height: 12px; background-color: red; border-radius: 50% !important; animation: pulse 1s infinite; }
        
        /* INPUT STYLING */
        .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .input-group { margin-bottom: 20px; width: 100%; }
        .label { display: block; font-size: 10px; font-weight: 900; text-transform: uppercase; opacity: 0.5; margin-bottom: 5px; }
        .input-field { 
            width: 100%; 
            background: transparent; 
            border: none; 
            border-bottom: 2px solid #000; 
            padding: 10px 0; 
            font-family: 'Courier New'; 
            font-weight: 700; 
            font-size: 1rem; 
            outline: none; 
            transition: 0.2s; 
        }
        .input-field:focus { border-bottom-color: #3083fd; color: #3083fd; }
        select.input-field { cursor: pointer; background-color: transparent; }
        textarea.input-field { border: 2px solid #000; background: #f9f9f9; padding: 10px; margin-top: 5px; resize: none; }

        /* BUTTONS */
        .action-btn { 
            width: 100%; 
            background: #000; 
            color: #fff; 
            border: 4px solid #000; 
            padding: 20px; 
            font-weight: 900; 
            text-transform: uppercase; 
            cursor: pointer; 
            margin-top: 20px; 
            transition: 0.2s; 
        }
        .action-btn:hover { background: #3083fd; border-color: #3083fd; }
        .action-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        /* INFO SIDE */
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
        .info-card { background: #fff; border: 2px solid #000; padding: 20px; }
        .direct-lines { background: #000; color: #fff; padding: 30px; border: 2px solid #000; margin-bottom: 40px; }
        .line-item { display: flex; justify-content: space-between; border-bottom: 1px solid #333; padding: 10px 0; font-size: 0.9rem; }
        
        /* MAP */
        .map-container { 
            width: 100%; 
            height: 250px; 
            border: 4px solid #000; 
            background: #ddd; 
            position: relative; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            overflow: hidden; 
        }
        .map-pattern { position: absolute; inset: 0; opacity: 0.1; background-image: radial-gradient(#000 1px, transparent 1px); background-size: 10px 10px; }

        /* FAQ */
        .faq-box { border-top: 4px solid #000; padding-top: 40px; }
        .faq-item { background: #fff; border: 2px solid #000; margin-bottom: 10px; }
        .faq-summary { padding: 15px; font-weight: 900; cursor: pointer; display: flex; justify-content: space-between; text-transform: uppercase; font-size: 0.8rem; }
        .faq-details { padding: 15px; border-top: 2px solid #000; font-size: 0.8rem; opacity: 0.8; background: #f9f9f9; }

        @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.5; } 100% { opacity: 1; } }

        /* MOBILE RESPONSIVE */
        @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr; }
            .header-title { font-size: 2.5rem; }
            .input-row { grid-template-columns: 1fr; gap: 0; }
            .info-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <main className="page-wrapper">
        
        {/* HEADER */}
        <header className="header-section">
          <h1 className="header-title">Comms<br/>Link.</h1>
          <p className="header-sub">
            Establish connection with Central Command. Average response time: 4 Hours.
          </p>
        </header>

        <div className="contact-grid">
          
          {/* LEFT: FORM AREA */}
          <div className="form-box">
            <h2 className="section-title">
              <span className="pulse-dot"></span>
              Transmit Message
            </h2>
            
            {formStatus === 'success' ? (
               <div style={{ textAlign: 'center', padding: '40px 0' }}>
                 <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '20px' }}>PACKET SENT ✓</h3>
                 <p>We have received your transmission.</p>
                 <button onClick={() => setFormStatus('idle')} style={{ textDecoration: 'underline', marginTop: '20px', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>SEND ANOTHER</button>
               </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <label className="label">Identity (Name)</label>
                    <input required type="text" className="input-field" placeholder="JOHN DOE" />
                  </div>
                  <div className="input-group">
                    <label className="label">Affiliation (Company)</label>
                    <input type="text" className="input-field" placeholder="OPTIONAL" />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label className="label">Return Signal (Email)</label>
                    <input required type="email" className="input-field" placeholder="USER@EMAIL.COM" />
                  </div>
                  <div className="input-group">
                    <label className="label">Comm Line (Phone)</label>
                    <input type="tel" className="input-field" placeholder="+27 ..." />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="department" className="label">Routing Protocol (Department)</label>
                  <select id="department" className="input-field" aria-label="Routing Protocol (Department)">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnerships / B2B</option>
                    <option>Media & Press</option>
                    <option>Careers / HR</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="label">Packet Data (Message)</label>
                  <textarea required rows={5} className="input-field" placeholder="ENTER MESSAGE CONTENT..."></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '10px' }}>
                  <input type="checkbox" id="callback" style={{ width: '20px', height: '20px', border: '2px solid #000' }} />
                  <label htmlFor="callback" className="label" style={{ marginBottom: 0, opacity: 1 }}>Request Voice Callback</label>
                </div>

                <button disabled={formStatus === 'submitting'} className="action-btn">
                  {formStatus === 'submitting' ? 'Transmitting...' : 'Initiate Transmission'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: INFO AREA */}
          <div>
            {/* ADDRESS & HOURS */}
            <div className="info-grid">
              <div className="info-card">
                <h3 className="label">Physical Uplink</h3>
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  123 Innovation Blvd.<br/>
                  Tech District, Durban<br/>
                  KwaZulu-Natal, 4001
                </p>
                <p style={{ fontSize: '0.7rem', color: 'green', fontWeight: 'bold', marginTop: '10px' }}>[ VISITORS WELCOME ]</p>
              </div>
              <div className="info-card">
                <h3 className="label">Temporal Window</h3>
                <p style={{ fontWeight: 'bold', fontSize: '0.9rem', lineHeight: '1.4' }}>
                  Mon - Fri: 08:00 - 17:00<br/>
                  Sat: 09:00 - 13:00<br/>
                  Sun: OFFLINE
                </p>
              </div>
            </div>

            {/* DIRECT LINES */}
            <div className="direct-lines">
              <h3 className="label" style={{ color: '#fff', borderBottom: '1px solid #555', paddingBottom: '10px', marginBottom: '20px' }}>Direct Channels</h3>
              <div className="line-item"><span>General:</span> <span style={{ opacity: 0.7 }}>hello@daniel.inc</span></div>
              <div className="line-item"><span>Support:</span> <span style={{ opacity: 0.7 }}>support@daniel.inc</span></div>
              <div className="line-item" style={{ borderBottom: 'none' }}><span>Voice:</span> <span style={{ opacity: 0.7 }}>+27 (0) 31 555 0199</span></div>
            </div>

            {/* GOOGLE MAPS PLACEHOLDER */}
            <div className="map-container">
               <div className="map-pattern"></div>
               <div style={{ zIndex: 10, textAlign: 'center' }}>
                 <p style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1.2rem' }}>Map Module</p>
                 <p className="label" style={{ opacity: 0.6 }}>Google Maps API Integration</p>
               </div>
               <div style={{ position: 'absolute', width: '20px', height: '20px', background: 'red', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '2px solid #fff', boxShadow: '0 0 0 4px rgba(255,0,0,0.3)' }}></div>
            </div>

            {/* FAQ */}
            <div className="faq-box">
              <h3 className="section-title" style={{ fontSize: '1.2rem' }}>Quick Protocols (FAQ)</h3>
              
              <details className="faq-item">
                <summary className="faq-summary">
                  <span>What is typical response time?</span>
                  <span>+</span>
                </summary>
                <p className="faq-details">We aim to respond to all transmission packets within 4 business hours.</p>
              </details>

              <details className="faq-item">
                <summary className="faq-summary">
                  <span>Do you offer on-site demos?</span>
                  <span>+</span>
                </summary>
                <p className="faq-details">Yes. Please select "Sales" in the routing protocol to schedule a site visit.</p>
              </details>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}