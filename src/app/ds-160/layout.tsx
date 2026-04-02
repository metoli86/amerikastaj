import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DS-160 Formu Nasıl Doldurulur? | Adım Adım Rehber",
  description:
    "DS-160 online vize başvuru formu nasıl doldurulur? Adım adım açıklamalar, gerekli bilgiler ve sık yapılan hatalar.",
  alternates: {
    canonical: "https://amerikastaj.com/ds-160",
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
              { "@type": "ListItem", "position": 2, "name": "DS-160", "item": "https://amerikastaj.com/ds-160" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
