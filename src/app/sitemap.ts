import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amerikastaj.com";
  const now = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/staj-programi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/ucretler`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/basvuru`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/j1-vize`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/j1-vize-mulakat-sorulari`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/amerika-vize-basvurusu`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/ds-160`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/amerikada-calismak`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/hakkimizda`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
