import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "amerikastaj.com iletişim bilgileri. Telefon, e-posta, WhatsApp ve ofis adresi.",
  alternates: {
    canonical: "https://amerikastaj.com/iletisim",
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
              { "@type": "ListItem", "position": 2, "name": "İletişim", "item": "https://amerikastaj.com/iletisim" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
