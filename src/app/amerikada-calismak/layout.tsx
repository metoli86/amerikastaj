import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika'da Çalışmak | İş Bulmak ve Çalışma Rehberi",
  description:
    "Amerika'da nasıl çalışılır? Çalışma vizesi türleri, iş bulma yolları, maaş beklentileri ve yaşam maliyeti rehberi.",
  alternates: {
    canonical: "https://amerikastaj.com/amerikada-calismak",
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
              { "@type": "ListItem", "position": 2, "name": "Amerika'da Çalışmak", "item": "https://amerikastaj.com/amerikada-calismak" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
