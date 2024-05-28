import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PETTAH AI | Real time image generator",
  description:
    "pettah ai real time image generator | V1 sri lanka first real time image generator",
  authors: [{ name: "fal.ai", url: "https://pettah-ai.vercel.app/" }],
  metadataBase: new URL("https://pettah-ai.vercel.app/"),
  openGraph: {
    images: "/og_thumbnail.jpeg",
  },
  icons: {
    icon: "/favicon.png",
    // Add other icon sizes if needed
    // appleTouchIcon: "/apple-touch-icon.png", // Example for apple touch icon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
        }}>
        <Analytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
