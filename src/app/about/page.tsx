"use client";

import React, { useState } from 'react';
import Link from 'next/link';

// Helper Component for Collapsible Sections
const Section = ({ title, children, isOpen, onToggle, id }: any) => {
  return (
    <div id={id} className="brutalist-section">
      <div className="section-header" onClick={onToggle}>
        <h2>{title}</h2>
        <div className="toggle-icon">
          {isOpen ? "[-]" : "[+]"}
        </div>
      </div>
      {/* CSS-based toggle for smooth feeling or simple conditional rendering */}
      <div className={`section-content ${isOpen ? 'open' : 'closed'}`}>
        {children}
      </div>
    </div>
  );
};

export default function AboutPage() {
  // --- STATE MANAGEMENT ---
  // Default: All sections open
  const [sections, setSections] = useState({
    mission: true,
    story: true,
    overview: true,
    philosophy: true,
    values: true,
    team: true,
    impact: true,
    partners: true,
    testimonials: true,
    contact: true
  });

  // Global Toggle State
  const [isGlobalExpanded, setIsGlobalExpanded] = useState(true);

  // Handlers
  const toggleSection = (key: string) => {
    setSections((prev: any) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAll = () => {
    const newState = !isGlobalExpanded;
    setIsGlobalExpanded(newState);
    // Set all keys to the new state
    const newSections = Object.keys(sections).reduce((acc: any, key) => {
      acc[key] = newState;
      return acc;
    }, {});
    setSections(newSections);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; color: #000; line-height: 1.4; overflow-x: hidden; }
        h1, h2, h3, h4, h5 { text-transform: uppercase; font-weight: 900; letter-spacing: -1px; }
        a { text-decoration: none; color: inherit; }
        
        /* LAYOUT UTILS */
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1px; background: #000; border: 2px solid #000; }
        
        /* NAV & HEADER */
        #eyebrow { background: #fff; border-bottom: 2px solid #000; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; position: sticky; top: 0; z-index: 50; }
        .page-header { padding: 80px 40px; background: #fff; border-bottom: 2px solid #000; }
        .page-header h1 { font-size: clamp(3rem, 5vw, 6rem); line-height: 0.9; margin-bottom: 20px; }
        .page-header p { font-size: 1.2rem; max-width: 600px; opacity: 0.6; }

        /* COLLAPSIBLE SECTIONS */
        .brutalist-section { background: #fff; border-bottom: 2px solid #000; }
        .section-header { 
          padding: 30px 40px; 
          cursor: pointer; 
          display: flex; 
          justify-content: space-between; 
          align-items: center; 
          transition: 0.2s;
        }
        .section-header:hover { background: #f0f0f0; }
        .section-header h2 { font-size: 1.8rem; margin: 0; }
        .toggle-icon { font-size: 1.5rem; font-weight: 900; }
        
        .section-content { overflow: hidden; }
        .section-content.closed { display: none; }
        .section-content.open { display: block; padding: 0 40px 60px 40px; animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

        /* --- 1. MISSION & VISION --- */
        .mission-box { background: #000; color: #fff; padding: 60px; margin-top: 20px; }
        .mv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; border-top: 1px solid #333; padding-top: 40px; margin-top: 40px; }
        
        /* --- 5. PHILOSOPHY --- */
        .philo-layout { display: grid; grid-template-columns: 2fr 1fr; gap: 40px; }
        .philo-sidebar { background: #eaf6ff; padding: 40px; color: #003a8c; border: 2px solid #003a8c; }

        /* --- 6. CORE VALUES --- */
        .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .value-card { border: 2px solid #000; padding: 20px; background: #fff; box-shadow: 8px 8px 0 #000; transition: 0.2s; }
        .value-card:hover { transform: translate(-4px, -4px); box-shadow: 12px 12px 0 #000; }

        /* --- 7. TEAM (Photos) --- */
        .team-card { background: #fff; padding: 30px; display: flex; flex-direction: column; gap: 15px; }
        .team-photo { width: 100%; aspect-ratio: 1; background: #ddd; border: 2px solid #000; position: relative; overflow: hidden; }
        .team-photo img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.3s; }
        .team-photo:hover img { filter: grayscale(0%); }
        .team-role { font-size: 0.7rem; font-weight: 900; text-transform: uppercase; opacity: 0.5; }

        /* --- 8. IMPACT (Stats) --- */
        .impact-grid { display: grid; grid-template-columns: repeat(4, 1fr); background: #ffcc00; border: 2px solid #000; }
        .stat-box { padding: 40px; border-right: 2px solid #000; text-align: center; }
        .stat-box:last-child { border-right: none; }
        .stat-num { font-size: 3rem; font-weight: 900; }

        /* --- 9. PARTNERS (Smaller Grid) --- */
        .partners-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); border: 2px solid #000; background: #000; gap: 1px; }
        .partner-box { background: #fff; padding: 20px; aspect-ratio: 3/2; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.7rem; }

        /* --- 10. TESTIMONIALS --- */
        .testi-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        .testi-card { background: #f4f4f4; border-left: 4px solid #000; padding: 30px; font-style: italic; }

        /* --- 11. CONTACT --- */
        .contact-bar { background: #3083fd; color: #fff; padding: 60px; text-align: center; }
        .contact-btn { background: #000; color: #fff; padding: 15px 40px; font-weight: bold; display: inline-block; margin-top: 20px; border: 2px solid #fff; }

        /* --- FOOTER --- */
        .footer-main { background: #000; color: #fff; padding: 80px 40px; }
        .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 60px; margin-bottom: 60px; }
        .footer-col h4 { color: #888; margin-bottom: 20px; font-size: 0.8rem; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 10px; }
        .footer-col a:hover { text-decoration: underline; color: #ffcc00; }
        .footer-bottom { border-top: 1px solid #333; padding-top: 20px; display: flex; justify-content: space-between; font-size: 0.8rem; color: #666; }

        @media (max-width: 900px) {
            .grid-2, .philo-layout, .mv-grid, .testi-grid { grid-template-columns: 1fr; }
            .impact-grid { grid-template-columns: 1fr 1fr; }
            .stat-box { border-bottom: 2px solid #000; }
            .section-header h2 { font-size: 1.4rem; }
        }
      `}} />

      <main>
        {/* --- NAVBAR --- */}
        <div id="eyebrow">
          <Link href="/" className="eyebrow-left">
            <span>← Return to Home</span>
          </Link>
          
          {/* GLOBAL COLLAPSE TOGGLE */}
          <button 
            onClick={toggleAll}
            style={{ 
              background: 'none', 
              border: '2px solid #000', 
              padding: '5px 15px', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              fontSize: '10px',
              textTransform: 'uppercase'
            }}
          >
            {isGlobalExpanded ? "Collapse All [-]" : "Expand All [+]"}
          </button>
        </div>

        <header className="page-header">
          <h1>Who We Are</h1>
          <p>Connecting communities, empowering local businesses, and building the future of local commerce.</p>
        </header>

        {/* --- 2. MISSION & VISION --- */}
        <Section 
          id="mission"
          title="01. Mission & Vision" 
          isOpen={sections.mission} 
          onToggle={() => toggleSection('mission')}
        >
          <div className="mission-box">
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>We bridge the gap between digital convenience and real-world connection.</h3>
            <div className="mv-grid">
              <div>
                <h4 style={{ color: '#888', marginBottom: '10px' }}>Our Mission</h4>
                <p>To provide a decentralized, transparent platform where local businesses thrive and community members find trusted services instantly. We eliminate the noise of global algorithms to focus on hyper-local value.</p>
              </div>
              <div>
                <h4 style={{ color: '#888', marginBottom: '10px' }}>Our Vision</h4>
                <p>A future where every neighborhood is a self-sustaining micro-economy, powered by technology that puts people before profit margins.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* --- 3. OUR STORY --- */}
        <Section 
          title="02. The Journey" 
          isOpen={sections.story} 
          onToggle={() => toggleSection('story')}
        >
          <div className="grid-2">
            <div>
              <h3 style={{ marginBottom: '20px' }}>It started with a broken search.</h3>
              <p style={{ marginBottom: '20px' }}>In 2023, we realized that finding a reliable plumber or a local coffee shop online had become a nightmare of sponsored ads and irrelevant results. The "local" internet wasn't local anymore.</p>
              <p>We gathered a small team of engineers and community leaders in a garage (cliché, but true) to build something different. A directory that verifies listing locations physically, ensuring that when you search "near me," it actually means near you.</p>
            </div>
            <div style={{ background: '#ddd', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #000' }}>
              [ ARCHIVE PHOTO: FOUNDING TEAM 2023 ]
            </div>
          </div>
        </Section>

        {/* --- 4. COMPANY OVERVIEW --- */}
        <Section 
          title="03. What We Do" 
          isOpen={sections.overview} 
          onToggle={() => toggleSection('overview')}
        >
          <div className="grid-2">
            <p className="text-lg">We operate a dual-sided platform: a discovery engine for residents and a growth suite for businesses. By verifying every entity on our grid, we create a circle of trust that is missing from major social platforms.</p>
            <ul style={{ listStyle: 'square', paddingLeft: '20px', lineHeight: '2' }}>
              <li><strong>Hyper-Local Search:</strong> Geo-fenced results.</li>
              <li><strong>Business Suite:</strong> Analytics, CRM, and Booking.</li>
              <li><strong>Community Deals:</strong> Real-time local promotions.</li>
            </ul>
          </div>
        </Section>

        {/* --- 5. PHILOSOPHY --- */}
        <Section 
          title="04. Philosophy" 
          isOpen={sections.philosophy} 
          onToggle={() => toggleSection('philosophy')}
        >
          <div className="philo-layout">
            <div>
              <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>We design with precision. Every pixel, every interaction is crafted to reduce friction between a need and a solution.</p>
              <p>We believe technology should be invisible. It should work so well that you forget you're using an app, and just feel like you're part of a community.</p>
            </div>
            <div className="philo-sidebar">
              <h4>Core Belief</h4>
              <p style={{ marginTop: '10px' }}>"Local is not a feature. Local is the foundation."</p>
            </div>
          </div>
        </Section>

        {/* --- 6. CORE VALUES --- */}
        <Section 
          title="05. Our Values" 
          isOpen={sections.values} 
          onToggle={() => toggleSection('values')}
        >
          <div className="values-grid">
            <div className="value-card">
              <h4>Transparency</h4>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>No hidden fees, no shadow algorithms. What you see is what is real.</p>
            </div>
            <div className="value-card">
              <h4>Community First</h4>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>We prioritize features that build connections over features that drive addiction.</p>
            </div>
            <div className="value-card">
              <h4>Craftsmanship</h4>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>We don't ship broken code. We build tools that last.</p>
            </div>
            <div className="value-card">
              <h4>Inclusivity</h4>
              <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>Technology should be accessible to the mom-and-pop shop and the tech startup alike.</p>
            </div>
          </div>
        </Section>

        {/* --- 7. TEAM --- */}
        <Section 
          title="06. Meet The Team" 
          isOpen={sections.team} 
          onToggle={() => toggleSection('team')}
        >
          <p style={{ marginBottom: '40px' }}>A diverse group of designers, developers, and localists.</p>
          <div className="grid-3 team-grid">
            <div className="team-card">
              <div className="team-photo">
                {/* Replace src with real images */}
                <img src="/api/placeholder/400/400" alt="Team Member" />
              </div>
              <div>
                <span className="team-role">Founder / CEO</span>
                <h3 className="team-name">Jun Otsuka</h3>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Visionary behind the localized grid algorithm.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/api/placeholder/400/400" alt="Team Member" />
              </div>
              <div>
                <span className="team-role">Head of Product</span>
                <h3 className="team-name">Satoko Kusanagi</h3>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Ensuring every click feels intuitive.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/api/placeholder/400/400" alt="Team Member" />
              </div>
              <div>
                <span className="team-role">Community Lead</span>
                <h3 className="team-name">Daiki Sugita</h3>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>The voice of our users.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img src="/api/placeholder/400/400" alt="Team Member" />
              </div>
              <div>
                <span className="team-role">Lead Engineer</span>
                <h3 className="team-name">Emi Akiyama</h3>
                <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>Building the backbone.</p>
              </div>
            </div>
          </div>
        </Section>

        {/* --- 8. IMPACT --- */}
        <Section 
          title="07. Our Impact" 
          isOpen={sections.impact} 
          onToggle={() => toggleSection('impact')}
        >
          <div className="impact-grid">
            <div className="stat-box">
              <div className="stat-num">50k+</div>
              <p>Active Users</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">1.2M</div>
              <p>Connections Made</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">800+</div>
              <p>Cities Live</p>
            </div>
            <div className="stat-box">
              <div className="stat-num">$5M</div>
              <p>Local Rev Generated</p>
            </div>
          </div>
        </Section>

        {/* --- 9. PARTNERS --- */}
        <Section 
          title="08. Partners & Investors" 
          isOpen={sections.partners} 
          onToggle={() => toggleSection('partners')}
        >
          <p style={{ marginBottom: '20px' }}>Supported by those who believe in the power of local.</p>
          <div className="partners-grid">
            {/* Generating 12 smaller blocks as requested */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="partner-box">PARTNER {i + 1}</div>
            ))}
          </div>
        </Section>

        {/* --- 10. TESTIMONIALS --- */}
        <Section 
          title="09. Voices" 
          isOpen={sections.testimonials} 
          onToggle={() => toggleSection('testimonials')}
        >
          <div className="testi-grid">
            <div className="testi-card">
              <p className="mb-4">"Finally, a platform that doesn't feel like a slot machine. I found a contractor in 5 minutes and he was actually local."</p>
              <strong>- Sarah J. (Homeowner)</strong>
            </div>
            <div className="testi-card">
              <p className="mb-4">"Since listing our bakery here, our weekend foot traffic has doubled. The community features are a game changer."</p>
              <strong>- Mike R. (Business Owner)</strong>
            </div>
          </div>
        </Section>

        {/* --- 11. CONTACT CTA --- */}
        <div className="contact-bar">
          <h2>Ready to join the movement?</h2>
          <p>Whether you're a user, business, or investor, there's a place for you here.</p>
          <Link href="/contact" className="contact-btn">GET IN TOUCH</Link>
        </div>

        {/* --- FOOTER --- */}
        <footer className="footer-main">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>+ daniel.inc</h3>
              <p style={{ marginTop: '20px', color: '#888' }}>
                Building the digital infrastructure for real-world communities.
              </p>
            </div>
            <div className="footer-col">
              <h4>QUICK LINKS</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>LEGAL</h4>
              <ul>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>CONTACT</h4>
              <ul>
                <li>hello@daniel.inc</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Innovation Dr, Tech City</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 daniel.inc. All rights reserved.</span>
            <span>Built with ❤️ in South Africa</span>
          </div>
        </footer>

      </main>
    </>
  );
}