"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LAUNCH_DATE = new Date("2026-04-07T00:00:00+03:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
}

const timeUnits = [
  { key: "days", label: "Gün" },
  { key: "hours", label: "Saat" },
  { key: "minutes", label: "Dakika" },
  { key: "seconds", label: "Saniye" },
] as const;

export default function Home() {
  const countdown = useCountdown(LAUNCH_DATE);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,rgba(37,99,235,0.15),transparent)]" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-crimson/5 rounded-full blur-[120px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-base">AS</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-crimson rounded-full" />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg text-white tracking-tight leading-none">
              amerikastaj
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium">
              .com
            </span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8"
        >
          <div className="w-2 h-2 bg-crimson rounded-full animate-pulse" />
          <span className="text-xs font-semibold tracking-[0.1em] uppercase text-white/70">
            Yapım Aşamasında
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          Türkiye&apos;nin en kapsamlı{" "}
          <span className="relative inline-block">
            Amerika Staj
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <motion.path
                d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                stroke="#dc2626"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
            </svg>
          </span>{" "}
          rehberi çok yakında.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-white/50 leading-relaxed max-w-xl mx-auto mb-14"
        >
          J1 vize, maaşlı staj programları, başvuru süreçleri ve daha fazlası
          hakkında ihtiyacın olan her şey burada olacak.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-4 gap-3 sm:gap-5 max-w-lg mx-auto mb-16"
        >
          {timeUnits.map(({ key, label }) => (
            <div
              key={key}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6"
            >
              <div className="text-3xl sm:text-5xl font-bold text-white tracking-tight tabular-nums">
                {String(countdown[key]).padStart(2, "0")}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-white/30 uppercase tracking-wider mt-1">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Email notify (optional visual) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="E-posta adresin"
            className="w-full sm:flex-1 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-white/30 outline-none focus:border-white/25 transition-colors"
          />
          <button className="w-full sm:w-auto px-7 py-3.5 bg-white text-navy font-semibold text-sm rounded-full hover:bg-white/90 transition-all duration-300 shrink-0">
            Haber Ver
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-xs text-white/20 mt-4"
        >
          Site açıldığında seni bilgilendirelim.
        </motion.p>
      </div>
    </section>
  );
}
