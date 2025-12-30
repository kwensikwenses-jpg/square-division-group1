"use client";

export default function LocationNode() {
  return (
    <div className="w-full max-w-md border-4 border-black bg-white shadow-[20px_20px_0px_0px_rgba(255,0,0,0.1)]">
      <div className="bg-red-600 text-white p-4 flex gap-3 items-center">
        <div className="h-2 w-2 bg-white animate-ping"></div>
        <p className="text-[9px] font-black uppercase tracking-widest italic">Anomalous_Location_Detected</p>
      </div>

      <div className="p-8 space-y-6">
        <div className="text-[10px] space-y-4">
          <div className="flex justify-between opacity-40 font-bold uppercase">
            <span>Detected_City</span>
            <span>Cape Town, ZA</span>
          </div>
          <div className="flex justify-between opacity-40 font-bold uppercase border-b border-black/10 pb-4">
            <span>Registered_Node</span>
            <span>Johannesburg, ZA</span>
          </div>
        </div>

        <p className="text-[11px] font-black uppercase italic leading-tight">
          System detected a login attempt 500km from your primary operations node. Confirm identity to proceed.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button className="bg-black text-white py-4 text-[10px] font-black uppercase hover:opacity-80 transition-all">
            Yes, This_is_Me
          </button>
          <button className="border-2 border-red-600 text-red-600 py-4 text-[10px] font-black uppercase hover:bg-red-600 hover:text-white transition-all">
            Lock_Account
          </button>
        </div>
      </div>
    </div>
  );
}