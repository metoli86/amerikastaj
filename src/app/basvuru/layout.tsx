import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staj Başvurusu | Ücretsiz Danışmanlık",
  description:
    "Amerika staj programına hemen başvur. 24 saat içinde geri dönüş, ücretsiz profil değerlendirmesi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
