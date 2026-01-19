"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'; 
import MenuOverlay from '@/components/MenuOverlay'; 
import { supabase } from '@/utils/supabase';

// --- TYPES TO MATCH YOUR SCREENSHOTS ---
interface RegistrationData {
  // Step 1: Business Info
  businessName: string;
  legalName: string;
  tradingName: string;
  regNumber: string;
  category: string;
  bizType: string;
  email: string;
  phone: string;
  mobile: string;
  website: string;
  addressStreet: string;
  addressCity: string;
  addressProvince: string;
  addressCode: string;
  contactFirstName: string;
  contactLastName: string;
  
  // Step 2: Security
  password: string;
  confirmPassword: string;
  securityQuestion: string;
  securityAnswer: string;
  agreeTerms: boolean;

  // Step 3: Verification
  docsUploaded: boolean;
}

// --- MAIN COMPONENT ---
export default function BusinessRegister() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState<RegistrationData>({
    businessName: '', legalName: '', tradingName: '', regNumber: '', category: '', bizType: '',
    email: '', phone: '', mobile: '', website: '',
    addressStreet: '', addressCity: '', addressProvince: '', addressCode: '',
    contactFirstName: '', contactLastName: '',
    password: '', confirmPassword: '', securityQuestion: '', securityAnswer: '', agreeTerms: false,
    docsUploaded: false
  });

  const update = (fields: Partial<RegistrationData>) => setFormData(prev => ({ ...prev, ...fields }));
  
  const next = () => { window.scrollTo(0,0); setStep(prev => prev + 1); };
  const back = () => { window.scrollTo(0,0); setStep(prev => prev - 1); };

  const handleFinalSubmit = async () => {
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      next(); // Go to complete step
    }, 2000);
  };

  return (
    <div style={{ backgroundColor: '#edeae7', minHeight: '100vh', fontFamily: 'Courier New, monospace', color: '#000' }}>
      <Navbar onMenuClick={() => setIsMenuOpen(true)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* --- CSS STYLES --- */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* RESET & BASE */
        * { box-sizing: border-box; }
        input, select, textarea { font-family: 'Courier New', monospace; }
        
        /* CONTAINERS */
        .reg-container { max-width: 900px; margin: 0 auto; padding: 100px 20px 60px 20px; }
        .form-section { border: 2px solid #000; background: #fff; margin-bottom: 40px; }
        .section-header { background: #fff; border-bottom: 2px solid #000; padding: 15px 20px; font-weight: bold; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 1px; }
        .form-row { display: flex; border-bottom: 1px solid #ccc; }
        .form-row:last-child { border-bottom: none; }
        
        /* INPUTS */
        .input-group { padding: 15px; flex: 1; border-right: 1px solid #ccc; display: flex; flex-direction: column; }
        .input-group:last-child { border-right: none; }
        .full-width { width: 100%; border-right: none; }
        
        label { font-size: 0.7rem; text-transform: uppercase; opacity: 0.6; font-weight: bold; margin-bottom: 8px; display: block; }
        input, select { 
          width: 100%; border: none; background: transparent; 
          font-size: 1rem; font-weight: bold; outline: none; 
          padding: 5px 0; border-bottom: 1px dashed transparent; transition: 0.2s;
        }
        input:focus, select:focus { border-bottom: 1px dashed #000; }
        
        /* PROGRESS BAR */
        .progress-bar { display: flex; border: 2px solid #000; background: #fff; margin-bottom: 40px; }
        .step-item { flex: 1; text-align: center; padding: 15px 5px; font-size: 0.8rem; text-transform: uppercase; border-right: 2px solid #000; color: #ccc; cursor: default; font-weight: bold; }
        .step-item:last-child { border-right: none; }
        .step-item.active { background: #000; color: #fff; }
        .step-item.completed { background: #ddd; color: #000; text-decoration: line-through; }

        /* BUTTONS */
        .nav-buttons { display: flex; justify-content: space-between; margin-top: 20px; border: 2px solid #000; background: #fff; }
        .btn { padding: 20px 40px; font-weight: 900; text-transform: uppercase; border: none; background: transparent; cursor: pointer; font-size: 1rem; transition: 0.2s; }
        .btn:hover { background: #000; color: #fff; }
        .btn-next { border-left: 2px solid #000; margin-left: auto; }
        .btn-prev { border-right: 2px solid #000; }

        /* UPLOAD BOX */
        .upload-box { border: 2px solid #000; padding: 15px; text-align: center; margin-top: 5px; cursor: pointer; transition: 0.2s; font-size: 0.8rem; font-weight: bold; text-transform: uppercase; }
        .upload-box:hover { background: #f0f0f0; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .form-row { flex-direction: column; }
          .input-group { border-right: none; border-bottom: 1px solid #ccc; }
          .progress-bar { font-size: 0.6rem; }
        }
      `}} />

      <div className="reg-container">
        
        {/* HEADER */}
        <div style={{ marginBottom: '30px' }}>
          <button onClick={() => router.push('/')} style={{ border: '2px solid #000', background: '#fff', padding: '5px 15px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}>←</button>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-1px' }}>Business Sign-Up</h1>
        </div>

        {/* PROGRESS BAR (Matching Screenshot 1) */}
        <div className="progress-bar">
          <div className={`step-item ${step === 1 ? 'active' : step > 1 ? 'completed' : ''}`}>1. Business Info</div>
          <div className={`step-item ${step === 2 ? 'active' : step > 2 ? 'completed' : ''}`}>2. Security Setup</div>
          <div className={`step-item ${step === 3 ? 'active' : step > 3 ? 'completed' : ''}`}>3. Verification</div>
          <div className={`step-item ${step === 4 ? 'active' : ''}`}>4. Complete</div>
        </div>

        {/* ================= STEP 1: BUSINESS INFO ================= */}
        {step === 1 && (
          <div className="animate-in fade-in">
            {/* 1A. Business Details */}
            <div className="form-section">
              <div className="section-header">Business Details</div>
              <div className="input-group full-width">
                <label>Business Name</label>
                <input value={formData.businessName} onChange={e => update({ businessName: e.target.value })} placeholder="ENTER TRADING NAME" />
              </div>
              <div className="input-group full-width">
                <label>Legal Business Name</label>
                <input value={formData.legalName} onChange={e => update({ legalName: e.target.value })} placeholder="ENTER REGISTERED NAME" />
              </div>
              <div className="input-group full-width">
                <label>Business Registration Number *</label>
                <div style={{ border: '2px solid #000', padding: '10px' }}>
                  <input value={formData.regNumber} onChange={e => update({ regNumber: e.target.value })} placeholder="ENTER REGISTRATION NUMBER" style={{ border: 'none' }} />
                </div>
                <small style={{ marginTop: '5px', opacity: 0.5 }}>(Company / Close Corporation / Trust)</small>
              </div>
              <div className="input-group full-width">
                <label htmlFor="category">Business Category</label>
                <select id="category" title="Business Category" value={formData.category} onChange={e => update({ category: e.target.value })} style={{ border: '2px solid #000', padding: '10px' }}>
                  <option value="">SELECT CATEGORY</option>
                  <option value="tech">Technology</option>
                  <option value="retail">Retail</option>
                  <option value="service">Service</option>
                </select>
              </div>
              <div className="input-group full-width">
                <label>Business Type</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  {['Sole Proprietor', 'Partnership', 'Private Company (Pty Ltd)', 'Public Company'].map(type => (
                    <label key={type} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', opacity: 1 }}>
                      <input type="radio" name="bizType" checked={formData.bizType === type} onChange={() => update({ bizType: type })} style={{ width: 'auto' }} />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* 1B. Contact & Address */}
            <div className="form-section">
              <div className="section-header">Business Information</div>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="businessEmail">Business Email</label>
                  <input
                    id="businessEmail"
                    type="email"
                    title="Business Email"
                    placeholder="Enter business email"
                    value={formData.email}
                    onChange={e => update({ email: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="businessPhone">Business Phone</label>
                  <input
                    id="businessPhone"
                    type="tel"
                    title="Business Phone"
                    placeholder="Enter business phone"
                    value={formData.phone}
                    onChange={e => update({ phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="input-group full-width">
                  <label htmlFor="website">Business Website (Optional)</label>
                  <input
                    id="website"
                    type="url"
                    title="Business Website (Optional)"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={e => update({ website: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="section-header">Business Address</div>
              <div className="input-group full-width">
                <label htmlFor="addressStreet">Street Address</label>
                <input id="addressStreet" placeholder="Enter street address" value={formData.addressStreet} onChange={e => update({ addressStreet: e.target.value })} />
              </div>
              <div className="form-row">
                <div className="input-group"><label htmlFor="addressCity">City</label><input id="addressCity" placeholder="Enter city" title="City" value={formData.addressCity} onChange={e => update({ addressCity: e.target.value })} /></div>
                <div className="input-group"><label htmlFor="addressProvince">Province</label><input id="addressProvince" placeholder="Enter province" title="Province" value={formData.addressProvince} onChange={e => update({ addressProvince: e.target.value })} /></div>
                <div className="input-group"><label htmlFor="addressCode">Postal Code</label><input id="addressCode" placeholder="Enter postal code" title="Postal Code" value={formData.addressCode} onChange={e => update({ addressCode: e.target.value })} /></div>
              </div>
            </div>

            <div className="nav-buttons">
              <button className="btn" disabled>Back</button>
              <button className="btn btn-next" onClick={next}>Next Step →</button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: SECURITY ================= */}
        {step === 2 && (
          <div className="animate-in fade-in">
            <div className="form-section">
              <div className="section-header">Security Setup</div>
              <div className="input-group full-width">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={formData.password} onChange={e => update({ password: e.target.value })} />
              </div>
              <div className="input-group full-width">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  title="Confirm Password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={e => update({ confirmPassword: e.target.value })}
                />
              </div>
              <div className="input-group full-width">
                <label htmlFor="securityQuestion">Security Question</label>
                <select id="securityQuestion" title="Security Question" value={formData.securityQuestion} onChange={e => update({ securityQuestion: e.target.value })} style={{ border: '2px solid #000', padding: '10px' }}>
                  <option value="">SELECT A SECURITY QUESTION</option>
                  <option value="pet">Name of first pet?</option>
                  <option value="mother">Mother's maiden name?</option>
                </select>
              </div>
              <div className="input-group full-width">
                <label htmlFor="securityAnswer">Security Answer</label>
                <input id="securityAnswer" title="Security Answer" placeholder="Enter your security answer" value={formData.securityAnswer} onChange={e => update({ securityAnswer: e.target.value })} />
              </div>
              <div className="input-group full-width" style={{ flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                <label htmlFor="agreeTerms" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>
                  <input id="agreeTerms" type="checkbox" style={{ width: '20px' }} checked={formData.agreeTerms} onChange={e => update({ agreeTerms: e.target.checked })} aria-label="Agree to Terms and Conditions" />
                  I Agree to T&Cs
                </label>
              </div>
            </div>
            
            <div className="nav-buttons">
              <button className="btn btn-prev" onClick={back}>← Back</button>
              <button className="btn btn-next" onClick={next}>Next Step →</button>
            </div>
          </div>
        )}

        {/* ================= STEP 3: VERIFICATION ================= */}
        {step === 3 && (
          <div className="animate-in fade-in">
            <div className="form-section">
              <div className="section-header">Required Documents</div>
              {['1. Business Registration Certificate', '2. Proof of Business Address', '3. Owner/Director ID Copy'].map((doc, i) => (
                <div key={i} className="input-group full-width">
                  <label>{doc}</label>
                  <div className="upload-box">↑ UPLOAD DOCUMENT</div>
                </div>
              ))}
            </div>

            <div className="form-section">
              <div className="section-header">Email Verification</div>
              <div className="input-group full-width">
                <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}>We sent a verification link to: <strong>{formData.email || 'your@email.com'}</strong></p>
                <button style={{ textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Didn't receive it? Resend.</button>
              </div>
            </div>

            <div className="nav-buttons">
              <button className="btn btn-prev" onClick={back}>← Back</button>
              <button className="btn btn-next" onClick={handleFinalSubmit}>
                {loading ? "Submitting..." : "Submit for Review →"}
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 4: COMPLETE ================= */}
        {step === 4 && (
          <div className="animate-in fade-in">
            <div className="form-section" style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '20px' }}>Registration Complete</h2>
              <p style={{ fontSize: '1rem', marginBottom: '40px' }}>Thanks for registering, {formData.businessName}</p>
              
              <div style={{ border: '2px solid #000', padding: '20px', textAlign: 'left', maxWidth: '500px', margin: '0 auto' }}>
                <div className="section-header" style={{ border: 'none', padding: '0 0 10px 0' }}>What Happens Next:</div>
                <ol style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <li>Our team will review your application (24-48 hours).</li>
                  <li>You will receive an approval email.</li>
                  <li>Log in to complete your profile setup.</li>
                </ol>
              </div>

              <button onClick={() => router.push('/business/login')} className="btn" style={{ border: '2px solid #000', marginTop: '40px' }}>
                Go to Login Page
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}