'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Star, CheckCircle, Truck, Headphones, Lock,
  ShoppingCart, User
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { fireWhatsAppConversion } from '@/lib/gtag'

const WHATSAPP_NUMBER = '12096768909'

const reviews = [
  {
    name: 'Thomas M.',
    city: 'Paris',
    rating: 5,
    date: 'Avril 2026',
    text: 'Excellent produit ! La qualité d\'image en 4K est incroyable. Livraison rapide et emballage soigné. Je recommande vivement le Pro Max TV Player.',
  },
  {
    name: 'Isabelle R.',
    city: 'Lyon',
    rating: 5,
    date: 'Mars 2026',
    text: 'ProMaxTV fonctionne parfaitement avec ma TV. Installation simple en 5 minutes. Netflix, YouTube, tout marche sans lag. Très satisfaite !',
  },
  {
    name: 'Nicolas D.',
    city: 'Marseille',
    rating: 5,
    date: 'Mars 2026',
    text: 'Le Pro Max Player est vraiment top. Processeur rapide, pas de coupure pendant le streaming. Support client très réactif et disponible.',
  },
  {
    name: 'Sophie L.',
    city: 'Bordeaux',
    rating: 4,
    date: 'Février 2026',
    text: 'Très bon appareil pour le prix. La qualité 4K est au rendez-vous. Mon mari adore regarder le foot en HD sans aucun problème.',
  },
  {
    name: 'Antoine B.',
    city: 'Toulouse',
    rating: 5,
    date: 'Février 2026',
    text: 'Le meilleur TV Box que j\'ai eu. Pro Max Tv Player répond parfaitement à mes attentes. Rapide, fluide, et compatible avec toutes mes applications.',
  },
  {
    name: 'Camille P.',
    city: 'Nice',
    rating: 5,
    date: 'Janvier 2026',
    text: 'Livraison en 48h, appareil nickel ! La 4K Ultra HD c\'est magnifique. Je l\'ai offert à mes parents et ils sont ravis du Pro Max TV Player.',
  },
]


function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`} />
      ))}
    </div>
  )
}

export default function ProductPage() {
  const router = useRouter()
  const [form, setForm] = useState({ nom: '', telephone: '', ville: '', quantite: '1', note: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.nom.trim()) e.nom = 'Veuillez entrer votre nom'
    if (!form.telephone.trim()) e.telephone = 'Veuillez entrer votre numéro'
    if (!form.ville.trim()) e.ville = 'Veuillez entrer votre ville'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    fireWhatsAppConversion()
    const qte = parseInt(form.quantite) || 1
    const total = qte * 34
    const msg =
      `Bonjour%2C%20je%20souhaite%20commander%20le%20Pro%20Max%20TV%20Player%20%3A%0A%0A` +
      `%F0%9F%91%A4%20Nom%20%3A%20${encodeURIComponent(form.nom)}%0A` +
      `%F0%9F%93%B1%20T%C3%A9l%C3%A9phone%20%3A%20${encodeURIComponent(form.telephone)}%0A` +
      `%F0%9F%8F%99%EF%B8%8F%20Ville%20%3A%20${encodeURIComponent(form.ville)}%0A` +
      `%F0%9F%93%A6%20Quantit%C3%A9%20%3A%20${qte}%20appareil${qte > 1 ? 's' : ''}%0A` +
      `%F0%9F%92%B0%20Total%20%3A%20${total}%E2%82%AC` +
      (form.note ? `%0A%F0%9F%93%9D%20Note%20%3A%20${encodeURIComponent(form.note)}` : '')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
    router.push('/merci')
  }

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Pro Max Tv Player Logo" width={40} height={40}
                style={{ filter: 'brightness(1.1) saturate(1.2)' }} />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Pro Max Tv Player
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-12">

        {/* Hero: Photo + Info */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Single product image */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <img
                  src="/Promaxtvbox.PNG"
                  alt="Pro Max TV Player - Android TV Box 4K France"
                  className="w-full h-full object-contain p-8"
                />
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">Android TV Box • Édition 2026</p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
                Pro Max TV Player
                <span className="block text-xl font-normal text-gray-400 mt-1">ProMaxTV — Pro Max Player</span>
              </h1>

              {/* Rating summary */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-yellow-400 font-bold">{avgRating}</span>
                <span className="text-gray-400 text-sm">({reviews.length} avis vérifiés)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">€34</span>
                <span className="text-gray-400 ml-3 text-sm">Livraison incluse en France</span>
              </div>

              {/* In the box */}
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
                <p className="font-semibold mb-3 text-sm text-gray-300 uppercase tracking-wider">Contenu de la boîte</p>
                <ul className="space-y-2">
                  {['Appareil Pro Max Tv Player','Télécommande avec Piles','Câble HDMI','Adaptateur Secteur','Guide de Démarrage Rapide'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-5 h-5 text-purple-400" />
                  <span className="text-xs text-gray-400">Livraison France</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Headphones className="w-5 h-5 text-purple-400" />
                  <span className="text-xs text-gray-400">Support 24/7</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Lock className="w-5 h-5 text-purple-400" />
                  <span className="text-xs text-gray-400">Paiement sécurisé</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Order Form — BEFORE description */}
        <section id="commander" className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-center mb-2">Commander le Pro Max TV Player</h2>
              <p className="text-center text-gray-400 mb-8">Remplissez le formulaire et nous vous contactons pour confirmer votre livraison en France</p>

              <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Nom complet <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                    placeholder="Ex : Jean Dupont"
                    className={`w-full bg-slate-800 border ${errors.nom ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors`}
                  />
                  {errors.nom && <p className="text-red-400 text-xs mt-1">{errors.nom}</p>}
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Numéro de téléphone <span className="text-red-400">*</span></label>
                  <input
                    type="tel"
                    value={form.telephone}
                    onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
                    placeholder="Ex : 06 12 34 56 78"
                    className={`w-full bg-slate-800 border ${errors.telephone ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors`}
                  />
                  {errors.telephone && <p className="text-red-400 text-xs mt-1">{errors.telephone}</p>}
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Ville / Adresse <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={form.ville}
                    onChange={e => setForm(f => ({ ...f, ville: e.target.value }))}
                    placeholder="Ex : Paris, Lyon, Marseille..."
                    className={`w-full bg-slate-800 border ${errors.ville ? 'border-red-500' : 'border-slate-700'} rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors`}
                  />
                  {errors.ville && <p className="text-red-400 text-xs mt-1">{errors.ville}</p>}
                </div>

                {/* Quantité */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Quantité</label>
                  <select
                    value={form.quantite}
                    onChange={e => setForm(f => ({ ...f, quantite: e.target.value }))}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500 transition-colors">
                    {[1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n} appareil{n > 1 ? 's' : ''} — €{n * 34}</option>
                    ))}
                  </select>
                </div>

                {/* Note */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Message (optionnel)</label>
                  <textarea
                    value={form.note}
                    onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                    placeholder="Questions, demandes spéciales..."
                    rows={3}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  />
                </div>

                {/* Price summary */}
                <div className="bg-violet-600/10 border border-violet-600/30 rounded-xl px-5 py-4 flex justify-between items-center">
                  <span className="text-gray-300">Total</span>
                  <span className="text-2xl font-bold text-violet-400">€{(parseInt(form.quantite) || 1) * 34}</span>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-purple-500 text-white py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30">
                  <ShoppingCart className="w-6 h-6" />
                  Commander
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Description & Experience */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto space-y-20">

            {/* Hook */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Tout ce que vous aimez regarder.{' '}
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Enfin réuni en un seul endroit.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Imaginez une soirée parfaite : votre film préféré en qualité cinéma, le match de votre équipe sans coupure, les dessins animés adorés de vos enfants… tout ça sur votre TV, sans chercher, sans attendre. C'est exactement ce que le <strong className="text-white">Pro Max TV Player</strong> rend possible.
              </p>
            </motion.div>

            {/* Experience cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h3 className="text-2xl font-bold text-center mb-8">Une expérience pensée pour toute la famille</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { emoji: '⚽', title: 'Sport en direct', desc: 'Tous vos matchs et événements sportifs, en temps réel, sans jamais rater une mi-temps ni une action.' },
                  { emoji: '🎬', title: 'Cinéma & Séries', desc: 'Les dernières sorties, les séries dont tout le monde parle — vivez-les depuis votre canapé en 4K.' },
                  { emoji: '👨‍👩‍👧‍👦', title: 'Pour toute la famille', desc: 'Dessins animés pour les petits, divertissement pour les grands. Chacun trouve ce qu\'il cherche.' },
                  { emoji: '🌍', title: 'Contenus du monde entier', desc: 'Programmes internationaux, culture et divertissement venus des quatre coins du globe.' },
                  { emoji: '🎭', title: 'Humour & Divertissement', desc: 'Spectacles, émissions, variety shows — de quoi passer des soirées inoubliables en famille ou entre amis.' },
                  { emoji: '📺', title: 'Toujours disponible', desc: 'À la demande, quand vous voulez, aussi souvent que vous voulez. Votre programme, vos horaires.' },
                ].map(({ emoji, title, desc }) => (
                  <div key={title} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-3xl mb-4 block">{emoji}</span>
                    <h4 className="font-bold text-lg mb-2">{title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why it's different */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <h3 className="text-2xl font-bold text-white">Pas juste un appareil. Une nouvelle façon de regarder la TV.</h3>
                  <p>
                    Le <strong className="text-white">Pro Max TV Player</strong> ne se contente pas de diffuser du contenu — il transforme radicalement l'expérience. Fini les soirées à zapper sans rien trouver. Fini les plateformes limitées. Avec le <strong className="text-white">ProMaxTV</strong>, l'offre s'adapte à vos envies, pas l'inverse.
                  </p>
                  <p>
                    Fluide, silencieux, et d'une simplicité désarmante. Même ceux qui ne sont pas à l'aise avec la technologie le maîtrisent en quelques minutes. Une seule télécommande, et vous avez tout sous la main.
                  </p>
                  <p>
                    Votre entourage vous demandera comment vous faites. La réponse est simple : le <strong className="text-white">Pro Max Player</strong>, livré directement chez vous en France.
                  </p>
                </div>

                {/* Tech specs — secondary, compact */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-5 text-gray-300 uppercase tracking-wider text-sm">Fiche technique</h4>
                  <ul className="space-y-3 text-sm">
                    {[
                      ['Processeur', 'Quad-Core Édition 2026'],
                      ['RAM', '2 Go DDR3'],
                      ['Stockage', '16 Go eMMC'],
                      ['Résolution', '4K Ultra HD + HDR'],
                      ['Wi-Fi', '2,4 GHz + 5 GHz'],
                      ['Système', 'Android TV'],
                      ['Ports', 'HDMI 2.0, USB ×2'],
                      ['Bluetooth', '4.0'],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between border-b border-slate-800 pb-2.5 last:border-0 last:pb-0">
                        <span className="text-gray-500">{label}</span>
                        <span className="text-white font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Simple install banner */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="bg-gradient-to-r from-violet-600/20 to-purple-500/10 border border-violet-600/30 rounded-2xl p-8 text-center">
                <p className="text-2xl font-bold mb-3">Prêt en moins de 5 minutes</p>
                <p className="text-gray-300 max-w-xl mx-auto">
                  Branchez le câble HDMI, connectez le Wi-Fi, et c'est parti. Aucune installation complexe, aucune configuration technique. Votre salon se transforme instantanément.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Customer Reviews */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-center mb-2">Avis Clients</h2>
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-400 fill-yellow-400" />)}
                </div>
                <span className="text-2xl font-bold text-yellow-400">{avgRating}/5</span>
                <span className="text-gray-400">— {reviews.length} avis vérifiés</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((r, i) => (
                  <motion.div key={i}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-violet-600/20 rounded-full p-2">
                          <User className="w-4 h-4 text-violet-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.city}, France</p>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{r.date}</span>
                    </div>
                    <StarRating rating={r.rating} />
                    <p className="text-gray-300 text-sm mt-3 leading-relaxed">{r.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
