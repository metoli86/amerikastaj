import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sikca Sorulan Sorular | Amerika Staj SSS",
  description:
    "Amerika staj programi hakkinda en cok sorulan sorular ve cevaplari. Program, vize, ucret ve yasam hakkinda bilgiler.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
