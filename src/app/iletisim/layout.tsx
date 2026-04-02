import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "amerikastaj.com iletişim bilgileri. Telefon, e-posta, WhatsApp ve ofis adresi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
