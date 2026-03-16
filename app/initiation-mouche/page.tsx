"use client";

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

const sections = [
  {
    eyebrow: "L'initiation",
    title: "Apprenez à trouver la truffe à la mouche 🪰",
    text: "Je vous propose une initiation où vous apprendrez où et comment trouver la truffe, sur le temps d'une journée. Je vous donnerai tous les secrets et je vous apprendrai à trouver la truffe grâce à la mouche (cavage à la mouche).",
  },
  {
    eyebrow: "Le déroulement",
    title: "Une journée complète sur le terrain",
    text: "La journée débute à 9h00 au point de rendez-vous fixé ensemble, en région Rhône-Alpes. Jusqu'à midi : partie théorique — biotopes, sols, essences d'arbres propices à la truffe. Repas ensemble à midi (à vos frais). L'après-midi : pratique sur le terrain. Vous apprendrez à chercher et lever la mouche qui vous emmènera à la truffe. Vous repartirez avec les truffes trouvées !",
  },
  {
    eyebrow: "Et après ?",
    title: "Toutes les clés en main + suivi personnalisé",
    text: "Suite à cette journée, vous aurez toutes les clés pour partir à la découverte de nouveaux coins et trouver vos propres truffes. Cette initiation est accompagnée d'un suivi régulier si vous en avez besoin. Attention : les initiations ont lieu uniquement à la saison des truffes, de juin jusqu'à mars.",
  },
];

const subjects = [
  "Informations / Réservation initiation à la truffe",
  "Informations / Réservation initiation Chien à la truffe",
  "Achat de truffes et autres champignons",
  "Autres demandes / Informations supplémentaires",
];

export default function InitiationMouchePage() {
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
            Technique ancestrale
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Initiation Truffes{" "}
            <em className="italic text-sage-light">à la Mouche</em>
          </motion.h1>
        </div>
      </section>

      {/* ── CONTENT SECTIONS ── */}
      <section className="section-padding max-w-5xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-16"
        >
          {sections.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 items-start"
            >
              {/* Left label */}
              <div className="md:pt-2">
                <p className="section-eyebrow">{s.eyebrow}</p>
                <div className="hidden md:block w-px h-16 bg-sage-light/40 ml-3 mt-4" />
              </div>

              {/* Right content */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-forest-deep leading-tight mb-4">
                  {s.title}
                </h2>
                <p className="text-forest/70 leading-relaxed font-body text-base md:text-lg">
                  {s.text}
                </p>
              </div>
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