import type { Metadata } from "next";
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
