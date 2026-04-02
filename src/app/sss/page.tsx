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
    question: "J1 staj programi nedir?",
    answer:
      "J1 staj programi, ABD Disisleri Bakanligi tarafindan duzenlenen kulturel degisim programi kapsaminda Turk universite ogrencileri ve yeni mezunlarina ABDde maasli staj yapma imkani sunan bir programdir. Program 12-18 ay sureli olup, katilimcilar Amerikan sirketlerinde kendi mesleki alanlarinda calisma firsati elde eder. Program sonunda Turkiyeye donerek edindikleri deneyimi kariyerlerine yansitirlar.",
  },
  {
    category: "Program",
    question: "Programa kimler basvurabilir?",
    answer:
      "Universitye son sinif ogrencileri, yeni mezunlar (mezuniyetten sonra en fazla 12 ay gecmis olmali) ve 1-5 yil is deneyimine sahip profesyoneller basvurabilir. En az orta duzey Ingilizce bilgisi (B1-B2 seviye) gereklidir. Universite ogrencileri icin Intern, 1+ yil deneyimli profesyoneller icin Trainee kategorisi gecerlidir.",
  },
  {
    category: "Program",
    question: "Program ne kadar surer?",
    answer:
      "Intern (stajyer) kategorisi icin program suresi 12 aya kadar, Trainee (egitmen) kategorisi icin 18 aya kadardir. Kesin sure, calisacaginiz sirket ve DS-2019 belgesinde belirtilen tarihlere gore belirlenir. Cogu katilimci 6-12 ay arasi staj yapar.",
  },
  {
    category: "Program",
    question: "Hangi sektorlerde staj yapabilirim?",
    answer:
      "Bilisim/yazilim, finans, pazarlama, muhendislik, otelcilik/turizm, medya/iletisim, uluslararasi ticaret, insan kaynaklari, mimarlik ve daha pek cok sektorde staj imkani mevcuttur. Onemli olan, staj alaninin universite egitimiziniz veya is deneyiminizle uyumlu olmasidir.",
  },
  {
    category: "Program",
    question: "Staj sirasinda maas alacak miyim?",
    answer:
      "Evet, J1 programi kapsaminda yapilan stajlar maaslidir. Maas miktari sektore, sehre ve sirket politikasina gore degisir. Stajyerler genellikle saatlik $15-25 arasi ucret alir. Bazi sektorlerde (ozellikle finans ve teknoloji) bu rakam daha yuksek olabilir. Maas detaylari DS-7002 (Training Plan) belgesinde belirtilir.",
  },
  // Vize
  {
    category: "Vize",
    question: "J1 vize basvuru sureci nasil isler?",
    answer:
      "Suecin asamalari: 1) Danismanlik gorusmesi ve uygunluk degerlendirmesi, 2) Is eslestirme ve sirket mulakaati, 3) DS-2019 belgesinin hazirlanmasi, 4) SEVIS ucretinin odenmesi ($220), 5) DS-160 formunun doldurulmasi, 6) MRV ucretinin odenmesi ($185), 7) Konsolosluk mulakat randevusu, 8) Mulakat ve vize onay. Tum suecin tamamlanmasi ortalama 2-4 ay surer.",
  },
  {
    category: "Vize",
    question: "Vize reddedilme ihtimali var mi?",
    answer:
      "Iyi hazirlanan adaylar icin vize red orani oldukca dusuktur. Bizim katilimcilarimizda vize onay orani %98dir. Red nedenleri genellikle yetersiz finansal kanit, Turkiyeye donus niyetinin kanitlanamamasi veya eksik belgeler olabilir. Biz sizi mulakat oncesi kapsamli hazirlayarak riskleri en aza indiriyoruz.",
  },
  {
    category: "Vize",
    question: "Vize mulakati nasil gecer?",
    answer:
      "Mulakat Istanbul veya Ankara ABD Konsolosluklarinda yuz yuze yapilir. Genellikle 2-5 dakika surer. Konsolosluk gorevlisi size programiniz, kariyer planlariniz ve Turkiyeye donus niyetiniz hakkinda sorular sorar. Sorulara kisa, net ve tutarli cevaplar vermeniz onemlidir. Mulakat oncesi simulasyon calismasi yapmanizi siddetle tavsiye ederiz.",
  },
  {
    category: "Vize",
    question: "DS-2019 belgesi nedir?",
    answer:
      "DS-2019 (Certificate of Eligibility), ABD Disisleri Bakanligi onayli sponsor kurulus tarafindan duzenlenen ve J1 vize basvurunuzun temel belgesidir. Programinizin turunu, suresini, finansal bilgileri ve sponsor kurulusun bilgilerini icerir. Bu belge olmadan J1 vize basvurusu yapilamaz. Is eslestirmeniz tamamlandiktan sonra sponsor kurulus tarafindan hazirlanir.",
  },
  {
    category: "Vize",
    question: "2 yillik eve donus kurali (Two-Year Home Residency) nedir?",
    answer:
      "Bazi J1 vize sahipleri, program sonrasinda en az 2 yil kendi ulkelerinde yasamak zorundadir. Bu kural, devlet sponsorlu programlar veya ABDde az bulunan meslekler icin gecerlidir. Ozel sektor stajlari icin genellikle bu kural uygulanmaz, ancak DS-2019 belgenizde bu durum belirtilir. Eger kural size uygulaniyorsa, waiver (muafiyet) basvurusu yapilabilir.",
  },
  // Ucret
  {
    category: "Ucret",
    question: "Program toplam ne kadara mal olur?",
    answer:
      "Toplam maliyet; danismanlik ucreti, sponsor kurulus ucreti, SEVIS ucreti ($220), vize basvuru ucreti ($185), ucak bileti ve ilk ay yasam masrafindan olusur. Detayli ucret tablosu icin ucretler sayfamizi ziyaret edin. Taksit imkani mevcuttur. Staja basladiginizda maas almaniz nedeniyle bu yatirim kendini hizla karsilar.",
  },
  {
    category: "Ucret",
    question: "Taksit imkani var mi?",
    answer:
      "Evet, program ucretini taksitlendirebilirsiniz. Basvuru asamasinda kapora odenerek suec baslatilir, kalan tutar aylara yayilir. Kredi karti taksitlendirme veya havale ile taksit secenekleri mevcuttur. Detayli odeme plani icin danismanlarimizla gorusebilirsiniz.",
  },
  {
    category: "Ucret",
    question: "Gizli maliyet var mi?",
    answer:
      "Hayir. Tum ucretler basvuru oncesinde seffaf sekilde paylasilir. Danismanlik ucreti, sponsor kurulus ucreti, resmi ucretler (SEVIS, MRV) ve varsa ek hizmet ucretleri net olarak belirtilir. Sozlesme asamasinda tum maliyetler yaziili olarak taahhut edilir. Beklenmedik ek ucret cikmaz.",
  },
  {
    category: "Ucret",
    question: "Vize reddedilirse ucretim iade edilir mi?",
    answer:
      "Vize reddedilmesi durumunda, danismanlik ucretimizin buyuk bolumu iade edilir. SEVIS ve MRV gibi resmi ucretler ABD hukumeti tarafindan iade edilmez. Iade politikamizin detaylari sozlesmenizde acikca belirtilir. %98 vize onay oranmiz ile risk minimumdur.",
  },
  // Yasam
  {
    category: "Yasam",
    question: "ABDde nerede kalacagim?",
    answer:
      "Konaklama seceenekleri sehre ve is yerine gore degisir. Bazi sirketler konaklama destegi veya yardimi saglar. Genel olarak katilimcilar ev arkadaslariyla paylasimli daire kiralama, Airbnb veya stajyer konaklama programlarini tercih eder. Biz size konaklama secenekleri konusunda rehberlik yapyoruz ve onceki katilimcilarimizin deneyimlerini paylasyoruz.",
  },
  {
    category: "Yasam",
    question: "Saglik sigortam olacak mi?",
    answer:
      "Evet, J1 vize programi kapsaminda saglik sigortasi zorunludur. Sponsor kurulus tarafindan minimum teminati karsilayan bir saglik sigortasi saglanir. Sigorta genellikle doktor ziyareti, acil servis, hastane yatisi ve reçeteli ilac masraflarini kapsar. Ekstra teminat icin ek sigorta yaptirabilirsiniz.",
  },
  {
    category: "Yasam",
    question: "ABDde banka hesabi acabilir miyim?",
    answer:
      "Evet, J1 vize sahipleri ABDde banka hesabi acabilir. Bunun icin pasaportunuz, DS-2019 belgeniz ve Social Security Number (SSN) gereklidir. SSN almak icin isverenizle birlikte Social Security Administration ofisine basvurursunuz. Chase, Bank of America, Wells Fargo gibi buyuk bankalar J1 vize sahiplerine hesap acar.",
  },
  {
    category: "Yasam",
    question: "Ehliyet alabilir miyim?",
    answer:
      "Evet, cogu eyalette J1 vize sahipleri yerel ehliyet alabilir. Gereksinimler eyaletten eyalete degisir. Genellikle pasaport, DS-2019, SSN ve ikametgah belgesi istenir. Turkiye ehliyetinizi de bazi eyaletlerde kullanabilirsiniz, ancak uzun sureli kalislarda yerel ehliyet almaniz tavsiye edilir.",
  },
  {
    category: "Yasam",
    question: "Staj bitiminde ABDde kalabilir miyim?",
    answer:
      "J1 programi bitiminde 30 gunluk grace period (ek sure) verilir. Bu sure icinde ABDde seyahat edebilirsiniz ancak calisamazsiniz. Bu 30 gunun sonunda ulkenize donmeniz gerekmektedir. ABDde kalmak istiyorsaniz, program bitmeden farkli bir vize turune gecis icin basvuru yapmaniz gerekir ki bu oldukca karmasik bir surecdir.",
  },
];

const categories = ["Tumu", "Program", "Vize", "Ucret", "Yasam"];

export default function SSS() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("Tumu");

  const filteredFAQs =
    activeCategory === "Tumu"
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
              Yardim Merkezi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Sikca Sorulan Sorular
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD staj programi, J1 vize sureci, ucretler ve ABDde yasam
              hakkinda en cok merak edilen sorularin cevaplarini burada
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
                <p className="text-slate">Bu kategoride soru bulunmamaktadir.</p>
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
                Sorunuzun Cevabini Bulamdiniz mi?
              </h2>
              <p className="text-slate leading-relaxed mb-8 max-w-xl mx-auto">
                Uzman danismanlarimiz tum sorularinizi yanintlamak icin hazir.
                Bize dilediginiz kanaldan ulasabilirsiniz.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-navy/90 transition-colors"
                >
                  Bize Ulasin
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                </Link>
                <Link
                  href="https://wa.me/905325550000"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-navy px-8 py-4 rounded-xl font-semibold border border-navy/15 hover:border-navy/30 hover:shadow-lg transition-all"
                >
                  WhatsApp ile Yazin
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
                ABD Staj Maceraniza Baslayin
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Ucretsiz danismanlik gorusmemizde tum sorularinizi
                yanitlayalim ve size ozel programinizi olusturalim.
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
            <h2 className="text-2xl font-bold text-navy mb-8">Ilgili Sayfalar</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { href: "/staj-programi", title: "Staj Programi", desc: "Program detaylari, avantajlar ve sektorler" },
                { href: "/ucretler", title: "Ucretler", desc: "Program ucretleri ve odeme secenekleri" },
                { href: "/j1-vize", title: "J1 Vize Rehberi", desc: "J1 vize sureci ve basvuru adimlari" },
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
