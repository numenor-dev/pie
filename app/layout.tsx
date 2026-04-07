import type { Metadata } from "next";
import { Inter_Tight, Roboto_Flex } from "next/font/google";
import Header from "./ui-components/header";
import Footer from "./ui-components/footer";
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Personalized Investment Explorer",
  description: "A tool to help navigate passion and value investing.",
  openGraph: {
    images: ["/growth.png"],
  },
};

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
})

const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body className={`${inter.variable} ${roboto.variable} antialiased`}>
        <div className="min-h-screen font-roboto relative overflow-x-hidden flex flex-col">
          <Toaster
            toastOptions={{
              className: "rounded-sm shadow-md",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: 'rgba(100,100,100,0.2)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#000',
              },
            }}
          />
          <Header />
          <main className="flex-1 bg-stone-100 text-stone-800">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}