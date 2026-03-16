"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const allReviews = [
  { id: 1, name: "Marcellin", date: "9 mars 2026", rating: 5, text: "Un grand merci pour les truffes, je recommande sans hésiter. Cordialement, Corinne." },
  { id: 2, name: "Duvivier Jérôme", date: "12 février 2026", rating: 5, text: "Merci pour la réactivité par email et pour la rapidité dans la livraison. Truffes de bonne qualité. Au top du top. Je recommanderai sans hésiter." },
  { id: 3, name: "Perletti Caroline", date: "17 janvier 2026", rating: 5, text: "Voilà plusieurs fois que je fais appel aux services de Ramaztruffe : achat de truffes, formation à la mouche, et des conseils. Je suis ravie. Ramazan est une personne de confiance et très compétent. Merciiiii !" },
  { id: 4, name: "DIETRICH Nathalie", date: "14 janvier 2026", rating: 5, text: "Un Monsieur passionné, sérieux qui répond rapidement aux questions. Quant aux truffes, un seul mot : sublimes. Un parfum et un goût magnifique dès l'ouverture du colis. Personne de confiance, vous pouvez commander sans problème !" },
  { id: 5, name: "Biry", date: "11 janvier 2026", rating: 5, text: "Client fidèle depuis longtemps, je n'ai jamais été déçu. La qualité des produits est excellente et les commandes arrivent toujours à temps. Bravo pour votre sérieux et votre travail." },
  { id: 6, name: "Sophie M.", date: "5 décembre 2025", rating: 5, text: "Première commande et je suis conquise ! Les truffes sont arrivées parfaitement emballées, l'arôme était incroyable dès l'ouverture. Je repasserai commande sans hésitation." },
  { id: 7, name: "Laurent B.", date: "20 novembre 2025", rating: 5, text: "Initiation à la mouche absolument fantastique. Ramazan est un passionné qui transmet son amour de la truffe avec une générosité rare. Une expérience inoubliable !" },
  { id: 8, name: "Isabelle T.", date: "3 octobre 2025", rating: 5, text: "Formation chien très bien structurée. Mon Labrador a progressé rapidement grâce aux méthodes bienveillantes et efficaces. Très professionnel et à l'écoute." },
  { id: 9, name: "Marc D.", date: "14 septembre 2025", rating: 4, text: "Très bonne expérience dans l'ensemble. Les truffes d'été étaient savoureuses et bien emballées. Je recommande vivement pour une première approche du monde trufficole." },
  { id: 10, name: "Françoise L.", date: "28 août 2025", rating: 5, text: "Je reviens chaque saison depuis 3 ans. La constance dans la qualité est remarquable. Ramazan est toujours disponible pour répondre à mes questions. Merci !" },
  { id: 11, name: "Pierre-Henri G.", date: "10 juillet 2025", rating: 5, text: "Magnifique journée d'initiation. L'approche pédagogique est excellente, on repart avec de vraies connaissances. La truffe n'aura plus de secrets pour moi !" },
  { id: 12, name: "Aurélie C.", date: "2 juin 2025", rating: 5, text: "Service impeccable, produits d'exception. Les truffes d'été ont sublimé nos risottos. Merci Ramazan pour cette qualité constante et votre disponibilité." },
];

const PER_PAGE = 6;

export default function AvisPage() {
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const totalPages = Math.ceil(allReviews.length / PER_PAGE);
  const reviews = allReviews.slice((page - 1) * PER_PAGE, page * PER_PAGE);

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
            {allReviews.length} avis clients
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight"
          >
            Les <em className="italic text-sage-light">Avis</em>
          </motion.h1>
        </div>
      </section>

      {/* ── WRITE REVIEW BUTTON ── */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 pt-14 md:pt-20">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="section-eyebrow">Témoignages</p>
            <h2 className="font-display text-3xl md:text-4xl text-forest-deep">
              Ce que disent <em className="italic text-forest">mes clients</em>
            </h2>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="btn-primary"
          >
            {showForm ? "Fermer" : "Écrire un avis"} {showForm ? "×" : "→"}
          </button>
        </div>

        {/* ── WRITE FORM ── */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-8 bg-cream-dark rounded-3xl p-8 grid md:grid-cols-2 gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div>
                  <label className="label-field">Nom *</label>
                  <input type="text" className="input-field" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label className="label-field">E-mail *</label>
                  <input type="email" className="input-field" placeholder="jean@email.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="label-field">Votre avis *</label>
                  <textarea
                    className="input-field resize-none"
                    rows={4}
                    placeholder="Partagez votre expérience..."
                  />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary w-full justify-center">
                    Envoyer mon avis
                  </button>
                </div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="section-padding max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={stagger}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                className="bg-cream-dark rounded-3xl p-7 flex flex-col gap-4 hover:shadow-lg hover:shadow-forest/5 transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-sm ${i < review.rating ? "text-earth" : "text-sage-light"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="font-display text-lg text-forest-deep leading-relaxed italic flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-sage-light/50 flex justify-between items-end">
                  <div>
                    <p className="font-body font-medium text-sm text-forest">{review.name}</p>
                    <p className="font-body text-xs text-forest/50 mt-0.5">{review.date}</p>
                  </div>
                  <span className="text-sage-light text-2xl font-display">❝</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="btn-outline disabled:opacity-30 disabled:cursor-not-allowed px-5 py-2.5 text-xs"
            >
              ← Précédent
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                    page === i + 1
                      ? "bg-forest text-cream"
                      : "bg-cream-dark text-forest hover:bg-sage-light/40"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="btn-outline disabled:opacity-30 disabled:cursor-not-allowed px-5 py-2.5 text-xs"
            >
              Suivant →
            </button>
          </div>
        )}
      </section>
    </>
  );
}