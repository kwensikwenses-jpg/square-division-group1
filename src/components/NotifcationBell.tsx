"use client";

import React, { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase';

export default function NotificationBell() {
  const [unreadCount, setUnreadCount] = useState(0);
  const [hasNew, setHasNew] = useState(false);

  useEffect(() => {
    // 1. Listen for new messages across the whole platform
    const channel = supabase
      .channel('global-notifications')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'messages' }, 
        async (payload) => {
          const { data: { user } } = await supabase.auth.getUser();

    // Inside your useEffect where you detect a new message
if (payload.new.sender_id !== user?.id) {
  setUnreadCount(prev => prev + 1);
  setHasNew(true);

  // TRIGGER TOAST LOGIC HERE
  setLatestMessage("NEW_ENCRYPTED_MESSAGE_RECEIVED");
  setShowToast(true);
}

          // 2. Only notify if the message is NOT from the current user
          if (payload.new.sender_id !== user?.id) {
            setUnreadCount(prev => prev + 1);
            setHasNew(true);
            
            // Subtle notification sound for operational feedback
            const audio = new Audio('/notify.mp3');
            audio.play().catch(() => console.log("Audio_Sync_Blocked"));
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <button 
      onClick={() => { setUnreadCount(0); setHasNew(false); }}
      className="relative px-6 h-full flex items-center justify-center hover:bg-black hover:text-white transition-all border-x-2 border-black group font-mono"
    >
      {/* Brutalist "Alerts" Identifier */}
      <span className="text-[10px] font-black uppercase tracking-widest group-hover:italic">
        Alerts
      </span>
      
      {/* Real-time Urgency Badge */}
      {hasNew && (
        <span className="absolute top-4 right-4 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-[8px] text-white items-center justify-center font-bold italic shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]">
            {unreadCount}
          </span>
        </span>
      )}
    </button>
  );
}