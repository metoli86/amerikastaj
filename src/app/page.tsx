"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "500+", label: "Stajyer yerleştirdik" },
  { value: "%98", label: "Vize onay oranı" },
  { value: "12+", label: "Yıl deneyim" },
  { value: "50+", label: "Partner şirket" },
];

const programs = [
  {
    tag: "J1 Internship",
    title: "Üniversite Öğrencileri İçin",
    description:
      "Üniversite öğrencileri ve yeni mezunlar için 12 aya kadar maaşlı staj imkanı. Otel, IT, işletme, mühendislik ve daha fazla sektörde.",
    features: ["12 aya kadar", "Maaşlı pozisyonlar", "Tüm sektörler"],
    href: "/staj-programi",
  },
  {
    tag: "J1 Trainee",
    title: "Deneyimli Profesyoneller İçin",
    description:
      "En az 1 yıl iş deneyimi olan profesyoneller için 18 aya kadar kariyer geliştirme programı. Kendi alanında Amerika deneyimi kazan.",
    features: ["18 aya kadar", "Kariyer gelişimi", "Profesyonel ağ"],
    href: "/staj-programi",
  },
];

const steps = [
  {
    number: "01",
    title: "Ücretsiz Danışmanlık",
    description: "Profilini değerlendiriyoruz, sana en uygun programı belirliyoruz.",
  },
  {
    number: "02",
    title: "Pozisyon Eşleştirme",
    description: "Alanına uygun Amerika'daki şirketlerle eşleştiriyoruz.",
  },
  {
    number: "03",
    title: "Vize Süreci",
    description: "DS-2019 belgen, SEVIS ödemesi ve vize mülakat hazırlığı.",
  },
  {
    number: "04",
    title: "Amerika'ya Uçuş",
    description: "Her şey hazır. Staj macerana başlıyorsun.",
  },
];

const sectors = [
  { icon: "🏨", name: "Otelcilik & Turizm" },
  { icon: "💻", name: "Bilgi Teknolojileri" },
  { icon: "🍽️", name: "Gastronomi & Mutfak" },
  { icon: "📊", name: "İşletme & Finans" },
  { icon: "⚙️", name: "Mühendislik" },
  { icon: "📱", name: "Pazarlama & Medya" },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(30,58,95,0.08),transparent)]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-crimson/3 rounded-full blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 rounded-full">
                <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
                <span className="text-xs font-semibold tracking-[0.1em] uppercase text-navy">
                  2026 Başvuruları Açıldı
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold leading-[1.05] tracking-tight text-navy mb-8"
            >
              Amerika&apos;da
              <br />
              <span className="relative inline-block">
                staj deneyimi
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                    stroke="#dc2626"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </svg>
              </span>{" "}
              ile
              <br />
              kariyerine yön ver.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg lg:text-xl text-slate leading-relaxed max-w-2xl mb-12"
            >
              J1 vize ile Amerika&apos;daki şirketlerde maaşlı staj yap. Vize
              işlemlerinden iş eşleştirmeye kadar tüm süreci biz yönetiyoruz.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/basvuru"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-semibold text-[15px] rounded-full overflow-hidden hover:shadow-2xl hover:shadow-navy/20 transition-all duration-500 hover:-translate-y-0.5"
              >
                <span className="relative z-10">Ücretsiz Danışmanlık Al</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="absolute inset-0 bg-navy-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
              <Link
                href="/staj-programi"
                className="inline-flex items-center gap-3 px-8 py-4 text-navy font-semibold text-[15px] rounded-full border border-navy/10 hover:border-navy/30 hover:bg-navy/5 transition-all duration-300"
              >
                Programları İncele
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-navy/10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="lg:px-8 first:lg:pl-0">
                <div className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-slate mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════ PROGRAMS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                  Programlar
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight">
                  Sana uygun programı seç
                </h2>
              </div>
              <Link
                href="/staj-programi"
                className="text-sm font-medium text-navy hover:text-crimson transition-colors flex items-center gap-2"
              >
                Tüm detaylar
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-6">
            {programs.map((program, i) => (
              <ScrollReveal key={program.tag} delay={i * 0.15}>
                <Link href={program.href} className="group block">
                  <div className="relative p-8 lg:p-10 rounded-2xl border border-navy/5 bg-white hover:border-navy/15 transition-all duration-500 hover:shadow-2xl hover:shadow-navy/5 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase bg-navy/5 text-navy rounded-full">
                        {program.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-crimson transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-slate leading-relaxed mb-8">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {program.features.map((f) => (
                        <span key={f} className="px-3 py-1.5 text-xs font-medium bg-sand rounded-lg text-navy/70">
                          {f}
                        </span>
                      ))}
                    </div>
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-all duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-sand/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Nasıl Çalışır
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight">
                Dört adımda Amerika&apos;ya
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative p-8 bg-white rounded-2xl border border-navy/5 hover:border-navy/10 transition-all duration-300 group">
                  <span className="text-6xl font-black text-navy/[0.04] absolute top-4 right-6 select-none">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                    <span className="text-sm font-bold text-navy">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTORS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                  Sektörler
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight mb-6">
                  Hangi alanda staj yapmak istiyorsun?
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Otelcilikten yazılıma, gastronomiden mühendisliğe kadar onlarca
                  farklı sektörde Amerikan şirketleriyle çalışma fırsatı.
                </p>
                <Link href="/staj-programi" className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-crimson transition-colors">
                  Tüm sektörleri gör
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {sectors.map((sector) => (
                  <div key={sector.name} className="p-5 rounded-2xl border border-navy/5 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 cursor-default">
                    <span className="text-2xl mb-3 block">{sector.icon}</span>
                    <span className="text-sm font-semibold text-navy">{sector.name}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ WHY US ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-navy text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16 lg:mb-20">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-light mb-3">
                Neden Biz
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
                Neden amerikastaj.com?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Baştan Sona Destek",
                description: "Başvurudan vize mülakatına, uçuş planlamasından staj başlangıcına kadar her adımda yanındayız.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              },
              {
                title: "Garantili Yerleştirme",
                description: "50'den fazla Amerikan partner şirketimizle profiline en uygun pozisyonu buluyoruz.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Şeffaf Fiyatlandırma",
                description: "Gizli ücret yok. Ne kadar ödeyeceğini en başından bilirsin. Taksit seçenekleri mevcut.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-blue-light">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TESTIMONIAL ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#d4a853" stroke="#d4a853" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-bold text-navy leading-snug mb-8">
                &ldquo;Amerikastaj sayesinde New York&apos;ta bir teknoloji şirketinde 6 ay staj yaptım.
                Tüm vize sürecimi onlar yönetti, ben sadece işime odaklandım.&rdquo;
              </blockquote>
              <div>
                <p className="font-semibold text-navy">Elif K.</p>
                <p className="text-sm text-slate">
                  Bilgisayar Mühendisliği, İTÜ &mdash; 2025 Stajyeri
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════ GUIDE LINKS ═══════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Rehber
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight">
                Bilmen gereken her şey
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vizesi nedir, nasıl başvurulur, gerekli belgeler nelerdir?" },
              { href: "/amerika-vize-basvurusu", title: "Amerika Vize Başvurusu", desc: "ABD vize süreci, randevu alma, ücretler ve gerekli evraklar." },
              { href: "/ds-160", title: "DS-160 Formu", desc: "DS-160 formu nasıl doldurulur? Adım adım rehber." },
              { href: "/j1-vize-mulakat-sorulari", title: "Mülakat Soruları", desc: "J1 vize mülakatında en çok sorulan sorular ve cevapları." },
              { href: "/amerikada-calismak", title: "Amerika'da Çalışmak", desc: "Amerika'da iş bulmak, çalışma koşulları ve yaşam rehberi." },
              { href: "/sss", title: "Sıkça Sorulan Sorular", desc: "Staj programı hakkında merak edilen tüm sorular." },
            ].map((item, i) => (
              <ScrollReveal key={item.href} delay={i * 0.08}>
                <Link href={item.href} className="group block">
                  <div className="p-6 rounded-xl border border-navy/5 hover:border-navy/15 hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-bold text-navy mb-2 group-hover:text-crimson transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
