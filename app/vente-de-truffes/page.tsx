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
  show: { transition: { staggerChildren: 0.15 } },
};

const products = [
  {
    id: 1,
    image: "/vente/photo1.jpg",
    title: "Truffes d'hiver",
    subtitle: "Tuber mélanosporum",
    description: "Au nez, un parfum très puissant et incomparable, rappelant l'odeur des sous-bois humides, de la terre, de l'humus et des champignons. En bouche, à la fois moelleuse et croquante, elle dévoile un goût subtil et raffiné.",
    infos: [
      { label: "Envoi", value: "Fraîches sous-vide, origine UE" },
      { label: "Cavage", value: "Mi-novembre à mars" },
      { label: "Prix", value: "Me contacter selon disponibilités" },
    ],
  },
  {
    id: 2,
    image: "/vente/photo2.jpg",
    title: "Truffes d'été",
    subtitle: "Tuber aestivum",
    description: "Appelée truffe de la Saint-Jean, c'est la première truffe que l'on peut récolter. Elle développe à maturité des arômes très fins de noisette grillée. Généralement consommée crue, en salade, sur des pâtes, ou à l'apéritif en lamelles avec de l'huile d'olive et de la fleur de sel.",
    infos: [
      { label: "Envoi", value: "Fraîches sous-vide, origine UE" },
      { label: "Cavage", value: "Mi-juillet à mi-septembre" },
      { label: "Prix", value: "Me contacter selon disponibilités" },
    ],
  },
  {
    id: 3,
    image: "/vente/photo3.jpg",
    title: "Truffes d'automne",
    subtitle: "Tuber uncinatum — Truffe de Bourgogne",
    description: "À pleine maturité, la truffe de Bourgogne a une peau noire et une chair brun à chocolat veinée de blanc. Elle développe des parfums subtils de noisette avec des notes de sous-bois. Elle s'accommode avec des poissons, volailles, crustacés, ou les incontournables brouillades, pâtes et risotto.",
    infos: [
      { label: "Envoi", value: "Fraîches sous-vide, origine UE" },
      { label: "Cavage", value: "Mi-septembre à mi-novembre" },
      { label: "Prix", value: "Me contacter selon disponibilités" },
    ],
  },
  {
    id: 4,
    image: "/vente/photo4.jpg",
    title: "Truffes d'Alba",
    subtitle: "Tuber magnatum pico",
    description: "Issues de truffières naturelles — c'est l'assurance d'une fraîcheur et d'une qualité unique. Récoltée par des partenaires qui nous fournissent en direct le meilleur de leurs récoltes (en UE). C'est la truffe la plus fameuse de la haute gastronomie. Son goût est singulier et intense.",
    infos: [
      { label: "Envoi", value: "Fraîches sous-vide, origine UE" },
      { label: "Cavage", value: "Septembre à mi-novembre" },
      { label: "Prix", value: "Me contacter selon disponibilités" },
    ],
  },
];

const truffleOptions = [
  "Truffes d'hiver – Tuber melanosporum // Fraîches",
  "Truffes d'été – Tuber aestivum // Fraîches",
  "Truffes d'automne – Tuber uncinatum // Fraîches",
  "Truffes d'Alba – Tuber magnatum pico // Fraîches",
];

export default function VentePage() {
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
            Fraîches & sous-vide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Vente de <em className="italic text-sage-light">Truffes</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-cream/50 font-body mt-4 max-w-md"
          >
            Un formulaire de commande est disponible en bas de cette page.
          </motion.p>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-3xl aspect-square group ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/40 to-transparent" />
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                <p className="section-eyebrow">{`0${product.id} — Saisonnier`}</p>
                <h2 className="font-display text-3xl md:text-4xl text-forest-deep leading-tight mb-1">
                  {product.title}
                </h2>
                <p className="font-body text-sm italic text-forest-light mb-4">
                  {product.subtitle}
                </p>
                <p className="text-forest/70 leading-relaxed font-body mb-6">
                  {product.description}
                </p>

                {/* Infos */}
                <div className="flex flex-col gap-2 border-t border-sage-light/40 pt-5">
                  {product.infos.map((info) => (
                    <div key={info.label} className="flex gap-3 items-baseline">
                      <span className="font-body text-xs font-medium tracking-widest uppercase text-forest min-w-[80px]">
                        {info.label}
                      </span>
                      <span className="font-body text-sm text-forest/60">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
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
            Commander
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl text-forest-deep leading-tight mb-2"
          >
            Passer une <em className="italic text-forest">commande</em>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-forest/60 font-body mb-10">
            Sélectionnez le(s) produit(s) souhaité(s) et précisez vos besoins.
          </motion.p>

          <motion.form
            variants={stagger}
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <motion.div variants={fadeUp}>
                <label className="label-field">Nom *</label>
                <input type="text" className="input-field" placeholder="Jean Dupont" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="label-field">E-mail *</label>
                <input type="email" className="input-field" placeholder="jean@email.com" />
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Téléphone (facultatif)</label>
              <input type="tel" className="input-field" placeholder="+33 6 XX XX XX XX" />
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Truffes souhaitées *</label>
              <div className="flex flex-col gap-3 mt-1">
                {truffleOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-forest rounded cursor-pointer"
                    />
                    <span className="font-body text-sm text-forest/70 group-hover:text-forest transition-colors">
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Précisions (quantité, préférences...) *</label>
              <textarea
                className="input-field resize-none"
                rows={5}
                placeholder="Ex: 200g de truffes d'hiver, livraison avant Noël..."
              />
            </motion.div>
            <motion.div variants={fadeUp}>
              <button type="submit" className="btn-primary w-full justify-center">
                Envoyer ma commande
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}