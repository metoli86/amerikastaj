"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const formSections = [
  {
    step: "01",
    title: "Kişisel Bilgiler (Personal Information)",
    fields: [
      "Ad ve soyad (pasaporttaki şekliyle)",
      "Doğum tarihi ve yeri",
      "Cinsiyet ve medeni durum",
      "Ulusal kimlik numarası (TC Kimlik No)",
      "Pasaport numarası, verilme ve bitiş tarihi",
    ],
    tip: "Bilgilerinizi pasaportunuzdaki şekliyle girin. Küçük bir harf hatası bile sorun yaratabilir.",
  },
  {
    step: "02",
    title: "İletişim Bilgileri (Contact Information)",
    fields: [
      "Ev adresi",
      "Telefon numarası (cep ve ev)",
      "E-posta adresi",
      "Son 5 yılda kullandığınız telefon numaraları",
    ],
    tip: "Aktif kullandığınız telefon ve e-posta adresinizi yazın. Konsolosluk sizinle bu bilgiler üzerinden iletişime geçebilir.",
  },
  {
    step: "03",
    title: "Seyahat Bilgileri (Travel Information)",
    fields: [
      "Seyahat amacı (vize türü)",
      "ABD'de kalmayı planladığınız süre",
      "ABD'de kalacağınız adres",
      "Seyahat masraflarını kim karşılayacak",
      "ABD'ye daha önce seyahat ettiniz mi",
    ],
    tip: "ABD'de kalacağınız adresi önceden öğrenerek forma girin. Otel veya ev sahibi adresi olabilir.",
  },
  {
    step: "04",
    title: "ABD İletişim Bilgileri (U.S. Contact)",
    fields: [
      "ABD'deki iletişim kişisi adı",
      "Kurum/şirket adı",
      "Adres ve telefon numarası",
      "Kişiyle ilişkiniz",
    ],
    tip: "J1 vize için sponsor kuruluşunuzun veya çalışacağınız şirketin bilgilerini girin.",
  },
  {
    step: "05",
    title: "Aile Bilgileri (Family Information)",
    fields: [
      "Anne ve baba adı, doğum tarihi",
      "ABD'de yakınınız var mı",
      "Eş bilgileri (evliyseniz)",
    ],
    tip: "ABD'de akrabanız varsa doğru bildirin. Konsolosluk kayıtları kontrol edebilir.",
  },
  {
    step: "06",
    title: "Eğitim ve İş Bilgileri (Education & Work)",
    fields: [
      "Eğitim geçmişi (üniversite, lise)",
      "Mevcut iş yeri ve görev",
      "Önceki iş yerleri",
      "Aylık gelir",
    ],
    tip: "Son iş yeriniz ve eğitim bilgilerinizi detaylı girin. Stajyer iseniz üniversite bilgileriniz önemlidir.",
  },
  {
    step: "07",
    title: "Güvenlik Soruları (Security Questions)",
    fields: [
      "Bulaşıcı hastalık var mı",
      "Tutuklanma veya mahkumiyet var mı",
      "Daha önce vize reddedildi mi",
      "ABD'de sınır dışına çıkarıldınız mı",
    ],
    tip: "Tüm güvenlik sorularını dikkatli okuyun ve doğru cevap verin. Yanlış bilgi vize iptaline yol açabilir.",
  },
  {
    step: "08",
    title: "Fotoğraf Yükleme ve Onay",
    fields: [
      "Dijital fotoğraf yükleme (600x600 piksel, beyaz arkaplan)",
      "Formu inceleme ve onaylama",
      "Onay sayfasını yazdırma",
    ],
    tip: "Fotoğrafınız son 6 ay içerisinde çekilmiş olmalı. Gözlük takılmamalı, beyaz arkaplan kullanılmalı.",
  },
];

const commonMistakes = [
  {
    mistake: "Pasaport bilgilerini yanlış girmek",
    solution: "Formu doldurmadan önce pasaportunuzu yanınıza alın. Ad, soyad ve numara birebir aynı olmalı.",
  },
  {
    mistake: "Formu kaydetmeden tarayıcıyı kapatmak",
    solution: "Her sayfa geçişinde form otomatik kaydedilir ancak Application ID numaranızı mutlaka not alın.",
  },
  {
    mistake: "Eski veya uyumsuz fotoğraf yüklemek",
    solution: "600x600 piksel, beyaz arkaplan, son 6 ayda çekilmiş, gözlüksüz fotoğraf kullanın.",
  },
  {
    mistake: "Güvenlik sorularında yanlış bilgi vermek",
    solution: "Tüm evet/hayır sorularını dikkatli okuyun. Önceki vize retleri dahil her şeyi doğru bildirin.",
  },
  {
    mistake: "Seyahat geçmişini eksik bırakmak",
    solution: "Son 5 yılda ziyaret ettiğiniz tüm ülkeleri listeleyin. Pasaport damgalarınızı kontrol edin.",
  },
  {
    mistake: "İletişim bilgilerini güncellememek",
    solution: "Aktif telefon ve e-posta adresinizi yazın. Konsolosluk bu bilgiler üzerinden ulaşabilir.",
  },
  {
    mistake: "Onay sayfasını yazdırmamak",
    solution: "DS-160 onay sayfası mülakat için zorunlu. Hem dijital hem basılı kopyasını saklayın.",
  },
];

const requiredInfo = [
  "Geçerli pasaport",
  "TC Kimlik numarası",
  "Ev ve iş adresi (Türkiye)",
  "ABD'de kalacağınız adres",
  "ABD'deki iletişim kişisi bilgileri",
  "Son 5 yılda ziyaret edilen ülkeler",
  "Eğitim geçmişi (okul adı, tarih, bölüm)",
  "İş geçmişi (şirket adı, görev, tarih)",
  "Anne-baba adı ve doğum tarihi",
  "Dijital fotoğraf (600x600px, beyaz arkaplan)",
  "Önceki ABD vizeleri (varsa)",
  "Sosyal medya hesapları (kullanıcı adları)",
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
              DS-160 Formu Nasıl Doldurulur?
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              DS-160, ABD vize başvurusu için doldurulması zorunlu olan online
              formudur. Bu rehberde formu adım adım nasıl dolduracağınızı,
              yapılan yaygın hataları ve hazırlamanız gereken bilgileri
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
                  DS-160 (Online Nonimmigrant Visa Application), ABD&apos;ye seyahat
                  etmek isteyen tüm göçü-olmayan vize başvuru sahiplerinin
                  doldurmuş olması gereken online formudur. Form, ABD Dışişleri
                  Bakanlığı tarafından yönetilir ve ceac.state.gov adresinden
                  erişilebilir.
                </p>
                <p>
                  Form tamamen İngilizce doldurulur ve kişisel bilgileriniz,
                  seyahat amacınız, eğitim ve iş geçmişiniz, aile bilgileriniz
                  ile güvenlik sorularını içerir. Formun tamamlanması ortalama
                  45-90 dakika sürer.
                </p>
                <p>
                  DS-160 formu tamamlandığında bir onay sayfası oluşur. Bu onay
                  sayfasının barkodu mülakatınızda taranacaktır, bu yüzden onay
                  sayfasını mutlaka yazdırmanız gerekir.
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
                Başlamadan Önce
              </p>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                Hazırlamanız Gereken Bilgiler
              </h2>
              <p className="text-slate leading-relaxed mb-10">
                DS-160 formunu doldurmaya başlamadan önce aşağıdaki bilgi ve
                belgeleri yanınızda bulundurun:
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
                Adım Adım
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                DS-160 Formu Doldurma Adımları
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
                Yapılan Yaygın Hatalar
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
                    q: "DS-160 formunu doldurmak ne kadar sürer?",
                    a: "Ortalama 45-90 dakika. Tüm bilgilerinizi önceden hazırlarsanız daha hızlı tamamlayabilirsiniz.",
                  },
                  {
                    q: "Form kaydedilir mi?",
                    a: "Her sayfa geçişinde otomatik kaydedilir. Application ID numaranızla 30 gün içerisinde devam edebilirsiniz.",
                  },
                  {
                    q: "DS-160 ücretsiz mi?",
                    a: "Evet, DS-160 formunun kendisi ücretsizdir. Ancak vize başvuru ücreti ($185 MRV fee) ayrı ödenir.",
                  },
                  {
                    q: "Hangi tarayıcıyı kullanmalıyım?",
                    a: "Chrome veya Firefox en iyi sonucu verir. Internet Explorer artık desteklenmemektedir.",
                  },
                  {
                    q: "Fotoğraf özellikleri nelerdir?",
                    a: "600x600 piksel, JPEG formatı, beyaz arkaplan, son 6 ayda çekilmiş, gözlüksüz, maksimum 240KB.",
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
                DS-160 Doldurmada Yardım mı Lazım?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Danışmanlarımız DS-160 formunuzu birlikte doldurarak hata
                yapmanızı önler ve vize onay şansınızı artırır.
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
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">İlgili Rehberler</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize nedir, nasıl alınır, tüm detaylar" },
                { href: "/j1-vize-mulakat-sorulari", title: "Mülakat Soruları", desc: "En çok sorulan J1 vize mülakat soruları" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Başvurusu", desc: "ABD vize türleri ve genel başvuru rehberi" },
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
