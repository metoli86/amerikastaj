import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: {
    default: "Amerika Staj Programı | amerikastaj.com",
    template: "%s | amerikastaj.com",
  },
  description:
    "Amerika'da maaşlı staj programları, J1 vize danışmanlığı ve başvuru rehberi. Türkiye'nin en güvenilir Amerika staj danışmanlığı.",
  metadataBase: new URL("https://amerikastaj.com"),
  alternates: {
    canonical: "https://amerikastaj.com",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "amerikastaj.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "amerikastaj.com",
              "url": "https://amerikastaj.com",
              "description": "Türkiye'nin en güvenilir Amerika staj danışmanlığı. J1 vize ile Amerika'da maaşlı staj programları.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+90-212-123-4567",
                "contactType": "customer service",
                "availableLanguage": "Turkish",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "amerikastaj.com",
              "url": "https://amerikastaj.com",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
