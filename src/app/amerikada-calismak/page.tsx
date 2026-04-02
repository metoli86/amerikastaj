"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const workVisaTypes = [
  {
    code: "J1",
    name: "Staj / Egitim Vizesi",
    description:
      "Kulturel degisim programi kapsaminda staj veya egitim amacli calisma izni verir. Universite ogrencileri ve yeni mezunlar icin en erisilebilir ABD calisma yoludur.",
    duration: "12-18 ay",
    ideal: "Ogrenci ve yeni mezunlar",
  },
  {
    code: "H1B",
    name: "Uzmanlik Meslek Vizesi",
    description:
      "Muhendislik, bilisim, finans gibi uzmanlik gerektiren alanlarda calismak icin verilen vize. Isverenin sponsor olmasi ve yillik kura sistemi gerektirir.",
    duration: "3+3 yil",
    ideal: "Deneyimli profesyoneller",
  },
  {
    code: "L1",
    name: "Sirket Ici Transfer Vizesi",
    description:
      "Cok uluslu sirketlerin calisanlarini ABD subelerine transfer etmek icin kullanilan vize. En az 1 yillik sirkette calisma sartti vardir.",
    duration: "1-7 yil",
    ideal: "Cok uluslu sirket calisanlari",
  },
  {
    code: "O1",
    name: "Olaganustu Yetenek Vizesi",
    description:
      "Bilim, sanat, egitim, is dunyasi veya spor alaninda olaganustu yeteneginizi kanitlayabilen kisiler icin verilen vize.",
    duration: "3 yila kadar",
    ideal: "Olaganustu yetenekli bireyler",
  },
];

const jobSearchTips = [
  {
    title: "LinkedIn Profilinizi Optimize Edin",
    description:
      "ABDdeki isveerenler LinkedIn uzerinden aday arar. Profilinizi Ingilizce olusturun, deneyimlerinizi detayli yazin ve ABDde calisma izniniz oldugunu belirtin.",
  },
  {
    title: "Indeed ve Glassdoor Kullanin",
    description:
      "Amerikan is arama siteleri olan Indeed.com ve Glassdoor.com da sektorunuze uygun pozisyonlari arastin. Internship veya entry-level filtreleri kullanin.",
  },
  {
    title: "Networking Yapin",
    description:
      "ABDde is bulmada networking kritik oneme sahiptir. LinkedIn uzerinden sektorunuzdeki profesyonellerle baglanti kurun, career fair lara katilin.",
  },
  {
    title: "Resume Formatini Uyarlayin",
    description:
      "Amerikan resume formati Turk CV formatindan farklidir. Fotograf eklemeyin, 1 sayfa olsun, basarilari sayilarla destekleyin, references kismini cikarin.",
  },
  {
    title: "Cover Letter Hazirlayin",
    description:
      "ABDde her basvuruya ozel cover letter (on yazi) yazmak standarttir. Neden o sirket ve pozisyonu sectiginizi, nasil katki saglayacaginizi aciklayin.",
  },
  {
    title: "Staffing Agency lerle Calisin",
    description:
      "Robert Half, Adecco, Manpower gibi is bulma ajanslari gecici ve kalici pozisyonlar icin yardimci olabilir. J1 vize sahipleri icin de firsatlar mevcuttur.",
  },
];

const salaryExpectations = [
  { role: "Stajyer (Intern)", range: "$15-25/saat", monthly: "$2,600-4,300" },
  { role: "Yazilim Gelistirici (Jr.)", range: "$60,000-85,000/yil", monthly: "$5,000-7,000" },
  { role: "Pazarlama Uzmani", range: "$45,000-65,000/yil", monthly: "$3,750-5,400" },
  { role: "Finans Analisti", range: "$55,000-75,000/yil", monthly: "$4,580-6,250" },
  { role: "Muhendis (Jr.)", range: "$55,000-80,000/yil", monthly: "$4,580-6,660" },
  { role: "Otel/Turizm", range: "$30,000-45,000/yil", monthly: "$2,500-3,750" },
];

const costOfLiving = [
  { item: "Kira (1+1, sehir merkezi)", range: "$1,200-2,500/ay" },
  { item: "Kira (1+1, sehir disi)", range: "$800-1,600/ay" },
  { item: "Market/Yemek", range: "$300-600/ay" },
  { item: "Ulasim", range: "$100-200/ay" },
  { item: "Saglik Sigortasi", range: "$150-400/ay" },
  { item: "Telefon + Internet", range: "$80-150/ay" },
  { item: "Eglence ve Diger", range: "$200-400/ay" },
];

const culturalTips = [
  {
    title: "Is Kulturu",
    tips: [
      "Dakiklik cok onemlidir - toplantilara zamaninda gelin",
      "Informal iletisim yaygindir, patronunuza adi ile hitap edebilirsiniz",
      "Proaktif olun - gorev beklemeden inisiyatif alin",
      "E-postalara hizli donus yapin (24 saat icerisinde)",
    ],
  },
  {
    title: "Sosyal Yasam",
    tips: [
      "Bahsis kulturu vardir - restoranlarda %15-20 bahsis beklenir",
      "Small talk (kisa sohbet) onemlidir - hava durumu, spor, hafta sonu planlari",
      "Kisisel alan kavramina dikkat edin - yaklasik 1 metre mesafe birakin",
      "Insanlarin zamanina saygi gosterin - randevulara zamaninda gidin",
    ],
  },
  {
    title: "Pratik Bilgiler",
    tips: [
      "Social Security Number (SSN) almak icin isverenizle birlikte basvurun",
      "Banka hesabi acmak icin pasaport ve SSN yeterlidir",
      "Saglik sigortanizi kontrol edin - ABDde saglik harcamalari cok yuksektir",
      "Vergi beyannamesini her yil Nisan ayinda vermek zorundasiniz",
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
              Calisma Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Amerikada Calismak
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABDde calismak icin vize turleri, is bulma yontemleri, maas
              beklentileri, yasam masraflari ve kulturel ipuclari hakkinda
              kapsamli rehber. Amerikada is bulmak ve kariyer yapmak icin
              bilmeniz gereken her sey.
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
                Calisma Vizeleri
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABDde Calisma Izni Veren Vize Turleri
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
                      Ideal: <span className="font-semibold text-navy">{visa.ideal}</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-8 p-6 bg-white rounded-2xl border border-navy/5">
              <p className="text-sm text-slate leading-relaxed">
                <span className="font-bold text-navy">Onemli Not:</span>{" "}
                Universite ogrencileri ve yeni mezunlar icin en erisilebilir
                yol J1 vize programidir. H1B vizesi kura sistemi nedeniyle
                belirsizlik icerir, L1 ve O1 vizeleri ise ozel kosullar
                gerektirir. J1 programi hakkinda detayli bilgi icin{" "}
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
                Is Bulma
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Amerikada Nasil Is Bulunur?
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
                Maas Bilgileri
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                ABDde Maas Beklentileri
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Maaslar sektore, sehire, deneyim seviyesine ve sirket buyuklugune
                gore buyuk farklilik gosterir. Asagidaki rakamlar ortalama degerlerdir.
              </p>
              <div className="bg-white rounded-2xl border border-navy/5 overflow-hidden">
                <div className="grid grid-cols-3 gap-0 p-5 bg-navy/[0.02] border-b border-navy/5">
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Pozisyon</span>
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Yillik / Saatlik</span>
                  <span className="text-xs font-bold text-navy uppercase tracking-wide">Aylik (Brut)</span>
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
                * Rakamlar brut (vergi oncesi) degerlerdir. Federal ve eyalet vergileri dusuldukten sonra net maas yaklasik %25-35 daha dusuk olur.
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
                Yasam Masraflari
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                ABDde Yasam Maliyeti
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                Yasam masraflari sehirden sehire buyuk degiskenlik gosterir.
                New York, San Francisco ve Los Angeles gibi buyuk sehirler cok
                daha pahaliyken, Midwest ve Guney eyaletleri daha uygun fiyatlidir.
              </p>
              <div className="space-y-3">
                {costOfLiving.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-5 bg-sand/50 rounded-xl">
                    <span className="text-sm font-medium text-navy">{item.item}</span>
                    <span className="text-sm font-bold text-navy">{item.range}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-5 bg-navy/5 rounded-xl">
                  <span className="text-sm font-bold text-navy">Toplam Tahmini Aylik Masraf</span>
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
                Kulturel Rehber
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABDde Calisma ve Yasam Kulturu
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
                ABDde Calisma Kosullari
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  ABDde standart calisma saatleri haftada 40 saattir, genellikle
                  Pazartesi-Cuma 9:00-17:00 arasinda. Fazla mesai durumuna gore
                  %150 ucret odenebilir. J1 vize sahipleri haftada maksimum 40
                  saat calisabilir.
                </p>
                <p>
                  Federal asgari ucret saatlik $7.25 olsa da cogu eyalette bu
                  rakam daha yuksektir. Ornegin California da $16, New York ta
                  $15, Washington da $16.28 dir. J1 stajyer maaslari genellikle
                  asgari ucretin uzerindedir.
                </p>
                <p>
                  ABDde izin gunleri Turkiyeye gore daha sinirlidir. Cogu
                  is yerinde yillik 10-15 gun ucretli izin verilir. Resmi tatil
                  sayisi da azddir (genellikle 10-11 gun). Sagglik sigortasi
                  genellikle isveren tarafindan kismen karsilanir.
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
                ABDde Staj Yapmaya Hazir misiniz?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                J1 vize programi ile ABDde maasli staj yaparak uluslararasi
                kariyer deneyimi kazanin. Uzman ekibimiz tum surecte
                yaninizdadir.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
                >
                  Hemen Basvur
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link
                  href="/staj-programi"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 transition-colors"
                >
                  Programi Incele
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
            <h2 className="text-2xl font-bold text-navy mb-8">Ilgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize sureci ve basvuru adimlari" },
                { href: "/staj-programi", title: "Staj Programi", desc: "ABD staj programi detaylari ve avantajlar" },
                { href: "/ucretler", title: "Program Ucretleri", desc: "Danismanlik ve program ucret bilgileri" },
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
