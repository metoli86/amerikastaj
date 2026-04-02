"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { number: "500+", label: "Basarili Stajyer" },
  { number: "12+", label: "Yil Deneyim" },
  { number: "%98", label: "Vize Onay Orani" },
  { number: "50+", label: "ABD Partner Sirket" },
];

const values = [
  {
    title: "Guvenilirlik",
    description:
      "12 yili askin tecrubemizle yuzlerce ogrenci ve yeni mezunun ABD staj hayalini gerceklestirdik. Her adimda seffaf, olculebilir ve guvenilir bir suec sunuyoruz. Sorumlulugumuzun bilincinde, her basvuruyu titizlikle yonetiyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Seffaflik",
    description:
      "Ucretler, sureler ve surecler konusunda tam seffaflik ilkesiyle calisiyoruz. Gizli maliyet yok, surpriz ucret yok. Basvurunuzun hangi asamada oldugunu her an takip edebilirsiniz. Yaniltici vaatler vermiyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: "Kisisel Ilgi",
    description:
      "Her katilimciyla birebir calisiyoruz. Toplu degil, kisisellestirilmis danismanlik sunuyoruz. Kariyerinize, hedefinize ve profilinize uygun staj eslestirmesi yapiyoruz. Sizi bir numara degil, bir birey olarak goruyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Uzmanlik",
    description:
      "J1 vize programi ve ABD staj sureclerinde Turkiyenin en deneyimli ekibiydiz. ABD Disisleri Bakanligi onayli sponsor kuruluslarla dogrudan calismiyoruz. Vize, is eslestirme ve kulturel uyum konularinda derin bilgi birikimimiz var.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const timeline = [
  {
    year: "2012",
    title: "Kurulusu",
    description: "Yurtdisi egitim ve staj danismanligi alaninda hizmet vermeye basladik.",
  },
  {
    year: "2015",
    title: "100. Stajyer",
    description: "ABDde basarili stajini tamamlayan 100. katilimcimiza ulastik.",
  },
  {
    year: "2018",
    title: "Partner Agi Genisledi",
    description: "ABDdeki partner sirket agimizi 30+ sirkete genislettik.",
  },
  {
    year: "2020",
    title: "Online Danimanlik",
    description: "Pandemi surecinde tum danismanlik hizmetlerimizi online ortama tasidik.",
  },
  {
    year: "2022",
    title: "400+ Stajyer",
    description: "Toplam 400den fazla katilimciyi ABDde basarili staj programlarina yerlestirdik.",
  },
  {
    year: "2024",
    title: "Yeni Donem",
    description: "50+ partner sirket, genislenmis sektor yelpazesi ve artan vize onay oraniyla buyumeye devam ediyoruz.",
  },
];

export default function Hakkimizda() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Biz Kimiz
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Hakkimizda
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Amerikastaj olarak 12 yili askin suredir Turk ogrenci ve yeni
              mezunlarinin ABDde staj yapma hayallerini gercege donusturuyoruz.
              Her adimda yaninizdayiz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </p>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Amerikastaj, ABDde staj deneyimi yasamis bir ekibin
                  &ldquo;bu sureci daha kolay ve gvenilir hale getirebiliriz&rdquo;
                  inanci ile kuruldu. Kendi staj surecimizdeki zorluklari, bilgi
                  eksikliklerini ve yanlis yonlendirmeleri bizzat yasayarak, ayni
                  hatalarin baskalarinin basina gelmemesi icin yola ciktik.
                </p>
                <p>
                  2012 yilindan bu yana yuzlerce universite ogrencisi ve yeni
                  mezuna ABDde staj yapma firsati sunduk. Sadece vize danismanligi
                  degil, is eslestirme, kulturel hazilik, konaklama destegi ve
                  ABDde yasama adaptasyon konularinda kapsamli bir hizmet
                  sunuyoruz.
                </p>
                <p>
                  Amacimiz sadece ABDye gitmek degil, orada anlamli bir deneyim
                  yasanmasi ve kariyerinize gercek katma deger saglayan bir staj
                  donemi gecirmenizdir. Her katilimcimizin basarisi, bizim
                  basarimizdir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Misyonumuz
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Turk genclerinin uluslararasi arenada rekabet edebilecek
                  donanima sahip olmalari icin ABDde kaliteli staj deneyimi
                  yasamalarini saglamak. Her adayin profiline ve hedeflerine
                  uygun, kisisellestirilmis bir yol haritasi cikararak en iyi
                  sonucu elde etmesini hedefliyoruz.
                </p>
                <p>
                  Sadece bir danismanlik firmasi degil, katilimcilarimizin ABD
                  seruvenleriinde gercek bir partner olarak konumlaniyoruz.
                  Basvuru oncesinden staj sonrasina kadar her asamada destek
                  sunarak, genclerimizin dunya vatandasi olmassina katki
                  sagliyoruz.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Degerlerimiz
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Bizi Biz Yapan Degerler
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-5 text-crimson">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Yolculugumuz
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Zaman Cizelgesi
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-2xl">
            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="flex gap-6 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-white">{item.year}</span>
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px h-full bg-navy/10 mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <h3 className="text-lg font-bold text-navy mb-1">{item.title}</h3>
                    <p className="text-sm text-slate leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Neden Amerikastaj?
              </h2>
              <div className="space-y-4">
                {[
                  "ABD Disisleri Bakanligi onayli sponsor kuruluslarla dogrudan calisiyoruz",
                  "Her katilimciya ozel kisisellestirilmis danismanlik sunuyoruz",
                  "Vize hazirlik, mulakat simulasyonu ve belge kontrol hizmeti veriyoruz",
                  "ABDdeki 50+ partner sirketle is eslestirme yapiyoruz",
                  "Staj oncesi, sirasi ve sonrasinda kesintisiz destek sagliyoruz",
                  "%98 vize onay orani ile sektordeki en yuksek basari oranina sahibiz",
                  "Konaklama, ulasim ve kulturel uyum konularinda rehberlik yapiyoruz",
                  "Mezun agimiz sayesinde ABDdeki Turk topluluguyla baglanti kuruyorsunuz",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                ABD Staj Maceraniza Baslayin
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                500den fazla basarili katilimcimiza siz de katilin. Uzman
                ekibimiz hayalinizdeki staj deneyimini gercege donusturmeniz
                icin yaniniizda.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
                >
                  Ucretsiz Danismanlik Al
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
                >
                  Bize Ulasin
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
