"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const visaTypes = [
  {
    code: "J1",
    name: "Exchange Visitor Visa",
    description:
      "Kültürel değişim programı kapsamında staj ve eğitim amaçlı verilen vize. Üniversite öğrencileri ve yeni mezunlar için ideal. 12-18 ay süreli.",
    duration: "12-18 ay",
    purpose: "Staj / Eğitim",
  },
  {
    code: "B1/B2",
    name: "Turist / İş Vizesi",
    description:
      "Kısa süreli iş seyahati (B1) veya turizm, aile ziyareti, medikal tedavi (B2) amacıyla verilen vize. Çalışma izni içermez.",
    duration: "6 aya kadar",
    purpose: "Turizm / İş",
  },
  {
    code: "F1",
    name: "Student Visa",
    description:
      "ABD'de lisans, yüksek lisans veya dil okulu eğitimi almak isteyen öğrenciler için verilen vize. Sınırlı çalışma izni (CPT/OPT) içerir.",
    duration: "Eğitim süresi",
    purpose: "Eğitim",
  },
  {
    code: "H1B",
    name: "Specialty Occupation Visa",
    description:
      "Uzmanlık gerektiren mesleklerde çalışma izni veren vize. İşverenin sponsor olması ve kura sistemi gerektirir. En çok talep gören çalışma vizesi.",
    duration: "3+3 yıl",
    purpose: "Profesyonel Çalışma",
  },
];

const applicationSteps = [
  {
    step: "01",
    title: "Vize Türünü Belirleyin",
    description:
      "Seyahat amacınıza uygun vize kategorisini seçin. Staj için J1, eğitim için F1, turizm için B1/B2, çalışma için H1B vize türünü değerlendirin.",
  },
  {
    step: "02",
    title: "DS-160 Formunu Doldurun",
    description:
      "Online vize başvuru formunu ceac.state.gov adresinden doldurun. Form İngilizce doldurulur ve tüm bölümler eksiksiz tamamlanmalıdır. Onay sayfasını kaydedin.",
  },
  {
    step: "03",
    title: "Vize Ücretini Ödeyin",
    description:
      "MRV vize başvuru ücretini ($185) ödeyin. Ödeme bankadan veya online olarak yapılabilir. Ödeme makbuzunu saklayın.",
  },
  {
    step: "04",
    title: "Mülakat Randevusu Alın",
    description:
      "ustravels.com üzerinden İstanbul veya Ankara ABD Konsolosluğundan mülakat randevusu alın. Randevu tarihi vize türüne ve sezona göre değişir.",
  },
  {
    step: "05",
    title: "Belgeleri Hazırlayın",
    description:
      "Pasaport, DS-160 onay sayfası, vize ücret makbuzu, vesikalık fotoğraf ve vize türüne özel belgeler (kabul mektubu, iş teklifi vb.) hazırlayın.",
  },
  {
    step: "06",
    title: "Mülakata Gidin",
    description:
      "Randevu gününde konsolosluğa gidin. Parmak izi alınır ve kısa bir mülakat yapılır. Onaylanan vizeler 5-7 iş günü içerisinde kargoyla teslim edilir.",
  },
];

const requiredDocuments = [
  "Geçerli pasaport (vize süresi + 6 ay geçerlilik)",
  "DS-160 online formu onay sayfası",
  "MRV vize başvuru ücreti makbuzu",
  "5x5 cm beyaz arkaplanlı vesikalık fotoğraf",
  "Mülakat randevu onay sayfası",
  "Banka hesap dökümleri (son 3-6 ay)",
  "İş belgesi veya öğrenci belgesi",
  "Vize türüne özel belgeler (DS-2019, I-20, iş teklifi vb.)",
  "Önceki pasaportlar (varsa eski ABD vizeleri)",
  "Seyahat planı veya davet mektubu",
];

const embassyInfo = [
  {
    city: "İstanbul",
    address: "İstinye Mahallesi, Kaplıcalar Mevkii No:2, 34460 İstinye/İstanbul",
    phone: "(212) 335 90 00",
    note: "Türkiye'deki en yoğun ABD konsolosluğu. Randevu bekleme süresi daha uzun olabilir.",
  },
  {
    city: "Ankara",
    address: "Atatürk Bulvarı No:110, 06100 Kavaklıdere/Ankara",
    phone: "(312) 455 55 55",
    note: "Büyükelçilik merkezi. İstanbul'a göre randevu bulmak genellikle daha kolaydır.",
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
              Kapsamlı Rehber
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Amerika Vize Başvurusu Rehberi
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Amerika vizesi nasıl alınır? ABD vize türleri, başvuru süreci,
              gerekli belgeler, DS-160 formu, mülakat ipuçları ve güncel vize
              ücretleri hakkında bilmeniz gereken her şey bu rehberde.
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
                Amerika Vizesi Hakkında Genel Bilgi
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  Amerika Birleşik Devletleri&apos;ne seyahat etmek isteyen Türk
                  vatandaşlarının vize alması zorunludur. ABD vize sistemi,
                  seyahat amacına göre farklı kategorilere ayrılmıştır. Her vize
                  türü kendine özgü başvuru gereksinimleri ve süreçleri içerir.
                </p>
                <p>
                  Vize başvuru süreci temel olarak DS-160 online formunun
                  doldurulması, başvuru ücretinin ödenmesi, konsolosluk mülakat
                  randevusu alınması ve yüz yüze mülakattan oluşur. Tüm sürecin
                  tamamlanması ortalama 2-8 hafta sürer, ancak yoğun dönemlerde
                  bu süre uzayabilir.
                </p>
                <p>
                  Türkiye&apos;de ABD vize başvuruları İstanbul ve Ankara konsoloslukları
                  üzerinden yapılmaktadır. Başvuru süreci online başlar ve
                  konsolosluk mülakatından sonra sonuçlanır.
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
                Amerika Vize Türleri
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Hangi Vize Türüne İhtiyacınız Var?
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
                      Süre: <span className="font-semibold text-navy">{visa.duration}</span>
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
                Adım Adım
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                ABD Vize Başvuru Süreci
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
                  DS-160, ABD göçü-olmayan vize başvurusu için doldurulması
                  zorunlu olan online formudur. Kişisel bilgileriniz, seyahat
                  geçmişiniz, eğitim ve iş bilgileriniz gibi detayları içerir.
                </p>
                <p>
                  Form ceac.state.gov adresinden doldurulur ve tamamen
                  İngilizce&apos;dir. Ortalama 45-90 dakika içerisinde tamamlanabilir.
                  Formun her sayfası otomatik olarak kaydedilir ve daha sonra
                  devam edebilirsiniz.
                </p>
                <p>
                  DS-160 formunun detaylı doldurma kılavuzu için{" "}
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
                ABD vize mülakatı için hazırlamanız gereken temel belgeler:
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
                Mülakat İpuçları
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sorulara kısa ve net cevap verin",
                    desc: "Konsolosluk mülakatları genellikle 2-5 dakika sürer. Uzun açıklamalar yerine özü bilgi verin.",
                  },
                  {
                    title: "Türkiye'ye dönüş niyetinizi kanıtlayın",
                    desc: "Aile bağları, iş fırsatları, mülk veya devam eden eğitim gibi somut nedenler sunun.",
                  },
                  {
                    title: "Tüm belgeleri düzenli hazırlayın",
                    desc: "Belgelerinizi kategoriye göre dosyalayın. İstendiğinde hızlıca ulaşabilmeniz gerekir.",
                  },
                  {
                    title: "İngilizce pratiği yapın",
                    desc: "Mülakat İngilizce yapılır. Kendinizi tanıtma ve seyahat amacınızı İngilizce anlatma pratiği yapın.",
                  },
                  {
                    title: "Samimi ve tutarlı olun",
                    desc: "Konsolosluk görevlileri tutarsızlıkları kolayca fark eder. Her zaman doğruyu söyleyin.",
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
                ABD Vize Ücretleri (2024-2025)
              </h2>
              <p className="text-slate leading-relaxed mb-8">
                ABD vize başvuru ücretleri vize türüne göre değişir. Ücretler
                ABD Doları üzerinden belirlenir ve iade edilmez.
              </p>
              <div className="space-y-4">
                {[
                  { label: "B1/B2 Turist / İş Vizesi (MRV Fee)", amount: "$185" },
                  { label: "F1 Öğrenci Vizesi (MRV Fee)", amount: "$185" },
                  { label: "J1 Değişim Vizesi (MRV Fee)", amount: "$185" },
                  { label: "H1B Çalışma Vizesi (MRV Fee)", amount: "$205" },
                  { label: "SEVIS Ücreti (J1/F1 için - I-901)", amount: "$220 / $350" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-5 bg-white rounded-xl border border-navy/5">
                    <span className="text-sm font-medium text-navy">{item.label}</span>
                    <span className="text-lg font-bold text-navy">{item.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate mt-6 leading-relaxed">
                Not: Ücretler değişkenlik gösterebilir. Güncel ücretler için ABD
                Dışişleri Bakanlığı web sitesini kontrol ediniz. Vize başvuru
                ücreti iade edilmez, başvurunuz reddedilse bile ücret geri
                ödenmez.
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
                ABD Konsoloslukları - Türkiye
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
                Vize mülakat randevusu{" "}
                <span className="font-semibold text-navy">ustravels.com</span>{" "}
                üzerinden alınır. Randevu almak için DS-160 onay numaranız ve MRV
                ücret makbuz numaranız gereklidir. Yoğun dönemlerde (yaz ayları)
                randevu bulmak zorlaşabilir, bu yüzden planlamanızı erken yapmanız
                önerilir.
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
                ABD Vize Başvurunuzda Yanınızdayız
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                J1 vize programı ile ABD&apos;de staj yapmak mı istiyorsunuz?
                Uzman ekibimiz tüm başvuru sürecinde size rehberlik eder.
              </p>
              <Link
                href="/basvuru"
                className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
              >
                Ücretsiz Danışmanlık Al
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
            <h2 className="text-2xl font-bold text-navy mb-8">İlgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize nedir, nasıl alınır, tüm detaylar" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adım adım doldurma kılavuzu" },
                { href: "/j1-vize-mulakat-sorulari", title: "Mülakat Soruları", desc: "En çok sorulan J1 vize mülakat soruları" },
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
