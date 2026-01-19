"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({ email: '', password: '', full_name: '' });
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F9FB] p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Create Account</h1>
          <p className="text-gray-500 mt-2">Join the digital highway</p>
        </div>

        <div className="space-y-5">
          <input 
            type="text" placeholder="Full Name" 
            className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400"
            onChange={(e) => setFormData({...formData, full_name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" 
            className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Create Password" 
            className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all placeholder:text-gray-400"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          
          <button 
            className="w-full bg-[#34D399] hover:bg-[#059669] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all active:scale-95"
          >
            {loading ? 'Joining...' : 'Sign Up'}
          </button>
        </div>

        <p className="text-center mt-8 text-sm text-gray-600">
          Already have an account? <Link href="/login" className="text-green-600 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}