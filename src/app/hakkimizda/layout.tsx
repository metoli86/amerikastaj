import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkimizda",
  description:
    "amerikastaj.com - Turkiyenin en guvenilir Amerika staj danismanligi. 12 yillik deneyim, 500den fazla basarili stajyer.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
