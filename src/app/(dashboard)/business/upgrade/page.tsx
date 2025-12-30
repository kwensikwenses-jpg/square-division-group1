"use client";
import React, { useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function UpgradePlatinum() {
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    // Simulate payment delay
    setTimeout(async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        // Update the tier in the database
        await supabase.from('profiles').update({ tier: 'platinum' }).eq('id', user.id);
        alert("Payment Successful. Tier Upgraded to Platinum.");
        window.location.href = '/business';
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto pt-10">
      <div className="border-4 border-black p-12 bg-white">
        <h1 className="text-6xl font-black uppercase tracking-tighter italic mb-8">Checkout / Platinum</h1>
        
        <div className="space-y-6 mb-12">
          <div className="flex justify-between border-b border-black pb-4 font-bold uppercase">
            <span>Platinum Monthly Subscription</span>
            <span>R899.00</span>
          </div>
          <div className="flex justify-between border-b border-black pb-4 font-bold uppercase opacity-40 text-xs">
            <span>Investor Network Access</span>
            <span>Included</span>
          </div>
          <div className="flex justify-between pt-4 text-3xl font-black uppercase">
            <span>Total Due</span>
            <span>R899.00</span>
          </div>
        </div>

        <button 
          onClick={handlePayment}
          disabled={processing}
          className="w-full bg-[#6082a3] text-white py-8 text-2xl font-black uppercase hover:bg-black transition-all disabled:opacity-50"
        >
          {processing ? "VERIFYING TRANSACTION..." : "CONFIRM & PAY NOW"}
        </button>

        <p className="mt-8 text-[10px] font-bold uppercase opacity-30 text-center tracking-widest">
          Secure payment simulation via Kai-Pay Gateway
        </p>
      </div>
    </div>
  );
}