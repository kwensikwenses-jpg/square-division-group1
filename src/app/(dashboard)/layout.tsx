"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
  { name: 'Overview', path: '/business' },
  { name: 'Analytics', path: '/business/stats' }, // New Link
  { name: 'Marketplace', path: '/business/marketplace' },
  { name: 'Messages', path: '/business/messages' },
  { name: 'Profile Editor', path: '/business/profile' },
];

  return (
    <main className="min-h-screen bg-[#edeae7] text-black">
      <Navbar />
      <div className="flex pt-20 h-screen">
        {/* SHARED SIDEBAR */}
        <aside className="w-64 border-r border-black p-8 hidden md:flex flex-col justify-between h-full">
          <nav className="space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">Business Hub</p>
              <ul className="space-y-6">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link 
                      href={item.path}
                      className={`text-xs font-black uppercase tracking-tighter hover:italic transition-all ${
                        pathname === item.path ? 'underline decoration-2 underline-offset-4' : 'opacity-60'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 border border-black bg-white">
               <p className="text-[10px] font-bold uppercase mb-1">Tier Status</p>
               <p className="text-xl font-black italic uppercase text-[#6082a3]">Gold</p>
            </div>
          </nav>
          
          <div className="border-t border-black pt-6">
            <button className="text-[10px] font-bold uppercase tracking-widest hover:text-red-500 transition-colors">
              Sign Out — Log 01
            </button>
          </div>
        </aside>

        {/* DYNAMIC CONTENT AREA */}
        <section className="flex-1 overflow-y-auto p-8 md:p-12">
          {children}
        </section>
      </div>
    </main>
  );
}