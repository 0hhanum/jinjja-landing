import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Image from "next/image";
import Navigation from "@/components/Navigation";
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
  title: "Jinjja, Your Korean Booster | The best way to learn real Korean",
  description:
    "Hangul is easy, but Korean is hard. Master Korean in just 15 minutes a day. Learn over 2,000 authentic Korean expressions used in daily life.",
  keywords: [
    "Korean learning app",
    "Learn Korean 15 minutes",
    "Korean conversation practice",
    "Korean phrases authentic",
    "K-drama Korean language",
    "Korean speaking practice",
    "Interactive Korean lessons",
    "Korean for professionals",
    "Korean travel phrases",
    "Real Korean expressions",
    "Korean language app iOS Android",
    "Korean study gamified",
    "Context Korean learning",
    "Korean pronunciation practice",
    "Korean daily conversation",
    "K-pop Korean learning",
    "Korean workplace language",
    "Korean forgetting curve",
    "Speak play learn Korean",
    "Korean booster app",
    "Advanced Korean",
    "Real Korean",
    "Free Korean app",
    "Free Korean",
  ],
  authors: [{ name: "OrganCow" }],
  creator: "OrganCow",
  publisher: "OrganCow",
  category: "Education",
  classification: "Language Learning App",
  applicationName: "Jinjja Korean",
  itunes: {
    appId: "6746579913",
    appArgument:
      "https://apps.apple.com/us/app/jinjja-your-korean-booster/id6746579913",
  },
  openGraph: {
    title: "Jinjja, Your Korean Booster | The best way to learn real Korean",
    description:
      "Hangul is easy, but Korean is hard. Master Korean in just 15 minutes a day. Learn over 2,000 authentic Korean expressions used in daily life.",
    type: "website",
    locale: "en_US",
    siteName: "Jinjja Korean",
    url: "https://jinjja.app",
    images: [
      {
        url: "/images/app-icon.png",
        width: 512,
        height: 512,
        alt: "Jinjja Korean Learning App Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jinjja - Your Korean Booster",
    description: "The best way to learn real Korean",
    images: ["/images/app-icon.png"],
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
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-icon-precomposed.png",
      },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Jinjja Korean",
    "application-name": "Jinjja Korean",
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#000000",
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
        {/* Safari favicon 지원 */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/apple-icon-precomposed.png"
        />
        {/* Google Ads 외부 스크립트 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17424665166"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', 'AW-17424665166');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden bg-black`}
      >
        {/* 고정된 네비게이션 */}
        <Navigation />

        {/* 고정된 Instagram 링크 */}
        <a
          href="https://www.instagram.com/korean_jinjja/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-105 hover:opacity-80 flex items-center justify-center fixed md:bottom-8 md:right-8 bottom-4 right-4 z-20"
          aria-label="Follow us on Instagram"
        >
          <Image
            src="/images/instagram.svg"
            alt="Instagram"
            width={48}
            height={48}
            className="md:h-12 h-10 w-auto"
          />
        </a>

        {/* 스크롤 가능한 컨텐츠 영역 */}
        <div className="fixed inset-0 overflow-y-auto z-10">
          <div className="min-h-screen bg-transparent relative z-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
