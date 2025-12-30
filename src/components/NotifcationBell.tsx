"use client";

import React, { useState } from 'react';

export default function NotificationBell() {
  const [showToast, setShowToast] = useState(false);
  const [latestMessage, setLatestMessage] = useState(""); // Added missing state

  const handleTestNotification = () => {
    // TRIGGER TOAST LOGIC HERE
    setLatestMessage("NEW_ENCRYPTED_MESSAGE_RECEIVED");
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="relative">
      <button 
        onClick={handleTestNotification}
        className="p-2 hover:bg-black/5 transition-colors relative"
      >
        <span className="text-xl">🔔</span>
        <span className="absolute top-1 right-1 h-2 w-2 bg-red-600 rounded-full border border-white"></span>
      </button>

      {showToast && (
        <div className="fixed bottom-8 right-8 bg-black text-white p-6 border-4 border-[#6082a3] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] animate-in slide-in-from-right duration-500 font-mono z-50">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-2">System_Alert</p>
          <p className="text-xs font-bold uppercase italic">{latestMessage}</p>
        </div>
      )}
    </div>
  );
}