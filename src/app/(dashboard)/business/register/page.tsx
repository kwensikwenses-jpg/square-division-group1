"use client";

import React, { useState, useEffect } from 'react';
import RegisterStep1 from '../components/RegisterStep1';
import RegisterStep2 from '../components/RegisterStep2';
import RegisterStep3 from '../components/RegisterStep3';
import RegisterStep4 from '../components/RegisterStep4';
import RegisterComplete from '../components/RegisterComplete';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    sector: 'RETAIL',
    address: '',
    suburb: '',
    email: '',
    phone: ''
  });

  // Save to LocalStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('kai_demo_business', JSON.stringify(formData));
  }, [formData]);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateFields = (fields: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  return (
    <main className="min-h-screen bg-[#edeae7] flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-2xl">
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
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}
        {step === 4 && (
          <RegisterStep4 
            data={formData} 
            onConfirm={nextStep} 
            onBack={prevStep} 
          />
        )}
        {step === 5 && (
          <RegisterComplete businessName={formData.businessName} />
        )}

        {/* Global Progress Bar */}
        <div className="mt-8 flex gap-2 justify-center">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`h-1 w-12 transition-all duration-500 ${
                step >= i ? 'bg-black' : 'bg-black/10'
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}