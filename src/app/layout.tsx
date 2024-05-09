import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relix AI",
  description: "An AI platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
      {/* <GoogleAnalytics gaId="G-YWYLYTFZ6S" /> */}
    </html>
  );
}
