"use client";

import React, { useEffect, useState } from 'react';

export default function SystemLogs() {
  const [logs, setLogs] = useState([
    { time: "03:21:04", event: "INITIALIZING_VAULT_DECRYPT", status: "OK" },
    { time: "03:21:12", event: "METADATA_SYNC_COORD_29.8S", status: "SYNC" },
    { time: "03:21:25", event: "INCOMING_LEAD_L-99_DETECTED", status: "ALERT" },
  ]);

  // Simulate live scrolling data
  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = {
        time: new Date().toLocaleTimeString('en-GB', { hour12: false }),
        event: "CORE_SYSTEM_HEARTBEAT_STABLE",
        status: "LIVE"
      };
      setLogs(prev => [...prev.slice(-4), newLog]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-[#6082a3] p-4 border-t-4 border-black font-mono text-[9px] uppercase tracking-widest overflow-hidden">
      <div className="max-w-7xl mx-auto flex gap-8 items-center">
        <div className="flex gap-2 items-center text-white shrink-0">
          <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
          <span className="font-black">SYS_LOGS:</span>
        </div>
        <div className="flex gap-12 animate-in slide-in-from-right duration-1000">
          {logs.map((log, i) => (
            <div key={i} className="whitespace-nowrap flex gap-3">
              <span className="opacity-40">[{log.time}]</span>
              <span className="text-white">{log.event}</span>
              <span className="opacity-40 italic">// {log.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}