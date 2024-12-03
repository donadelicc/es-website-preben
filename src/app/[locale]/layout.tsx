import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import "./globals.css";

import { Montserrat as FontSans } from "next/font/google";

import { cn } from "@app/lib";
import { Footer, Header } from "@app/components";
import { Analytics } from "@vercel/analytics/react";
import { routing } from "@app/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";

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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
