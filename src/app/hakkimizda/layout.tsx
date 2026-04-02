import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "amerikastaj.com - Türkiye'nin en güvenilir Amerika staj danışmanlığı. 12 yıllık deneyim, 500'den fazla başarılı stajyer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
