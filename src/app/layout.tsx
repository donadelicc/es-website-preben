import type { Metadata } from "next";
import "./globals.css";

import { Montserrat as FontSans } from "next/font/google";

import { cn } from "@app/lib";
import { Footer, Header } from "@app/components";
import { Analytics } from "@vercel/analytics/react";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NTNU School of Entrepreneurship",
  description: "NTNU School of Entrepreneurship",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
