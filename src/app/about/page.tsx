"use client";

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* --- REUSING CORE BRUTALIST STYLES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; color: #000; line-height: 1.4; overflow-x: hidden; }
        h1, h2, h3, h4, h5 { text-transform: uppercase; font-weight: 900; letter-spacing: -1px; }
        a { text-decoration: none; color: inherit; }
        section { border-bottom: 2px solid #000; }

        /* NAV */
        #eyebrow { background: #fff; border-bottom: 1px solid #000; padding: 8px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
        
        /* HEADER */
        .page-header { padding: 80px 40px; background: #fff; border-bottom: 2px solid #000; }
        .page-header h1 { font-size: 4rem; margin-bottom: 20px; }
        .page-header p { font-size: 1.2rem; max-width: 600px; opacity: 0.6; }

        /* PHILOSOPHY SECTION (Split Layout) */
        .philosophy-section { display: grid; grid-template-columns: 2fr 1fr; min-height: 500px; background: #f4f4f4; }
        .philo-text { padding: 60px; border-right: 2px solid #000; display: flex; flex-direction: column; justify-content: center; }
        .philo-sidebar { background: #eaf6ff; padding: 60px; display: flex; flex-direction: column; justify-content: center; color: #003a8c; }
        
        /* TEAM GRID (KAI Style) */
        .team-section { background: #fff; padding: 60px 40px; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1px; background: #000; border: 2px solid #000; margin-top: 40px; }
        .team-card { background: #fff; padding: 30px; display: flex; flex-direction: column; gap: 10px; transition: 0.2s; }
        .team-card:hover { background: #ffcc00; }
        .team-role { font-size: 0.7rem; font-weight: 900; text-transform: uppercase; opacity: 0.5; }
        .team-name { font-size: 1.2rem; font-weight: 900; }

        /* BLUE INFO BLOCK */
        .info-block { background: #003a8c; color: #fff; padding: 80px 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .info-links a { display: block; border: 1px solid rgba(255,255,255,0.3); padding: 15px; margin-bottom: 10px; font-weight: bold; transition: 0.2s; }
        .info-links a:hover { background: #fff; color: #003a8c; }

        /* PARTNERS (Small Grid) */
        .partners-section { padding: 40px; background: #fff; }
        .partners-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 2px solid #000; background: #000; gap: 1px; }
        .partner-box { background: #fff; padding: 40px; display: flex; align-items: center; justify-content: center; font-weight: bold; transition: 0.2s; }
        .partner-box:hover { background: #eee; }

        /* BOTTOM NAV */
        .bottom-nav { display: flex; justify-content: space-between; align-items: center; padding: 40px; background: #f7fbff; border-bottom: 2px solid #000; }
        .nav-btn { padding: 15px 30px; border: 2px solid #000; font-weight: 900; text-transform: uppercase; cursor: pointer; }
        .btn-blue { background: #3083fd; color: #fff; border-color: #3083fd; }
        
        /* FOOTER */
        .footer-main { background: #000; color: #fff; padding: 60px 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }

        @media (max-width: 900px) {
            .philosophy-section, .info-block { grid-template-columns: 1fr; }
            .philo-text { border-right: none; border-bottom: 2px solid #000; }
            .partners-grid { grid-template-columns: 1fr 1fr; }
        }
      `}} />

      <main>
        {/* --- NAVBAR --- */}
        <div id="eyebrow">
          <Link href="/" className="eyebrow-left">
            <span>← Return to Home</span>
          </Link>
          <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
            <li><a href="#">Join</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>

        {/* --- HEADER --- */}
        <header className="page-header">
          <h1>About Us</h1>
          <p>How we connect communities, our philosophy, and the team behind the work.</p>
        </header>

        {/* --- PHILOSOPHY (Layout based on your KAI images) --- */}
        <section className="philosophy-section">
          <div className="philo-text">
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Philosophy</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              We design with precision and purpose. Every detail matters — even a single millimeter can change how something feels and performs in daily life.
            </p>
            <p style={{ opacity: 0.6 }}>
              We imagine the user's life, iterate on small improvements, and never stop refining. That commitment to continuous improvement is the core of our design practice.
            </p>
          </div>
          <div className="philo-sidebar">
            <h3>Company Snapshot</h3>
            <p style={{ marginTop: '20px', fontWeight: 'bold' }}>Founded 1908</p>
            <p style={{ opacity: 0.8 }}>Rooted in craft, scaled for modern communities.</p>
          </div>
        </section>

        {/* --- TEAM GRID (Brutalist adaptation of KAI list) --- */}
        <section className="team-section">
          <h2>The Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <span className="team-role">Product Design / Lead</span>
              <span className="team-name">Jun Otsuka</span>
            </div>
            <div className="team-card">
              <span className="team-role">Graphic Design</span>
              <span className="team-name">Satoko Kusanagi</span>
            </div>
            <div className="team-card">
              <span className="team-role">Packaging</span>
              <span className="team-name">Daiki Sugita</span>
            </div>
            <div className="team-card">
              <span className="team-role">Product Design</span>
              <span className="team-name">Shinichi Ishikawa</span>
            </div>
            <div className="team-card">
              <span className="team-role">Graphic Design</span>
              <span className="team-name">Emi Akiyama</span>
            </div>
            <div className="team-card">
              <span className="team-role">Development</span>
              <span className="team-name">Yoshihiro W.</span>
            </div>
          </div>
        </section>

        {/* --- BLUE INFO BLOCK (Layout based on Image 004137) --- */}
        <section className="info-block">
          <div>
            <h2 style={{ borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '20px', marginBottom: '20px' }}>Company Overview</h2>
            <p style={{ lineHeight: 1.6 }}>
              We began as a small maker of tools and have grown into a company focused on improving everyday life through thoughtful product design and community-centered services. Our approach blends craft, research, and user empathy.
            </p>
          </div>
          <div className="info-links">
             <a href="#">Company Info →</a>
             <a href="#">Careers →</a>
             <a href="#">Press Kit →</a>
          </div>
        </section>

        {/* --- PARTNERS --- */}
        <section className="partners-section">
           <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Partners & Investors</h2>
           <div className="partners-grid">
             <div className="partner-box">LOGO 1</div>
             <div className="partner-box">LOGO 2</div>
             <div className="partner-box">LOGO 3</div>
             <div className="partner-box">LOGO 4</div>
           </div>
        </section>

        {/* --- BOTTOM NAV (Contextual) --- */}
        <section className="bottom-nav">
          <div style={{ display: 'flex', gap: '20px' }}>
             <Link href="/" className="nav-btn" style={{ background: '#fff' }}>Home</Link>
             <Link href="/contact" className="nav-btn btn-blue">Contact</Link>
          </div>
          <div style={{ fontWeight: 900, opacity: 0.4, textTransform: 'uppercase' }}>
            For Business • For Consumers
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="footer-main">
          <div><h3>+ daniel.inc</h3><p>Connecting communities.</p></div>
          <div><strong>CONTACT</strong><br/>hello@daniel.inc</div>
          <div><strong>SOCIAL</strong><br/>X / Instagram</div>
        </footer>

      </main>
    </>
  );
}