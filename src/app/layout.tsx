import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor"; // The interactive element for luxury feel

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#edeae7] text-black min-h-screen cursor-none`}
      >
        {/* The Custom Cursor sits at the root level to track across all pages */}
        <CustomCursor />
        
        <div className="pt-0"> 
          {children}
        </div>
      </body>
    </html>
  );
}