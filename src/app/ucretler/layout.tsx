import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika Staj Ücretleri ve Fiyatları 2026",
  description:
    "Amerika staj programı ücretleri, SEVIS ücreti, vize başvuru masrafları ve taksit seçenekleri. Şeffaf fiyatlandırma.",
  alternates: {
    canonical: "https://amerikastaj.com/ucretler",
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
              { "@type": "ListItem", "position": 2, "name": "Ücretler", "item": "https://amerikastaj.com/ucretler" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
