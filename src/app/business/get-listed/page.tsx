"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function GetListedPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { font-family: 'Courier New', Courier, monospace; background-color: #edeae7; color: #000; line-height: 1.4; overflow-x: hidden; }
        h1, h2, h3, h4 { text-transform: uppercase; font-weight: 900; letter-spacing: -1px; }
        section { border-bottom: 4px solid #000; padding: 60px 40px; background: #fff; }
        
        /* UTILS */
        .brutal-btn { display: inline-block; padding: 20px 40px; border: 4px solid #000; background: #000; color: #fff; font-weight: 900; text-transform: uppercase; text-decoration: none; transition: 0.2s; cursor: pointer; }
        .brutal-btn:hover { background: #fff; color: #000; }
        .brutal-btn.outline { background: #fff; color: #000; }
        .brutal-btn.outline:hover { background: #000; color: #fff; }

        /* HEADER & NAV */
        .top-nav-bar { position: sticky; top: 0; z-index: 50; background: #fff; border-bottom: 4px solid #000; padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; }
        .nav-toggle { cursor: pointer; font-weight: 900; font-size: 1.5rem; user-select: none; }
        .side-nav-overlay { position: fixed; top: 0; right: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.8); z-index: 90; display: ${isNavOpen ? 'block' : 'none'}; }
        .side-nav-menu { position: fixed; top: 0; right: 0; width: 300px; height: 100vh; background: #fff; border-left: 4px solid #000; z-index: 100; padding: 40px; transform: translateX(${isNavOpen ? '0' : '100%'}); transition: 0.3s; }

        /* HERO */
        .hero-section { background: #FF9500; min-height: 60vh; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; }
        .hero-title { font-size: 4rem; line-height: 1; margin-bottom: 20px; }

        /* VIDEO PLACEHOLDER */
        .video-container { position: relative; padding-bottom: 56.25%; /* 16:9 aspect ratio */ height: 0; overflow: hidden; border: 4px solid #000; background: #000; }
        .video-container iframe, .video-placeholder-content { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .video-placeholder-content { display: flex; align-items: center; justify-content: center; color: #fff; flex-direction: column; }

        /* GRID SYSTEMS */
        .grid-split-3 { display: grid; grid-template-columns: repeat(3, 1fr); border: 4px solid #000; }
        .grid-col { padding: 40px; border-right: 4px solid #000; background: #fff; }
        .grid-col:last-child { border-right: none; }
        
        .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 40px; }
        .feature-box { border: 4px solid #000; padding: 30px; background: #f4f4f4; }

        /* GEO-FENCING VISUAL */
        .geo-visual { height: 200px; background: #ddd; position: relative; overflow: hidden; border-bottom: 4px solid #000; margin-bottom: 20px; }
        .geo-circle { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px dashed #000; borderRadius: 50%; }
        
        /* FOOTER AREA */
        .footer-actions { background: #000; color: #fff; padding: 60px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .back-to-top { display: block; text-align: center; padding: 20px; background: #edeae7; border-top: 4px solid #000; font-weight: 900; text-transform: uppercase; cursor: pointer; }

        @media (max-width: 900px) {
            .hero-title { font-size: 3rem; }
            .grid-split-3, .feature-grid { grid-template-columns: 1fr; }
            .grid-col { border-right: none; border-bottom: 4px solid #000; }
        }
      `}} />

      {/* --- COLLAPSIBLE HEADER & NAV --- */}
      <div className="top-nav-bar">
        <Link href="/" style={{ fontWeight: 900, textDecoration: 'underline' }}>
          ← BACK TO HOME
        </Link>
        <div className="nav-toggle" onClick={toggleNav}>
          [ MENU ]
        </div>
      </div>

      {/* SIDEBAR MENU */}
      <div className="side-nav-overlay" onClick={toggleNav}></div>
      <div className="side-nav-menu">
        <div className="nav-toggle" onClick={toggleNav} style={{ marginBottom: '40px', textAlign: 'right' }}>
          [ CLOSE X ]
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase' }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/explore">Explore Map</Link></li>
          <li><Link href="/contact">Contact Support</Link></li>
        </ul>
      </div>

      <main>
        {/* --- 1. HERO SECTION --- */}
        <section className="hero-section">
          <h1 className="hero-title">Plug Into The<br/>Local Grid.</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '40px', fontWeight: 'bold' }}>
            Stop relying on algorithms that hide you. Get verified, get listed, and connect directly with the community around you.
          </p>
          <Link href="/business/register" className="brutal-btn">
            START REGISTRATION PROTOCOL
          </Link>
        </section>

        {/* --- 2. VIDEO EXPLAINER --- */}
        <section style={{ padding: '0' }}>
            <div className="video-container">
                {/* REPLACE THE DIV BELOW WITH YOUR YOUTUBE EMBED CODE WHEN READY */}
                {/* Example: <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
                <div className="video-placeholder-content">
                    <span style={{ fontSize: '5rem' }}>▶</span>
                    <h2 style={{ marginTop: '20px' }}>SYSTEM BRIEFING: HOW IT WORKS</h2>
                    <p style={{ opacity: 0.7 }}>[Video Placeholder - Watch before registering]</p>
                </div>
            </div>
        </section>

        {/* --- 3. HOW IT WORKS STEPS --- */}
        <section>
            <h2 style={{ marginBottom: '40px', fontSize: '2.5rem' }}>Operational Sequence</h2>
            <div className="grid-split-3">
                <div className="grid-col">
                    <span style={{ fontSize: '4rem', fontWeight: 900, opacity: 0.2, display: 'block' }}>01</span>
                    <h3>Register & Verify</h3>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Complete the security protocol.</p>
                    <p style={{ opacity: 0.7 }}>We verify your physical location to ensure network integrity. No fake listings allowed.</p>
                </div>
                <div className="grid-col">
                    <span style={{ fontSize: '4rem', fontWeight: 900, opacity: 0.2, display: 'block' }}>02</span>
                    <h3>Access Build Area</h3>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Enter your business dashboard.</p>
                    <p style={{ opacity: 0.7 }}>Once verified, you gain access to subscription tools, profile management, and analytics.</p>
                </div>
                <div className="grid-col">
                    <span style={{ fontSize: '4rem', fontWeight: 900, opacity: 0.2, display: 'block' }}>03</span>
                    <h3>Deploy & Engage</h3>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Broadcast to the local grid.</p>
                    <p style={{ opacity: 0.7 }}>Use chat features and localized deal engines to connect with nearby users immediately.</p>
                </div>
            </div>
        </section>

        {/* --- 4. FEATURES & FUTURE SUBSCRIPTIONS --- */}
        <section style={{ background: '#f4f4f4' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Build Area: Features & Subscriptions</h2>
            <p style={{ maxWidth: '800px', marginTop: '20px', marginBottom: '40px', fontWeight: 'bold' }}>
                Upon successful registration, you unlock the "Build Area." This is where you manage your presence and upgrade your node capabilities.
            </p>

            <div className="feature-grid">
                {/* Feature 1: The Basics */}
                <div className="feature-box" style={{ background: '#fff' }}>
                    <h3>Core Node (Included)</h3>
                    <ul style={{ marginTop: '20px', marginLeft: '20px', opacity: 0.8, lineHeight: 1.6 }}>
                        <li>Verified Map Listing</li>
                        <li>Basic Business Profile</li>
                        <li>Standard Search Visibility</li>
                    </ul>
                </div>

                 {/* Feature 2: Chat */}
                 <div className="feature-box" style={{ background: '#0066cc', color: '#fff' }}>
                    <h3>Direct Comms Link (Chat)</h3>
                    <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Stop losing leads to slow email forms.</p>
                    <p style={{ opacity: 0.8, marginTop: '10px' }}>Real-time chat protocol allowing users to ask questions and book services directly through your profile.</p>
                </div>

                {/* Feature 3: Localized Deals (The Complex One) */}
                <div className="feature-box" style={{ gridColumn: '1 / -1', background: '#FF9500', padding: '0' }}>
                    <div className="geo-visual">
                        {/* Abstract visualization of geo-fencing */}
                        <div className="geo-circle" style={{ width: '100px', height: '100px', background: '#fff', zIndex: 2 }}></div>
                        <div className="geo-circle" style={{ width: '300px', height: '300px', background: 'rgba(255,255,255,0.4)', zIndex: 1 }}></div>
                        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 900, zIndex: 3 }}>YOU ARE HERE</span>
                         <span style={{ position: 'absolute', bottom: '10px', right: '10px', fontWeight: 900, fontSize: '0.8rem' }}>GEO-FENCE VISUALIZATION //</span>
                    </div>
                    <div style={{ padding: '40px' }}>
                        <h3>Hyper-Local Deals Engine</h3>
                        <p style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '1.1rem' }}>Proximity-Based Promotion Protocol.</p>
                        <p style={{ marginTop: '10px', lineHeight: 1.6 }}>
                            Your deals only broadcast to users physically located within your immediate vicinity or surrounding zones. 
                            <br/><br/>
                            <strong>The Logic:</strong> Users see what is *actually* near them first. They will only see your distant listing if they manually override the system by selecting "VIEW ALL" and filtering by name/distance. This ensures high-intent local traffic.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 5. FINAL CTA --- */}
        <section style={{ textAlign: 'center', padding: '100px 40px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '40px' }}>Ready To Initialize?</h2>
            <p style={{ marginBottom: '40px', fontWeight: 'bold' }}>Understanding the protocols above, proceed to registration.</p>
            <Link href="/business/register" className="brutal-btn" style={{ fontSize: '1.5rem' }}>
                REGISTER BUSINESS NODE →
            </Link>
        </section>
      </main>

      {/* --- FOOTER ACTIONS --- */}
      <div className="footer-actions">
        <div>
            <h3>Need Intel?</h3>
            <p style={{ opacity: 0.7 }}>Contact our deployment team before registering.</p>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="brutal-btn outline">
                CONTACT US
            </Link>
            <button className="brutal-btn outline">
                REQUEST SITE VISIT
            </button>
        </div>
      </div>

      {/* --- BACK TO TOP --- */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑ Back To Top Protocol ↑
      </div>
    </>
  );
}