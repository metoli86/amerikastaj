import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Staj Basvurusu | Ucretsiz Danismanlik",
  description:
    "Amerika staj programina hemen basvur. 24 saat icinde geri donus, ucretsiz profil degerlendirmesi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
