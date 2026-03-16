"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const photos = Array.from({ length: 19 }, (_, i) => ({
  src: `/cueillettes/photo${i + 1}.jpg`,
  alt: `Cueillette ${i + 1}`,
}));

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function CueillettesPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        {/* Background texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest-dark to-forest opacity-90" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(122,158,126,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(61,107,79,0.2) 0%, transparent 50%)"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-sage-light mb-3"
          >
            Galerie photos
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Mes <em className="italic text-sage-light">Cueillettes</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 font-body mt-4 max-w-md"
          >
            Une sélection de moments capturés au cœur de la forêt trufficole
          </motion.p>
        </div>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-2xl aspect-square cursor-pointer group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-cream text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ⊕
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── LIGHTBOX ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white text-4xl font-light transition-colors z-10"
            >
              ×
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 font-body text-sm tracking-widest">
              {lightboxIndex + 1} / {photos.length}
            </div>

            {/* Prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white text-4xl transition-colors z-10 p-2"
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative"
              style={{ width: "95vw", height: "80vh" }} 
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white text-4xl transition-colors z-10 p-2"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}