import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Ensure this path is correct based on your screenshot

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KZN Partner Ecosystem",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#edeae7] text-black min-h-screen`}
      >
      
        
        {/* Main wrapper to ensure content starts below the fixed Navbar if necessary */}
        <div className="pt-0"> 
          {children}
        </div>
      </body>
    </html>
  );
}