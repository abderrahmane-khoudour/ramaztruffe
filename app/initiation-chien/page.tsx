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

const text = `Vous possédez un chien et rêvez de l'initier à la recherche de truffes ? Je vous propose un programme d'initiation complet, basé sur des méthodes douces et positives, développées avec mes propres Lagotto Romagnolo Rubis et Tao.

Chaque chien est différent — sa personnalité, son niveau d'énergie et sa motivation déterminent le rythme de l'apprentissage. Les séances sont adaptées à chaque binôme maître-chien pour un résultat optimal.

L'objectif final : que votre chien soit capable d'identifier et de signaler la présence d'une truffe de manière fiable et enthousiaste.

Attention : les initiations ont lieu uniquement à la saison des truffes, de juin jusqu'à mars !`;

const subjects = [
  "Informations / Réservation initiation Chien à la truffe",
  "Informations / Réservation initiation à la truffe",
  "Achat de truffes et autres champignons",
  "Autres demandes / Informations supplémentaires",
];

export default function InitiationChienPage() {
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
            Méthodes douces & positives
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Initiation{" "}
            <em className="italic text-sage-light">pour Chien</em>
          </motion.h1>
        </div>
      </section>

      {/* ── TEXT + PHOTO ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="section-eyebrow">
              Le programme
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-3xl md:text-4xl text-forest-deep leading-tight mb-6"
            >
              Une initiation{" "}
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

          {/* Photo 1 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl aspect-[4/3]"
          >
            <Image
              src="/chien/photo1.jpg"
              alt="Initiation chien à la truffe"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent" />
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
                src={`/chien/photo${n}.jpg`}
                alt={`Initiation chien ${n}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-deep/10 group-hover:bg-forest-deep/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-5xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="h-px bg-sage-light/30" />
      </div>

      {/* ── FORM ── */}
      <section className="section-padding max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp} className="section-eyebrow">
            Réserver
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl text-forest-deep leading-tight mb-2"
          >
            Intéressé ? <em className="italic text-forest">Contactez-moi</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-forest/60 font-body mb-10">
            Je vous répondrai dans les plus brefs délais.
          </motion.p>

          <motion.form
            variants={stagger}
            className="grid md:grid-cols-2 gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div variants={fadeUp}>
              <label className="label-field">Nom *</label>
              <input type="text" className="input-field" placeholder="Jean Dupont" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">E-mail *</label>
              <input type="email" className="input-field" placeholder="jean@email.com" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Téléphone (facultatif)</label>
              <input type="tel" className="input-field" placeholder="+33 6 XX XX XX XX" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Que puis-je faire pour vous ?</label>
              <select className="input-field">
                {subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-2">
              <label className="label-field">Message *</label>
              <textarea
                className="input-field resize-none"
                rows={5}
                placeholder="Bonjour, je souhaite..."
              />
            </motion.div>
            <motion.div variants={fadeUp} className="md:col-span-2">
              <button type="submit" className="btn-primary w-full justify-center">
                Envoyer ma demande
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}