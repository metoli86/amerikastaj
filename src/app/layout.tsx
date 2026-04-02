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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
