import type { Metadata } from "next";
import Script from "next/script"; // ⬅️ 加入 Script 支持
import "./globals.css";
import ClientBody from "./ClientBody";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Grow A Garden Calculator | Roblox Crop Value Calculator",
  description: "Calculate crop values, analyze trades, and master mutations in Roblox's Grow A Garden. Free calculator with real-time fruit values and trading tips.",
  keywords: ["Grow A Garden", "Roblox", "Calculator", "Crop Values", "Mutations", "Trading"],
  openGraph: {
    title: "Grow A Garden Calculator",
    description: "The ultimate tool for Roblox Grow A Garden players. Calculate crop values and optimize your farming strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ 插入 Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-J8VT3G13GR"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-J8VT3G13GR');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>
          <Navigation />
          <main className="container mx-auto px-4 pb-8">
            {children}
          </main>
        </ClientBody>
      </body>
    </html>
  );
}