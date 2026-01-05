"use client";

import React, { useState, useEffect } from 'react';

interface Step2Props {
  data: any;
  updateFields: (fields: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const RegisterStep2: React.FC<Step2Props> = ({ data, updateFields, onNext, onBack }) => {
  // Initialize pin from saved data if available, otherwise empty
  const [pin, setPin] = useState<string[]>(
    data.pin ? data.pin.split('').concat(Array(6 - data.pin.length).fill('')) : Array(6).fill('')
  );

  // Sync PIN with parent Form Data whenever it changes
  useEffect(() => {
    updateFields({ pin: pin.join('') });
  }, [pin]);

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

  const handleInput = (val: string) => {
    const nextIndex = pin.findIndex(d => d === '');
    if (nextIndex !== -1) {
      const newPin = [...pin];
      newPin[nextIndex] = val;
      setPin(newPin);
    }
  };

  const handleBackspace = () => {
    // Find the last filled index to delete
    const filledIndices = pin.map((d, i) => d !== '' ? i : -1).filter(i => i !== -1);
    const lastIndex = filledIndices.length > 0 ? filledIndices[filledIndices.length - 1] : -1;

    if (lastIndex !== -1) {
      const newPin = [...pin];
      newPin[lastIndex] = '';
      setPin(newPin);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 font-mono">
      <div className="space-y-2">
        <h2 className="text-2xl font-black italic uppercase">Security Pin</h2>
        <p className="text-[10px] opacity-60 uppercase leading-tight">
          Enter a 6-digit personal identification number. You will use this to access your business node.
        </p>
      </div>

      <div className="border-4 border-black bg-white flex flex-col md:flex-row shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]">
        
        {/* LEFT: PIN DISPLAY */}
        <div className="flex-1 p-10 flex flex-col items-center justify-center border-b-4 md:border-b-0 md:border-r-4 border-black">
          <p className="text-[10px] font-black uppercase mb-6 opacity-40">Security Sequence</p>
          <div className="flex gap-2">
            {pin.map((digit, i) => (
              <div key={i} className="w-10 h-10 border-2 border-black flex items-center justify-center bg-gray-50 relative overflow-hidden">
                {/* Fluid Star/Asterisk transition */}
                <span className={`text-xl font-black transition-all duration-300 transform ${digit ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  *
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[9px] font-black opacity-30 uppercase">Status: {pin.every(d => d !== '') ? 'Ready' : 'Input Required'}</p>
        </div>

        {/* RIGHT: NUMERIC KEYPAD */}
        <div className="grid grid-cols-3 bg-black gap-1 border-t-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              onClick={() => handleInput(num.toString())}
              className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl transition-colors active:bg-black active:text-white"
            >
              {num}
            </button>
          ))}
          <div className="bg-gray-200 w-20 h-20" /> {/* Empty Slot Filler */}
          <button 
            onClick={() => handleInput('0')}
            className="w-20 h-20 bg-white hover:bg-orange-500 hover:text-white font-black text-xl active:bg-black active:text-white"
          >
            0
          </button>
          <button 
            onClick={handleBackspace}
            className="w-20 h-20 bg-gray-200 hover:bg-red-600 hover:text-white font-black text-xs uppercase"
          >
            DEL
          </button>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={onBack} className="flex-1 border-4 border-black p-4 font-black uppercase italic hover:bg-gray-200 text-sm">
          Back
        </button>
        <button 
          onClick={onNext} 
          disabled={pin.some(d => d === '')}
          className="flex-[2] bg-black text-white p-4 font-black uppercase italic hover:bg-orange-600 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] disabled:opacity-20 disabled:cursor-not-allowed text-sm active:translate-y-1 active:shadow-none transition-all"
        >
          Verify Pin →
        </button>
      </div>
    </div>
  );
};

export default RegisterStep2;