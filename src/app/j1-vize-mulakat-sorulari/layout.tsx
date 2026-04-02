import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J1 Vize Mülakat Soruları ve Cevapları",
  description:
    "J1 vize mülakatında en çok sorulan sorular, örnek cevaplar ve mülakat hazırlığı ipuçları.",
  alternates: {
    canonical: "https://amerikastaj.com/j1-vize-mulakat-sorulari",
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
              { "@type": "ListItem", "position": 2, "name": "J1 Vize Mülakat Soruları", "item": "https://amerikastaj.com/j1-vize-mulakat-sorulari" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
