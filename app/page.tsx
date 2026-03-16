"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// ── Temporary inline data (will move to data file later) ──
const homeData = {
  hero: {
    eyebrow: "Passionné du diamant noir",
    title: "L'art de la truffe,",
    titleItalic: "révélé.",
    subtitle:
      "Technicien trufficole, initiateur et récoltant depuis plus de 10 ans — je vous ouvre les portes d'un univers rare, intense et inoubliable.",
    cta: { label: "Mes cueillettes", href: "/cueillettes" },
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=80",
  },
  about: {
    eyebrow: "À propos",
    title: "Bienvenue dans l'univers Ramaztruffe",
    paragraphs: [
      "Depuis toujours, la nature m'inspire et m'émerveille. Après plus de 20 ans à ramasser des champignons par plaisir, j'ai choisi de me consacrer pleinement à l'univers fascinant de la truffe.",
      "Parmi tous les champignons, la truffe — ce fameux « diamant noir » — m'a particulièrement captivé. C'est au bout de trois ans d'efforts et de patience que j'ai découvert ma toute première truffe, grâce à une petite mouche.",
      "Aujourd'hui j'accompagne Rubis et Tao, deux Lagotto Romagnolo que j'ai formés moi-même. Mon objectif : transmettre mon savoir et partager ma passion.",
    ],
    stats: [
      { value: "20+", label: "ans de passion" },
      { value: "10+", label: "ans de cavage" },
      { value: "100+", label: "avis clients" },
      { value: "2", label: "chiens truffiers" },
    ],
  },
  social: {
    eyebrow: "Suivez l'aventure",
    title: "Rejoignez la communauté",
    subtitle: "Cueillettes, formations, coulisses — au quotidien sur les réseaux",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100095188675703", bg: "#1877F2" },
      { label: "Instagram", href: "https://www.instagram.com/ramaztruffe/", bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)" },
      { label: "TikTok", href: "https://www.tiktok.com/@ramaztruffe", bg: "#010101" },
    ],
  },
  photos: [
  {
    src: "/photo1.jpg",
    alt: "Ramaztruffe, Tao et Rubis",
  },
  {
    src: "/photo2.jpg",
    alt: "Tao et Rubis",
  },
],
  reviews: [
    { id: 1, name: "DIETRICH Nathalie", date: "14 janvier 2026", rating: 5, text: "Un Monsieur passionné, sérieux qui répond rapidement aux questions. Quant aux truffes, un seul mot : sublimes. Un parfum et un goût magnifique dès l'ouverture du colis." },
    { id: 2, name: "Perletti Caroline", date: "17 janvier 2026", rating: 5, text: "Voilà plusieurs fois que je fais appel aux services de Ramaztruffe. Ramazan est une personne de confiance et très compétent. Merciiiii !" },
    { id: 3, name: "Biry", date: "11 janvier 2026", rating: 5, text: "Client fidèle depuis longtemps, je n'ai jamais été déçu. La qualité est excellente et les commandes arrivent toujours à temps." },
  ],
  contact: {
    eyebrow: "Me contacter",
    title: "Parlons truffes",
    subtitle: "Pour une réservation, une commande ou simplement en savoir plus.",
    email: "ramaztruffes@gmail.com",
    subjects: [
      "Initiation à la truffe à la mouche",
      "Initiation chien à la truffe",
      "Achat de truffes",
      "Technicien trufficole",
      "Autres demandes",
    ],
  },
};

// ── Animation variants ──
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={homeData.hero.image}
            alt="Forêt trufficole"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-forest-deep/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-28 pb-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="section-eyebrow text-sage-light">
              {homeData.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.05] mb-6"
            >
              {homeData.hero.title}
              <br />
              <em className="text-sage-light italic">{homeData.hero.titleItalic}</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-cream/70 text-lg leading-relaxed mb-10 max-w-lg font-body font-light"
            >
              {homeData.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
              <Link href={homeData.hero.cta.href} className="btn-primary">
                {homeData.hero.cta.label}
                <span>→</span>
              </Link>
              <Link href="#contact" className="btn-outline border-cream/40 text-cream hover:bg-cream hover:text-forest-deep">
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-cream/40 text-xs tracking-widest uppercase font-body">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} className="section-eyebrow">
              {homeData.about.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl text-forest-deep leading-tight mb-8"
            >
              {homeData.about.title}
            </motion.h2>
            {homeData.about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="text-forest/70 leading-relaxed mb-4 font-body"
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4"
          >
            {homeData.about.stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-cream-dark rounded-3xl p-8 flex flex-col gap-2 hover:bg-sage-light/30 transition-colors duration-300"
              >
                <span className="font-display text-5xl text-forest-dark">{stat.value}</span>
                <span className="text-xs tracking-widest uppercase text-forest/60 font-body font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── SOCIAL ── */}
      <section className="bg-forest-deep section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="section-eyebrow text-sage justify-center">
              {homeData.social.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl text-cream mb-4"
            >
              {homeData.social.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-cream/50 font-body mb-12 max-w-md mx-auto">
              {homeData.social.subtitle}
            </motion.p>
            <motion.div
              variants={stagger}
              className="flex flex-wrap justify-center gap-4"
            >
              {homeData.social.links.map((link) => (
                <motion.a
                  key={link.label}
                  variants={fadeUp}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-cream font-body text-sm font-medium tracking-wide hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTOS ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {homeData.photos.map((photo, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl aspect-[4/3] group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-forest-deep/20 group-hover:bg-forest-deep/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="bg-cream-dark section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-eyebrow justify-center">
              Ils témoignent
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl text-forest-deep"
            >
              Les avis de mes clients
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {homeData.reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                className="bg-cream rounded-3xl p-8 flex flex-col gap-4 hover:shadow-lg hover:shadow-forest/5 transition-shadow duration-300"
              >
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-earth text-sm">★</span>
                  ))}
                </div>
                <p className="font-display text-lg text-forest-deep leading-relaxed italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-sage-light/50">
                  <p className="font-body font-medium text-sm text-forest">{review.name}</p>
                  <p className="font-body text-xs text-forest/50 mt-0.5">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link href="/avis" className="btn-outline">
              Voir tous les avis →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} className="section-eyebrow">
              {homeData.contact.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl text-forest-deep leading-tight mb-6"
            >
              {homeData.contact.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-forest/60 font-body leading-relaxed mb-8">
              {homeData.contact.subtitle}
            </motion.p>
            <motion.a
              variants={fadeUp}
              href={`mailto:${homeData.contact.email}`}
              className="btn-ghost text-base"
            >
              ✉ {homeData.contact.email} →
            </motion.a>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <motion.div variants={fadeUp}>
                <label className="label-field">Nom</label>
                <input type="text" className="input-field" placeholder="Jean Dupont" />
              </motion.div>
              <motion.div variants={fadeUp}>
                <label className="label-field">E-mail</label>
                <input type="email" className="input-field" placeholder="jean@email.com" />
              </motion.div>
            </div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Objet</label>
              <select className="input-field">
                {homeData.contact.subjects.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </motion.div>
            <motion.div variants={fadeUp}>
              <label className="label-field">Message</label>
              <textarea
                className="input-field resize-none"
                rows={5}
                placeholder="Bonjour, je souhaite..."
              />
            </motion.div>
            <motion.button variants={fadeUp} type="submit" className="btn-primary justify-center">
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
}