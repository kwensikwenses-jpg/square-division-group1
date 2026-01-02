"use client";

import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main>
      <header className="page-header">
        <Link href="#about">About</Link>
        <Link href="#join">Join</Link>
        <Link href="#explore">Explore</Link>
      </header>

      <section className="hero">
        <h1>Connecting Communities.<br />Empowering Local Business.</h1>
        <p>Join a platform designed to elevate local businesses and connect communities through verified impact.</p>
      </section>

      <section className="cards-section container-80">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200" alt="Fatherhood" />
          <div className="card-content">
            <h3>Join the Movement</h3>
            <p>Helping men on their journey to fatherhood with the most comprehensive fertility support.</p>
            <button>Join Now</button>
          </div>
        </div>
        <div className="card" style={{ borderTop: '1px solid #eee' }}>
          <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200" alt="Journey" />
          <div className="card-content">
            <h3>Start Your Journey</h3>
            <p>Take control of your fertility and give your future family the best start possible.</p>
            <button>Join Now</button>
          </div>
        </div>
      </section>

      <section className="section1 container-80">
        <h2>Why We Exist</h2>
        <p>We believe in empowering local businesses and individuals through technology, trust, and verified impact. Our platform is built to scale economic inclusion and create meaningful connections between verified suppliers and community buyers.</p>
      </section>

      <section className="stats-bar container-80">
        <div className="stat-block">
          <h3>5K+</h3>
          <p>Local businesses trust us</p>
        </div>
        <div className="stat-block">
          <h3>50K+</h3>
          <p>Community members active</p>
        </div>
        <div className="stat-block">
          <h3>100K+</h3>
          <p>Meaningful interactions</p>
        </div>
      </section>

      <section className="features container-80">
        <div className="column">
          <h3>For Users</h3>
          <div className="feature-row">
            <FeatureWord 
              word="Discover" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Find verified local businesses tailored to your needs."
            />
            <FeatureWord 
              word="Connect" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Engage directly with trusted providers."
            />
            <FeatureWord 
              word="Review" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Share feedback with the community."
            />
          </div>
        </div>
        <div className="column">
          <h3>For Business</h3>
          <div className="feature-row">
            <FeatureWord 
              word="Verify" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Build trust with official credentials."
            />
            <FeatureWord 
              word="Promote" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Boost visibility with campaigns."
            />
            <FeatureWord 
              word="Grow" 
              icon="https://cdn-icons-png.flaticon.com/512/2311/2311524.png"
              desc="Scale operations with data insights."
            />
          </div>
        </div>
      </section>

      <section className="how-we-help container-80">
        <div className="help-grid">
          <HelpCard num="1" title="Clinical Complex" desc="Complete formula supporting every parameter of health." />
          <HelpCard num="2" title="Research Dosage" desc="Ingredients included at exact levels shown effective." />
          <HelpCard num="3" title="Premium Source" desc="Chosen for potency and consistent quality." />
          <HelpCard num="4" title="Tested Standards" desc="Made in FDA-registered, cGMP facilities." />
        </div>
        <div className="director-block">
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
          </div>
          <div className="director-text">
            <h3>Formulated with the World's Leading Expert</h3>
            <p>Our platform logic is grounded in science and clinical excellence, guided by top-tier industry advisors.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section container-80">
        <div className="testimonial-grid">
          <TestimonialCard img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600" quote="“The turning point in our journey.”" meta="Steve, 38 • 4 months usage" />
          <TestimonialCard img="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600" quote="“Finally a platform that understands local needs.”" meta="Sarah, 29 • 2 months usage" />
          <TestimonialCard img="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600" quote="“Verified impact you can actually track.”" meta="Louis, 31 • 6 months usage" />
        </div>
      </section>

      <section className="partners container-80">
        <h3>Trusted By</h3>
        <div className="partner-row">
          <div className="partner"><span>Anchor Buyer</span></div>
          <div className="partner"><span>Health Network</span></div>
          <div className="partner"><span>Community Hub</span></div>
          <div className="partner"><span>Verified Supplier</span></div>
        </div>
      </section>

      <section className="cta-block container-80">
        <div className="cta-buttons">
          <button className="btn-join-main">Join Now</button>
          <button className="btn-explore-main">Explore Hub</button>
        </div>
      </section>

      <footer className="footer container-80">
        <div className="footer-left">
          <p style={{ marginBottom: '2rem', opacity: 0.6 }}>ACCESSIBILITY: hello@mahady.com</p>
          <ul>
            <li><Link href="#">About Mahady</Link></li>
            <li><Link href="#">Partner Network</Link></li>
            <li><Link href="#">Shop Solutions</Link></li>
          </ul>
        </div>
        <div className="footer-right">
          <p>Join our registry for the latest updates.</p>
          <input type="email" placeholder="Your Email Address" />
          <p style={{ fontSize: 0.75, opacity: 0.5 }}>© 2026 Mahady Global. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

// --- Internal Components to keep code clean ---
function FeatureWord({ word, icon, desc }: any) {
  return (
    <div className="feature-word">{word}
      <div className="feature-card">
        <img src={icon} alt="icon" />
        <h4>{word}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function HelpCard({ num, title, desc }: any) {
  return (
    <div className="help-card">
      <div className="card-number">{num}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

function TestimonialCard({ img, quote, meta }: any) {
  return (
    <div className="testimonial-card">
      <img src={img} alt="Testimonial" />
      <div className="testimonial-content">
        <p className="quote">{quote}</p>
        <p className="meta">{meta}</p>
      </div>
    </div>
  );
}