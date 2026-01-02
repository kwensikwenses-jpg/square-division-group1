import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Community Hub | Connecting Communities",
  description: "Empowering local businesses and creating meaningful connections.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen cursor-none overflow-x-hidden">
        <CustomCursor />
        
        {/* BACKGROUND MEDIA CONTAINER */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
           {/* 70% White Overlay for readability */}
           <div className="absolute inset-0 bg-white/70 z-10" />
           <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920" 
            alt="Background" 
            className="w-full h-full object-cover"
           />
        </div>

        {/* 75% WIDTH A4 PAGE (Left Aligned) */}
        <div className="relative w-full max-w-[75%] mr-auto ml-0 bg-white min-h-screen shadow-[4px_0_8px_rgba(0,0,0,0.1),12px_0_24px_rgba(0,0,0,0.06)] flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}