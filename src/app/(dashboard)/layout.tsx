import type { Metadata } from "next";
import "@/app/globals.css";

// Metadata configuration for Next.js
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
    <html lang="en">
      <body className="antialiased overflow-x-hidden min-h-screen">
        
        {/* BACKGROUND MEDIA CONTAINER */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
           {/* Background Overlay: 70% white for text readability */}
           <div className="absolute inset-0 bg-white/70 z-10" />
           
           {/* Brutalist Background Base Color */}
           <div className="w-full h-full bg-[#f4f4f4]" />
        </div>

        {/* MAIN CONTENT AREA */}
        {children}
        
      </body>
    </html>
  );
}