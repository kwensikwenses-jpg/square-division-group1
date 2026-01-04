"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase';

// FIXED PATHS: Moving up one level to the components folder
import RegisterStep1 from '../components/RegisterStep1';
import RegisterStep2 from '../components/RegisterStep2';
import RegisterStep3 from '../components/RegisterStep3';
import RegisterStep4 from '../components/RegisterStep4';
import RegisterComplete from '../components/RegisterComplete';

export default function BusinessRegister() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Unified Form State covering all requirements
  const [formData, setFormData] = useState({
    businessName: '',
    bizType: 'sole', // 'sole', 'partnership', or 'private company'
    registrationNumber: '',
    category: '',
    email: '',
    password: '',
    securityQuestion: '', // Added to fix Step 2 redlines
    agreeToTerms: false,  // Added for Step 2 protocol
    locationVerified: false,
    address: '',
  });

  // Sync with LocalStorage for session persistence
  useEffect(() => {
    const savedData = localStorage.getItem('kai_registration_draft');
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Error parsing saved data", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('kai_registration_draft', JSON.stringify(formData));
  }, [formData]);

  const updateFields = (fields: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Final Submission to Supabase
  const handleFinalSubmit = async () => {
    setLoading(true);
    
    // 1. Create Auth User
    const { data, error: authError } = await supabase.auth.signUp({
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
    });

    if (authError) {
      alert(`Registration Error: ${authError.message}`);
      setLoading(false);
      return;
    }

    if (data.user) {
      // 2. Insert into Profiles with the pending_review status
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([{ 
          id: data.user.id, 
          business_name: formData.businessName, 
          category: formData.category,
          business_type: formData.bizType,
          registration_number: formData.bizType === 'company' ? formData.registrationNumber : 'N/A',
          status: 'pending_review' 
        }]);

      if (profileError) {
        alert("Account created, but profile failed: " + profileError.message);
      } else {
        setStep(5); // Move to final completion screen
      }
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#edeae7] text-black font-mono flex flex-col items-center pt-32 pb-20 px-6">
      <div className="w-full max-w-4xl">
        
        {/* 01: BREADCRUMBS */}
        <div className="flex border-2 border-black mb-10 text-[9px] md:text-[10px] uppercase font-black bg-white">
          <div className={`flex-1 p-4 border-r-2 border-black text-center transition-colors ${step === 1 ? 'bg-black text-white' : ''}`}>1. business info</div>
          <div className={`flex-1 p-4 border-r-2 border-black text-center transition-colors ${step === 2 ? 'bg-black text-white' : ''}`}>2. security setup</div>
          <div className={`flex-1 p-4 border-r-2 border-black text-center transition-colors ${step === 3 ? 'bg-black text-white' : ''}`}>3. verification</div>
          <div className={`flex-1 p-4 text-center transition-colors ${step >= 4 ? 'bg-black text-white' : ''}`}>4. complete</div>
        </div>

        {/* Dynamic Step Rendering with Brutalist Shadow */}
        <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {step === 1 && (
            <RegisterStep1 
              data={formData} 
              updateFields={updateFields} 
              onNext={nextStep} 
            />
          )}
          
          {step === 2 && (
            <RegisterStep2 
              data={formData} 
              updateFields={updateFields} 
              onNext={nextStep} 
              onBack={prevStep}
            />
          )}

{step === 3 && (
  <RegisterStep3 
    data={formData} 
    updateFields={updateFields} 
    onNext={handleFinalSubmit} // Ensure this matches your final submission function
    onBack={prevStep} 
    loading={loading} // ADD THIS LINE TO FIX THE RED ERROR
  />
)}

          {step === 4 && (
             <RegisterStep4
               data={formData}
               onConfirm={handleFinalSubmit}
               onBack={prevStep}
             />
          )}

          {step >= 5 && (
            <RegisterComplete businessName={formData.businessName} />
          )}
        </div>

        {/* 02: GLOBAL PROGRESS BAR */}
        <div className="mt-12 flex gap-4 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`h-2 w-16 border border-black transition-all duration-700 ${
                step >= i ? 'bg-black' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}