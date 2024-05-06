import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavsson | Home",
  description: "A Swedish web developer and designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-100`}>
        <main className="min-h-screen bg-primary-100 transition-all relative">
        <Nav />

        
        {children}
        </main>
        </body>
    </html>
  );
}
