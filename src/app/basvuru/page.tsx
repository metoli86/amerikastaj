"use client";

import ScrollReveal from "@/components/ScrollReveal";

export default function Basvuru() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Başvuru
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Staj Başvurusu
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              Formu doldur, 24 saat içinde danışmanlarımız seninle iletişime geçsin.
              Ücretsiz profil değerlendirmesi yapıyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-navy/5 p-8 lg:p-10">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Ad Soyad</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">E-posta</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Telefon</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">Program</label>
                      <select className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm bg-white">
                        <option value="">Seçiniz</option>
                        <option value="internship">J1 Internship</option>
                        <option value="trainee">J1 Trainee</option>
                        <option value="bilmiyorum">Henüz karar vermedim</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Üniversite / Mezuniyet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm"
                      placeholder="Üniversiteniz ve bölümünüz"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Staj Yapmak İstediğiniz Alan</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm bg-white">
                      <option value="">Seçiniz</option>
                      <option value="otelcilik">Otelcilik & Turizm</option>
                      <option value="it">Bilgi Teknolojileri</option>
                      <option value="gastronomi">Gastronomi & Mutfak</option>
                      <option value="isletme">İşletme & Finans</option>
                      <option value="muhendislik">Mühendislik</option>
                      <option value="pazarlama">Pazarlama & Medya</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Mesajınız (Opsiyonel)</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-navy/10 focus:border-navy/30 focus:ring-2 focus:ring-navy/5 outline-none transition-all text-sm resize-none"
                      placeholder="Eklemek istediğiniz bilgiler..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white font-semibold text-[15px] rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20"
                  >
                    Başvuruyu Gönder
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Sidebar */}
            <ScrollReveal delay={0.15} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-navy/5 p-7">
                  <h3 className="font-bold text-navy mb-4">Neden bize başvurmalısın?</h3>
                  <ul className="space-y-3">
                    {[
                      "24 saat içinde geri dönüş",
                      "Ücretsiz profil değerlendirmesi",
                      "Kişiselleştirilmiş program önerisi",
                      "Şeffaf fiyatlandırma",
                      "%98 vize onay oranı",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-slate">
                        <svg className="w-5 h-5 text-blue shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-navy rounded-2xl p-7 text-white">
                  <h3 className="font-bold mb-2">Hemen ara</h3>
                  <p className="text-sm text-white/60 mb-4">
                    Telefonla görüşmek istersen bizi arayabilirsin.
                  </p>
                  <a href="tel:+902121234567" className="text-lg font-bold text-blue-light hover:text-white transition-colors">
                    +90 (212) 123 45 67
                  </a>
                </div>
                <div className="bg-white rounded-2xl border border-navy/5 p-7">
                  <h3 className="font-bold text-navy mb-2">WhatsApp</h3>
                  <p className="text-sm text-slate mb-4">
                    WhatsApp üzerinden de bize ulaşabilirsin.
                  </p>
                  <a
                    href="https://wa.me/902121234567"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-crimson transition-colors"
                  >
                    WhatsApp ile yaz
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
