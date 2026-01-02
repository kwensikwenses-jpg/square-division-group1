import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Community Hub - Landing Page",
  description: "Connecting communities and empowering local businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}