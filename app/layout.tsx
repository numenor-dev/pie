import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Toaster } from 'react-hot-toast'
import "./globals.css";

export const metadata: Metadata = {
  title: "Personalized Investment Engine",
  description: "A tool to learn about passion and value investing.",
  openGraph: {
    images: ["/invest.png"],
  },
};

const inter = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="min-h-screen bg-[#246A6B] font-inter text-slate-200">
          <Toaster
            toastOptions={{
              className: "rounded-sm shadow-md",
              duration: 5000,
              removeDelay: 1000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
          {children}
        </div>
      </body>
    </html>
  );
}
