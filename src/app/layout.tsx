import type { Metadata } from "next";
import "./globals.css";

// Metadata configuration for Next.js
export const metadata: Metadata = {
  title: "daniel.inc | Platform Upgrade",
  description: "Connecting communities & empowering local businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased overflow-x-hidden min-h-screen">
        
        {/* BACKGROUND MEDIA CONTAINER */}
        {/* This container stays fixed in the background while your content scrolls */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
           
           {/* Background Overlay: 70% white for text readability */}
           <div className="absolute inset-0 bg-white/70 z-10" />
           
           {/* Brutalist Background Base Color */}
           <div className="w-full h-full bg-[#f4f4f4]" />
           
           {/* OPTIONAL: To add a background image later, uncomment the line below: */}
           {/* <img src="/your-image.jpg" className="w-full h-full object-cover" alt="" /> */}
        </div>

        {/* MAIN CONTENT AREA */}
        {/* This renders everything from your page.tsx */}
        {children}
        
      </body>
    </html>
  );
}