"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const workVisaTypes = [
  {
    code: "J1",
    name: "Staj / Eğitim Vizesi",
    description:
      "Kültürel değişim programı kapsamında staj veya eğitim amaçlı çalışma izni verir. Üniversite öğrencileri ve yeni mezunlar için en erişilebilir ABD çalışma yoludur.",
    duration: "12-18 ay",
    ideal: "Öğrenci ve yeni mezunlar",
  },
  {
    code: "H1B",
    name: "Uzmanlık Meslek Vizesi",
    description:
      "Mühendislik, bilişim, finans gibi uzmanlık gerektiren alanlarda çalışmak için verilen vize. İşverenin sponsor olması ve yıllık kura sistemi gerektirir.",
    duration: "3+3 yıl",
    ideal: "Deneyimli profesyoneller",
  },
  {
    code: "L1",
    name: "Şirket İçi Transfer Vizesi",
    description:
      "Çok uluslu şirketlerin çalışanlarını ABD şubelerine transfer etmek için kullanılan vize. En az 1 yıllık şirkette çalışma şartı vardır.",
    duration: "1-7 yıl",
    ideal: "Çok uluslu şirket çalışanları",
  },
  {
    code: "O1",
    name: "Olağanüstü Yetenek Vizesi",
    description:
      "Bilim, sanat, eğitim, iş dünyası veya spor alanında olağanüstü yeteneğinizi kanıtlayabilen kişiler için verilen vize.",
    duration: "3 yıla kadar",
    ideal: "Olağanüstü yetenekli bireyler",
  },
];

const jobSearchTips = [
  {
    title: "LinkedIn Profilinizi Optimize Edin",
    description:
      "ABD'deki işverenler LinkedIn üzerinden aday arar. Profilinizi İngilizce oluşturun, deneyimlerinizi detaylı yazın ve ABD'de çalışma izniniz olduğunu belirtin.",
  },
  {
    title: "Indeed ve Glassdoor Kullanın",
    description:
      "Amerikan iş arama siteleri olan Indeed.com ve Glassdoor.com'da sektörünüze uygun pozisyonları araştırın. Internship veya entry-level filtreleri kullanın.",
  },
  {
    title: "Networking Yapın",
    description:
      "ABD'de iş bulmada networking kritik öneme sahiptir. LinkedIn üzerinden sektörünüzdeki profesyonellerle bağlantı kurun, career fair'lara katılın.",
  },
  {
    title: "Resume Formatını Uyarlayın",
    description:
      "Amerikan resume formatı Türk CV formatından farklıdır. Fotoğraf eklemeyin, 1 sayfa olsun, başarıları sayılarla destekleyin, references kısmını çıkarın.",
  },
  {
    title: "Cover Letter Hazırlayın",
    description:
      "ABD'de her başvuruya özel cover letter (ön yazı) yazmak standarttır. Neden o şirket ve pozisyonu seçtiğinizi, nasıl katkı sağlayacağınızı açıklayın.",
  },
  {
    title: "Staffing Agency'lerle Çalışın",
    description:
      "Robert Half, Adecco, Manpower gibi iş bulma ajansları geçici ve kalıcı pozisyonlar için yardımcı olabilir. J1 vize sahipleri için de fırsatlar mevcuttur.",
  },
];

const salaryExpectations = [
  { role: "Stajyer (Intern)", range: "$15-25/saat", monthly: "$2,600-4,300" },
  { role: "Yazılım Geliştirici (Jr.)", range: "$60,000-85,000/yıl", monthly: "$5,000-7,000" },
  { role: "Pazarlama Uzmanı", range: "$45,000-65,000/yıl", monthly: "$3,750-5,400" },
  { role: "Finans Analisti", range: "$55,000-75,000/yıl", monthly: "$4,580-6,250" },
  { role: "Mühendis (Jr.)", range: "$55,000-80,000/yıl", monthly: "$4,580-6,660" },
  { role: "Otel/Turizm", range: "$30,000-45,000/yıl", monthly: "$2,500-3,750" },
];

const costOfLiving = [
  { item: "Kira (1+1, şehir merkezi)", range: "$1,200-2,500/ay" },
  { item: "Kira (1+1, şehir dışı)", range: "$800-1,600/ay" },
  { item: "Market/Yemek", range: "$300-600/ay" },
  { item: "Ulaşım", range: "$100-200/ay" },
  { item: "Sağlık Sigortası", range: "$150-400/ay" },
  { item: "Telefon + Internet", range: "$80-150/ay" },
  { item: "Eğlence ve Diğer", range: "$200-400/ay" },
];

const culturalTips = [
  {
    title: "İş Kültürü",
    tips: [
      "Dakiklik çok önemlidir - toplantılara zamanında gelin",
      "İnformal iletişim yaygındır, patronunuza adı ile hitap edebilirsiniz",
      "Proaktif olun - görev beklemeden inisiyatif alın",
      "E-postalara hızlı dönüş yapın (24 saat içerisinde)",
    ],
  },
  {
    title: "Sosyal Yaşam",
    tips: [
      "Bahşiş kültürü vardır - restoranlarda %15-20 bahşiş beklenir",
      "Small talk (kısa sohbet) önemlidir - hava durumu, spor, hafta sonu planları",
      "Kişisel alan kavramına dikkat edin - yaklaşık 1 metre mesafe bırakın",
      "İnsanların zamanına saygı gösterin - randevulara zamanında gidin",
    ],
  },
  {
    title: "Pratik Bilgiler",
    tips: [
      "Social Security Number (SSN) almak için işverenizle birlikte başvurun",
      "Banka hesabı açmak için pasaport ve SSN yeterlidir",
      "Sağlık sigortanızı kontrol edin - ABD'de sağlık harcamaları çok yüksektir",
      "Vergi beyannamesini her yıl Nisan ayında vermek zorundasınız",
    ],
  },
];

export default function AmerikadaCalismak() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Çalışma Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Amerika&apos;da Çalışmak
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD&apos;de çalışmak için vize türleri, iş bulma yöntemleri, maaş
              beklentileri, yaşam masrafları ve kültürel ipuçları hakkında
              kapsamlı rehber. Amerika&apos;da iş bulmak ve kariyer yapmak için
              bilmeniz gereken her şey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Work Visa Types */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Çalışma Vizeleri
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABD&apos;de Çalışma İzni Veren Vize Türleri
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {workVisaTypes.map((visa, i) => (
              <ScrollReveal key={visa.code} delay={i * 0.08}>
                <div className="relative p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-6xl font-black text-navy/[0.04] absolute top-3 right-5 select-none">
                    {visa.code}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-crimson/10 text-crimson text-xs font-bold rounded-lg">
                      {visa.code}
                    </span>
                    <span className="text-xs text-slate">{visa.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{visa.name}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">{visa.description}</p>
                  <div className="pt-4 border-t border-navy/5">
                    <span className="text-xs text-slate">
                      İdeal: <span className="font-semibold text-navy">{visa.ideal}</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 p-6 bg-white rounded-2xl border border-navy/5">
              <p className="text-sm text-slate leading-relaxed">
                <span className="font-bold text-navy">Önemli Not:</span>{" "}
                Üniversite öğrencileri ve yeni mezunlar için en erişilebilir
                yol J1 vize programıdır. H1B vizesi kura sistemi nedeniyle
                belirsizlik içerir, L1 ve O1 vizeleri ise özel koşullar
                gerektirir. J1 programı hakkında detaylı bilgi için{" "}
                <Link href="/j1-vize" className="text-navy font-semibold hover:text-crimson transition-colors underline underline-offset-4">
                  J1 vize rehberimizi
                </Link>{" "}
                inceleyin.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How to Find Jobs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                İş Bulma
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Amerika&apos;da Nasıl İş Bulunur?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobSearchTips.map((tip, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{tip.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{tip.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Salary Expectations */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Maaş Bilgileri
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                ABD&apos;de Maaş Beklentileri
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Maaşlar sektöre, şehire, deneyim seviyesine ve şirket büyüklüğüne
                göre büyük farklılık gösterir. Aşağıdaki rakamlar ortalama değerlerdir.
              </p>
              <div className="bg-white rounded-2xl border border-navy/5 overflow-hidden">
                <div className="grid grid-cols-3 gap-0 p-5 bg-navy/[0.02] border-b border-navy/5">
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Pozisyon</span>
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Yıllık / Saatlik</span>
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Aylık (Brüt)</span>
                </div>
                {salaryExpectations.map((item, i) => (
                  <div key={i} className="grid grid-cols-3 gap-0 p-5 border-b border-navy/5 last:border-b-0">
                    <span className="text-sm font-medium text-navy">{item.role}</span>
                    <span className="text-sm text-slate">{item.range}</span>
                    <span className="text-sm text-slate">{item.monthly}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate mt-4">
                * Rakamlar brüt (vergi öncesi) değerlerdir. Federal ve eyalet vergileri düşüldükten sonra net maaş yaklaşık %25-35 daha düşük olur.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Yaşam Masrafları
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                ABD&apos;de Yaşam Maliyeti
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Yaşam masrafları şehirden şehire büyük değişkenlik gösterir.
                New York, San Francisco ve Los Angeles gibi büyük şehirler çok
                daha pahalıyken, Midwest ve Güney eyaletleri daha uygun fiyatlıdır.
              </p>
              <div className="space-y-3">
                {costOfLiving.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-sand/50 rounded-xl">
                    <span className="text-sm font-medium text-navy">{item.item}</span>
                    <span className="text-sm font-bold text-navy">{item.range}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-5 bg-navy/5 rounded-xl">
                  <span className="text-sm font-bold text-navy">Toplam Tahmini Aylık Masraf</span>
                  <span className="text-lg font-bold text-crimson">$2,830-5,850</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Kültürel Rehber
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABD&apos;de Çalışma ve Yaşam Kültürü
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {culturalTips.map((category, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 transition-all duration-300 h-full">
                  <h3 className="text-lg font-bold text-navy mb-5">{category.title}</h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                        <span className="text-sm text-slate leading-relaxed">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Working Conditions */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                ABD&apos;de Çalışma Koşulları
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  ABD&apos;de standart çalışma saatleri haftada 40 saattir, genellikle
                  Pazartesi-Cuma 9:00-17:00 arasında. Fazla mesai durumuna göre
                  %150 ücret ödenebilir. J1 vize sahipleri haftada maksimum 40
                  saat çalışabilir.
                </p>
                <p>
                  Federal asgari ücret saatlik $7.25 olsa da çoğu eyalette bu
                  rakam daha yüksektir. Örneğin California&apos;da $16, New York&apos;ta
                  $15, Washington&apos;da $16.28&apos;dir. J1 stajyer maaşları genellikle
                  asgari ücretin üzerindedir.
                </p>
                <p>
                  ABD&apos;de izin günleri Türkiye&apos;ye göre daha sınırlıdır. Çoğu
                  iş yerinde yıllık 10-15 gün ücretli izin verilir. Resmi tatil
                  sayısı da azdır (genellikle 10-11 gün). Sağlık sigortası
                  genellikle işveren tarafından kısmen karşılanır.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                ABD&apos;de Staj Yapmaya Hazır mısınız?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                J1 vize programı ile ABD&apos;de maaşlı staj yaparak uluslararası
                kariyer deneyimi kazanın. Uzman ekibimiz tüm süreçte
                yanınızdadır.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
                >
                  Hemen Başvur
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/staj-programi"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
                >
                  Programı İncele
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">İlgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize süreci ve başvuru adımları" },
                { href: "/staj-programi", title: "Staj Programı", desc: "ABD staj programı detayları ve avantajlar" },
                { href: "/ucretler", title: "Program Ücretleri", desc: "Danışmanlık ve program ücret bilgileri" },
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
