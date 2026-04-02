"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { number: "500+", label: "Başarılı Stajyer" },
  { number: "12+", label: "Yıl Deneyim" },
  { number: "%98", label: "Vize Onay Oranı" },
  { number: "50+", label: "ABD Partner Şirket" },
];

const values = [
  {
    title: "Güvenilirlik",
    description:
      "12 yılı aşkın tecrübemizle yüzlerce öğrenci ve yeni mezunun ABD staj hayalini gerçekleştirdik. Her adımda şeffaf, ölçülebilir ve güvenilir bir süreç sunuyoruz. Sorumluluğumuzun bilincinde, her başvuruyu titizlikle yönetiyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Şeffaflık",
    description:
      "Ücretler, süreler ve süreçler konusunda tam şeffaflık ilkesiyle çalışıyoruz. Gizli maliyet yok, sürpriz ücret yok. Başvurunuzun hangi aşamada olduğunu her an takip edebilirsiniz. Yanıltıcı vaatler vermiyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
    ),
  },
  {
    title: "Kişisel İlgi",
    description:
      "Her katılımcıyla birebir çalışıyoruz. Toplu değil, kişiselleştirilmiş danışmanlık sunuyoruz. Kariyerinize, hedefinize ve profilinize uygun staj eşleştirmesi yapıyoruz. Sizi bir numara değil, bir birey olarak görüyoruz.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Uzmanlık",
    description:
      "J1 vize programı ve ABD staj süreçlerinde Türkiye'nin en deneyimli ekibiyiz. ABD Dışişleri Bakanlığı onaylı sponsor kuruluşlarla doğrudan çalışıyoruz. Vize, iş eşleştirme ve kültürel uyum konularında derin bilgi birikimimiz var.",
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
    title: "Kuruluş",
    description: "Yurtdışı eğitim ve staj danışmanlığı alanında hizmet vermeye başladık.",
  },
  {
    year: "2015",
    title: "100. Stajyer",
    description: "ABD'de başarılı stajını tamamlayan 100. katılımcımıza ulaştık.",
  },
  {
    year: "2018",
    title: "Partner Ağı Genişledi",
    description: "ABD'deki partner şirket ağımızı 30+ şirkete genişlettik.",
  },
  {
    year: "2020",
    title: "Online Danışmanlık",
    description: "Pandemi sürecinde tüm danışmanlık hizmetlerimizi online ortama taşıdık.",
  },
  {
    year: "2022",
    title: "400+ Stajyer",
    description: "Toplam 400'den fazla katılımcıyı ABD'de başarılı staj programlarına yerleştirdik.",
  },
  {
    year: "2024",
    title: "Yeni Dönem",
    description: "50+ partner şirket, genişlenmiş sektör yelpazesi ve artan vize onay oranıyla büyümeye devam ediyoruz.",
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
              Hakkımızda
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Amerikastaj olarak 12 yılı aşkın süredir Türk öğrenci ve yeni
              mezunlarının ABD&apos;de staj yapma hayallerini gerçeğe dönüştürüyoruz.
              Her adımda yanınızdayız.
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
                  Amerikastaj, ABD&apos;de staj deneyimi yaşamış bir ekibin
                  &ldquo;bu süreci daha kolay ve güvenilir hale getirebiliriz&rdquo;
                  inancı ile kuruldu. Kendi staj sürecimizdeki zorlukları, bilgi
                  eksikliklerini ve yanlış yönlendirmeleri bizzat yaşayarak, aynı
                  hataların başkalarının başına gelmemesi için yola çıktık.
                </p>
                <p>
                  2012 yılından bu yana yüzlerce üniversite öğrencisi ve yeni
                  mezuna ABD&apos;de staj yapma fırsatı sunduk. Sadece vize danışmanlığı
                  değil, iş eşleştirme, kültürel hazırlık, konaklama desteği ve
                  ABD&apos;de yaşama adaptasyon konularında kapsamlı bir hizmet
                  sunuyoruz.
                </p>
                <p>
                  Amacımız sadece ABD&apos;ye gitmek değil, orada anlamlı bir deneyim
                  yaşanması ve kariyerinize gerçek katma değer sağlayan bir staj
                  dönemi geçirmenizdir. Her katılımcımızın başarısı, bizim
                  başarımızdır.
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
                  Türk gençlerinin uluslararası arenada rekabet edebilecek
                  donanıma sahip olmaları için ABD&apos;de kaliteli staj deneyimi
                  yaşamalarını sağlamak. Her adayın profiline ve hedeflerine
                  uygun, kişiselleştirilmiş bir yol haritası çıkararak en iyi
                  sonucu elde etmesini hedefliyoruz.
                </p>
                <p>
                  Sadece bir danışmanlık firması değil, katılımcılarımızın ABD
                  serüvenlerinde gerçek bir partner olarak konumlanıyoruz.
                  Başvuru öncesinden staj sonrasına kadar her aşamada destek
                  sunarak, gençlerimizin dünya vatandaşı olmasına katkı
                  sağlıyoruz.
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
                Değerlerimiz
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Bizi Biz Yapan Değerler
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
                Yolculuğumuz
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Zaman Çizelgesi
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
                  "ABD Dışişleri Bakanlığı onaylı sponsor kuruluşlarla doğrudan çalışıyoruz",
                  "Her katılımcıya özel kişiselleştirilmiş danışmanlık sunuyoruz",
                  "Vize hazırlık, mülakat simülasyonu ve belge kontrol hizmeti veriyoruz",
                  "ABD'deki 50+ partner şirketle iş eşleştirme yapıyoruz",
                  "Staj öncesi, sırası ve sonrasında kesintisiz destek sağlıyoruz",
                  "%98 vize onay oranı ile sektördeki en yüksek başarı oranına sahibiz",
                  "Konaklama, ulaşım ve kültürel uyum konularında rehberlik yapıyoruz",
                  "Mezun ağımız sayesinde ABD'deki Türk topluluğuyla bağlantı kuruyorsunuz",
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
                ABD Staj Maceranıza Başlayın
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                500&apos;den fazla başarılı katılımcımıza siz de katılın. Uzman
                ekibimiz hayalinizdeki staj deneyimini gerçeğe dönüştürmeniz
                için yanınızda.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
                >
                  Ücretsiz Danışmanlık Al
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
                >
                  Bize Ulaşın
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
