import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Amerika Staj SSS",
  description:
    "Amerika staj programı hakkında en çok sorulan sorular ve cevapları. Program, vize, ücret ve yaşam hakkında bilgiler.",
  alternates: {
    canonical: "https://amerikastaj.com/sss",
  },
};

const faqEntries = [
  {
    question: "J1 staj programı nedir?",
    answer:
      "J1 staj programı, ABD Dışişleri Bakanlığı tarafından düzenlenen kültürel değişim programı kapsamında Türk üniversite öğrencileri ve yeni mezunlarına ABD'de maaşlı staj yapma imkanı sunan bir programdır. Program 12-18 ay süreli olup, katılımcılar Amerikan şirketlerinde kendi mesleki alanlarında çalışma fırsatı elde eder. Program sonunda Türkiye'ye dönerek edindikleri deneyimi kariyerlerine yansıtırlar.",
  },
  {
    question: "Programa kimler başvurabilir?",
    answer:
      "Üniversite son sınıf öğrencileri, yeni mezunlar (mezuniyetten sonra en fazla 12 ay geçmiş olmalı) ve 1-5 yıl iş deneyimine sahip profesyoneller başvurabilir. En az orta düzey İngilizce bilgisi (B1-B2 seviye) gereklidir. Üniversite öğrencileri için Intern, 1+ yıl deneyimli profesyoneller için Trainee kategorisi geçerlidir.",
  },
  {
    question: "Program ne kadar sürer?",
    answer:
      "Intern (stajyer) kategorisi için program süresi 12 aya kadar, Trainee (eğitmen) kategorisi için 18 aya kadardır. Kesin süre, çalışacağınız şirket ve DS-2019 belgesinde belirtilen tarihlere göre belirlenir. Çoğu katılımcı 6-12 ay arası staj yapar.",
  },
  {
    question: "Hangi sektörlerde staj yapabilirim?",
    answer:
      "Bilişim/yazılım, finans, pazarlama, mühendislik, otelcilik/turizm, medya/iletişim, uluslararası ticaret, insan kaynakları, mimarlık ve daha pek çok sektörde staj imkanı mevcuttur. Önemli olan, staj alanının üniversite eğitiminiz veya iş deneyiminizle uyumlu olmasıdır.",
  },
  {
    question: "Staj sırasında maaş alacak mıyım?",
    answer:
      "Evet, J1 programı kapsamında yapılan stajlar maaşlıdır. Maaş miktarı sektöre, şehre ve şirket politikasına göre değişir. Stajyerler genellikle saatlik $15-25 arası ücret alır. Bazı sektörlerde (özellikle finans ve teknoloji) bu rakam daha yüksek olabilir. Maaş detayları DS-7002 (Training Plan) belgesinde belirtilir.",
  },
  {
    question: "J1 vize başvuru süreci nasıl işler?",
    answer:
      "Sürecin aşamaları: 1) Danışmanlık görüşmesi ve uygunluk değerlendirmesi, 2) İş eşleştirme ve şirket mülakatı, 3) DS-2019 belgesinin hazırlanması, 4) SEVIS ücretinin ödenmesi ($220), 5) DS-160 formunun doldurulması, 6) MRV ücretinin ödenmesi ($185), 7) Konsolosluk mülakat randevusu, 8) Mülakat ve vize onayı. Tüm sürecin tamamlanması ortalama 2-4 ay sürer.",
  },
  {
    question: "Vize reddedilme ihtimali var mı?",
    answer:
      "İyi hazırlanan adaylar için vize red oranı oldukça düşüktür. Bizim katılımcılarımızda vize onay oranı %98'dir. Red nedenleri genellikle yetersiz finansal kanıt, Türkiye'ye dönüş niyetinin kanıtlanamaması veya eksik belgeler olabilir. Biz sizi mülakat öncesi kapsamlı hazırlayarak riskleri en aza indiriyoruz.",
  },
  {
    question: "Vize mülakatı nasıl geçer?",
    answer:
      "Mülakat İstanbul veya Ankara ABD Konsolosluklarında yüz yüze yapılır. Genellikle 2-5 dakika sürer. Konsolosluk görevlisi size programınız, kariyer planlarınız ve Türkiye'ye dönüş niyetiniz hakkında sorular sorar. Sorulara kısa, net ve tutarlı cevaplar vermeniz önemlidir. Mülakat öncesi simülasyon çalışması yapmanızı şiddetle tavsiye ederiz.",
  },
  {
    question: "DS-2019 belgesi nedir?",
    answer:
      "DS-2019 (Certificate of Eligibility), ABD Dışişleri Bakanlığı onaylı sponsor kuruluş tarafından düzenlenen ve J1 vize başvurunuzun temel belgesidir. Programınızın türünü, süresini, finansal bilgileri ve sponsor kuruluşun bilgilerini içerir. Bu belge olmadan J1 vize başvurusu yapılamaz. İş eşleştirmeniz tamamlandıktan sonra sponsor kuruluş tarafından hazırlanır.",
  },
  {
    question: "2 yıllık eve dönüş kuralı (Two-Year Home Residency) nedir?",
    answer:
      "Bazı J1 vize sahipleri, program sonrasında en az 2 yıl kendi ülkelerinde yaşamak zorundadır. Bu kural, devlet sponsorlu programlar veya ABD'de az bulunan meslekler için geçerlidir. Özel sektör stajları için genellikle bu kural uygulanmaz, ancak DS-2019 belgenizde bu durum belirtilir. Eğer kural size uygulanıyorsa, waiver (muafiyet) başvurusu yapılabilir.",
  },
  {
    question: "Program toplam ne kadara mal olur?",
    answer:
      "Toplam maliyet; danışmanlık ücreti, sponsor kuruluş ücreti, SEVIS ücreti ($220), vize başvuru ücreti ($185), uçak bileti ve ilk ay yaşam masrafından oluşur. Detaylı ücret tablosu için ücretler sayfamızı ziyaret edin. Taksit imkanı mevcuttur. Staja başladığınızda maaş almanız nedeniyle bu yatırım kendini hızla karşılar.",
  },
  {
    question: "Taksit imkanı var mı?",
    answer:
      "Evet, program ücretini taksitlendirebilirsiniz. Başvuru aşamasında kapora ödenerek süreç başlatılır, kalan tutar aylara yayılır. Kredi kartı taksitlendirme veya havale ile taksit seçenekleri mevcuttur. Detaylı ödeme planı için danışmanlarımızla görüşebilirsiniz.",
  },
  {
    question: "Gizli maliyet var mı?",
    answer:
      "Hayır. Tüm ücretler başvuru öncesinde şeffaf şekilde paylaşılır. Danışmanlık ücreti, sponsor kuruluş ücreti, resmi ücretler (SEVIS, MRV) ve varsa ek hizmet ücretleri net olarak belirtilir. Sözleşme aşamasında tüm maliyetler yazılı olarak taahhüt edilir. Beklenmedik ek ücret çıkmaz.",
  },
  {
    question: "Vize reddedilirse ücretim iade edilir mi?",
    answer:
      "Vize reddedilmesi durumunda, danışmanlık ücretimizin büyük bölümü iade edilir. SEVIS ve MRV gibi resmi ücretler ABD hükümeti tarafından iade edilmez. İade politikamızın detayları sözleşmenizde açıkça belirtilir. %98 vize onay oranımız ile risk minimumdur.",
  },
  {
    question: "ABD'de nerede kalacağım?",
    answer:
      "Konaklama seçenekleri şehre ve iş yerine göre değişir. Bazı şirketler konaklama desteği veya yardımı sağlar. Genel olarak katılımcılar ev arkadaşlarıyla paylaşımlı daire kiralama, Airbnb veya stajyer konaklama programlarını tercih eder. Biz size konaklama seçenekleri konusunda rehberlik yapıyoruz ve önceki katılımcılarımızın deneyimlerini paylaşıyoruz.",
  },
  {
    question: "Sağlık sigortam olacak mı?",
    answer:
      "Evet, J1 vize programı kapsamında sağlık sigortası zorunludur. Sponsor kuruluş tarafından minimum teminatı karşılayan bir sağlık sigortası sağlanır. Sigorta genellikle doktor ziyareti, acil servis, hastane yatışı ve reçeteli ilaç masraflarını kapsar. Ekstra teminat için ek sigorta yaptırabilirsiniz.",
  },
  {
    question: "ABD'de banka hesabı açabilir miyim?",
    answer:
      "Evet, J1 vize sahipleri ABD'de banka hesabı açabilir. Bunun için pasaportunuz, DS-2019 belgeniz ve Social Security Number (SSN) gereklidir. SSN almak için işverenizle birlikte Social Security Administration ofisine başvurursunuz. Chase, Bank of America, Wells Fargo gibi büyük bankalar J1 vize sahiplerine hesap açar.",
  },
  {
    question: "Ehliyet alabilir miyim?",
    answer:
      "Evet, çoğu eyalette J1 vize sahipleri yerel ehliyet alabilir. Gereksinimler eyaletten eyalete değişir. Genellikle pasaport, DS-2019, SSN ve ikametgah belgesi istenir. Türkiye ehliyetinizi de bazı eyaletlerde kullanabilirsiniz, ancak uzun süreli kalışlarda yerel ehliyet almanız tavsiye edilir.",
  },
  {
    question: "Staj bitiminde ABD'de kalabilir miyim?",
    answer:
      "J1 programı bitiminde 30 günlük grace period (ek süre) verilir. Bu süre içinde ABD'de seyahat edebilirsiniz ancak çalışamazsınız. Bu 30 günün sonunda ülkenize dönmeniz gerekmektedir. ABD'de kalmak istiyorsanız, program bitmeden farklı bir vize türüne geçiş için başvuru yapmanız gerekir ki bu oldukça karmaşık bir süreçtir.",
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ana Sayfa", "item": "https://amerikastaj.com" },
              { "@type": "ListItem", "position": 2, "name": "Sıkça Sorulan Sorular", "item": "https://amerikastaj.com/sss" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqEntries.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
      {children}
    </>
  );
}
