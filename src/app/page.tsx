"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link'; //

export default function DanielIncPlatform() {
  // --- CAROUSEL LOGIC (Unchanged) ---
  const slides = [
    { name: "A Word From Our Director", desc: "We built this platform to bridge the gap between digital convenience and real-world community connection." },
    { name: "Head of Product", desc: "Our latest update focuses on speed and reliability for local searches." }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (n: number) => {
    setCurrentSlide((prev) => (prev + n + slides.length) % slides.length);
  };

  // --- POPUP & MODAL LOGIC (Unchanged) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popup, setPopup] = useState({ 
    display: 'none', 
    top: 0, 
    left: 0, 
    title: '', 
    desc: '' 
  });
  
  const popupTimer = useRef<NodeJS.Timeout | null>(null);

  const showPopup = (e: React.MouseEvent<HTMLDivElement>, title: string, desc: string) => {
    if (popupTimer.current) clearTimeout(popupTimer.current);
    const rect = e.currentTarget.getBoundingClientRect();
    
    setPopup({
      display: 'block',
      top: rect.top + window.scrollY - 100, 
      left: rect.left + window.scrollX,
      title,
      desc
    });
  };

  const hidePopup = () => {
    popupTimer.current = setTimeout(() => {
      setPopup(prev => ({ ...prev, display: 'none' }));
    }, 300);
  };

  const expandModal = () => {
    setIsModalOpen(true);
    setPopup(prev => ({ ...prev, display: 'none' }));
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* --- CSS BLOCK (Unchanged Styles) --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; color: #000; line-height: 1.4; overflow-x: hidden; }
        h1, h2, h3, h4, h5 { text-transform: uppercase; font-weight: 900; letter-spacing: -1px; }
        a { text-decoration: none; color: inherit; }
        section { border-bottom: 2px solid #000; }

        #eyebrow { background: #fff; border-bottom: 1px solid #ddd; padding: 8px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; }
        .hero-split { display: grid; grid-template-columns: 1fr 1fr; min-height: 60vh; background: #fff; }
        .hero-half { padding: 60px 40px; display: flex; flex-direction: column; justify-content: center; border-right: 2px solid #000; position: relative; overflow: hidden; }
        .hero-half:last-child { border-right: none; background: #f0f0f0; }
        .hero-img-placeholder { position: absolute; top:0; left:0; width: 100%; height: 100%; background: #ccc; opacity: 0.2; z-index: 0; }
        .hero-content { position: relative; z-index: 2; }
        
        /* Updated button class to work with Next/Link */
        .hero-btn { display: inline-block; margin-top: 20px; padding: 15px 30px; border: 2px solid #000; font-weight: bold; background: #fff; transition: 0.2s; cursor: pointer; color: #000; }
        .hero-btn:hover { background: #000; color: #fff; }

        .stats-section { background: #ff9d00; padding: 40px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .stat-card { padding: 30px; border: 2px solid #000; background: #fff; box-shadow: 5px 5px 0 #000; }
        .stat-number { font-size: 4rem; font-weight: 900; line-height: 1; margin-bottom: 10px; }

        .video-section { display: flex; background: #000; color: #fff; min-height: 450px; flex-wrap: wrap; }
        .video-player-container { flex: 3; min-width: 300px; position: relative; background: #111; display: flex; align-items: center; justify-content: center; border-right: 1px solid #333; }
        .video-placeholder { width: 100%; height: 100%; background: #222; display: flex; align-items: center; justify-content: center; font-size: 40px; }
        .video-desc-box { flex: 2; min-width: 250px; padding: 40px; display: flex; flex-direction: column; justify-content: center; }
        .nav-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: #000; color: #fff; border: 1px solid #fff; padding: 15px; cursor: pointer; z-index: 10; }
        .nav-arrow:hover { background: #fff; color: #000; }

        .features-area { padding: 60px 40px; background: #fff; }
        .flex-grid-container { display: flex; flex-wrap: wrap; border: 2px solid #000; margin-top: 20px; }
        .feature-block { flex: 1 1 50%; min-width: 300px; }
        .feature-block-header { background: #000; color: #fff; padding: 15px 20px; border-bottom: 2px solid #000; border-right: 2px solid #000; }
        .feature-block:last-child .feature-block-header, .feature-block:last-child .flex-grid-items .feature-card { border-right: none; }
        .flex-grid-items { display: flex; flex-wrap: wrap; }
        .feature-card { flex: 1; min-width: 150px; background: #e0e0e0; padding: 20px; border-right: 1px solid #000; border-bottom: 1px solid #000; transition: 0.2s; height: 150px; }
        .feature-card:hover { background: #ffcc00; color: #000; }
        .feature-card h4 { font-size: 1.5rem; opacity: 0.4; }

        .interactive-blue { background: linear-gradient(180deg, #4a76a8 0%, #2a4e78 100%); color: white; padding: 80px 40px; position: relative; }
        .blue-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        .feature-tag-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
        .tag { border: 1px solid rgba(255,255,255,0.4); padding: 8px 15px; cursor: pointer; position: relative; font-size: 13px; }
        .tag:hover { background: #fff; color: #2a4e78; }
        .tag.soon { color: #aaa; border-color: #666; cursor: not-allowed; opacity: 0.6; }

        .feature-popup { position: absolute; background: #fff; color: #000; padding: 20px; width: 250px; border: 2px solid #000; z-index: 100; box-shadow: 10px 10px 0px #000; }
        .expanded-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; }
        .modal-content { background: #fff; width: 100%; max-width: 600px; padding: 40px; position: relative; color: #000; border: 2px solid #000; box-shadow: 20px 20px 0 #000; }
        .close-btn { position: absolute; top: 0; right: 0; cursor: pointer; font-weight: bold; border-left: 2px solid #000; border-bottom: 2px solid #000; padding: 10px 15px; background: #ffcc00; }

        .testimony { padding: 80px 40px; background: #fff; text-align: center; }
        .testimony-container { max-width: 800px; margin: 40px auto 0; border: 2px solid #000; padding: 20px; }
        .testimony-media { width: 100%; height: 400px; background: #ddd; display: flex; align-items: center; justify-content: center; border: 1px solid #000; margin-bottom: 20px; }
        .testimony-info h3 { margin-bottom: 5px; }
        .testimony-desc { margin-top: 15px; font-style: italic; }
        .is-video .testimony-desc { display: none; }

        .partners-section { padding: 40px; background: #fff; }
        .partners-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); border: 2px solid #000; background: #000; gap: 1px; }
        .partner-box { background: #fff; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.8rem; transition: 0.2s; }
        .partner-box:hover { background: #eee; }

        .cta-yellow { background: #ffcc00; padding: 50px 40px; text-align: center; border-top: 2px solid #000; }
        .cta-buttons { margin-top: 30px; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        
        /* Updated CTA buttons to work with Next/Link */
        .cta-btn-main { display: inline-block; padding: 15px 30px; border: 2px solid #000; background: #000; color: #ffcc00; font-weight: bold; }
        .cta-btn-sec { display: inline-block; padding: 15px 30px; border: 2px solid #000; background: transparent; color: #000; font-weight: bold; }

        .footer-main { background: #000; color: #fff; padding: 60px 40px; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; }
      `}} />

      <main>
        {/* --- 1. UPDATED EYEBROW NAV --- */}
        <div id="eyebrow">
          <Link href="/" className="eyebrow-left" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <svg width="12" height="12"><rect width="12" height="12" fill="#3083FD"/></svg>
            <span>Connecting communities & empowering local businesses.</span>
          </Link>
          <ul className="eyebrow-right" style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/business/login">Join / Login</Link></li>
            <li><Link href="/business/get-listed" style={{ fontWeight: 'bold' }}>Register Business</Link></li>
            <li><Link href="/explore" style={{ textDecoration: 'underline' }}>Explore Map</Link></li>
          </ul>
        </div>

        {/* --- 2. HERO --- */}
        <section className="hero-split">
          <div className="hero-half">
            <div className="hero-img-placeholder"></div> 
            <div className="hero-content">
              <h1>Find Local Businesses</h1>
              <p>Discover hidden gems and trusted services in your community right now.</p>
              {/* Linked to Explore Page */}
              <Link href="/explore" className="hero-btn">EXPLORE NOW</Link>
            </div>
          </div>
          <div className="hero-half">
            <div className="hero-img-placeholder" style={{ background: '#aaa' }}></div>
            <div className="hero-content">
              <h1>List Your Business</h1>
              <p>Reach more local customers and grow your presence effortlessly.</p>
              {/* Linked to Get Listed Page */}
              <Link href="/business/get-listed" className="hero-btn" style={{ background: '#000', color: '#fff' }}>GET LISTED</Link>
            </div>
          </div>
        </section>

        {/* --- 3. STATS --- */}
        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">150k+</div>
              <p>Local connections made this month.</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">85%</div>
              <p>Of businesses reported increased foot traffic.</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <p>Cities currently active on the platform.</p>
            </div>
          </div>
        </section>

        {/* --- 4. VIDEO CAROUSEL --- */}
        <section className="video-section">
          <div className="video-player-container">
            <button className="nav-arrow" style={{ left: 0 }} onClick={() => changeSlide(-1)}>&#8249;</button>
            <div className="video-placeholder">▶ {slides[currentSlide].name}</div>
            <button className="nav-arrow" style={{ right: 0 }} onClick={() => changeSlide(1)}>&#8250;</button>
          </div>
          <div className="video-desc-box">
            <h3>{slides[currentSlide].name}</h3>
            <p>{slides[currentSlide].desc}</p>
            <p style={{ marginTop: '20px', opacity: 0.6 }}>Jane Doe / CEO</p>
          </div>
        </section>

        {/* --- 7. PLATFORM FEATURES SECTION --- */}
        <section className="features-area">
          <h2>Platform Features</h2>
          <div className="flex-grid-container">
              <div className="feature-block">
                  <div className="feature-block-header">
                      <h3>For Users</h3>
                      <p>Tools to find exactly what you need, fast.</p>
                  </div>
                  <div className="flex-grid-items">
                      <div className="feature-card"><h4>1</h4>Search & Filter</div>
                      <div className="feature-card"><h4>2</h4>Verified Reviews</div>
                      <div className="feature-card"><h4>3</h4>Direct Chat</div>
                      <div className="feature-card"><h4>4</h4>Save Lists</div>
                  </div>
              </div>
              <div className="feature-block">
                  <div className="feature-block-header">
                      <h3>For Businesses</h3>
                      <p>Everything you need to manage and expand.</p>
                  </div>
                  <div className="flex-grid-items">
                      <div className="feature-card"><h4>1</h4>Pro Profile</div>
                      <div className="feature-card"><h4>2</h4>Analytics Dashboard</div>
                      <div className="feature-card"><h4>3</h4>Lead Manager</div>
                      <div className="feature-card"><h4>4</h4>Promo Tools</div>
                  </div>
              </div>
          </div>
        </section>

        {/* --- 8. INTERACTIVE BLUE BLOCK --- */}
        <section className="interactive-blue">
          <div className="blue-grid">
            <div>
              <h2>Explore Tools</h2>
              <div className="feature-tag-list">
                <div className="tag" 
                     onMouseEnter={(e) => showPopup(e, 'Smart Search', 'AI-driven search results.')} 
                     onMouseLeave={hidePopup}>Smart Search</div>
                <div className="tag" 
                     onMouseEnter={(e) => showPopup(e, 'Price Compare', 'Compare service quotes.')} 
                     onMouseLeave={hidePopup}>Price Compare</div>
                <div className="tag" 
                     onMouseEnter={(e) => showPopup(e, 'Instant Booking', 'Schedule appointments directly.')} 
                     onMouseLeave={hidePopup}>Instant Booking</div>
                <div className="tag soon">AI Assistant</div>
              </div>
            </div>
            <div>
               <h2>Business Suite</h2>
               <div className="feature-tag-list">
                   <div className="tag" onMouseEnter={(e) => showPopup(e, 'Live Dashboard', 'Real-time metrics.')} onMouseLeave={hidePopup}>Live Dashboard</div>
                   <div className="tag" onMouseEnter={(e) => showPopup(e, 'Targeted Ads', 'Hyper-local campaigns.')} onMouseLeave={hidePopup}>Targeted Ads</div>
                   <div className="tag soon">Auto-Invoicing</div>
               </div>
            </div>
          </div>

          {/* DYNAMIC POPUP */}
          <div className="feature-popup" style={{ 
            display: popup.display, 
            top: popup.top, 
            left: popup.left 
          }}
          onMouseEnter={() => { if (popupTimer.current) clearTimeout(popupTimer.current); }}
          onMouseLeave={hidePopup}>
            <strong>{popup.title}</strong>
            <p style={{ fontSize: '11px', marginTop: '5px' }}>{popup.desc}</p>
            <span style={{ cursor: 'pointer', textDecoration: 'underline', color: '#0055ff', fontSize: '11px', display: 'block', marginTop: '10px' }} 
                  onClick={expandModal}>..more</span>
          </div>
        </section>

        {/* --- MODAL --- */}
        {isModalOpen && (
          <div className="expanded-modal">
            <div className="modal-content">
              <span className="close-btn" onClick={closeModal}>CLOSE X</span>
              <h2>{popup.title} Detail</h2>
              <p style={{ marginTop: '20px' }}>Detailed description of {popup.title} goes here.</p>
            </div>
          </div>
        )}

        {/* --- 9. SUCCESS STORIES SECTION --- */}
        <section className="testimony">
            <h2>Success Stories</h2>
            <p>See how locals are thriving.</p>
            
            <div className="testimony-container">
                <div className="testimony-media" style={{ background: "#ddd url('placeholder-image.jpg') center/cover" }}>IMAGE PLACEHOLDER</div>
                <div className="testimony-info">
                    <h3>The Local Coffee Co.</h3>
                    <p>Client: Sarah M. (Owner, 34)</p>
                </div>
                <p className="testimony-desc">"Since joining, our weekend foot traffic doubled. The local visibility tools are incredible."</p>
            </div>

            <div className="testimony-container is-video" style={{ marginTop: '40px' }}>
                <div className="testimony-media" style={{ background: '#111', color: '#fff' }}>▶ VIDEO PLACEHOLDER</div>
                <div className="testimony-info">
                    <h3>MetroTech Repair Services</h3>
                    <p>Client: David K. (Lead Tech, 29)</p>
                </div>
                <p className="testimony-desc">"Video testimonials don't need text descriptions."</p>
            </div>
        </section>

        {/* --- 10. PARTNERS SECTION --- */}
        <section className="partners-section">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Our Partners</h2>
            <div className="partners-grid">
                <a href="#" className="partner-box">LOGO 1</a>
                <a href="#" className="partner-box">LOGO 2</a>
                <a href="#" className="partner-box">LOGO 3</a>
                <a href="#" className="partner-box">LOGO 4</a>
                <a href="#" className="partner-box">LOGO 5</a>
                <a href="#" className="partner-box">LOGO 6</a>
                <a href="#" className="partner-box">LOGO 7</a>
                <a href="#" className="partner-box">LOGO 8</a>
            </div>
        </section>

        {/* --- 12. FINAL CTA & FOOTER --- */}
        <div className="cta-yellow">
          <h2>Ready To Grow Your Community Presence?</h2>
          <div className="cta-buttons">
            <Link href="/business/get-listed" className="cta-btn-main">APPLY FOR BUSINESS</Link>
            <Link href="/explore" className="cta-btn-sec">EXPLORE FOR USERS</Link>
          </div>
        </div>

        <footer className="footer-main">
          <div><h3>+ daniel.inc</h3><p>Connecting communities.</p></div>
          <div><strong>QUICK LINKS</strong><br/><Link href="/about">About Us</Link></div>
          <div><strong>SOCIAL</strong><br/>X / Instagram</div>
        </footer>
      </main>
    </>
  );
}