"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqItems: FAQItem[] = [
  // Program
  {
    category: "Program",
    question: "J1 staj programı nedir?",
    answer:
      "J1 staj programı, ABD Dışişleri Bakanlığı tarafından düzenlenen kültürel değişim programı kapsamında Türk üniversite öğrencileri ve yeni mezunlarına ABD'de maaşlı staj yapma imkanı sunan bir programdır. Program 12-18 ay süreli olup, katılımcılar Amerikan şirketlerinde kendi mesleki alanlarında çalışma fırsatı elde eder. Program sonunda Türkiye'ye dönerek edindikleri deneyimi kariyerlerine yansıtırlar.",
  },
  {
    category: "Program",
    question: "Programa kimler başvurabilir?",
    answer:
      "Üniversite son sınıf öğrencileri, yeni mezunlar (mezuniyetten sonra en fazla 12 ay geçmiş olmalı) ve 1-5 yıl iş deneyimine sahip profesyoneller başvurabilir. En az orta düzey İngilizce bilgisi (B1-B2 seviye) gereklidir. Üniversite öğrencileri için Intern, 1+ yıl deneyimli profesyoneller için Trainee kategorisi geçerlidir.",
  },
  {
    category: "Program",
    question: "Program ne kadar sürer?",
    answer:
      "Intern (stajyer) kategorisi için program süresi 12 aya kadar, Trainee (eğitmen) kategorisi için 18 aya kadardır. Kesin süre, çalışacağınız şirket ve DS-2019 belgesinde belirtilen tarihlere göre belirlenir. Çoğu katılımcı 6-12 ay arası staj yapar.",
  },
  {
    category: "Program",
    question: "Hangi sektörlerde staj yapabilirim?",
    answer:
      "Bilişim/yazılım, finans, pazarlama, mühendislik, otelcilik/turizm, medya/iletişim, uluslararası ticaret, insan kaynakları, mimarlık ve daha pek çok sektörde staj imkanı mevcuttur. Önemli olan, staj alanının üniversite eğitiminiz veya iş deneyiminizle uyumlu olmasıdır.",
  },
  {
    category: "Program",
    question: "Staj sırasında maaş alacak mıyım?",
    answer:
      "Evet, J1 programı kapsamında yapılan stajlar maaşlıdır. Maaş miktarı sektöre, şehre ve şirket politikasına göre değişir. Stajyerler genellikle saatlik $15-25 arası ücret alır. Bazı sektörlerde (özellikle finans ve teknoloji) bu rakam daha yüksek olabilir. Maaş detayları DS-7002 (Training Plan) belgesinde belirtilir.",
  },
  // Vize
  {
    category: "Vize",
    question: "J1 vize başvuru süreci nasıl işler?",
    answer:
      "Sürecin aşamaları: 1) Danışmanlık görüşmesi ve uygunluk değerlendirmesi, 2) İş eşleştirme ve şirket mülakatı, 3) DS-2019 belgesinin hazırlanması, 4) SEVIS ücretinin ödenmesi ($220), 5) DS-160 formunun doldurulması, 6) MRV ücretinin ödenmesi ($185), 7) Konsolosluk mülakat randevusu, 8) Mülakat ve vize onayı. Tüm sürecin tamamlanması ortalama 2-4 ay sürer.",
  },
  {
    category: "Vize",
    question: "Vize reddedilme ihtimali var mı?",
    answer:
      "İyi hazırlanan adaylar için vize red oranı oldukça düşüktür. Bizim katılımcılarımızda vize onay oranı %98'dir. Red nedenleri genellikle yetersiz finansal kanıt, Türkiye'ye dönüş niyetinin kanıtlanamaması veya eksik belgeler olabilir. Biz sizi mülakat öncesi kapsamlı hazırlayarak riskleri en aza indiriyoruz.",
  },
  {
    category: "Vize",
    question: "Vize mülakatı nasıl geçer?",
    answer:
      "Mülakat İstanbul veya Ankara ABD Konsolosluklarında yüz yüze yapılır. Genellikle 2-5 dakika sürer. Konsolosluk görevlisi size programınız, kariyer planlarınız ve Türkiye'ye dönüş niyetiniz hakkında sorular sorar. Sorulara kısa, net ve tutarlı cevaplar vermeniz önemlidir. Mülakat öncesi simülasyon çalışması yapmanızı şiddetle tavsiye ederiz.",
  },
  {
    category: "Vize",
    question: "DS-2019 belgesi nedir?",
    answer:
      "DS-2019 (Certificate of Eligibility), ABD Dışişleri Bakanlığı onaylı sponsor kuruluş tarafından düzenlenen ve J1 vize başvurunuzun temel belgesidir. Programınızın türünü, süresini, finansal bilgileri ve sponsor kuruluşun bilgilerini içerir. Bu belge olmadan J1 vize başvurusu yapılamaz. İş eşleştirmeniz tamamlandıktan sonra sponsor kuruluş tarafından hazırlanır.",
  },
  {
    category: "Vize",
    question: "2 yıllık eve dönüş kuralı (Two-Year Home Residency) nedir?",
    answer:
      "Bazı J1 vize sahipleri, program sonrasında en az 2 yıl kendi ülkelerinde yaşamak zorundadır. Bu kural, devlet sponsorlu programlar veya ABD'de az bulunan meslekler için geçerlidir. Özel sektör stajları için genellikle bu kural uygulanmaz, ancak DS-2019 belgenizde bu durum belirtilir. Eğer kural size uygulanıyorsa, waiver (muafiyet) başvurusu yapılabilir.",
  },
  // Ücret
  {
    category: "Ücret",
    question: "Program toplam ne kadara mal olur?",
    answer:
      "Toplam maliyet; danışmanlık ücreti, sponsor kuruluş ücreti, SEVIS ücreti ($220), vize başvuru ücreti ($185), uçak bileti ve ilk ay yaşam masrafından oluşur. Detaylı ücret tablosu için ücretler sayfamızı ziyaret edin. Taksit imkanı mevcuttur. Staja başladığınızda maaş almanız nedeniyle bu yatırım kendini hızla karşılar.",
  },
  {
    category: "Ücret",
    question: "Taksit imkanı var mı?",
    answer:
      "Evet, program ücretini taksitlendirebilirsiniz. Başvuru aşamasında kapora ödenerek süreç başlatılır, kalan tutar aylara yayılır. Kredi kartı taksitlendirme veya havale ile taksit seçenekleri mevcuttur. Detaylı ödeme planı için danışmanlarımızla görüşebilirsiniz.",
  },
  {
    category: "Ücret",
    question: "Gizli maliyet var mı?",
    answer:
      "Hayır. Tüm ücretler başvuru öncesinde şeffaf şekilde paylaşılır. Danışmanlık ücreti, sponsor kuruluş ücreti, resmi ücretler (SEVIS, MRV) ve varsa ek hizmet ücretleri net olarak belirtilir. Sözleşme aşamasında tüm maliyetler yazılı olarak taahhüt edilir. Beklenmedik ek ücret çıkmaz.",
  },
  {
    category: "Ücret",
    question: "Vize reddedilirse ücretim iade edilir mi?",
    answer:
      "Vize reddedilmesi durumunda, danışmanlık ücretimizin büyük bölümü iade edilir. SEVIS ve MRV gibi resmi ücretler ABD hükümeti tarafından iade edilmez. İade politikamızın detayları sözleşmenizde açıkça belirtilir. %98 vize onay oranımız ile risk minimumdur.",
  },
  // Yaşam
  {
    category: "Yaşam",
    question: "ABD'de nerede kalacağım?",
    answer:
      "Konaklama seçenekleri şehre ve iş yerine göre değişir. Bazı şirketler konaklama desteği veya yardımı sağlar. Genel olarak katılımcılar ev arkadaşlarıyla paylaşımlı daire kiralama, Airbnb veya stajyer konaklama programlarını tercih eder. Biz size konaklama seçenekleri konusunda rehberlik yapıyoruz ve önceki katılımcılarımızın deneyimlerini paylaşıyoruz.",
  },
  {
    category: "Yaşam",
    question: "Sağlık sigortam olacak mı?",
    answer:
      "Evet, J1 vize programı kapsamında sağlık sigortası zorunludur. Sponsor kuruluş tarafından minimum teminatı karşılayan bir sağlık sigortası sağlanır. Sigorta genellikle doktor ziyareti, acil servis, hastane yatışı ve reçeteli ilaç masraflarını kapsar. Ekstra teminat için ek sigorta yaptırabilirsiniz.",
  },
  {
    category: "Yaşam",
    question: "ABD'de banka hesabı açabilir miyim?",
    answer:
      "Evet, J1 vize sahipleri ABD'de banka hesabı açabilir. Bunun için pasaportunuz, DS-2019 belgeniz ve Social Security Number (SSN) gereklidir. SSN almak için işverenizle birlikte Social Security Administration ofisine başvurursunuz. Chase, Bank of America, Wells Fargo gibi büyük bankalar J1 vize sahiplerine hesap açar.",
  },
  {
    category: "Yaşam",
    question: "Ehliyet alabilir miyim?",
    answer:
      "Evet, çoğu eyalette J1 vize sahipleri yerel ehliyet alabilir. Gereksinimler eyaletten eyalete değişir. Genellikle pasaport, DS-2019, SSN ve ikametgah belgesi istenir. Türkiye ehliyetinizi de bazı eyaletlerde kullanabilirsiniz, ancak uzun süreli kalışlarda yerel ehliyet almanız tavsiye edilir.",
  },
  {
    category: "Yaşam",
    question: "Staj bitiminde ABD'de kalabilir miyim?",
    answer:
      "J1 programı bitiminde 30 günlük grace period (ek süre) verilir. Bu süre içinde ABD'de seyahat edebilirsiniz ancak çalışamazsınız. Bu 30 günün sonunda ülkenize dönmeniz gerekmektedir. ABD'de kalmak istiyorsanız, program bitmeden farklı bir vize türüne geçiş için başvuru yapmanız gerekir ki bu oldukça karmaşık bir süreçtir.",
  },
];

const categories = ["Tümü", "Program", "Vize", "Ücret", "Yaşam"];

export default function SSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredFAQs =
    activeCategory === "Tümü"
      ? faqItems
      : faqItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Yardım Merkezi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD staj programı, J1 vize süreci, ücretler ve ABD&apos;de yaşam
              hakkında en çok merak edilen soruların cevaplarını burada
              bulabilirsiniz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-sand/30 border-b border-navy/5 sticky top-0 z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setOpenIndex(null);
                  }}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-navy text-white"
                      : "bg-white text-navy border border-navy/10 hover:border-navy/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <div className="space-y-3">
              {filteredFAQs.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <ScrollReveal key={`${activeCategory}-${i}`} delay={i * 0.03}>
                    <div className="rounded-2xl border border-navy/5 bg-white overflow-hidden hover:border-navy/10 transition-all duration-300">
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        className="w-full flex items-start justify-between gap-4 p-6 text-left"
                      >
                        <div className="flex items-start gap-4">
                          <span className="px-2 py-1 bg-crimson/10 text-crimson text-[10px] font-bold rounded-md uppercase tracking-wide shrink-0 mt-0.5">
                            {item.category}
                          </span>
                          <h3 className="text-sm lg:text-base font-bold text-navy leading-snug">
                            {item.question}
                          </h3>
                        </div>
                        <span
                          className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isOpen ? "bg-navy text-white rotate-45" : "bg-navy/5 text-navy"
                          }`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="pl-[52px]">
                            <p className="text-sm text-slate leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-16">
                <p className="text-slate">Bu kategoride soru bulunmamaktadır.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                Sorunuzun Cevabını Bulamadınız mı?
              </h2>
              <p className="text-slate leading-relaxed mb-8 max-w-xl mx-auto">
                Uzman danışmanlarımız tüm sorularınızı yanıtlamak için hazır.
                Bize dilediğiniz kanaldan ulaşabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy/90 transition-colors"
                >
                  Bize Ulaşın
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </Link>
                <Link
                  href="https://wa.me/905325550000"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-navy px-8 py-4 rounded-xl font-semibold border border-navy/15 hover:border-navy/30 hover:shadow-lg transition-all"
                >
                  WhatsApp ile Yazın
                </Link>
              </div>
            </div>
          </ScrollReveal>
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
                Ücretsiz danışmanlık görüşmemizde tüm sorularınızı
                yanıtlayalım ve size özel programınızı oluşturalım.
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
            <h2 className="text-2xl font-bold text-navy mb-8">İlgili Sayfalar</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/staj-programi", title: "Staj Programı", desc: "Program detayları, avantajlar ve sektörler" },
                { href: "/ucretler", title: "Ücretler", desc: "Program ücretleri ve ödeme seçenekleri" },
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize süreci ve başvuru adımları" },
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
