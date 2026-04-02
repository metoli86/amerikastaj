import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "amerikastaj.com - Türkiye'nin en güvenilir Amerika staj danışmanlığı. 12 yıllık deneyim, 500'den fazla başarılı stajyer.",
  alternates: {
    canonical: "https://amerikastaj.com/hakkimizda",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://amerikastaj.com" },
              { "@type": "ListItem", "position": 2, "name": "Hakkımızda", "item": "https://amerikastaj.com/hakkimizda" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
