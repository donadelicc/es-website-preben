import type { Metadata } from "next";
import "./globals.css";

import { Montserrat as FontSans } from "next/font/google";

import { cn } from "@app/lib";
import { Container } from "@app/components";
import { Navbar } from "@app/components/Navbar";
import { Footer } from "@app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { ColorProvider } from "@app/context/ColorContext";

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
  // Check if we're on the about page
  const isAboutPage =
    typeof window !== "undefined" && window.location.pathname === "/about";

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ColorProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {isAboutPage ? children : <Container>{children}</Container>}
            </main>
            <Footer />
          </div>
          <Analytics />
        </ColorProvider>
      </body>
    </html>
  );
}
