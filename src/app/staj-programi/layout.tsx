import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika Staj Programı | J1 Internship & Trainee",
  description:
    "Amerika'da maaşlı staj programları: J1 Internship ve J1 Trainee. Otelcilik, IT, gastronomi, mühendislik ve daha fazla sektörde staj imkanı.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
