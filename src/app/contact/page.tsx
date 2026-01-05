"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        * { margin: 0; padding: 0; box-sizing: border-box; border-radius: 0 !important; }
        body { font-family: 'Courier New', Courier, monospace; background-color: #edeae7; color: #000; line-height: 1.4; overflow-x: hidden; }
        h1, h2, h3, h4 { text-transform: uppercase; font-weight: 900; letter-spacing: -1px; }
        
        /* LAYOUT UTILS */
        .page-container { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
        .grid-split { display: grid; grid-template-columns: 1fr 1fr; border: 4px solid #000; background: #fff; box-shadow: 20px 20px 0px 0px rgba(0,0,0,1); }
        
        /* FORM STYLES (Matching Registration) */
        .input-group { margin-bottom: 20px; }
        .input-label { font-size: 10px; font-weight: 900; text-transform: uppercase; opacity: 0.4; margin-bottom: 5px; display: block; }
        .brutal-input { width: 100%; background: transparent; border: none; border-bottom: 2px solid #000; padding: 10px 0; font-family: 'Courier New'; font-weight: 700; font-size: 1.2rem; outline: none; transition: 0.2s; }
        .brutal-input:focus { border-bottom-color: #3083fd; color: #3083fd; }
        
        /* MAP GRID (Matching Location Step) */
        .map-box { background: #f4f4f4; border-left: 4px solid #000; position: relative; overflow: hidden; min-height: 500px; display: flex; flex-direction: column; justify-content: space-between; }
        .map-overlay { absolute: inset-0; background: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px; opacity: 0.05; width: 100%; height: 100%; position: absolute; pointer-events: none; }
        
        /* BUTTONS */
        .submit-btn { background: #000; color: #fff; border: none; padding: 20px; width: 100%; font-weight: 900; text-transform: uppercase; font-size: 1rem; cursor: pointer; transition: 0.2s; margin-top: 20px; }
        .submit-btn:hover { background: #3083fd; }
        
        @media (max-width: 900px) {
            .grid-split { grid-template-columns: 1fr; border: 2px solid #000; box-shadow: 10px 10px 0px 0px #000; }
            .map-box { border-left: none; border-top: 4px solid #000; min-height: 300px; }
        }
      `}} />

      <div className="page-container">
        {/* HEADER */}
        <div style={{ marginBottom: '40px', borderBottom: '4px solid #000', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontStyle: 'italic' }}>Comms_Link</h1>
            <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '10px' }}>ESTABLISH CONNECTION WITH CENTRAL NODE.</p>
          </div>
          <Link href="/" style={{ fontSize: '0.8rem', fontWeight: 900, textDecoration: 'underline' }}>← ABORT</Link>
        </div>

        {/* MAIN SPLIT CONTENT */}
        <div className="grid-split">
          
          {/* LEFT: FORM INTERFACE */}
          <div style={{ padding: '40px' }}>
            {formStatus === 'success' ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ fontSize: '4rem' }}>✓</div>
                <h2 style={{ margin: '20px 0' }}>Packet Sent</h2>
                <p style={{ opacity: 0.6 }}>Our team will decode your message and respond within 24 hours.</p>
                <button onClick={() => setFormStatus('idle')} style={{ marginTop: '20px', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Courier New', fontWeight: 'bold' }}>SEND ANOTHER</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="input-label">Identity_Name</label>
                  <input type="text" className="brutal-input" placeholder="JOHN DOE" required />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Contact_Node (Email)</label>
                  <input type="email" className="brutal-input" placeholder="USER@EXAMPLE.COM" required />
                </div>
                
                <div className="input-group">
                  <label className="input-label">Subject_Class</label>
                  <select className="brutal-input" required style={{ cursor: 'pointer' }} aria-label="Subject Class">
                    <option value="" disabled selected>SELECT TOPIC</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Inquiry</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="input-group">
                  <label className="input-label">Message_Data</label>
                  <textarea 
                    className="brutal-input" 
                    placeholder="ENTER YOUR MESSAGE HERE..." 
                    rows={4} 
                    style={{ resize: 'none', borderBottom: '2px solid #000' }}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  {formStatus === 'submitting' ? 'TRANSMITTING...' : 'INITIATE_TRANSMISSION →'}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: LOCATION NODE VISUAL */}
          <div className="map-box">
            <div className="map-overlay"></div>
            
            {/* Animated Ping (Reused from Location Step) */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
               <div style={{ width: '20px', height: '20px', background: '#000', borderRadius: '50%' }}></div>
               <div style={{ width: '60px', height: '60px', border: '2px solid #000', borderRadius: '50%', position: 'absolute', top: '-22px', left: '-22px', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
            </div>

            {/* Info Cards Overlay */}
            <div style={{ padding: '20px', position: 'relative', zIndex: 10 }}>
               <div style={{ background: '#fff', border: '2px solid #000', padding: '15px', marginBottom: '10px', maxWidth: '200px' }}>
                 <p className="input-label">Physical_Node_01</p>
                 <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }}>123 Innovation St.<br/>Tech District, SA</p>
               </div>
            </div>

            <div style={{ padding: '20px', background: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
               <div>
                 <p className="input-label" style={{ color: '#fff' }}>Status</p>
                 <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>ONLINE • OPERATIONAL</p>
               </div>
               <div style={{ textAlign: 'right' }}>
                 <p className="input-label" style={{ color: '#fff' }}>Latency</p>
                 <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>12ms</p>
               </div>
            </div>
          </div>
        </div>

        {/* FAQ GRID */}
        <div style={{ marginTop: '60px', borderTop: '4px solid #000', paddingTop: '40px' }}>
          <h3 style={{ marginBottom: '20px' }}>Common_Protocols (FAQ)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ border: '2px solid #000', background: '#fff', padding: '20px' }}>
              <p style={{ fontWeight: '900', marginBottom: '10px' }}>How long for a response?</p>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Standard protocol dictates a 24-48 hour window for all non-emergency transmissions.</p>
            </div>
            <div style={{ border: '2px solid #000', background: '#fff', padding: '20px' }}>
              <p style={{ fontWeight: '900', marginBottom: '10px' }}>Where is the HQ?</p>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>We operate decentralized nodes, but our primary physical uplink is in Durban, South Africa.</p>
            </div>
            <div style={{ border: '2px solid #000', background: '#fff', padding: '20px' }}>
              <p style={{ fontWeight: '900', marginBottom: '10px' }}>Direct Line?</p>
              <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Urgent matters can be escalated via +27 (0) 555-0123 during operational hours (0800 - 1700).</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}