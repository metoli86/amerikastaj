import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerikada Calismak | Is Bulmak ve Calisma Rehberi",
  description:
    "Amerikada nasil calisilir? Calisma vizesi turleri, is bulma yollari, maas beklentileri ve yasam maliyeti rehberi.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
