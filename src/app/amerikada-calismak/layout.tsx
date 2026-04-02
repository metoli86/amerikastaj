import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika'da Çalışmak | İş Bulmak ve Çalışma Rehberi",
  description:
    "Amerika'da nasıl çalışılır? Çalışma vizesi türleri, iş bulma yolları, maaş beklentileri ve yaşam maliyeti rehberi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
