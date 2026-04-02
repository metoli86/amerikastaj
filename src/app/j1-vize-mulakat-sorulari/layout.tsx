import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "J1 Vize Mulakat Sorulari ve Cevaplari",
  description:
    "J1 vize mulakatinda en cok sorulan sorular, ornek cevaplar ve mulakat hazirligi ipuclari.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
