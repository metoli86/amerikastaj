import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J1 Vize Mülakat Soruları ve Cevapları",
  description:
    "J1 vize mülakatında en çok sorulan sorular, örnek cevaplar ve mülakat hazırlığı ipuçları.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
