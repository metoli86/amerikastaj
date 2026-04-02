"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const documents = [
  "Geçerli pasaport (vize süresi boyunca geçerli olmalı)",
  "DS-2019 formu (sponsor kuruluştan alınır)",
  "DS-160 onay sayfası",
  "SEVIS ödeme makbuzu (I-901)",
  "Vize başvuru ücreti ödeme makbuzu (MRV)",
  "Vesikalık fotoğraf (5x5 cm, beyaz arkaplan)",
  "Öğrenci belgesi veya diploma",
  "Transkript",
  "Banka hesap dökümü",
  "İş teklif mektubu (Training/Internship Placement Plan - DS-7002)",
];

const visaSteps = [
  {
    step: "01",
    title: "Sponsor Kuruluş Seçimi",
    description: "ABD Dışişleri Bakanlığı onaylı bir sponsor kuruluş ile çalışmanız gerekir. Biz sizi uygun sponsor kuruluşla eşleştiriyoruz.",
  },
  {
    step: "02",
    title: "DS-2019 Belgesi",
    description: "Sponsor kuruluş tarafından hazırlanan DS-2019, J1 vize başvurunuzun temel belgesidir. İş eşleştirmeniz tamamlandıktan sonra düzenlenir.",
  },
  {
    step: "03",
    title: "SEVIS Ücreti Ödeme",
    description: "I-901 SEVIS ücretini ($220) ABD İç Güvenlik Bakanlığı web sitesinden ödersiniz. Ödeme makbuzunu vize mülakatına götürürsünüz.",
  },
  {
    step: "04",
    title: "DS-160 Formu",
    description: "Online vize başvuru formunu eksiksiz doldurursunuz. Onay sayfasını çıktısı alınarak mülakata getirilir.",
  },
  {
    step: "05",
    title: "Vize Mülakat Randevusu",
    description: "ABD Büyükelçiliği veya Konsolosluğundan randevu alınır. İstanbul veya Ankara konsolosluğunda mülakat yapılır.",
  },
  {
    step: "06",
    title: "Vize Mülakatı",
    description: "Konsoloslukta kısa bir mülakat yapılır. Programınız, iş yeriniz ve planlarınız hakkında sorular sorulur.",
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
              J1 Vize Nedir? Nasıl Alınır?
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              J1 vizesi, ABD Dışişleri Bakanlığı tarafından düzenlenen kültürel
              değişim programı kapsamında verilen geçici çalışma vizesidir. Staj
              (Internship) ve eğitim (Trainee) kategorileri mevcuttur.
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
                J1 Vizesi Hakkında
              </h2>
              <div className="prose prose-slate max-w-none space-y-4 text-slate leading-relaxed">
                <p>
                  J1 vizesi (Exchange Visitor Visa), Amerika Birleşik Devletleri
                  tarafından kültürel değişim programları kapsamında verilen
                  göçü-olmayan (non-immigrant) vize türüdür. Bu vize, katılımcıların
                  ABD&apos;de staj yapmasına, eğitim almasına veya kültürel değişim
                  programlarına katılmasına olanak tanır.
                </p>
                <p>
                  J1 vize kategorisi altında <strong>Intern</strong> (stajyer) ve{" "}
                  <strong>Trainee</strong> (eğitmen) olmak üzere iki alt kategori
                  bulunur. Her iki kategori de katılımcılara Amerikan şirketlerinde
                  maaşlı çalışma imkanı sunar.
                </p>
                <p>
                  J1 vize programı ABD Dışişleri Bakanlığı (Department of State)
                  tarafından denetlenir ve onaylı sponsor kuruluşlar aracılığıyla
                  yönetilir. Programın temel amacı, katılımcıların mesleki becerilerini
                  geliştirmesi ve kültürel değişimi teşvik etmesidir.
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
                Adım Adım
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                J1 Vize Başvuru Süreci
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
                J1 vize mülakatı için aşağıdaki belgeleri hazırlaman gerekir:
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
                J1 Vize Ücretleri
              </h2>
              <div className="space-y-4">
                {[
                  { label: "Vize Başvuru Ücreti (MRV Fee)", amount: "$185" },
                  { label: "SEVIS Ücreti (I-901 Fee)", amount: "$220" },
                  { label: "Toplam Resmi Ücret", amount: "$405" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-5 bg-sand/50 rounded-xl">
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                    <span className="text-lg font-bold text-navy">{item.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate mt-6 leading-relaxed">
                Bu ücretler ABD hükümeti ve ilgili kurumlara doğrudan ödenir. Program
                danışmanlık ücretimiz için{" "}
                <Link href="/ucretler" className="text-navy font-semibold hover:text-crimson transition-colors">
                  ücretler sayfamızı
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
            <h2 className="text-2xl font-bold text-navy mb-8">İlgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize-mulakat-sorulari", title: "J1 Vize Mülakat Soruları", desc: "En çok sorulan sorular ve örnek cevaplar" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adım adım doldurma kılavuzu" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Başvurusu", desc: "Genel ABD vize süreci ve randevu alma" },
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
