"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const documents = [
  "Gecerli pasaport (vize suresi boyunca gecerli olmali)",
  "DS-2019 formu (sponsor kurulustan alinir)",
  "DS-160 onay sayfasi",
  "SEVIS odeme makbuzu (I-901)",
  "Vize basvuru ucreti odeme makbuzu (MRV)",
  "Vesikalik fotograf (5x5 cm, beyaz arkaplan)",
  "Ogrenci belgesi veya diploma",
  "Transkript",
  "Banka hesap dokumu",
  "Is teklif mektubu (Training/Internship Placement Plan - DS-7002)",
];

const visaSteps = [
  {
    step: "01",
    title: "Sponsor Kurulus Secimi",
    description: "ABD Disisleri Bakanligi onayli bir sponsor kurulus ile calismaniz gerekir. Biz sizi uygun sponsor kurulusla eslestiriyoruz.",
  },
  {
    step: "02",
    title: "DS-2019 Belgesi",
    description: "Sponsor kurulus tarafindan hazirlanan DS-2019, J1 vize basvurunuzun temel belgesidir. Is eslestirmeniz tamamlandiktan sonra duzenlenir.",
  },
  {
    step: "03",
    title: "SEVIS Ucreti Odeme",
    description: "I-901 SEVIS ucretini ($220) ABD Ic Guvenlik Bakanligi web sitesinden odersiniz. Odeme makbuzunu vize mulakatina goturursiniz.",
  },
  {
    step: "04",
    title: "DS-160 Formu",
    description: "Online vize basvuru formunu eksiksiz doldurursinuz. Onay sayfasini ciktisi alinarak mulakata getirilir.",
  },
  {
    step: "05",
    title: "Vize Mulakat Randevusu",
    description: "ABD Buyukelciligi veya Konsoloslugundan randevu alinir. Istanbul veya Ankara konsoloslugunda mulakat yapilir.",
  },
  {
    step: "06",
    title: "Vize Mulakati",
    description: "Konsoloslukta kisa bir mulakat yapilir. Programiniz, is yeriniz ve planlariniz hakkinda sorular sorulur.",
  },
];

export default function J1Vize() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Vize Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              J1 Vize Nedir? Nasil Alinir?
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              J1 vizesi, ABD Disisleri Bakanligi tarafindan duzenlenen kulturel
              degisim programi kapsaminda verilen gecici calisma vizesidir. Staj
              (Internship) ve egitim (Trainee) kategorileri mevcuttur.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What is J1 */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                J1 Vizesi Hakkinda
              </h2>
              <div className="prose prose-slate max-w-none space-y-4 text-slate leading-relaxed">
                <p>
                  J1 vizesi (Exchange Visitor Visa), Amerika Birlesik Devletleri
                  tarafindan kulturel degisim programlari kapsaminda verilen
                  gocu-olmayan (non-immigrant) vize turudur. Bu vize, katilimcilarin
                  ABDde staj yapmasina, egitim almasina veya kulturel degisim
                  programlarina katilmasina olanak tanir.
                </p>
                <p>
                  J1 vize kategorisi altinda <strong>Intern</strong> (stajyer) ve{" "}
                  <strong>Trainee</strong> (egitmen) olmak uzere iki alt kategori
                  bulunur. Her iki kategori de katilimcilara Amerikan sirketlerinde
                  maasli calisma imkani sunar.
                </p>
                <p>
                  J1 vize programi ABD Disisleri Bakanligi (Department of State)
                  tarafindan denetlenir ve onayli sponsor kuruluslar araciligiyla
                  yonetilir. Programin temel amaci, katilimcilarin mesleki becerilerini
                  gelistirmesi ve kulturel degisimi tesvik etmesidir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visa Steps */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Adim Adim
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                J1 Vize Basvuru Sureci
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visaSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.08}>
                <div className="relative p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 transition-all duration-300 h-full">
                  <span className="text-5xl font-black text-navy/[0.04] absolute top-3 right-5 select-none">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center mb-5">
                    <span className="text-xs font-bold text-navy">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                Gerekli Belgeler
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                J1 vize mulakati icin asagidaki belgeleri hazirlaman gerekir:
              </p>
              <div className="bg-white rounded-2xl border border-navy/5 divide-y divide-navy/5">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-start gap-4 p-5">
                    <span className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[11px] font-bold text-navy">{i + 1}</span>
                    </span>
                    <span className="text-sm text-slate">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                J1 Vize Ucretleri
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Vize Basvuru Ucreti (MRV Fee)", amount: "$185" },
                  { label: "SEVIS Ucreti (I-901 Fee)", amount: "$220" },
                  { label: "Toplam Resmi Ucret", amount: "$405" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-5 bg-sand/50 rounded-xl">
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                    <span className="text-lg font-bold text-navy">{item.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate mt-6 leading-relaxed">
                Bu ucretler ABD hukumeti ve ilgili kurumlara dogrudan odenir. Program
                danismanlik ucretimiz icin{" "}
                <Link href="/ucretler" className="text-navy font-semibold hover:text-crimson transition-colors">
                  ucretler sayfamizi
                </Link>{" "}
                inceleyebilirsiniz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">Ilgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize-mulakat-sorulari", title: "J1 Vize Mulakat Sorulari", desc: "En cok sorulan sorular ve ornek cevaplar" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adim adim doldurma kilavuzu" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Basvurusu", desc: "Genel ABD vize sureci ve randevu alma" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="group block p-6 bg-white rounded-xl border border-navy/5 hover:border-navy/15 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-navy mb-1 group-hover:text-crimson transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-slate">{link.desc}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
