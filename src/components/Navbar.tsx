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
          
          // 2. Only notify if the message is NOT from the current user
          if (payload.new.sender_id !== user?.id) {
            setUnreadCount(prev => prev + 1);
            setHasNew(true);
            
            // Optional: Play a subtle notification sound for the demo
            const audio = new Audio('/notify.mp3');
            audio.play().catch(() => console.log("Audio blocked by browser"));
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <button 
      onClick={() => { setUnreadCount(0); setHasNew(false); }}
      className="relative p-2 hover:bg-black hover:text-white transition-all border border-black"
    >
      {/* Brutalist Bell Icon */}
      <span className="text-[10px] font-black uppercase tracking-widest">Alerts</span>
      
      {hasNew && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 text-[8px] text-white items-center justify-center font-bold">
            {unreadCount}
          </span>
        </span>
      )}
    </button>
  );
}