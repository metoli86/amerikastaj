import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J1 Vize Nedir? Nasıl Alınır? | Başvuru Rehberi",
  description:
    "J1 vizesi nedir, başvuru süreci, gerekli belgeler, ücretler ve mülakat hazırlığı. Amerika çalışma vizesi rehberi.",
  alternates: {
    canonical: "https://amerikastaj.com/j1-vize",
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
              { "@type": "ListItem", "position": 2, "name": "J1 Vize", "item": "https://amerikastaj.com/j1-vize" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
