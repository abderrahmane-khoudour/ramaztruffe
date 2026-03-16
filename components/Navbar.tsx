"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Technicien trufficole", href: "/technicien-trufficole" },
  { label: "Initiation à la mouche", href: "/initiation-mouche" },
  { label: "Initiation pour chien", href: "/initiation-chien" },
  { label: "Vente de truffes", href: "/vente-de-truffes" },
  { label: "Avis", href: "/avis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm shadow-forest/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
  <Image
    src="/logo-horizontal.png"
    alt="Ramaztruffe"
    width={180}
    height={60}
    className="h-10 w-auto drop-shadow-md"
    priority
  />
</Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs tracking-wider uppercase font-body font-medium transition-colors duration-300 rounded-full ${
                    isActive
                      ? scrolled
                        ? "text-forest bg-forest/8"
                        : "text-cream bg-white/10"
                      : scrolled
                      ? "text-forest-deep/70 hover:text-forest hover:bg-forest/5"
                      : "text-cream/75 hover:text-cream hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-forest-light"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Contact CTA — desktop */}
          {pathname === "/" && (
            <Link
            href="/#contact"
            className={`hidden lg:inline-flex items-center gap-2 text-xs tracking-widest uppercase font-body font-medium px-5 py-2.5 rounded-full border transition-all duration-300 ${
              scrolled
                ? "border-forest text-forest hover:bg-forest hover:text-cream"
                : "border-cream/50 text-cream hover:bg-cream hover:text-forest-deep"
            }`}
          >
            Contact
          </Link>
          )}

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden flex flex-col gap-1.5 p-2 transition-colors duration-300 ${
              scrolled ? "text-forest-deep" : "text-cream"
            }`}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current transition-all duration-300"
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-forest-deep flex flex-col pt-24 pb-10 px-8"
          >
            {/* Decorative circle */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-forest/30 -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

            <nav className="flex flex-col gap-1 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-4 font-display text-2xl border-b border-forest/30 transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-sage-light"
                        : "text-cream/80 hover:text-cream"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto"
            >
              {pathname === "/" && (
                <Link
                href="/#contact"
                className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-forest-deep w-full justify-center"
              >
                Me contacter
              </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}