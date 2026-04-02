import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Amerika Staj SSS",
  description:
    "Amerika staj programı hakkında en çok sorulan sorular ve cevapları. Program, vize, ücret ve yaşam hakkında bilgiler.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
