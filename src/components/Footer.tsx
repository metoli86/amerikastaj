import Link from "next/link";

const footerSections = [
  {
    title: "Programlar",
    links: [
      { href: "/staj-programi", label: "Staj Programi" },
      { href: "/ucretler", label: "Ucretler" },
      { href: "/basvuru", label: "Basvuru" },
    ],
  },
  {
    title: "Rehber",
    links: [
      { href: "/j1-vize", label: "J1 Vize" },
      { href: "/j1-vize-mulakat-sorulari", label: "Mulakat Sorulari" },
      { href: "/amerika-vize-basvurusu", label: "Vize Basvurusu" },
      { href: "/ds-160", label: "DS-160 Formu" },
    ],
  },
  {
    title: "Bilgi",
    links: [
      { href: "/amerikada-calismak", label: "Amerikada Calismak" },
      { href: "/sss", label: "Sikca Sorulan Sorular" },
      { href: "/hakkimizda", label: "Hakkimizda" },
      { href: "/iletisim", label: "Iletisim" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top CTA Band */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <p className="text-sm font-medium tracking-[0.2em] uppercase text-blue-light mb-3">
                Kariyerine yeni bir sayfa ac
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight max-w-lg">
                Amerikada staj deneyimi seni bekliyor.
              </h2>
            </div>
            <Link
              href="/basvuru"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-navy font-bold text-sm tracking-wide rounded-full hover:bg-sand transition-all duration-300 hover:shadow-xl hover:shadow-white/10 shrink-0"
            >
              Ucretsiz Danismanlik
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AS</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-crimson rounded-full" />
              </div>
              <span className="font-bold text-[15px] tracking-tight">amerikastaj</span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-[220px]">
              Turkiyenin en guvenilir Amerika staj danismanligi.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} amerikastaj.com — Tum haklari saklidir.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/iletisim" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Iletisim
            </Link>
            <Link href="/hakkimizda" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Hakkimizda
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
