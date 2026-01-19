import type { Metadata } from "next";
// Ensure this path matches your global CSS location exactly
import "../../app/globals.css"; 

// Metadata configuration for the Platform
export const metadata: Metadata = {
  title: "daniel.inc | Platform Upgrade",
  description: "Connecting communities & empowering local businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased overflow-x-hidden min-h-screen selection:bg-green-500 selection:text-white">
        
        {/* BACKGROUND MEDIA CONTAINER */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
           {/* Background Overlay: 70% white for text readability */}
           <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10" />
           
           {/* Brutalist Background Base Color */}
           <div className="w-full h-full bg-[#f4f4f4]" />

           {/* Subtle Grid Pattern for a technical/brutalist feel */}
           <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
        </div>

        {/* MAIN CONTENT AREA */}
        <main className="relative z-20">
          {children}
        </main>
        
      </body>
    </html>
  );
}