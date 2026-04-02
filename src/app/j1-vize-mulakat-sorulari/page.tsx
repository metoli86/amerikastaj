"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const interviewQuestions = [
  {
    question: "Why do you want to go to the United States?",
    answer:
      "Bu soruya ABDde mesleki deneyim kazanmak, kulturel degisim yasamak ve kariyerinizi gelistirmek istediginizi vurgulayarak cevap verin. Belirli bir sektorde uzmanlasmak istediginizi ve ABDnin bu alanda dunya lideri oldugunu belirtin.",
    tip: "Genel cevaplardan kacinin. Kendi mesleginize ozgu nedenler sunun.",
  },
  {
    question: "What will you do in the United States?",
    answer:
      "Staj programinizin detaylarini aciklayiniz. Hangi sirkette, hangi departmanda, ne tur gorevler yapacaginizi net olarak anlatiniz. DS-7002 Training Plan belgenizle uyumlu cevaplar verin.",
    tip: "Is taniminizi ezbere bilin ve kendi cumlelelerinizle ifade edin.",
  },
  {
    question: "Who is your sponsor organization?",
    answer:
      "Sponsor kurulusunuzun adini, ne is yaptigini ve sizi nasil destekleyecegini aciklayiniz. Sponsor kurulusun ABD Disisleri Bakanligi onayli oldugunu belirtin.",
    tip: "Sponsor kurulus hakkinda temel bilgileri arin.",
  },
  {
    question: "Where will you work and what is the company about?",
    answer:
      "Calisacaginiz sirketin adini, sektorunu, buyuklugunu ve ne yaptigini anlatiniz. Sirketin web sitesini incelediginizi ve hakkinda bilgi sahibi oldugunuzu gosterin.",
    tip: "Sirketin web sitesini ziyaret edin ve temel bilgileri not alin.",
  },
  {
    question: "How did you find this internship?",
    answer:
      "Staj programina nasil basvurdugunuzu ve sureci anlatiniz. Danismanlik firmaniz varsa ondan bahsedin. Programi arastirirken hangi kaynaklari kullandiginizi belirtin.",
    tip: "Surecin dogal ve mantikli bir hikayesini olusuturun.",
  },
  {
    question: "What is your educational background?",
    answer:
      "Universite adinizi, bolumunuzu, kacinci sinif veya mezun oldugunuzu belirtiniz. Staj alani ile egitim alaninizdaki baglaniyi vurgulayiniz.",
    tip: "Egitim ve staj alani arasindaki iliskiyi net kurun.",
  },
  {
    question: "How will you fund your stay in the US?",
    answer:
      "Staj programindan alacaginiz maasi, banka hesabinizdaki birikimi ve ailenizden destek alip almadiginizi aciklayiniz. Finansal olarak yeterli oldugunuzu gosterin.",
    tip: "Banka dokumleriniz guncellenmis ve yeterli bakiyeyi gostermelidir.",
  },
  {
    question: "Will you return to Turkey after the program?",
    answer:
      "ABDdeki programiniz bittikten sonra Turkiyeye donecginizi net olarak belirtiniz. Turkiyede sizi bekleyen is firsatlari, aile baglari veya kariyer planlari gibi somut donis nedenleri sunun.",
    tip: "Bu en kritik soru. Turkiyeye donis niyetinizi kanitlayacak somut baglantinizi aciklayin.",
  },
  {
    question: "What are your career plans after the program?",
    answer:
      "ABDde edindiginiz tecrube ile Turkiyede kariyerinizi nasil ilerletmeyi planladiginizi anlatiniz. Uzun vadeli kariyer hedefinizi ve bu staijin bu hedefe nasil katkida bulunacagini aciklayiniz.",
    tip: "Kariyer planinizi Turkiye merkezli anlatin.",
  },
  {
    question: "Do you have any relatives in the US?",
    answer:
      "Durust olun. ABDde akrabaniz varsa belirtin ama programiniz bittikten sonra donecginizi tekrar vurgulayiniz. Akrabaniz yoksa bunu net olarak belirtin.",
    tip: "Asla yalan soylemeyin. Konsolosluk kayitlari kontrol edebilir.",
  },
  {
    question: "Have you been to the US before?",
    answer:
      "Daha once ABDye gittiyseniz, ne zaman, ne amacla gittiginizi ve zamaninda dondugunuzu belirtin. Ilk kez gidiyorsaniz bunu soyleyin ve heyecaninizi ifade edin.",
    tip: "Onceki seyahatlerinizde vize kurallarini ihlal etmediginizi gosterin.",
  },
  {
    question: "How much will you be paid?",
    answer:
      "DS-7002 formunuzda belirtilen maas miktarini soyleyiniz. Aylik veya saatlik ucreti bilin. Bu gelirin yasam masraflarinizi karsilamaya yeterli oldugunu belirtin.",
    tip: "Maas bilginiz DS-7002 ile birebir uyumlu olmalidir.",
  },
  {
    question: "Where will you live in the US?",
    answer:
      "Kalacaginiz sehri ve konaklama planinizi anlatiniz. Sirketiniz konaklama sagliyorsa belirtin, degilse nasil bir yer arayacaginizi aciklayiniz.",
    tip: "En azindan sehir ve genel bir konaklama plani hazirlayin.",
  },
  {
    question: "What do you know about J1 visa regulations?",
    answer:
      "J1 vizesinin kulturel degisim amaciyla verilen gecici bir vize oldugunu, belirli bir sure icin gecerli oldugunu ve program bitiminde ulkenize donmeniz gerektigini belirtiniz.",
    tip: "2 yillik eve donus kurali (two-year home residency requirement) hakkinda bilgi sahibi olun.",
  },
  {
    question: "What skills do you hope to gain from this program?",
    answer:
      "Programdan kazanmayi hedeflediginiz somut becerileri siralayin. Teknik beceriler, liderlik deneyimi, uluslararasi is kulturu bilgisi gibi konulara deginiz. Bunlarin Turkiyeye dondugdugunde kariyerinize nasil katki saglayacagini aciklayiniz.",
    tip: "Genel ifadeler yerine mesleginize ozgu beceriler soyleyiniz.",
  },
  {
    question: "Do you have health insurance for your stay?",
    answer:
      "J1 vize programi kapsaminda saglik sigortanizin sponsor kurulus tarafindan saglandigini veya kendinizin temin edecegnizi belirtiniz. Minimum teminat gereksinimlerini bildiginizi gosterin.",
    tip: "J1 vize icin saglik sigortasi zorunludur. Detaylarini bilin.",
  },
];

const preparationTips = [
  {
    title: "Belgeleri Hazirlayin",
    description:
      "Tum belgeleri bir dosya halinde duzenli sekilde hazirlayin. Pasaport, DS-2019, DS-160 onay sayfasi, SEVIS makbuzu, banka dokumleri, ogrenci belgesi ve transkript mutlaka yaninda olmalidir.",
  },
  {
    title: "Ingilizce Pratik Yapin",
    description:
      "Mulakat tamamen Ingilizce yapilir. Gunluk konusma pratiginizi artirin, ozellikle kendinizi tanitma ve kariyer planlarinizi anlatma konusunda hazirlikli olun. Dogal ve akici konusmaniz onemlidir.",
  },
  {
    title: "DS-7002 Formunu Ezbere Bilin",
    description:
      "Training/Internship Placement Plan (DS-7002) formu stajinizin detaylarini icerir. Is taniminizi, gorevlerinizi ve egitim hedefinizi kendi sozcuklerinizle anlatabilecek sekilde hazirlanin.",
  },
  {
    title: "Turkiyeye Donus Baglantisi",
    description:
      "Konsolosluk en cok donus niyetinizi sorgular. Turkiyedeki aile baglari, is firsatlari, devam eden egitim veya mulk gibi somut donis nedenlerinizi hazirlayin.",
  },
  {
    title: "Kisa ve Net Cevaplar Verin",
    description:
      "Konsolosluk mulakatlari genellikle 2-5 dakika surer. Sorulara kisa, net ve ozguvenli cevaplar verin. Gereksiz ayrintilara girmeyin. Sorulan sorunun disina cikmayin.",
  },
  {
    title: "Giyim ve Gorunum",
    description:
      "Is gorusmesine gider gibi resmi veya yari resmi kiyafet tercih edin. Temiz ve duzenli bir gorunum profesyonel izlenim birakir.",
  },
  {
    title: "Erken Gidin",
    description:
      "Randevunuzdan en az 30 dakika once konsoloslugun onunde olun. Gecikme halinde randevunuz iptal edilebilir. Telefon, elektronik cihaz ve buyuk cantalar konsolosluga alinamaz.",
  },
  {
    title: "Rahat Olun",
    description:
      "Gercekleri soylediginiz ve iyi hazirlandiginiz surece endiselenecek bir sey yok. Konsolosluk gorevlileri samimi ve tutarli cevaplar arar. Gercekdisi hikayeler uydurmak en buyuk hatadir.",
  },
];

export default function J1VizeMulakatSorulari() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Mulakat Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              J1 Vize Mulakat Sorulari
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD konsolosluklarinda J1 vize mulakatinda en sik sorulan sorular,
              ornek cevaplar ve basarili bir mulakat icin ipuclari. Iyi
              hazirlanan adaylar icin vize onay orani oldukca yuksektir.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                J1 Vize Mulakati Nasil Gecer?
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  J1 vize mulakati, ABD konsolosluklarinda (Istanbul veya Ankara)
                  yuz yuze gerceklestirilir. Mulakat genellikle 2 ila 5 dakika
                  arasinda surer. Konsolosluk gorevlisi size programiniz, kariyer
                  planlariniz ve Turkiyeye donus niyetiniz hakkinda sorular sorar.
                </p>
                <p>
                  Mulakattin amaci, basvurunuzun samimi olup olmadigini, programin
                  amacina uygun olup olmadiginizi ve ABDdeki sureniz sona erdiginde
                  Turkiyeye donup donmeyeceginizi degerlendirmektir. Hazirlkili
                  olmak, dogru belgeleri getirmek ve sorulara net cevaplar vermek
                  basarinin anahtaridir.
                </p>
                <p>
                  Asagida, konsolosluklarda en sik sorulan J1 vize mulakat sorularini
                  ve bu sorulara nasil cevap vermeniz gerektigini detayli olarak
                  bulabilirsiniz.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Soru & Cevap
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                En Sik Sorulan 16 Mulakat Sorusu
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {interviewQuestions.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <span className="w-10 h-10 rounded-xl bg-crimson/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="text-sm font-bold text-crimson">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-navy mb-3">
                        &ldquo;{item.question}&rdquo;
                      </h3>
                      <p className="text-sm text-slate leading-relaxed mb-3">
                        {item.answer}
                      </p>
                      <div className="flex items-start gap-2 p-3 bg-sand/50 rounded-xl">
                        <span className="text-crimson mt-0.5 shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                          </svg>
                        </span>
                        <p className="text-xs text-navy font-medium">
                          Ipucu: {item.tip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Hazirlik Ipuclari
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Mulakata Nasil Hazirlanmali?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {preparationTips.map((tip, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center mb-5">
                    <span className="text-sm font-bold text-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-slate leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Important Warnings */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-6">
                Mulakattta Yapilmamasi Gerekenler
              </h2>
              <div className="bg-crimson/5 rounded-2xl border border-crimson/10 p-7">
                <ul className="space-y-4">
                  {[
                    "ABDde kalma niyetiniz oldugunu ima eden ifadeler kullanmayin",
                    "Ezberlenmis cevaplari robotik sekilde tekrarlamayin",
                    "Konsolosluk gorevlisine gereksiz belgeler sunmayin - sadece isteneni gosterin",
                    "Asiri heyecanli veya gergin goruntuden kacinin, dogal olun",
                    "Maas veya para konusunu on plana cikartmayin",
                    "Yalan soylemeyin - tutarsizlik tespit edilirse vize reddedilir",
                    "Baska birinin hazirladigi cevaplari ezberlemeyin, kendi hikayenizi anlatin",
                    "Sorulmadan uzun aciklamalar yapmayin, kisa ve ozu yanit verin",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-crimson text-xs font-bold">!</span>
                      </span>
                      <span className="text-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
                Mulakat Hazirligi icin Destek mi Lazim?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Uzman danismanlarimiz sizi birebir mulakat simulasyonu ile
                hazirlayarak vize onay sansinizi en ust duzey cikarir.
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
                { href: "/j1-vize", title: "J1 Vize Nedir?", desc: "J1 vize sureci, kosullar ve basvuru adimlari" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adim adim doldurma kilavuzu" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Basvurusu", desc: "Genel ABD vize sureci ve randevu alma rehberi" },
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
