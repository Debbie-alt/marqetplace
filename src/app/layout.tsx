// app/layout.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Homepage/Navbar";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/Authcontext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const client = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const showBanner = pathname === "/store";
  const showNavbar = pathname !== "/signup" && pathname !== '/signin' && pathname !== '/app/sellerupload' ; 

  return (
    <QueryClientProvider client={client}>
    <AuthProvider>
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {showBanner && (
          <div className="bg-[#91D9EE] w-full text-center py-2.5 text-gray-700">
            Experience online buying at a whole new level
          </div>
        )}
        {showNavbar && <Navbar />}
        {children}
         <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      </body>
    </html>
    </AuthProvider>
    </QueryClientProvider>
  );
}
