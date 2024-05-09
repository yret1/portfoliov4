import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

import StoreProvider from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustavsson | Home",
  description: "A Swedish web developer and designer.",
  icons: [
    {
      rel: "icon",
      url: "/icons/Favicon.jpg",
    },
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-100`}>
        <StoreProvider>
     
         
        <main className="min-h-screen bg-primary-100 transition-all relative">
        <Nav />

        
        {children}
        </main>
        </StoreProvider>
        </body>
    </html>
  );
}
