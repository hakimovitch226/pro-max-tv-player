'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  Star, CheckCircle, Truck, Headphones, Lock,
  ShoppingCart, Cpu, HardDrive, Monitor, Wifi, Zap, User
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

const features = [
  { icon: Cpu, label: 'Processeur Quad-Core 2026', desc: 'Performances ultra-rapides sans lag' },
  { icon: HardDrive, label: '2 Go RAM + 16 Go ROM', desc: 'Multitâche fluide, stockage généreux' },
  { icon: Monitor, label: '4K Ultra HD + HDR', desc: 'Qualité image cinématographique' },
  { icon: Wifi, label: 'Wi-Fi Double Bande', desc: 'Streaming sans coupure 2,4/5 GHz' },
  { icon: Zap, label: 'Android TV dernière version', desc: 'Accès à toutes les applications' },
  { icon: CheckCircle, label: 'Plug & Play', desc: 'Prêt en 5 minutes chrono' },
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

        {/* Description & Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-center mb-4">Description du <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span></h2>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Tout ce qu'il faut savoir sur le ProMaxTV — la box Android la plus performante de 2026</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>Le <strong className="text-white">Pro Max TV Player</strong> est un Android TV Box de dernière génération conçu pour transformer n'importe quelle télévision en un centre de divertissement intelligent. Compact, puissant et ultra-facile à installer, il représente la solution idéale pour tous ceux qui souhaitent profiter d'un streaming 4K sans compromis.</p>
                  <p>Grâce à son processeur <strong className="text-white">Quad-Core Édition 2026</strong> couplé à <strong className="text-white">2 Go de RAM</strong> et <strong className="text-white">16 Go de stockage</strong>, le <strong className="text-white">ProMaxTV</strong> gère sans effort Netflix, YouTube, Prime Video, et des milliers d'applications Android.</p>
                  <p>Sa résolution <strong className="text-white">4K Ultra HD avec support HDR</strong> vous offre une qualité d'image cinématographique depuis votre canapé. Le Wi-Fi double bande (2,4 GHz et 5 GHz) garantit un streaming fluide sans coupure ni mise en mémoire tampon.</p>
                  <p>Compatible avec toutes les TV via HDMI, le <strong className="text-white">Pro Max Player</strong> se connecte en quelques secondes et fonctionne immédiatement. Livraison rapide partout en <strong className="text-white">France</strong>.</p>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="font-bold text-xl mb-5">Caractéristiques techniques</h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      ['Processeur', 'Quad-Core Édition 2026'],
                      ['RAM', '2 Go DDR3'],
                      ['Stockage', '16 Go eMMC'],
                      ['Résolution', '4K Ultra HD (3840×2160) + HDR'],
                      ['Wi-Fi', '2,4 GHz + 5 GHz double bande'],
                      ['Système', 'Android TV'],
                      ['Ports', 'HDMI 2.0, USB 2.0 ×2, AV'],
                      ['Bluetooth', '4.0'],
                      ['Alimentation', '5V / 2A'],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span className="text-gray-400">{label}</span>
                        <span className="text-white font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {features.map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
                    <div className="bg-violet-600/20 rounded-lg p-2.5 h-fit">
                      <Icon className="w-5 h-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-gray-400 text-xs mt-1">{desc}</p>
                    </div>
                  </div>
                ))}
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
