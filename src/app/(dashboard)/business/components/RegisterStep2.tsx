"use client";

import React, { useState, useEffect } from 'react';

interface Step2Props {
  data: any;
  updateFields: (fields: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep2: React.FC<Step2Props> = ({ data, updateFields, onNext, onBack }) => {
  const [pin, setPin] = useState<string[]>(Array(6).fill(''));

  // Logic to handle number entry (from screen or keyboard)
  const handleInput = (val: string) => {
    const nextIndex = pin.findIndex(d => d === '');
    if (nextIndex !== -1) {
      const newPin = [...pin];
      newPin[nextIndex] = val;
      setPin(newPin);
    }
  };

  const handleBackspace = () => {
    const lastIndex = [...pin].reverse().findIndex(d => d !== '');
    if (lastIndex !== -1) {
      const actualIndex = 5 - lastIndex;
      const newPin = [...pin];
      newPin[actualIndex] = '';
      setPin(newPin);
    }
  };

  // Enable Physical Keyboard Entry
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleInput(e.key);
      if (e.key === 'Backspace') handleBackspace();
      if (e.key === 'Enter' && pin.every(d => d !== '')) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin]);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 font-mono">
      <div className="space-y-2">
        <h2 className="text-2xl font-black italic uppercase">Security Pin</h2>
        <p className="text-[10px] opacity-60 uppercase leading-tight">
          Enter your personal identification number to verify your identity and secure access to your account.
        </p>
      </div>

      <div className="border-4 border-black bg-white flex flex-col md:flex-row shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
        
        {/* LEFT: PIN DISPLAY */}
        <div className="flex-1 p-10 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
          <p className="text-[10px] font-black uppercase mb-6 opacity-40">Enter Your Pin</p>
          <div className="flex gap-2">
            {pin.map((digit, i) => (
              <div key={i} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50 relative overflow-hidden">
                {/* Fluid Star/Asterisk transition */}
                <span className={`text-xl font-black transition-all duration-300 ${digit ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  *
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[9px] font-black opacity-30 uppercase">Attempts Remaining: 3/3</p>
        </div>

        {/* RIGHT: NUMERIC KEYPAD */}
        <div className="grid grid-cols-3 bg-black gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              onClick={() => handleInput(num.toString())}
              className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl transition-colors active:bg-black active:text-white"
            >
              {num}
            </button>
          ))}
          <div className="bg-gray-100" /> {/* Empty Slot */}
          <button 
            onClick={() => handleInput('0')}
            className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl"
          >
            0
          </button>
          <button 
            onClick={handleBackspace}
            className="w-20 h-20 bg-gray-200 hover:bg-red-500 hover:text-white font-black text-xs uppercase"
          >
            Del
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-2 border-black p-6 font-black uppercase italic hover:bg-gray-200">Back</button>
        <button 
          onClick={onNext} 
          disabled={pin.some(d => d === '')}
          className="flex-[2] bg-black text-white p-6 font-black uppercase italic hover:bg-orange-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] disabled:opacity-20"
        >
          Verify Pin →
        </button>
      </div>
    </div>
  );
};

export default RegisterStep2;