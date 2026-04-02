"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const packages = [
  {
    name: "Internship",
    tag: "Öğrenciler için",
    price: "4.500",
    currency: "$",
    features: [
      "Sponsor kuruluş eşleştirme",
      "DS-2019 belgesi temini",
      "SEVIS kaydı ve ödeme rehberliği",
      "Vize mülakat hazırlığı",
      "İş eşleştirme desteği",
      "Uçuş öncesi oryantasyon",
      "Amerika'da 7/24 acil destek hattı",
    ],
    cta: "Internship Başvurusu",
    href: "/basvuru",
    featured: false,
  },
  {
    name: "Trainee",
    tag: "En popüler",
    price: "5.500",
    currency: "$",
    features: [
      "Sponsor kuruluş eşleştirme",
      "DS-2019 belgesi temini",
      "SEVIS kaydı ve ödeme rehberliği",
      "Vize mülakat hazırlığı",
      "Garantili iş eşleştirme",
      "Uçuş öncesi oryantasyon",
      "Amerika'da 7/24 acil destek hattı",
      "Kariyer koçluğu",
      "LinkedIn profil optimizasyonu",
    ],
    cta: "Trainee Başvurusu",
    href: "/basvuru",
    featured: true,
  },
];

const additionalCosts = [
  { item: "SEVIS Ücreti (I-901)", amount: "$220", note: "ABD hükümetine ödenir" },
  { item: "Vize Başvuru Ücreti (MRV)", amount: "$185", note: "ABD konsolosluğuna ödenir" },
  { item: "Sağlık Sigortası", amount: "$50-100/ay", note: "Zorunlu, aylık ödenir" },
  { item: "Uçak Bileti", amount: "$800-1.500", note: "Sezona göre değişir" },
];

export default function Ucretler() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Ücretler
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Şeffaf Fiyatlandırma
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Gizli ücret yok. Tüm maliyetleri en başından bilirsin.
              Taksit seçenekleri mevcuttur.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i * 0.15}>
                <div
                  className={`relative rounded-2xl p-8 lg:p-10 h-full flex flex-col ${
                    pkg.featured
                      ? "bg-navy text-white border-2 border-navy shadow-2xl shadow-navy/20"
                      : "bg-white border border-navy/5"
                  }`}
                >
                  {pkg.featured && (
                    <span className="absolute -top-3 left-8 px-4 py-1 bg-crimson text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-full">
                      {pkg.tag}
                    </span>
                  )}
                  {!pkg.featured && (
                    <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-slate mb-4 block">
                      {pkg.tag}
                    </span>
                  )}
                  <h2 className={`text-2xl font-bold mb-2 ${pkg.featured ? "text-white mt-2" : "text-navy"}`}>
                    {pkg.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${pkg.featured ? "text-white" : "text-navy"}`}>
                      {pkg.price}
                    </span>
                    <span className={`text-lg ${pkg.featured ? "text-white/60" : "text-slate"}`}>
                      {pkg.currency}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-10 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${pkg.featured ? "text-blue-light" : "text-blue"}`}
                          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className={pkg.featured ? "text-white/80" : "text-slate"}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={pkg.href}
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                      pkg.featured
                        ? "bg-white text-navy hover:bg-sand"
                        : "bg-navy text-white hover:bg-navy-light"
                    }`}
                  >
                    {pkg.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Costs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight mb-4">
                Ek Maliyetler
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Program ücretine dahil olmayan, doğrudan ilgili kurumlara ödenen ek masraflar:
              </p>
              <div className="divide-y divide-navy/5">
                {additionalCosts.map((cost) => (
                  <div key={cost.item} className="flex items-center justify-between py-5">
                    <div>
                      <p className="font-semibold text-navy">{cost.item}</p>
                      <p className="text-sm text-slate">{cost.note}</p>
                    </div>
                    <span className="text-lg font-bold text-navy ml-4 shrink-0">
                      {cost.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-navy tracking-tight mb-4">
                Taksit Seçenekleri
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Ödemeyi tek seferde yapmak zorunda değilsin. 3, 6 veya 9 taksit
                seçeneklerimiz mevcut. Detaylar için danışmanlarımızla görüşebilirsin.
              </p>
              <Link
                href="/basvuru"
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-semibold text-[15px] rounded-full hover:bg-navy-light transition-all duration-300"
              >
                Fiyat Teklifi Al
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
