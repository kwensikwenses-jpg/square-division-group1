"use client";

import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/utils/supabase';

export default function DirectChat({ params }: { params: { id: string } }) {
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Get Current User & Initial Messages
    const setupChat = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);

      const { data } = await supabase
        .from('messages')
        .select('*')
        .eq('lead_id', params.id)
        .order('created_at', { ascending: true });
      
      if (data) setMessages(data);
    };

    setupChat();

    // 2. Realtime Subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'messages', filter: `lead_id=eq.${params.id}` }, 
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [params.id]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    await supabase.from('messages').insert([
      { lead_id: params.id, sender_id: user.id, content: newMessage }
    ]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[80vh] border-2 border-black bg-white">
      <header className="p-4 border-b-2 border-black bg-[#6082a3] text-white font-black uppercase italic">
        B2B Discussion / Lead ID: {params.id.slice(0,8)}
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#edeae7]/30">
        {messages.map((msg, i) => (
          <div key={i} className={`max-w-xs p-4 text-xs font-bold uppercase ${
            msg.sender_id === user?.id ? 'ml-auto bg-black text-white' : 'bg-white border border-black'
          }`}>
            {msg.content}
          </div>
        ))}
        <div ref={scrollRef} />
      </div>

      <form onSubmit={sendMessage} className="p-4 border-t-2 border-black flex gap-2">
        <input 
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type B2B Proposal..."
          className="flex-1 bg-transparent outline-none uppercase font-bold text-sm"
        />
        <button type="submit" className="bg-black text-white px-8 py-2 font-black uppercase text-xs">
          Send
        </button>
      </form>
    </div>
  );
}