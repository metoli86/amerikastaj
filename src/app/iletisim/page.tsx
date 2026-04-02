"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    title: "Telefon",
    value: "+90 (212) 555 00 00",
    description: "Hafta ici 09:00 - 18:00 arasi arayabilirsiniz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    value: "+90 (532) 555 00 00",
    description: "7/24 mesaj gonderebilirsiniz. En kisa surede donus yapariz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "E-posta",
    value: "info@amerikastaj.com",
    description: "Detayli sorulariniz icin e-posta gonderebilirsiniz.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Adres",
    value: "Levent, Istanbul",
    description: "Levent Mah. Buyukdere Cad. No:185, 34394 Sisli/Istanbul",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const officeHours = [
  { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
  { day: "Cumartesi", hours: "10:00 - 14:00" },
  { day: "Pazar", hours: "Kapali" },
];

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,58,95,0.06),transparent)]" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
              Bize Ulasin
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy tracking-tight mb-6 max-w-3xl">
              Iletisim
            </h1>
            <p className="text-lg text-slate leading-relaxed max-w-2xl">
              ABD staj programi hakkinda sorulariniz mi var? Uzman
              danismanlarimiz size yardimci olmaktan mutluluk duyar. Bize
              dilediginiz kanaldan ulasabilirsiniz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-white hover:border-navy/10 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-crimson/10 flex items-center justify-center mx-auto mb-5 text-crimson">
                    {info.icon}
                  </div>
                  <h3 className="text-sm font-bold text-navy uppercase tracking-wide mb-2">
                    {info.title}
                  </h3>
                  <p className="text-base font-semibold text-navy mb-2">{info.value}</p>
                  <p className="text-xs text-slate">{info.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Office Hours */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="text-2xl lg:text-4xl font-bold text-navy tracking-tight mb-2">
                  Bize Yazin
                </h2>
                <p className="text-slate leading-relaxed mb-8">
                  Formu doldurun, en kisa surede size donus yapalim. Tum
                  alanlari doldurmaniz bize daha hizli yardimci olmamizi saglar.
                </p>

                {submitted ? (
                  <div className="p-10 rounded-2xl bg-sand/50 border border-navy/5 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      Mesajiniz Gonderildi!
                    </h3>
                    <p className="text-slate">
                      En kisa surede size donus yapacagiz. Tesekkur ederiz.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/5 transition-all"
                          placeholder="Adiniz ve soyadiniz"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/5 transition-all"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/5 transition-all"
                          placeholder="+90 (5XX) XXX XX XX"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-navy mb-2">
                          Konu *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/5 transition-all"
                        >
                          <option value="">Konu secin</option>
                          <option value="staj">Staj Programi Hakkinda</option>
                          <option value="vize">Vize Sureci</option>
                          <option value="ucret">Ucretler</option>
                          <option value="basvuru">Basvuru Durumu</option>
                          <option value="diger">Diger</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                        Mesajiniz *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-navy/10 bg-white text-navy text-sm focus:outline-none focus:border-navy/30 focus:ring-2 focus:ring-navy/5 transition-all resize-none"
                        placeholder="Sormak istediginiz her seyi yazabilirsiniz..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-crimson text-white px-8 py-4 rounded-xl font-semibold hover:bg-crimson/90 transition-colors"
                    >
                      Mesaj Gonder
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-sand/30">
                  <h3 className="text-lg font-bold text-navy mb-5">
                    Calisma Saatleri
                  </h3>
                  <div className="space-y-3">
                    {officeHours.map((item, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm text-slate">{item.day}</span>
                        <span className="text-sm font-semibold text-navy">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-sand/30">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    Hizli Basvuru
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-5">
                    ABD staj programi icin hemen basvuru yapmak mi
                    istiyorsunuz? Online basvuru formumuz ile sureci
                    baslatabilirsiniz.
                  </p>
                  <Link
                    href="/basvuru"
                    className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-navy/90 transition-colors w-full justify-center"
                  >
                    Basvuru Formuna Git
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-7 rounded-2xl border border-navy/5 bg-sand/30">
                  <h3 className="text-lg font-bold text-navy mb-3">
                    Sikca Sorulan Sorular
                  </h3>
                  <p className="text-sm text-slate leading-relaxed mb-5">
                    Programimiz hakkinda merak edilen sorularin cevaplarini
                    SSS sayfamizda bulabilirsiniz.
                  </p>
                  <Link
                    href="/sss"
                    className="inline-flex items-center gap-2 text-navy text-sm font-semibold hover:text-crimson transition-colors"
                  >
                    SSS Sayfasina Git
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 lg:py-28 bg-sand/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-navy mb-8">Ofisimiz</h2>
            <div className="rounded-2xl border border-navy/5 bg-white overflow-hidden">
              <div className="aspect-[16/6] bg-navy/[0.03] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy/40">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-navy mb-1">
                    Levent Mah. Buyukdere Cad. No:185
                  </p>
                  <p className="text-sm text-slate">
                    34394 Sisli/Istanbul, Turkiye
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
