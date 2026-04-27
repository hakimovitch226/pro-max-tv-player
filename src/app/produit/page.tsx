'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Star, CheckCircle, Truck, Headphones, Lock,
  ShoppingCart, Phone, ChevronLeft, ChevronRight,
  Cpu, HardDrive, Monitor, Wifi, Zap, User
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { fireWhatsAppConversion } from '@/lib/gtag'

const WHATSAPP_NUMBER = '12096768909'

const images = ['/Promaxtvbox.PNG', '/tv box android.png']

const reviews = [
  {
    name: 'Karim B.',
    city: 'Casablanca',
    rating: 5,
    date: 'Avril 2026',
    text: 'Excellent produit ! La qualité d\'image en 4K est incroyable. Livraison rapide et emballage soigné. Je recommande vivement le Pro Max TV Player.',
  },
  {
    name: 'Fatima Z.',
    city: 'Rabat',
    rating: 5,
    date: 'Mars 2026',
    text: 'ProMaxTV fonctionne parfaitement avec ma TV. Installation simple en 5 minutes. Netflix, YouTube, tout marche sans lag. Très satisfaite !',
  },
  {
    name: 'Youssef M.',
    city: 'Marrakech',
    rating: 5,
    date: 'Mars 2026',
    text: 'Le Pro Max Player est vraiment top. Processeur rapide, pas de coupure pendant le streaming. Support client très réactif sur WhatsApp.',
  },
  {
    name: 'Nadia R.',
    city: 'Fès',
    rating: 4,
    date: 'Février 2026',
    text: 'Très bon appareil pour le prix. La qualité 4K est au rendez-vous. Mon mari adore regarder le foot en qualité HD sans aucun problème.',
  },
  {
    name: 'Omar S.',
    city: 'Agadir',
    rating: 5,
    date: 'Février 2026',
    text: 'Le meilleur TV Box que j\'ai eu. Pro Max Tv Player répond parfaitement à mes attentes. Rapide, fluide, et compatible avec toutes mes applications.',
  },
  {
    name: 'Leila H.',
    city: 'Tanger',
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
        <Star
          key={s}
          className={`w-4 h-4 ${s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'}`}
        />
      ))}
    </div>
  )
}

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [form, setForm] = useState({ nom: '', telephone: '', ville: '', quantite: '1', note: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const prevImage = () => setCurrentImage((i) => (i === 0 ? images.length - 1 : i - 1))
  const nextImage = () => setCurrentImage((i) => (i === images.length - 1 ? 0 : i + 1))

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
    const msg = `Bonjour, je souhaite commander le Pro Max TV Player :%0A%0A` +
      `👤 Nom : ${encodeURIComponent(form.nom)}%0A` +
      `📱 Téléphone : ${encodeURIComponent(form.telephone)}%0A` +
      `🏙️ Ville : ${encodeURIComponent(form.ville)}%0A` +
      `📦 Quantité : ${qte} appareil(s)%0A` +
      `💰 Total : ${total}€` +
      (form.note ? `%0A📝 Note : ${encodeURIComponent(form.note)}` : '')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
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

        {/* Hero: Gallery + Info */}
        <section className="px-4 sm:px-6 lg:px-8 py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
                <img
                  src={images[currentImage]}
                  alt={`Pro Max TV Player - vue ${currentImage + 1}`}
                  className="w-full h-full object-contain p-8"
                />
                {images.length > 1 && (
                  <>
                    <button onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-violet-600 p-2 rounded-full transition-colors">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-800/80 hover:bg-violet-600 p-2 rounded-full transition-colors">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                <div className="absolute bottom-4 flex gap-2">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setCurrentImage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentImage ? 'bg-violet-500' : 'bg-slate-600'}`} />
                  ))}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3 mt-4">
                {images.map((src, i) => (
                  <button key={i} onClick={() => setCurrentImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${i === currentImage ? 'border-violet-500' : 'border-slate-700'}`}>
                    <img src={src} alt={`miniature ${i + 1}`} className="w-full h-full object-contain p-1 bg-slate-900" />
                  </button>
                ))}
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
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="text-yellow-400 font-bold">{avgRating}</span>
                <span className="text-gray-400 text-sm">({reviews.length} avis vérifiés)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">€34</span>
                <span className="text-gray-400 ml-3 text-sm">Livraison incluse</span>
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

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%2C%20je%20souhaite%20commander%20le%20Pro%20Max%20TV%20Player%2C%20pouvez-vous%20me%20confirmer%20la%20disponibilit%C3%A9%20%3F`}
                target="_blank" rel="noopener noreferrer" onClick={fireWhatsAppConversion}
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 mb-3">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Commander via WhatsApp
              </a>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 text-center mt-4">
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-5 h-5 text-purple-400" />
                  <span className="text-xs text-gray-400">Livraison rapide</span>
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

        {/* Description & Features */}
        <section className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-center mb-4">Description du <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span></h2>
              <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Tout ce qu'il faut savoir sur le ProMaxTV — la box Android la plus performante de 2026</p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>Le <strong className="text-white">Pro Max TV Player</strong> est un Android TV Box de dernière génération conçu pour transformer n'importe quelle télévision en un centre de divertissement intelligent. Compact, puissant et ultra-facile à installer, il représente la solution idéale pour tous ceux qui souhaitent profiter d'un streaming 4K sans compromis.</p>
                  <p>Grâce à son processeur <strong className="text-white">Quad-Core Édition 2026</strong> couplé à <strong className="text-white">2 Go de RAM</strong> et <strong className="text-white">16 Go de stockage</strong>, le <strong className="text-white">ProMaxTV</strong> gère sans effort Netflix, YouTube, Prime Video, et des milliers d'applications Android.</p>
                  <p>Sa résolution <strong className="text-white">4K Ultra HD avec support HDR</strong> vous offre une qualité d'image cinématographique depuis votre canapé. Le Wi-Fi double bande (2,4 GHz et 5 GHz) garantit un streaming fluide sans coupure ni mise en mémoire tampon.</p>
                  <p>Compatible avec toutes les TV via HDMI, le <strong className="text-white">Pro Max Player</strong> se connecte en quelques secondes et fonctionne immédiatement. Aucune compétence technique requise.</p>
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
        <section className="px-4 sm:px-6 lg:px-8 py-16">
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
                          <p className="text-xs text-gray-400">{r.city}</p>
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

        {/* Order Form */}
        <section id="commander" className="px-4 sm:px-6 lg:px-8 py-16 bg-slate-900/50 border-t border-slate-800">
          <div className="max-w-2xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold text-center mb-2">Commander le Pro Max TV Player</h2>
              <p className="text-center text-gray-400 mb-8">Remplissez le formulaire — votre commande sera envoyée directement via WhatsApp</p>

              <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Nom complet <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={form.nom}
                    onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                    placeholder="Ex : Mohammed Alami"
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
                    placeholder="Ex : Casablanca, Hay Hassani"
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
                  <label className="block text-sm font-medium text-gray-300 mb-1.5">Note (optionnel)</label>
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
                  <span className="text-gray-300">Total estimé</span>
                  <span className="text-2xl font-bold text-violet-400">€{(parseInt(form.quantite) || 1) * 34}</span>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Envoyer ma commande via WhatsApp
                </motion.button>

                <p className="text-center text-xs text-gray-500">
                  En cliquant, vous serez redirigé vers WhatsApp avec votre commande pré-remplie.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
