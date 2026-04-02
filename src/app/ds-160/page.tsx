"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const formSections = [
  {
    step: "01",
    title: "Kisisel Bilgiler (Personal Information)",
    fields: [
      "Ad ve soyad (pasaporttaki sekliyle)",
      "Dogum tarihi ve yeri",
      "Cinsiyet ve medeni durum",
      "Ulusal kimlik numarasi (TC Kimlik No)",
      "Pasaport numarasi, verilme ve bitis tarihi",
    ],
    tip: "Bilgilerinizi pasaportunuzdaki sekliyle girin. Kucuk bir harf hatasi bile sorun yaratabilir.",
  },
  {
    step: "02",
    title: "Iletisim Bilgileri (Contact Information)",
    fields: [
      "Ev adresi",
      "Telefon numarasi (cep ve ev)",
      "E-posta adresi",
      "Son 5 yilda kullandiginiz telefon numaralari",
    ],
    tip: "Aktif kullaniginiz telefon ve e-posta adresinizi yayin. Konsolosluk sizinle bu bilgiler uzerinden iletisime gecebilir.",
  },
  {
    step: "03",
    title: "Seyahat Bilgileri (Travel Information)",
    fields: [
      "Seyahat amaci (vize turu)",
      "ABDde kalmayi planladiginiz sure",
      "ABDde kalacaginiz adres",
      "Seyahat masraflarini kim karsilayacak",
      "ABDye daha once seyahat ettiniz mi",
    ],
    tip: "ABDde kalacaginiz adresi onceden ogrenerek forma girin. Otel veya ev sahibi adresi olabilir.",
  },
  {
    step: "04",
    title: "ABD Iletisim Bilgileri (U.S. Contact)",
    fields: [
      "ABDdeki iletisim kisisi adi",
      "Kurum/sirket adi",
      "Adres ve telefon numarasi",
      "Kissiyle iliskiniz",
    ],
    tip: "J1 vize icin sponsor kurulusunuzun veya calisacaginiz sirketin bilgilerini girin.",
  },
  {
    step: "05",
    title: "Aile Bilgileri (Family Information)",
    fields: [
      "Anne ve baba adi, dogum tarihi",
      "ABDde yakininiz var mi",
      "Es bilgileri (evliyseniz)",
    ],
    tip: "ABDde akrabaniz varsa dogru bildirin. Konsolosluk kayitlari kontrol edebilir.",
  },
  {
    step: "06",
    title: "Egitim ve Is Bilgileri (Education & Work)",
    fields: [
      "Egitim gecmisi (universite, lise)",
      "Mevcut is yeri ve gorev",
      "Onceki is yerleri",
      "Aylik gelir",
    ],
    tip: "Son is yeriniz ve egitim bilgilerinizi detayli girin. Stajyer iseniz universite bilgileriniz onemlidir.",
  },
  {
    step: "07",
    title: "Guvenlik Sorulari (Security Questions)",
    fields: [
      "Bulasiici hastalik var mi",
      "Tutuklanma veya mahkumiyet var mi",
      "Daha once vize reddedildi mi",
      "ABDde sinir disina cikarildiniz mi",
    ],
    tip: "Tum guvenlik sorularini dikkatli okyun ve dogru cevap verin. Yanlis bilgi vize iptaline yol acabilir.",
  },
  {
    step: "08",
    title: "Fotograf Yukleme ve Onay",
    fields: [
      "Dijital fotograf yukleme (600x600 piksel, beyaz arkaplan)",
      "Formu inceleme ve onaylama",
      "Onay sayfasini yazdirma",
    ],
    tip: "Fotografiniz son 6 ay icerisinde cekilmis olmali. Gozluk takilmamali, beyaz arkaplan kullanilmali.",
  },
];

const commonMistakes = [
  {
    mistake: "Pasaport bilgilerini yanlis girmek",
    solution: "Formu doldurmadan once pasaportunuzu yanniniza alin. Ad, soyad ve numara birebir ayni olmali.",
  },
  {
    mistake: "Formu kaydetmeden tarayiciyi kapatmak",
    solution: "Her sayfa gecisinde form otomatik kaydedilir ancak Application ID numaranizi mutlaka not alin.",
  },
  {
    mistake: "Eski veya uyumsuz fotograf yuklemek",
    solution: "600x600 piksel, beyaz arkaplan, son 6 ayda cekilmis, gozluksuz fotograf kullanin.",
  },
  {
    mistake: "Guvenlik sorularinda yanlis bilgi vermek",
    solution: "Tum evet/hayir sorularini dikkatli okuyun. Onceki vize retleri dahil her seyi dogru bildirin.",
  },
  {
    mistake: "Seyahat gecmisini eksik birakmak",
    solution: "Son 5 yilda ziyaret ettiginiz tum ulkeleri listeleyin. Pasaport damgalarinizi kontrol edin.",
  },
  {
    mistake: "Iletisim bilgilerini guncellememek",
    solution: "Aktif telefon ve e-posta adresinizi yayin. Konsolosluk bu bilgiler uzerinden ulasabilir.",
  },
  {
    mistake: "Onay sayfasini yazdirmamak",
    solution: "DS-160 onay sayfasi mulakat icin zorunlu. Hem dijital hem basili kopyasini saklayin.",
  },
];

const requiredInfo = [
  "Gecerli pasaport",
  "TC Kimlik numarasi",
  "Ev ve is adresi (Turkiye)",
  "ABDde kalacaginiz adres",
  "ABDdeki iletisim kisisi bilgileri",
  "Son 5 yilda ziyaret edilen ulkeler",
  "Egitim gecmisi (okul adi, tarih, bolum)",
  "Is gecmisi (sirket adi, gorev, tarih)",
  "Anne-baba adi ve dogum tarihi",
  "Dijital fotograf (600x600px, beyaz arkaplan)",
  "Onceki ABD vizeleri (varsa)",
  "Sosyal medya hesaplari (kullanici adlari)",
];

export default function DS160() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Form Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              DS-160 Formu Nasil Doldurulur?
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              DS-160, ABD vize basvurusu icin doldurulmasi zorunlu olan online
              formudur. Bu rehberde formu adim adim nasil dolduracaginizi,
              yapilan yaygin hatalari ve hazirlamaniz gereken bilgileri
              bulabilirsiniz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What is DS-160 */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                DS-160 Formu Nedir?
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  DS-160 (Online Nonimmigrant Visa Application), ABDye seyahat
                  etmek isteyen tum gocu-olmayan vize basvuru sahiplerinin
                  doldurmus olmasi gereken online formudur. Form, ABD Disisleri
                  Bakanligi tarafindan yonetilir ve ceac.state.gov adresinden
                  erisilebilir.
                </p>
                <p>
                  Form tamamen Ingilizce doldurulur ve kisisel bilgileriniz,
                  seyahat amaiciniz, egitim ve is gecmisiniz, aile bilgileriniz
                  ile guvenlik sorularini icerir. Formun tamamlanmasi ortalama
                  45-90 dakika surer.
                </p>
                <p>
                  DS-160 formu tamamlandiginda bir onay sayfasi olusur. Bu onay
                  sayfasinin barkodu mulakatinizda taranacaktir, bu yuzden onay
                  sayfasini mutlaka yazdirmaniz gerekir.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Required Info Checklist */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Baslmadan Once
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                Hazirlamaniz Gereken Bilgiler
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                DS-160 formunu doldurmaya baslamadan once asagidaki bilgi ve
                belgeleri yaninda bulundurun:
              </p>
              <div className="bg-white rounded-2xl border border-navy/5 divide-y divide-navy/5">
                {requiredInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-crimson">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span className="text-sm text-slate">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Adim Adim
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                DS-160 Formu Doldurma Adimlari
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {formSections.map((section, i) => (
              <ScrollReveal key={section.step} delay={i * 0.05}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-navy">{section.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy mb-4">
                        {section.title}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-2 mb-4">
                        {section.fields.map((field, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-crimson shrink-0 mt-2" />
                            <span className="text-sm text-slate">{field}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-start gap-2 p-3 bg-sand/50 rounded-xl">
                        <span className="text-crimson mt-0.5 shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                        </span>
                        <p className="text-xs text-navy font-medium">{section.tip}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Dikkat Edilmesi Gerekenler
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Yapilan Yaygin Hatalar
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {commonMistakes.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-crimson/10 transition-all duration-300 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center">
                      <span className="text-crimson text-xs font-bold">!</span>
                    </span>
                    <h3 className="text-sm font-bold text-crimson">{item.mistake}</h3>
                  </div>
                  <p className="text-sm text-slate leading-relaxed">{item.solution}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Pratik Bilgiler
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "DS-160 formunu doldurmak ne kadar surer?",
                    a: "Ortalama 45-90 dakika. Tum bilgilerinizi onceden hazirlarsaniz daha hizli tamamlayabilirsiniz.",
                  },
                  {
                    q: "Form kaydedilir mi?",
                    a: "Her sayfa gecisinde otomatik kaydedilir. Application ID numaranizla 30 gun icerisinde devam edebilirsiniz.",
                  },
                  {
                    q: "DS-160 ucretsiz mi?",
                    a: "Evet, DS-160 formunun kendisi ucretsizdir. Ancak vize basvuru ucreti ($185 MRV fee) ayri odenir.",
                  },
                  {
                    q: "Hangi tarayiciyi kullanmaliyim?",
                    a: "Chrome veya Firefox en iyi sonucu verir. Internet Explorer artik desteklenmemektedir.",
                  },
                  {
                    q: "Fotograf ozellikleri nelerdir?",
                    a: "600x600 piksel, JPEG formati, beyaz arkaplan, son 6 ayda cekilmis, gozluksuz, maksimum 240KB.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-5 bg-white rounded-xl border border-navy/5">
                    <h3 className="font-bold text-navy mb-1 text-sm">{item.q}</h3>
                    <p className="text-sm text-slate">{item.a}</p>
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
                DS-160 Doldurmada Yardim mi Lazim?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Danismanlarimiz DS-160 formunuzu birlikte doldurarak hata
                yapmanizi onler ve vize onay sansinizi arttirir.
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
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">Ilgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize nedir, nasil alinir, tum detaylar" },
                { href: "/j1-vize-mulakat-sorulari", title: "Mulakat Sorulari", desc: "En cok sorulan J1 vize mulakat sorulari" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Basvurusu", desc: "ABD vize turleri ve genel basvuru rehberi" },
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
