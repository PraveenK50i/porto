import type { Metadata } from "next";
import { Navbar } from "../navbar/navigation";
import { Inter } from "next/font/google";
import "./globals.css";

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
        </body>
    </html>
  );
}
