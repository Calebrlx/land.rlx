import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/header";
import Footer from '@/components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relix AI",
  description: "An AI service provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-YWYLYTFZ6S" />
    </html>
  );
}
