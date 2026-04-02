import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amerika Staj Programi | J1 Internship & Trainee",
  description:
    "Amerikada maasli staj programlari: J1 Internship ve J1 Trainee. Otelcilik, IT, gastronomi, muhendislik ve daha fazla sektorde staj imkani.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
