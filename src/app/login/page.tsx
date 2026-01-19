"use client";
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F9FB] p-6">
      <div className="w-full max-w-md bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Log in to your dashboard</p>
        </div>

        <div className="space-y-5">
          <input 
            type="email" placeholder="Email" 
            className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all"
          />
          <input 
            type="password" placeholder="Password" 
            className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 transition-all"
          />
          
          <button className="w-full bg-[#34D399] hover:bg-[#059669] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 transition-all active:scale-95">
            Log In
          </button>
        </div>

        <div className="flex flex-col space-y-4 mt-8 text-center text-sm">
          <Link href="/forgot-password" title="Forgot password link" className="text-gray-400 hover:text-gray-600">Forgot password?</Link>
          <p className="text-gray-600">
            New here? <Link href="/register" title="Register link" className="text-green-600 font-bold hover:underline">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}