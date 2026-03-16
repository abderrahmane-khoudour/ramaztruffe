"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const text = `Fort de plus de 10 ans d'expérience sur le terrain, je propose un accompagnement complet pour la création, la gestion et l'optimisation de vos truffières.

Mon rôle de technicien trufficole consiste à analyser vos sols, choisir les essences végétales adaptées, planifier les plantations mycorhizées et assurer le suivi agronomique de votre parcelle. Chaque truffière est unique, et c'est cette singularité qui fait tout le charme et la complexité de ce métier.

Que vous soyez débutant ou producteur expérimenté, je vous accompagne à chaque étape pour maximiser vos chances d'une récolte abondante et de qualité.`;

export default function TechnicienPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="page-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest-dark to-forest opacity-90" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(122,158,126,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(61,107,79,0.2) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow text-sage-light mb-3"
          >
            Expertise & accompagnement
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Technicien <em className="italic text-sage-light">Trufficole</em>
          </motion.h1>
        </div>
      </section>

      {/* ── MAIN PHOTO + TEXT ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl aspect-[4/3]"
          >
            <Image
              src="/technicien/photo1.jpg"
              alt="Technicien trufficole"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent" />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="section-eyebrow">
              Mon rôle
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl text-forest-deep leading-tight mb-6"
            >
              Un accompagnement{" "}
              <em className="italic text-forest">sur mesure</em>
            </motion.h2>
            {text.split("\n\n").map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-forest/70 leading-relaxed mb-4 font-body"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TWO PHOTOS ── */}
      <section className="pb-20 md:pb-32 max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {[2, 3].map((n) => (
            <motion.div
              key={n}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl aspect-[4/3] group"
            >
              <Image
                src={`/technicien/photo${n}.jpg`}
                alt={`Technicien trufficole ${n}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-forest-deep/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}