"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const interviewQuestions = [
  {
    question: "Why do you want to go to the United States?",
    answer:
      "Bu soruya ABD'de mesleki deneyim kazanmak, kültürel değişim yaşamak ve kariyerinizi geliştirmek istediğinizi vurgulayarak cevap verin. Belirli bir sektörde uzmanlaşmak istediğinizi ve ABD'nin bu alanda dünya lideri olduğunu belirtin.",
    tip: "Genel cevaplardan kaçının. Kendi mesleğinize özgü nedenler sunun.",
  },
  {
    question: "What will you do in the United States?",
    answer:
      "Staj programınızın detaylarını açıklayınız. Hangi şirkette, hangi departmanda, ne tür görevler yapacağınızı net olarak anlatınız. DS-7002 Training Plan belgenizle uyumlu cevaplar verin.",
    tip: "İş tanımınızı ezbere bilin ve kendi cümlelerinizle ifade edin.",
  },
  {
    question: "Who is your sponsor organization?",
    answer:
      "Sponsor kuruluşunuzun adını, ne iş yaptığını ve sizi nasıl destekleyeceğini açıklayınız. Sponsor kuruluşun ABD Dışişleri Bakanlığı onaylı olduğunu belirtin.",
    tip: "Sponsor kuruluş hakkında temel bilgileri araştırın.",
  },
  {
    question: "Where will you work and what is the company about?",
    answer:
      "Çalışacağınız şirketin adını, sektörünü, büyüklüğünü ve ne yaptığını anlatınız. Şirketin web sitesini incelediğinizi ve hakkında bilgi sahibi olduğunuzu gösterin.",
    tip: "Şirketin web sitesini ziyaret edin ve temel bilgileri not alın.",
  },
  {
    question: "How did you find this internship?",
    answer:
      "Staj programına nasıl başvurduğunuzu ve süreci anlatınız. Danışmanlık firmanız varsa ondan bahsedin. Programı araştırırken hangi kaynakları kullandığınızı belirtin.",
    tip: "Sürecin doğal ve mantıklı bir hikayesini oluşturun.",
  },
  {
    question: "What is your educational background?",
    answer:
      "Üniversite adınızı, bölümünüzü, kaçıncı sınıf veya mezun olduğunuzu belirtiniz. Staj alanı ile eğitim alanınızdaki bağlantıyı vurgulayınız.",
    tip: "Eğitim ve staj alanı arasındaki ilişkiyi net kurun.",
  },
  {
    question: "How will you fund your stay in the US?",
    answer:
      "Staj programından alacağınız maaşı, banka hesabınızdaki birikimi ve ailenizden destek alıp almadığınızı açıklayınız. Finansal olarak yeterli olduğunuzu gösterin.",
    tip: "Banka dökümleriniz güncellenmiş ve yeterli bakiyeyi göstermelidir.",
  },
  {
    question: "Will you return to Turkey after the program?",
    answer:
      "ABD'deki programınız bittikten sonra Türkiye'ye döneceğinizi net olarak belirtiniz. Türkiye'de sizi bekleyen iş fırsatları, aile bağları veya kariyer planları gibi somut dönüş nedenleri sunun.",
    tip: "Bu en kritik soru. Türkiye'ye dönüş niyetinizi kanıtlayacak somut bağlantınızı açıklayın.",
  },
  {
    question: "What are your career plans after the program?",
    answer:
      "ABD'de edindiğiniz tecrübe ile Türkiye'de kariyerinizi nasıl ilerletmeyi planladığınızı anlatınız. Uzun vadeli kariyer hedefinizi ve bu stajın bu hedefe nasıl katkıda bulunacağını açıklayınız.",
    tip: "Kariyer planınızı Türkiye merkezli anlatın.",
  },
  {
    question: "Do you have any relatives in the US?",
    answer:
      "Dürüst olun. ABD'de akrabanız varsa belirtin ama programınız bittikten sonra döneceğinizi tekrar vurgulayınız. Akrabanız yoksa bunu net olarak belirtin.",
    tip: "Asla yalan söylemeyin. Konsolosluk kayıtları kontrol edebilir.",
  },
  {
    question: "Have you been to the US before?",
    answer:
      "Daha önce ABD'ye gittiyseniz, ne zaman, ne amaçla gittiğinizi ve zamanında döndüğünüzü belirtin. İlk kez gidiyorsanız bunu söyleyin ve heyecanınızı ifade edin.",
    tip: "Önceki seyahatlerinizde vize kurallarını ihlal etmediğinizi gösterin.",
  },
  {
    question: "How much will you be paid?",
    answer:
      "DS-7002 formunuzda belirtilen maaş miktarını söyleyiniz. Aylık veya saatlik ücreti bilin. Bu gelirin yaşam masraflarınızı karşılamaya yeterli olduğunu belirtin.",
    tip: "Maaş bilginiz DS-7002 ile birebir uyumlu olmalıdır.",
  },
  {
    question: "Where will you live in the US?",
    answer:
      "Kalacağınız şehri ve konaklama planınızı anlatınız. Şirketiniz konaklama sağlıyorsa belirtin, değilse nasıl bir yer arayacağınızı açıklayınız.",
    tip: "En azından şehir ve genel bir konaklama planı hazırlayın.",
  },
  {
    question: "What do you know about J1 visa regulations?",
    answer:
      "J1 vizesinin kültürel değişim amacıyla verilen geçici bir vize olduğunu, belirli bir süre için geçerli olduğunu ve program bitiminde ülkenize dönmeniz gerektiğini belirtiniz.",
    tip: "2 yıllık eve dönüş kuralı (two-year home residency requirement) hakkında bilgi sahibi olun.",
  },
  {
    question: "What skills do you hope to gain from this program?",
    answer:
      "Programdan kazanmayı hedeflediğiniz somut becerileri sıralayın. Teknik beceriler, liderlik deneyimi, uluslararası iş kültürü bilgisi gibi konulara değinin. Bunların Türkiye'ye döndüğünüzde kariyerinize nasıl katkı sağlayacağını açıklayınız.",
    tip: "Genel ifadeler yerine mesleğinize özgü beceriler söyleyiniz.",
  },
  {
    question: "Do you have health insurance for your stay?",
    answer:
      "J1 vize programı kapsamında sağlık sigortanızın sponsor kuruluş tarafından sağlandığını veya kendinizin temin edeceğinizi belirtiniz. Minimum teminat gereksinimlerini bildiğinizi gösterin.",
    tip: "J1 vize için sağlık sigortası zorunludur. Detaylarını bilin.",
  },
];

const preparationTips = [
  {
    title: "Belgeleri Hazırlayın",
    description:
      "Tüm belgeleri bir dosya halinde düzenli şekilde hazırlayın. Pasaport, DS-2019, DS-160 onay sayfası, SEVIS makbuzu, banka dökümleri, öğrenci belgesi ve transkript mutlaka yanınızda olmalıdır.",
  },
  {
    title: "İngilizce Pratik Yapın",
    description:
      "Mülakat tamamen İngilizce yapılır. Günlük konuşma pratiğinizi artırın, özellikle kendinizi tanıtma ve kariyer planlarınızı anlatma konusunda hazırlıklı olun. Doğal ve akıcı konuşmanız önemlidir.",
  },
  {
    title: "DS-7002 Formunu Ezbere Bilin",
    description:
      "Training/Internship Placement Plan (DS-7002) formu stajınızın detaylarını içerir. İş tanımınızı, görevlerinizi ve eğitim hedefinizi kendi sözcüklerinizle anlatabilecek şekilde hazırlanın.",
  },
  {
    title: "Türkiye'ye Dönüş Bağlantısı",
    description:
      "Konsolosluk en çok dönüş niyetinizi sorgular. Türkiye'deki aile bağları, iş fırsatları, devam eden eğitim veya mülk gibi somut dönüş nedenlerinizi hazırlayın.",
  },
  {
    title: "Kısa ve Net Cevaplar Verin",
    description:
      "Konsolosluk mülakatları genellikle 2-5 dakika sürer. Sorulara kısa, net ve özgüvenli cevaplar verin. Gereksiz ayrıntılara girmeyin. Sorulan sorunun dışına çıkmayın.",
  },
  {
    title: "Giyim ve Görünüm",
    description:
      "İş görüşmesine gider gibi resmi veya yarı resmi kıyafet tercih edin. Temiz ve düzenli bir görünüm profesyonel izlenim bırakır.",
  },
  {
    title: "Erken Gidin",
    description:
      "Randevunuzdan en az 30 dakika önce konsolosluğun önünde olun. Gecikme halinde randevunuz iptal edilebilir. Telefon, elektronik cihaz ve büyük çantalar konsolosluğa alınamaz.",
  },
  {
    title: "Rahat Olun",
    description:
      "Gerçekleri söylediğiniz ve iyi hazırlandığınız sürece endişelenecek bir şey yok. Konsolosluk görevlileri samimi ve tutarlı cevaplar arar. Gerçekdışı hikayeler uydurmak en büyük hatadır.",
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
              Mülakat Rehberi
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              J1 Vize Mülakat Soruları
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD konsolosluklarında J1 vize mülakatında en sık sorulan sorular,
              örnek cevaplar ve başarılı bir mülakat için ipuçları. İyi
              hazırlanan adaylar için vize onay oranı oldukça yüksektir.
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
                J1 Vize Mülakatı Nasıl Geçer?
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  J1 vize mülakatı, ABD konsolosluklarında (İstanbul veya Ankara)
                  yüz yüze gerçekleştirilir. Mülakat genellikle 2 ila 5 dakika
                  arasında sürer. Konsolosluk görevlisi size programınız, kariyer
                  planlarınız ve Türkiye&apos;ye dönüş niyetiniz hakkında sorular sorar.
                </p>
                <p>
                  Mülakatın amacı, başvurunuzun samimi olup olmadığını, programın
                  amacına uygun olup olmadığınızı ve ABD&apos;deki süreniz sona erdiğinde
                  Türkiye&apos;ye dönüp dönmeyeceğinizi değerlendirmektir. Hazırlıklı
                  olmak, doğru belgeleri getirmek ve sorulara net cevaplar vermek
                  başarının anahtarıdır.
                </p>
                <p>
                  Aşağıda, konsolosluklarda en sık sorulan J1 vize mülakat sorularını
                  ve bu sorulara nasıl cevap vermeniz gerektiğini detaylı olarak
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
                En Sık Sorulan 16 Mülakat Sorusu
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
                          İpucu: {item.tip}
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
                Hazırlık İpuçları
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Mülakata Nasıl Hazırlanmalı?
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
                Mülakatta Yapılmaması Gerekenler
              </h2>
              <div className="bg-crimson/5 rounded-2xl border border-crimson/10 p-7">
                <ul className="space-y-4">
                  {[
                    "ABD'de kalma niyetiniz olduğunu ima eden ifadeler kullanmayın",
                    "Ezberlenmiş cevapları robotik şekilde tekrarlamayın",
                    "Konsolosluk görevlisine gereksiz belgeler sunmayın - sadece isteneni gösterin",
                    "Aşırı heyecanlı veya gergin görüntüden kaçının, doğal olun",
                    "Maaş veya para konusunu ön plana çıkartmayın",
                    "Yalan söylemeyin - tutarsızlık tespit edilirse vize reddedilir",
                    "Başka birinin hazırladığı cevapları ezberlemeyin, kendi hikayenizi anlatın",
                    "Sorulmadan uzun açıklamalar yapmayın, kısa ve özü yanıt verin",
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
                Mülakat Hazırlığı İçin Destek mi Lazım?
              </h2>
              <p className="text-white/70 max-w-xl mx-auto mb-8">
                Uzman danışmanlarımız sizi birebir mülakat simülasyonu ile
                hazırlayarak vize onay şansınızı en üst düzeye çıkarır.
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
                { href: "/j1-vize", title: "J1 Vize Nedir?", desc: "J1 vize süreci, koşullar ve başvuru adımları" },
                { href: "/ds-160", title: "DS-160 Formu Rehberi", desc: "DS-160 formunu adım adım doldurma kılavuzu" },
                { href: "/amerika-vize-basvurusu", title: "Amerika Vize Başvurusu", desc: "Genel ABD vize süreci ve randevu alma rehberi" },
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
