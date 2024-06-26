import type { Metadata } from "next";
import { Navbar } from "../navbar/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A personal portfolio website created by Praveen Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} overflow-y-scroll overflow-x-hidden`}>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        </body>
    </html>
  );
}
