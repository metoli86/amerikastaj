import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika Vize Başvurusu | ABD Vize Rehberi 2026",
  description:
    "Amerika vize başvurusu nasıl yapılır? Vize türleri, DS-160, randevu alma, ücretler ve gerekli belgeler. Kapsamlı ABD vize rehberi.",
  alternates: {
    canonical: "https://amerikastaj.com/amerika-vize-basvurusu",
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
              { "@type": "ListItem", "position": 2, "name": "Amerika Vize Başvurusu", "item": "https://amerikastaj.com/amerika-vize-basvurusu" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
