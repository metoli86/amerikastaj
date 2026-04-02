"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/staj-programi", label: "Staj Programi" },
  { href: "/ucretler", label: "Ucretler" },
  { href: "/j1-vize", label: "J1 Vize" },
  { href: "/amerika-vize-basvurusu", label: "Vize Basvurusu" },
  { href: "/amerikada-calismak", label: "Amerikada Calismak" },
  { href: "/sss", label: "SSS" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.05)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center gap-3 group">
              <div className="relative">
                <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-sm tracking-tight">AS</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-crimson rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-[15px] tracking-tight leading-none transition-colors duration-300 ${scrolled ? "text-navy" : "text-navy"}`}>
                  amerikastaj
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-slate-light font-medium">
                  Amerika Staj Programi
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-[13px] font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-navy/5 ${
                    scrolled ? "text-slate hover:text-navy" : "text-slate hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/basvuru"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-navy text-white text-[13px] font-semibold tracking-wide rounded-full hover:bg-navy-light transition-all duration-300 hover:shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5"
              >
                Basvur
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center"
                aria-label="Menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    className="block w-6 h-[1.5px] bg-navy origin-center"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-4 h-[1.5px] bg-navy"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    className="block w-6 h-[1.5px] bg-navy origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-start justify-center h-full px-10 gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-bold text-navy hover:text-crimson transition-colors py-2 block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + navLinks.length * 0.05 }}
                className="mt-6"
              >
                <Link
                  href="/basvuru"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white text-lg font-semibold rounded-full"
                >
                  Hemen Basvur
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
