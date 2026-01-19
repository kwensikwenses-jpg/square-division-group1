"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function TestRegisterPage() {
  const [step, setStep] = useState(1);
  
  // --- STYLES (Embedded to guarantee look) ---
  const styles = {
    page: { backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'Courier New, monospace', padding: '40px 20px', color: '#000' },
    backBox: { border: '2px solid #000', padding: '10px 15px', display: 'inline-block', marginBottom: '20px', cursor: 'pointer', fontWeight: 'bold' },
    title: { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '30px' },
    
    // TAB BAR
    tabBar: { display: 'flex', border: '2px solid #000', marginBottom: '40px' },
    tab: (isActive: boolean) => ({
      flex: 1, textAlign: 'center' as const, padding: '15px 5px', fontSize: '0.8rem', borderRight: '2px solid #000', 
      backgroundColor: isActive ? '#fff' : '#f4f4f4', opacity: isActive ? 1 : 0.5, cursor: 'default'
    }),
    
    // SECTIONS
    sectionBorder: { border: '2px solid #000', padding: '0', marginBottom: '30px' },
    sectionHeader: { borderBottom: '2px solid #000', padding: '15px', fontWeight: 'bold', fontSize: '0.9rem' },
    
    // INPUTS
    inputRow: { display: 'flex', borderBottom: '2px solid #000' },
    inputGroup: { flex: 1, padding: '15px', borderRight: '2px solid #000', display: 'flex', flexDirection: 'column' as const },
    label: { marginBottom: '10px', fontSize: '0.8rem', opacity: 0.6 },
    input: { border: 'none', outline: 'none', fontSize: '1rem', fontWeight: 'bold', width: '100%', background: 'transparent' },
    
    // UPLOAD
    uploadBtn: { border: '2px solid #000', padding: '15px', textAlign: 'center' as const, margin: '15px', cursor: 'pointer', fontSize: '0.9rem' },
    
    // NAV
    nextBtn: { float: 'right' as const, border: '2px solid #000', background: '#fff', padding: '15px 40px', fontSize: '1.5rem', cursor: 'pointer' }
  };

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  return (
    <div style={styles.page}>
      
      {/* 1. HEADER */}
      <Link href="/" style={styles.backBox}>←</Link>
      <h1 style={styles.title}>business sign-up</h1>

      {/* 2. TABS */}
      <div style={styles.tabBar}>
        <div style={{...styles.tab(step===1), borderRight: '2px solid #000'}}>1. business info</div>
        <div style={{...styles.tab(step===2), borderRight: '2px solid #000'}}>2. security setup</div>
        <div style={{...styles.tab(step===3), borderRight: '2px solid #000'}}>3. verification</div>
        <div style={{...styles.tab(step===4), borderRight: 'none'}}>4. complete</div>
      </div>

      {/* ================= STEP 1: BUSINESS INFO ================= */}
      {step === 1 && (
        <>
          <div style={styles.sectionBorder}>
            <div style={styles.sectionHeader}>business details</div>
            
            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="businessName" style={styles.label}>business name</label>
              <input id="businessName" type="text" placeholder="Enter business name" title="Business name" style={{...styles.input, borderBottom: '1px solid #ddd'}} />
            </div>
            
            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="legalBusinessName" style={styles.label}>legal business name</label>
              <input id="legalBusinessName" type="text" placeholder="Enter legal business name" title="Legal business name" style={{...styles.input, borderBottom: '1px solid #ddd'}} />
            </div>

            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="businessRegNumber" style={styles.label}>business registration number *</label>
              <div style={{ border: '2px solid #000', padding: '10px' }}>
                <input id="businessRegNumber" type="text" placeholder="Enter registration number" title="Business registration number" style={styles.input} />
              </div>
              <small style={{fontSize: '0.7rem', opacity: 0.5}}>(company/close corporation/trust)</small>
            </div>

            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="businessCategory" style={styles.label}>business category</label>
              <div style={{ border: '2px solid #000', padding: '10px', display: 'flex' }}>
                <span style={{ marginRight: '10px' }}>▼</span>
                <select id="businessCategory" title="Business category" style={styles.input}>
                   <option>select category</option>
                </select>
              </div>
            </div>

            <div style={{ padding: '15px' }}>
              <label style={styles.label}>business type</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                {['sole proprietor', 'partnership', 'private company (pty ltd)'].map(t => (
                  <label key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="radio" name="type" style={{ width: 'auto' }} /> {t}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div style={styles.sectionBorder}>
            <div style={styles.sectionHeader}>business information</div>
            <div style={styles.inputRow}>
              <div style={styles.inputGroup}>
                <label htmlFor="businessEmail" style={styles.label}>business email</label>
                <input id="businessEmail" type="email" placeholder="name@business.com" title="Business email" style={styles.input} />
              </div>
              <div style={{...styles.inputGroup, borderRight: 'none'}}>
                <label htmlFor="businessPhone" style={styles.label}>business phone</label>
                <input id="businessPhone" type="tel" placeholder="+1 (555) 555-5555" title="Business phone" style={styles.input} />
              </div>
            </div>
          </div>

          <button onClick={next} style={styles.nextBtn}>→</button>
        </>
      )}

      {/* ================= STEP 2: SECURITY ================= */}
      {step === 2 && (
        <>
          <div style={styles.sectionBorder}>
            <div style={styles.sectionHeader}>security setup</div>
            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="password" style={styles.label}>password</label>
              <input id="password" type="password" placeholder="Enter password" title="Password" style={{...styles.input, borderBottom: '1px solid #ddd'}} />
            </div>
            <div style={{ padding: '15px', borderBottom: '2px solid #000' }}>
              <label htmlFor="confirmPassword" style={styles.label}>confirm password</label>
              <input id="confirmPassword" type="password" placeholder="Confirm password" title="Confirm password" style={{...styles.input, borderBottom: '1px solid #ddd'}} />
            </div>
            <div style={{ padding: '15px' }}>
              <label htmlFor="securityQuestion" style={styles.label}>security question</label>
              <div style={{ border: '2px solid #000', padding: '10px' }}>
                 <select id="securityQuestion" style={styles.input}><option>select a security question</option></select>
              </div>
            </div>
          </div>
          <button onClick={next} style={styles.nextBtn}>→</button>
        </>
      )}

      {/* ================= STEP 3: VERIFICATION ================= */}
      {step === 3 && (
        <>
          <div style={styles.sectionBorder}>
            <div style={styles.sectionHeader}>required documents</div>
            {['1. business registration certificate', '2. proof of business address', '3. owner/director id copy'].map((doc, i) => (
              <div key={i} style={{ padding: '15px', borderBottom: '2px solid #000' }}>
                <label style={styles.label}>{doc}</label>
                <div style={styles.uploadBtn}>↑ upload document</div>
              </div>
            ))}
          </div>
          <div style={styles.sectionBorder}>
            <div style={styles.sectionHeader}>social media verification</div>
            {['facebook', 'instagram', 'linkedin'].map((social, i) => (
               <div key={i} style={{ display: 'flex', borderBottom: '1px solid #000' }}>
                 <div style={{ flex: 1, padding: '15px', borderRight: '2px solid #000' }}>{social}</div>
                 <div style={{ padding: '15px', fontWeight: 'bold', cursor: 'pointer' }}>connect</div>
               </div>
            ))}
          </div>
          <button onClick={next} style={styles.nextBtn}>→</button>
        </>
      )}

      {/* ================= STEP 4: COMPLETE ================= */}
      {step === 4 && (
        <div style={{ ...styles.sectionBorder, padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', fontWeight: 'bold' }}>registration complete</h2>
          <p style={{ marginBottom: '40px', opacity: 0.6 }}>thanks for registering.</p>
          
          <div style={{ border: '2px solid #000', padding: '20px', textAlign: 'left', marginBottom: '40px' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>what happens next:</div>
            <p>1. our team will review your application within 24-48 hours.</p>
          </div>

          <Link href="/business/login" style={{ border: '2px solid #000', padding: '15px 30px', fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
            GO TO LOGIN
          </Link>
        </div>
      )}

    </div>
  );
}