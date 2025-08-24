import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jinjja - Your Korean Booster | Learn Real Korean Naturally",
  description:
    "Learn over 2,000 authentic Korean expressions used in daily life. Master real Korean conversations, speak naturally, and sound confident with Jinjja Korean.",
  keywords: [
    "Korean learning",
    "Korean language",
    "Korean expressions",
    "Korean conversation",
    "Learn Korean",
    "Korean app",
    "K-drama",
    "K-pop",
    "Korean study",
    "Korean practice",
  ],
  authors: [{ name: "Jinjja Team" }],
  creator: "Jinjja",
  publisher: "Jinjja",
  openGraph: {
    title: "Jinjja - Your Korean Booster | Learn Real Korean Naturally",
    description:
      "Learn over 2,000 authentic Korean expressions used in daily life. Master real Korean conversations and speak like a native.",
    type: "website",
    locale: "en_US",
    siteName: "Jinjja Korean",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinjja - Your Korean Booster",
    description:
      "Learn over 2,000 authentic Korean expressions. Speak naturally, sound confident.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
