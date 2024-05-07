import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

import AnimatedCursor from "react-animated-cursor";
import StoreProvider from "./StoreProvider";

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
        <StoreProvider>
      <AnimatedCursor
        color="0,0,0"
        outerSize={40}
        outerScale={1.6}
        showSystemCursor={false}
        trailingSpeed={9}
        outerStyle={{ border: "2px solid black", backgroundColor: "transparent"}}
         />
         
        <main className="min-h-screen bg-primary-100 transition-all relative">
        <Nav />

        
        {children}
        </main>
        </StoreProvider>
        </body>
    </html>
  );
}
