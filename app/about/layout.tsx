import { Metadata } from "next";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Gustavsson | About",
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
 
          <main className="min-h-screen bg-primary-100 transition-all relative">
          <Nav />
  
          
          {children}
          </main>

    );
  }
  