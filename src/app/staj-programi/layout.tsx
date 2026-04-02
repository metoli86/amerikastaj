import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika Staj Programı | J1 Internship & Trainee",
  description:
    "Amerika'da maaşlı staj programları: J1 Internship ve J1 Trainee. Otelcilik, IT, gastronomi, mühendislik ve daha fazla sektörde staj imkanı.",
  alternates: {
    canonical: "https://amerikastaj.com/staj-programi",
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
              { "@type": "ListItem", "position": 2, "name": "Staj Programı", "item": "https://amerikastaj.com/staj-programi" },
            ],
          }),
        }}
      />
      {children}
    </>
  );
}
