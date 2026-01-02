"use client";

import React from 'react';

export default function LandingPage() {
  return (
    <>
      <style jsx global>{`
        /* ===== GLOBAL RESET & BASE STYLES ===== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            overflow-x: hidden;
        }

        /* ===== BACKGROUND VIDEO/IMAGE CONTAINER ===== */
        .background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
        }

        .background-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.7);
        }

        .background-media {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* ===== A4 PAGE CONTAINER WITH DEPTH EFFECT ===== */
        .page-container {
            max-width: 75%;
            margin-left: 0;
            margin-right: auto;
            background: white;
            min-height: 100vh;
            position: relative;
            box-shadow: 
                4px 0 8px rgba(0, 0, 0, 0.1),
                8px 0 16px rgba(0, 0, 0, 0.08),
                12px 0 24px rgba(0, 0, 0, 0.06);
        }

        .content-wrapper {
            padding: 0 80px;
        }

        /* ===== NAVIGATION BAR ===== */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 80px;
            background: white;
            border-bottom: 1px solid #e5e5e5;
        }

        .logo {
            font-size: 24px;
            font-weight: 700;
            color: #0066cc;
            cursor: pointer;
        }

        .nav-buttons {
            display: flex;
            gap: 16px;
        }

        .btn {
            padding: 12px 24px;
            border: none;
            background: transparent;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .btn-menu {
            color: #1a1a1a;
            border: 1px solid #1a1a1a;
        }

        .btn-menu:hover {
            background: #1a1a1a;
            color: white;
        }

        .btn-join {
            background: #0066cc;
            color: white;
        }

        .btn-join:hover {
            background: #0052a3;
        }

        .btn-explore {
            color: #1a1a1a;
            text-decoration: underline;
        }

        /* ===== HERO SECTION ===== */
        .hero-section {
            padding: 120px 80px;
            max-width: 65%;
        }

        .hero-text {
            font-size: 56px;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 24px;
        }

        .hero-subtext {
            font-size: 20px;
            color: #4a4a4a;
            line-height: 1.6;
        }

        /* ===== CARDS SECTION ===== */
        .cards-section {
            padding: 80px;
        }

        .cards-intro {
            text-align: center;
            margin-bottom: 48px;
        }

        .cards-intro h2 {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .cards-intro p {
            font-size: 18px;
            color: #4a4a4a;
        }

        .cards-container {
            display: flex;
            flex-direction: column;
            gap: 0;
            max-width: 100%;
        }

        .card {
            position: relative;
            background: #f5f5f5;
            overflow: hidden;
            height: 500px;
        }

        .card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .card-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: white;
            z-index: 2;
            width: 80%;
        }

        .card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.4);
            z-index: 1;
        }

        .card-title {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 16px;
        }

        .card-description {
            font-size: 16px;
            margin-bottom: 32px;
            line-height: 1.6;
        }

        .card-cta {
            padding: 16px 40px;
            background: white;
            color: #1a1a1a;
            border: none;
            font-weight: 600;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .card-cta:hover {
            background: #0066cc;
            color: white;
        }

        /* ===== STATS SECTION ===== */
        .stats-section {
            padding: 80px;
            background: white;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
        }

        .stat-block {
            background: #FF9500;
            padding: 60px 40px;
            border-right: 2px solid white;
            min-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .stat-block:last-child {
            border-right: none;
        }

        .stat-number {
            font-size: 72px;
            font-weight: 700;
            color: #1a1a1a;
            line-height: 1;
            margin-bottom: 20px;
            font-family: 'Courier New', monospace;
        }

        .stat-text {
            font-size: 16px;
            color: #1a1a1a;
            line-height: 1.4;
        }

        /* ===== FEATURES SECTION ===== */
        .features-section {
            padding: 100px 80px;
            background: white;
        }

        .features-title {
            text-align: center;
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 80px;
        }

        .features-container {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 60px;
            align-items: start;
        }

        .features-column h3 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 40px;
        }

        .feature-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
        }

        .feature-item {
            position: relative;
            cursor: pointer;
        }

        .feature-name {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            padding: 12px 0;
            border-bottom: 2px solid transparent;
            transition: all 0.3s ease;
        }

        .feature-item:hover .feature-name {
            border-bottom-color: #0066cc;
            color: #0066cc;
        }

        .feature-popup {
            position: absolute;
            top: 100%;
            left: 0;
            width: 280px;
            background: white;
            border: 2px solid #1a1a1a;
            padding: 20px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            z-index: 100;
            margin-top: 8px;
        }

        .feature-item:hover .feature-popup {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .popup-image {
            width: 100%;
            height: 120px;
            background: #f0f0f0;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }

        .popup-title {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 8px;
        }

        .popup-description {
            font-size: 14px;
            color: #666;
            line-height: 1.4;
        }

        .features-center-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 60px;
        }

        .center-icon {
            width: 80px;
            height: 80px;
            background: #f0f0f0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
        }

        .features-business {
            text-align: right;
        }

        .features-business .feature-list {
            grid-template-columns: repeat(5, 1fr);
            gap: 24px;
        }

        /* ===== VIDEO SECTION ===== */
        .video-section {
            padding: 100px 80px;
            background: #1a1a1a;
            color: white;
        }

        .video-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .video-player {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
            background: #000;
        }

        .video-player img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .video-text h2 {
            font-size: 42px;
            font-weight: 700;
            line-height: 1.3;
            margin-bottom: 32px;
        }

        .video-credentials {
            font-size: 14px;
            color: #999;
            line-height: 1.8;
        }

        /* ===== HELP SECTION ===== */
        .help-section {
            padding: 100px 80px;
        }

        .section-title {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 48px;
            text-align: center;
        }

        .help-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .help-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            padding: 32px 24px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            flex: 1;
        }

        .help-card-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 12px;
        }

        .help-card-text {
            font-size: 14px;
            color: #4a4a4a;
            line-height: 1.5;
        }

        /* ===== TESTIMONIALS ===== */
        .testimonials-section {
            padding: 80px;
        }

        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
        }

        .testimonial-card {
            background: #f5f5f5;
            padding: 32px;
        }

        .testimonial-media {
            width: 100%;
            height: 200px;
            background: #ddd;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
        }

        /* ===== PARTNERS ===== */
        .partners-section {
            padding: 80px;
        }

        .partners-title {
            text-align: center;
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 48px;
        }

        .partners-container {
            background: #1a1a1a;
            padding: 48px;
            display: flex;
            flex-wrap: wrap;
            gap: 32px;
            justify-content: center;
            align-items: center;
        }

        .partner-logo {
            width: 120px;
            height: 80px;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #999;
        }

        /* ===== FINAL CTA ===== */
        .cta-section {
            padding: 100px 80px;
            text-align: center;
        }

        .cta-title {
            font-size: 48px;
            font-weight: 700;
            margin-bottom: 40px;
        }

        .cta-buttons {
            display: flex;
            gap: 24px;
            justify-content: center;
        }

        .cta-btn {
            padding: 18px 48px;
            font-size: 18px;
            font-weight: 600;
            border: none;
            cursor: pointer;
        }

        .cta-btn-user {
            background: #0066cc;
            color: white;
        }

        .cta-btn-company {
            background: #1a1a1a;
            color: white;
        }

        /* ===== FOOTER ===== */
        .footer {
            padding: 60px 80px;
            background: #e5e5e5;
            color: #1a1a1a;
            border-top: 2px solid #1a1a1a;
        }

        .footer-logo {
            font-size: 72px;
            font-weight: 700;
            font-family: 'Courier New', monospace;
            margin-bottom: 40px;
            letter-spacing: -4px;
        }

        .footer-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            padding-bottom: 40px;
            border-bottom: 2px solid #1a1a1a;
        }

        .footer-email-form {
            display: flex;
            gap: 12px;
        }

        .footer-email-input {
            flex: 1;
            padding: 12px;
            border: 1px solid #1a1a1a;
        }

        .footer-email-submit {
            padding: 12px 24px;
            background: #1a1a1a;
            color: white;
            border: none;
        }

        .footer-bottom {
            padding-top: 24px;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #666;
        }

        .footer-links {
            display: flex;
            gap: 24px;
        }

        .footer-links a {
            color: #666;
            text-decoration: none;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
            .features-container { grid-template-columns: 1fr; }
            .features-center-icon { display: none; }
            .features-business { text-align: left; }
            .features-business .feature-list { grid-template-columns: repeat(2, 1fr); }
            .video-container { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
            .page-container { max-width: 100%; }
            .content-wrapper, .navbar, .hero-section, .cards-section, .stats-section, 
            .features-section, .video-section, .help-section, .partners-section, 
            .testimonials-section, .cta-section, .footer { padding-left: 24px; padding-right: 24px; }
            .stats-grid, .feature-list, .help-grid, .testimonials-grid, .footer-content { grid-template-columns: 1fr; }
            .hero-text { font-size: 36px; }
            .footer-logo { font-size: 48px; }
        }
      `}</style>

      {/* ===== BACKGROUND VIDEO/IMAGE ===== */}
      <div className="background-container">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920" alt="Background" className="background-media" />
      </div>

      {/* ===== A4 PAGE CONTAINER ===== */}
      <div className="page-container">
          
          {/* ===== NAVIGATION ===== */}
          <nav className="navbar">
              <div className="logo">LOGO</div>
              <div className="nav-buttons">
                  <button className="btn btn-menu">About</button>
                  <button className="btn btn-join">Join</button>
                  <button className="btn btn-explore">Explore</button>
              </div>
          </nav>

          {/* ===== HERO SECTION ===== */}
          <section className="hero-section">
              <h1 className="hero-text">
                  Connecting Communities.<br />
                  Empowering Local Business.
              </h1>
              <p className="hero-subtext">
                  We bridge the gap between local businesses and community members, 
                  creating meaningful connections that drive growth and prosperity for everyone.
              </p>
          </section>

          {/* ===== USER & BUSINESS CARDS SECTION ===== */}
          <section className="cards-section">
              <div className="cards-intro">
                  <h2>Choose Your Path</h2>
                  <p>Whether you're discovering local gems or showcasing your business, we've got you covered.</p>
              </div>
              <div className="cards-container">
                  <div className="card">
                      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" alt="For Users" className="card-image" />
                      <div className="card-content">
                          <h3 className="card-title">For Users</h3>
                          <p className="card-description">
                              Discover local businesses, exclusive deals, and connect with your community like never before.
                          </p>
                          <button className="card-cta">Join as User</button>
                      </div>
                  </div>

                  <div className="card">
                      <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200" alt="For Business" className="card-image" />
                      <div className="card-content">
                          <h3 className="card-title">For Business</h3>
                          <p className="card-description">
                              Reach more customers, showcase your services, and grow your presence in the community.
                          </p>
                          <button className="card-cta">Join as Business</button>
                      </div>
                  </div>
              </div>
          </section>

          {/* ===== STATS SECTION ===== */}
          <section className="stats-section">
              <div className="stats-grid">
                  <div className="stat-block">
                      <div className="stat-number">5K+</div>
                      <div className="stat-text">Local businesses <strong>trust our platform</strong> to connect with customers</div>
                  </div>
                  <div className="stat-block">
                      <div className="stat-number">50K+</div>
                      <div className="stat-text">Active community members <strong>discover new businesses</strong> every month</div>
                  </div>
                  <div className="stat-block">
                      <div className="stat-number">100K+</div>
                      <div className="stat-text"><strong>Meaningful interactions</strong> created between businesses and customers</div>
                  </div>
              </div>
          </section>

          {/* ===== FEATURES SECTION ===== */}
          <section className="features-section">
              <h2 className="features-title">Platform Features</h2>
              <div className="features-container">
                  <div className="features-column features-users">
                      <h3>For Users</h3>
                      <div className="feature-list">
                          <div className="feature-item">
                              <div className="feature-name">Search</div>
                              <div className="feature-popup">
                                  <div className="popup-image">[Icon]</div>
                                  <div className="popup-title">Advanced Search</div>
                                  <div className="popup-description">Find exactly what you need with powerful filters and smart suggestions.</div>
                              </div>
                          </div>
                          <div className="feature-item">
                              <div className="feature-name">Compare</div>
                              <div className="feature-popup">
                                  <div className="popup-image">[Icon]</div>
                                  <div className="popup-title">Compare Services</div>
                                  <div className="popup-description">Side-by-side comparison of businesses, prices, and reviews.</div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div className="features-center-icon">
                      <div className="center-icon">⚡</div>
                  </div>

                  <div className="features-column features-business">
                      <h3>For Business</h3>
                      <div className="feature-list">
                          <div className="feature-item">
                              <div className="feature-name">Visibility</div>
                              <div className="feature-popup">
                                  <div className="popup-image">[Icon]</div>
                                  <div className="popup-title">Boost Visibility</div>
                                  <div className="popup-description">Get discovered by thousands of potential customers.</div>
                              </div>
                          </div>
                          <div className="feature-item">
                              <div className="feature-name">Analytics</div>
                              <div className="feature-popup">
                                  <div className="popup-image">[Icon]</div>
                                  <div className="popup-title">Business Analytics</div>
                                  <div className="popup-description">Track performance with detailed insights and metrics.</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* ===== VIDEO SECTION ===== */}
          <section className="video-section">
              <div className="video-container">
                  <div className="video-player">
                      <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200" alt="Video Preview" />
                  </div>
                  <div className="video-text">
                      <h2>Built by Community Experts, For Community Growth</h2>
                      <div className="video-credentials">
                          Our platform was designed with input from local business owners and thousands of community members.
                      </div>
                  </div>
              </div>
          </section>

          {/* ===== HOW WE HELP SECTION ===== */}
          <section className="help-section">
              <h2 className="section-title">How We Help</h2>
              <div className="help-grid">
                  <div className="help-card">
                      <h3 className="help-card-title">Discovery</h3>
                      <p className="help-card-text">Find exactly what you need in your local area with powerful search and filtering tools.</p>
                  </div>
                  <div className="help-card">
                      <h3 className="help-card-title">Connection</h3>
                      <p className="help-card-text">Build meaningful relationships between businesses and customers that last.</p>
                  </div>
              </div>
          </section>

          {/* ===== PARTNERS SECTION ===== */}
          <section className="partners-section">
              <h2 className="partners-title">Trusted Partners</h2>
              <div className="partners-container">
                  <div className="partner-logo">Partner 1</div>
                  <div className="partner-logo">Partner 2</div>
                  <div className="partner-logo">Partner 3</div>
                  <div className="partner-logo">Partner 4</div>
              </div>
          </section>

          {/* ===== FINAL CTA SECTION ===== */}
          <section className="cta-section">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <div className="cta-buttons">
                  <button className="cta-btn cta-btn-user">Join as User</button>
                  <button className="cta-btn cta-btn-company">Join as Business</button>
              </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="footer">
              <div className="footer-logo">COMMUNITY</div>
              <div className="footer-content">
                  <div className="footer-left">
                      <p>Connecting communities and empowering local businesses since 2024.</p>
                  </div>
                  <div className="footer-right">
                      <h4>Stay Updated</h4>
                      <form className="footer-email-form">
                          <input type="email" placeholder="Your email address" className="footer-email-input" />
                          <button type="submit" className="footer-email-submit">Subscribe</button>
                      </form>
                  </div>
              </div>
              <div className="footer-bottom">
                  <div>&copy; 2024 Community Hub. All rights reserved.</div>
                  <div className="footer-links">
                      <a href="#">Privacy Policy</a>
                      <a href="#">Terms of Service</a>
                  </div>
              </div>
          </footer>
      </div>
    </>
  );
}