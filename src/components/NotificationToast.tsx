"use client";

import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type?: 'INFO' | 'SUCCESS' | 'ALERT';
  isVisible: boolean;
  onClose: () => void;
}

export default function NotificationToast({ message, type = 'INFO', isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 5000); // Auto-clear after 5s
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[500] animate-in slide-in-from-right-10 duration-500 font-mono">
      <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-stretch min-w-[320px] max-w-md">
        
        {/* Status Indicator Bar */}
        <div className={`w-3 ${
          type === 'ALERT' ? 'bg-red-600' : 
          type === 'SUCCESS' ? 'bg-[#6082a3]' : 'bg-black'
        }`}></div>

        <div className="flex-1 p-6 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-black uppercase tracking-[0.4em] opacity-40 italic">
              System_Transmission_{type}
            </span>
            <button onClick={onClose} className="text-[10px] font-black opacity-20 hover:opacity-100 transition-opacity">
              [DISMISS]
            </button>
          </div>
          
          <p className="text-sm font-black uppercase italic tracking-tighter leading-tight">
            {message}
          </p>
          
          <div className="pt-2 flex justify-between items-center border-t border-black/10">
            <span className="text-[7px] font-bold opacity-30 uppercase italic">ID: 0x_MSG_RCVD</span>
            <div className="flex gap-1">
              <div className="h-1 w-1 bg-black/20 rounded-full animate-pulse"></div>
              <div className="h-1 w-1 bg-black/20 rounded-full animate-pulse delay-75"></div>
              <div className="h-1 w-1 bg-black/20 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}