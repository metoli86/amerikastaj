"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const visaTypes = [
  {
    code: "J1",
    name: "Exchange Visitor Visa",
    description:
      "Kulturel degisim programi kapsaminda staj ve egitim amacli verilen vize. Universitye ogrencileri ve yeni mezunlar icin ideal. 12-18 ay sureli.",
    duration: "12-18 ay",
    purpose: "Staj / Egitim",
  },
  {
    code: "B1/B2",
    name: "Turist / Is Vizesi",
    description:
      "Kisa sureli is seyahati (B1) veya turizm, aile ziyareti, medikal tedavi (B2) amaciyla verilen vize. Calisma izni icermez.",
    duration: "6 aya kadar",
    purpose: "Turizm / Is",
  },
  {
    code: "F1",
    name: "Student Visa",
    description:
      "ABDde lisans, yuksek lisans veya dil okulu egitimi almak isteyen ogrenciler icin verilen vize. Sinirli calisma izni (CPT/OPT) icerir.",
    duration: "Egitim suresi",
    purpose: "Egitim",
  },
  {
    code: "H1B",
    name: "Specialty Occupation Visa",
    description:
      "Uzmanlik gerektiren mesleklerde calisma izni veren vize. Isverenin sponsor olmasi ve kura sistemi gerektirir. En cok talep goren calisma vizesi.",
    duration: "3+3 yil",
    purpose: "Profesyonel Calisma",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Vize Turunu Belirleyin",
    description:
      "Seyahat amaiciniza uygun vize kategorisini secin. Staj icin J1, egitim icin F1, turizm icin B1/B2, calisma icin H1B vize turunu degerlendirin.",
  },
  {
    step: "02",
    title: "DS-160 Formunu Doldurun",
    description:
      "Online vize basvuru formunu ceai.state.gov adresinden doldurun. Form Ingilizce doldurulur ve tum bolumler eksiksiz tamamlanmalidir. Onay sayfasini kaydedin.",
  },
  {
    step: "03",
    title: "Vize Ucretini Odeyin",
    description:
      "MRV vize basvuru ucretini ($185) odeyin. Odeme bankadan veya online olarak yapilabilir. Odeme makbuzunu saklayin.",
  },
  {
    step: "04",
    title: "Mulakat Randevusu Alin",
    description:
      "ustravels.com uzerinden Istanbul veya Ankara ABD Konsoloslugundan mulakat randevusu alin. Randevu tarihi vize turiine ve sezona gore degisir.",
  },
  {
    step: "05",
    title: "Belgeleri Hazirlayin",
    description:
      "Pasaport, DS-160 onay sayfasi, vize ucret makbuzu, vesikalik fotograf ve vize turune ozel belgeler (kabul mektubu, is teklifi vb.) hazirlayin.",
  },
  {
    step: "06",
    title: "Mulakata Gidin",
    description:
      "Randevu gunununde konsolosluga gidin. Parmak izi alinir ve kisa bir mulakat yapilir. Onaylanan vizeler 5-7 is gunu icerisinde kargoyla teslim edilir.",
  },
];

const requiredDocuments = [
  "Gecerli pasaport (vize suresi + 6 ay gecerlilik)",
  "DS-160 online formu onay sayfasi",
  "MRV vize basvuru ucreti makbuzu",
  "5x5 cm beyaz arkaplanli vesikalik fotograf",
  "Mulakat randevu onay sayfasi",
  "Banka hesap dokumleri (son 3-6 ay)",
  "Is belgesi veya ogrenci belgesi",
  "Vize turune ozel belgeler (DS-2019, I-20, is teklifi vb.)",
  "Onceki pasaportlar (varsa eski ABD vizeleri)",
  "Seyahat plani veya davet mektubu",
];

const embassyInfo = [
  {
    city: "Istanbul",
    address: "Istinye Mahallesi, Kaplcalar Mevkii No:2, 34460 Istinye/Istanbul",
    phone: "(212) 335 90 00",
    note: "Turkiyedeki en yogun ABD konsoloslugu. Randevu bekleme suresi daha uzun olabilir.",
  },
  {
    city: "Ankara",
    address: "Ataturk Bulvari No:110, 06100 Kavaklidere/Ankara",
    phone: "(312) 455 55 55",
    note: "Buyukelcilik merkezi. Istanbul a gore randevu bulmak genellikle daha kolaydir.",
  },
];

export default function AmerikaVizeBasvurusu() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Kapsamli Rehber
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Amerika Vize Basvurusu Rehberi
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Amerika vizesi nasil alinir? ABD vize turleri, basvuru sureci,
              gerekli belgeler, DS-160 formu, mulakat ipuclari ve guncel vize
              ucretleri hakkinda bilmeniz gereken her sey bu rehberde.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Amerika Vizesi Hakkinda Genel Bilgi
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Amerika Birlesik Devletlerine seyahat etmek isteyen Turk
                  vatandaslarinin vize almasi zorunludur. ABD vize sistemi,
                  seyahat amacina gore farkli kategorilere ayrilmistir. Her vize
                  turu kendine ozgu basvuru gereksinimleri ve surecleri icerir.
                </p>
                <p>
                  Vize basvuru sureci temel olarak DS-160 online formunun
                  doldurulmasi, basvuru ucretinin odenmesi, konsolosluk mulakat
                  randevusu alinmasi ve yuz yuze mulakattan olusur. Tum surecin
                  tamamlanmasi ortalama 2-8 hafta surer, ancak yogun donemlerde
                  bu sure uzayabilir.
                </p>
                <p>
                  Turkiyede ABD vize basvurulari Istanbul ve Ankara konsolosluklari
                  uzerinden yapilmaktadir. Basvuru sureci online baslar ve
                  konsolosluk mulakatindan sonra sonuclanir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Amerika Vize Turleri
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Hangi Vize Turune Ihtiyaciniz Var?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {visaTypes.map((visa, i) => (
              <ScrollReveal key={visa.code} delay={i * 0.08}>
                <div className="relative p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300 h-full">
                  <span className="text-6xl font-black text-navy/[0.04] absolute top-3 right-5 select-none">
                    {visa.code}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-crimson/10 text-crimson text-xs font-bold rounded-lg">
                      {visa.code}
                    </span>
                    <span className="text-xs text-slate">{visa.name}</span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {visa.purpose}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">
                    {visa.description}
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-navy/5">
                    <span className="text-xs text-slate">
                      Sure: <span className="font-semibold text-navy">{visa.duration}</span>
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Adim Adim
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABD Vize Basvuru Sureci
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicationSteps.map((item, i) => (
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

      {/* DS-160 Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                DS-160 Formu Nedir?
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  DS-160, ABD gocu-olmayan vize basvurusu icin doldurulmasi
                  zorunlu olan online formudur. Kisisel bilgileriniz, seyahat
                  gecmisiniz, egitim ve is bilgileriniz gibi detaylari icerir.
                </p>
                <p>
                  Form ceac.state.gov adresinden doldurulur ve tamamen
                  Ingilizce dir. Ortalama 45-90 dakika icerisinde tamamlanabilir.
                  Formun her sayfasi otomatik olarak kaydedilir ve daha sonra
                  devam edebilirsiniz.
                </p>
                <p>
                  DS-160 formunun detayli doldurma kilavuzu icin{" "}
                  <Link href="/ds-160" className="text-navy font-semibold hover:text-crimson transition-colors underline underline-offset-4">
                    DS-160 rehberimizi
                  </Link>{" "}
                  inceleyebilirsiniz.
                </p>
              </div>
            </ScrollReveal>
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
                ABD vize mulakati icin hazirlamaniz gereken temel belgeler:
              </p>
              <div className="bg-white rounded-2xl border border-navy/5 divide-y divide-navy/5">
                {requiredDocuments.map((doc, i) => (
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

      {/* Interview Tips */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Mulakat Ipuclari
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sorulara kisa ve net cevap verin",
                    desc: "Konsolosluk mulakatlari genellikle 2-5 dakika surer. Uzun aciklamalar yerine ozu bilgi verin.",
                  },
                  {
                    title: "Turkiyeye donus niyetinizi kanitlayin",
                    desc: "Aile baglari, is firsatlari, mulk veya devam eden egitim gibi somut nedenler sunun.",
                  },
                  {
                    title: "Tum belgeleri duzenli hazirlayin",
                    desc: "Belgelerinizi kategoriye gore dosyalayin. Istendiginde hizlica ulasabilmeniz gerekir.",
                  },
                  {
                    title: "Ingilizce pratigi yapin",
                    desc: "Mulakat Ingilizce yapilir. Kendinizi tanitma ve seyahat amaicinizi Ingilizce anlatma pratiigi yapin.",
                  },
                  {
                    title: "Samimi ve tutarli olun",
                    desc: "Konsolosluk gorevlileri tutarsizliklari kolayca fark eder. Her zaman dogruyu soyleyin.",
                  },
                ].map((tip, i) => (
                  <div key={i} className="p-5 bg-sand/50 rounded-xl">
                    <h3 className="font-bold text-navy mb-1 text-sm">{tip.title}</h3>
                    <p className="text-sm text-slate">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                ABD Vize Ucretleri (2024-2025)
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                ABD vize basvuru ucretleri vize turune gore degisir. Ucretler
                ABD Dolari uzerinden belirlenir ve iade edilmez.
              </p>
              <div className="space-y-4">
                {[
                  { label: "B1/B2 Turist / Is Vizesi (MRV Fee)", amount: "$185" },
                  { label: "F1 Ogrenci Vizesi (MRV Fee)", amount: "$185" },
                  { label: "J1 Degisim Vizesi (MRV Fee)", amount: "$185" },
                  { label: "H1B Calisma Vizesi (MRV Fee)", amount: "$205" },
                  { label: "SEVIS Ucreti (J1/F1 icin - I-901)", amount: "$220 / $350" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-5 bg-white rounded-xl border border-navy/5">
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                    <span className="text-lg font-bold text-navy">{item.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate mt-6 leading-relaxed">
                Not: Ucretler degiskenlik gosterebilir. Guncel ucretler icin ABD
                Disisleri Bakanligi web sitesini kontrol ediniz. Vize basvuru
                ucreti iade edilmez, basvurunuz reddedilse bile ucret geri
                odenenmez.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Embassy Info */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Konsolosluk Bilgileri
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABD Konsolosluklari - Turkiye
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {embassyInfo.map((embassy, i) => (
              <ScrollReveal key={embassy.city} delay={i * 0.1}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-crimson/10 flex items-center justify-center mb-5">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{embassy.city}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate">
                      <span className="font-medium text-navy">Adres:</span> {embassy.address}
                    </p>
                    <p className="text-sm text-slate">
                      <span className="font-medium text-navy">Telefon:</span> {embassy.phone}
                    </p>
                  </div>
                  <p className="text-xs text-slate bg-sand/50 p-3 rounded-lg">{embassy.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-8 p-6 bg-sand/30 rounded-2xl">
              <h3 className="font-bold text-navy mb-2">ABD Vize Randevu Alma</h3>
              <p className="text-sm text-slate leading-relaxed">
                Vize mulakat randevusu{" "}
                <span className="font-semibold text-navy">ustravels.com</span>{" "}
                uzerinden alinir. Randevu almak icin DS-160 onay numaraniz ve MRV
                ucret makbuz numaraniz gereklidir. Yogun donemlerde (yaz aylari)
                randevu bulmak zorlasbilir, bu yuzden planlananizi erken yapmaniz
                onerilir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="bg-navy rounded-2xl p-10 lg:p-16 text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                ABD Vize Basvurunuzda Yaninizdayiz
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                J1 vize programi ile ABDde staj yapmak mi istiyorsunuz?
                Uzman ekibimiz tum basvuru surecinde size rehberlik eder.
              </p>
              <Link
                href="/basvuru"
                className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
              >
                Ucretsiz Danismanlik Al
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
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
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize nedir, nasil alinir, tum detaylar" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adim adim doldurma kilavuzu" },
                { href: "/j1-vize-mulakat-sorulari", title: "Mulakat Sorulari", desc: "En cok sorulan J1 vize mulakat sorulari" },
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
