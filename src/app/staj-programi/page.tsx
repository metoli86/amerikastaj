"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const internshipFields = [
  {
    icon: "🏨",
    title: "Otelcilik & Turizm",
    roles: "Front Office, F&B, Event Management, Guest Relations",
    duration: "6-12 ay",
  },
  {
    icon: "💻",
    title: "Bilgi Teknolojileri",
    roles: "Software Development, Data Analysis, IT Support, QA",
    duration: "6-12 ay",
  },
  {
    icon: "🍽️",
    title: "Gastronomi & Mutfak",
    roles: "Line Cook, Pastry Chef, Kitchen Management",
    duration: "6-12 ay",
  },
  {
    icon: "📊",
    title: "Isletme & Finans",
    roles: "Accounting, Business Administration, Marketing",
    duration: "6-18 ay",
  },
  {
    icon: "⚙️",
    title: "Muhendislik",
    roles: "Mechanical, Electrical, Civil, Industrial Engineering",
    duration: "6-18 ay",
  },
  {
    icon: "📱",
    title: "Pazarlama & Medya",
    roles: "Digital Marketing, Social Media, PR, Content",
    duration: "6-12 ay",
  },
];

const requirements = {
  internship: [
    "Universite ogrencisi veya yeni mezun olmak (mezuniyetten sonra max 12 ay)",
    "En az 1 yil universite egitimi tamamlamis olmak",
    "Temel duzey Ingilizce bilgisi",
    "Staj yapilacak alanla ilgili egitim almis olmak",
    "18-30 yas arasi",
  ],
  trainee: [
    "Universite mezunu olmak",
    "En az 1 yil ilgili alanda is deneyimi",
    "Orta duzey Ingilizce bilgisi",
    "Alaninda kariyer gelisimi hedeflemek",
    "20-35 yas arasi",
  ],
};

export default function StajProgrami() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Programlar
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Amerikada Maasli Staj Programi
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              J1 vize kategorisi altinda Internship ve Trainee programlari ile
              Amerikadaki sirketlerde profesyonel deneyim kazan. Tum sektorlerde
              maasli pozisyonlar mevcut.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Two Programs */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Internship */}
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-navy/5 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase bg-blue/10 text-blue rounded-full">
                    J1 Internship
                  </span>
                  <span className="text-xs text-slate">12 aya kadar</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                  Universite Ogrencileri & Yeni Mezunlar
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Halen universite egitimi gorenler veya mezuniyetinin uzerinden 12 ay
                  gecmemis kisiler icin. Egitim aldigin alanla ilgili Amerikan
                  sirketlerinde staj yapma firsati.
                </p>
                <h3 className="text-sm font-bold text-navy mb-4 uppercase tracking-wide">
                  Katilim Sartlari
                </h3>
                <ul className="space-y-3 mb-8">
                  {requirements.internship.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-sm text-slate">
                      <svg className="w-5 h-5 text-blue shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-semibold rounded-full hover:bg-navy-light transition-all duration-300"
                >
                  Internship Basvurusu
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>

            {/* Trainee */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-2xl border border-navy/5 p-8 lg:p-10 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 text-[11px] font-bold tracking-[0.1em] uppercase bg-crimson/10 text-crimson rounded-full">
                    J1 Trainee
                  </span>
                  <span className="text-xs text-slate">18 aya kadar</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
                  Deneyimli Profesyoneller
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  En az 1 yil is deneyimine sahip profesyoneller icin. Kendi
                  kariyerinde uzmanlasmak, uluslararasi deneyim kazanmak ve
                  profesyonel agini genisletmek isteyenler icin ideal.
                </p>
                <h3 className="text-sm font-bold text-navy mb-4 uppercase tracking-wide">
                  Katilim Sartlari
                </h3>
                <ul className="space-y-3 mb-8">
                  {requirements.trainee.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-sm text-slate">
                      <svg className="w-5 h-5 text-crimson shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {req}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/basvuru"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-sm font-semibold rounded-full hover:bg-crimson-dark transition-all duration-300"
                >
                  Trainee Basvurusu
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-3">
                Staj Alanlari
              </p>
              <h2 className="text-3xl lg:text-5xl font-bold text-navy tracking-tight">
                Hangi sektorde staj yapmak istersin?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipFields.map((field, i) => (
              <ScrollReveal key={field.title} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-navy/5 hover:border-navy/15 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300">
                  <span className="text-3xl mb-4 block">{field.icon}</span>
                  <h3 className="text-lg font-bold text-navy mb-2">{field.title}</h3>
                  <p className="text-sm text-slate leading-relaxed mb-4">{field.roles}</p>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-sand rounded-lg text-navy/60">
                    {field.duration}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Internship vs Trainee Comparison */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy tracking-tight">
                Internship mi, Trainee mi?
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl border border-navy/5 overflow-hidden">
                <thead>
                  <tr className="border-b border-navy/5">
                    <th className="text-left p-5 text-sm font-bold text-navy"></th>
                    <th className="text-left p-5 text-sm font-bold text-navy">J1 Internship</th>
                    <th className="text-left p-5 text-sm font-bold text-navy">J1 Trainee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy/5">
                  {[
                    ["Kimler icin", "Ogrenci / Yeni mezun", "Deneyimli profesyonel"],
                    ["Sure", "12 aya kadar", "18 aya kadar"],
                    ["Deneyim sarti", "Yok", "Min. 1 yil"],
                    ["Egitim sarti", "Min. 1 yil universite", "Universite mezunu"],
                    ["Yas araligi", "18-30", "20-35"],
                    ["Maas", "Evet", "Evet"],
                    ["Vize turu", "J1 Exchange Visitor", "J1 Exchange Visitor"],
                  ].map((row) => (
                    <tr key={row[0]}>
                      <td className="p-5 text-sm font-semibold text-navy">{row[0]}</td>
                      <td className="p-5 text-sm text-slate">{row[1]}</td>
                      <td className="p-5 text-sm text-slate">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-6">
              Staj macerana baslamaya hazir misin?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              Ucretsiz danismanlik gorusmesi ile profilini degerlendirelim ve sana
              en uygun programi belirleyelim.
            </p>
            <Link
              href="/basvuru"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-bold text-[15px] rounded-full hover:bg-sand transition-all duration-300 hover:shadow-xl"
            >
              Ucretsiz Danismanlik Al
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
