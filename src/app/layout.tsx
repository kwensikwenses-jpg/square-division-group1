import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KZN Partner Ecosystem | THE GRID",
  description: "Connecting local businesses and customers in KwaZulu-Natal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen cursor-none overflow-x-hidden`}
        style={{ 
          backgroundColor: 'var(--background)',
          // The Swiss site pattern on the "desk" background
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '32px 32px' 
        }}
      >
        <CustomCursor />
        
        {/* THE 'A4' DOCUMENT WRAPPER */}
        <div className="relative mx-auto my-0 md:my-12 w-full max-w-[1280px] min-h-screen bg-white shadow-[0_0_80px_rgba(0,0,0,0.15),25px_25px_0px_rgba(0,0,0,0.03)] border-x border-black/5 flex flex-col">
          
          {/* THE ACCENT TOP LINE (Swiss Federal Red) */}
          <div className="h-2 w-full bg-[#dc2626] sticky top-0 z-[80]" />
          
          {/* MAIN PAGE CONTENT */}
          <div className="flex-1 flex flex-col pt-0"> 
            {children}
          </div>

          {/* DOCUMENT FOOTER CAP */}
          <div className="h-4 w-full bg-[#f8f8f8] border-t border-black/5 mt-auto" />
        </div>
      </body>
    </html>
  );
}