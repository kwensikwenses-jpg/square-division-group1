"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SecurityPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleFinalize = async () => {
    setLoading(true);
    // Here we will call the /api/register route we built earlier
    // This completes the registration Mohammed and Daniel designed
    setTimeout(() => {
      setLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
        
        <div className="bg-[#1A1A1A] p-4 text-[#00FF41] font-mono text-[10px]">
          <p>[09:30:12] ENCRYPTION_LAYER_ACTIVE // SECURE</p>
        </div>

        <div className="p-10">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter text-gray-900 mb-8">
            Account Security
          </h1>

          <div className="space-y-6">
            <div>
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Set Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-lg font-bold focus:border-green-500 outline-none transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-gray-400 ml-2">Confirm Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-lg font-bold focus:border-green-500 outline-none transition-all"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest">Security Note:</p>
              <p className="text-xs text-blue-800 mt-1">Passwords must be at least 8 characters and include a symbol.</p>
            </div>

            <button 
              onClick={handleFinalize}
              disabled={loading}
              className="w-full bg-[#34D399] text-white p-6 rounded-2xl font-black italic uppercase tracking-widest hover:bg-black transition-all mt-8 flex justify-between items-center group"
            >
              <span>{loading ? 'Securing Account...' : 'Finalize & Join'}</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}