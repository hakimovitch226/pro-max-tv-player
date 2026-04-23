'use client'

import { motion } from 'framer-motion'
import { Cpu, HardDrive, Zap, Wifi, CheckCircle, Truck, Headphones, Lock, Phone, Monitor } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function Home() {
  const inTheBox = [
    'Appareil Pro Max Tv Player',
    'Télécommande avec Piles',
    'Câble HDMI',
    'Adaptateur Secteur',
    'Guide de Démarrage Rapide',
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Pro Max Tv Player Logo"
                width={40}
                height={40}
                style={{ filter: 'brightness(1.1) saturate(1.2)' }}
              />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                Pro Max Tv Player
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transformez votre divertissement à domicile avec{' '}
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                  Pro Max Tv Player
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Profitez d'un streaming 4K fluide et de performances ultra-rapides avec le processeur Quad-Core Édition 2026.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="https://wa.me/12096768909?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pro%20Max%20Tv%20Player%2C%20pouvez-vous%20me%20donner%20plus%20d%27infos%20%3F" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
                  Commander via WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Product image — circular design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[480px] lg:h-[480px]">
                {/* Outer glow ring */}
                <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-br from-violet-600/30 to-purple-500/10 blur-2xl" />
                {/* Rotating border ring */}
                <motion.div
                  className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full border-2 border-violet-500/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 70%, rgba(139,92,246,0.6) 100%)',
                    borderRadius: '50%',
                  }}
                />
                {/* Static inner ring */}
                <div className="absolute w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full border border-purple-500/20" />
                {/* Image circle */}
                <div className="relative w-[230px] h-[230px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 border-violet-600/60 shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                  <img
                    src="/Promaxtvbox.PNG"
                    alt="Pro Max Tv Player 2026"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Specs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Performances Exceptionnelles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Cpu className="w-14 h-14 text-violet-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Processeur Quad-Core</h3>
              <p className="text-gray-400 mb-3">Processeur Édition 2026 ultra-rapide pour un multitâche fluide et des performances d'application optimales</p>
              <p className="text-sm text-purple-400">⚡ Performance Sans Lag</p>
            </motion.div>

            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <HardDrive className="w-14 h-14 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">16 Go de Stockage</h3>
              <p className="text-gray-400 mb-3">Installez toutes vos applications de divertissement préférées et streamez sans limites</p>
              <p className="text-sm text-purple-400">📱 Applications Illimitées</p>
            </motion.div>

            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Monitor className="w-14 h-14 text-violet-500 mb-4" />
              <h3 className="text-2xl font-bold mb-3">4K Ultra HD</h3>
              <p className="text-gray-400 mb-3">Résolution 4K cristalline avec support HDR pour une expérience visuelle immersive</p>
              <p className="text-sm text-purple-400">🎬 Qualité Cinéma</p>
            </motion.div>
          </div>

          {/* 2GB RAM highlight */}
          <motion.div
            className="mt-12 bg-gradient-to-r from-violet-600/20 to-purple-500/20 border border-violet-600/50 rounded-2xl p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <Zap className="w-10 h-10 text-purple-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-1">Mémoire RAM 2 Go</h3>
                <p className="text-gray-300">Multitâche fluide sans lag ni plantage. Passez d'une application à l'autre instantanément.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Connectivity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Connectivité Transparente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Wifi className="w-10 h-10 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Wi-Fi Double Bande</h3>
                    <p className="text-gray-400">Connectivité ultra-rapide 2,4 GHz et 5 GHz pour un streaming sans mise en mémoire tampon.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="w-10 h-10 text-violet-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Installation Facile Plug & Play</h3>
                    <p className="text-gray-400">Connectez à la TV et à l'alimentation, choisissez votre réseau Wi-Fi et commencez à streamer en quelques minutes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle className="w-10 h-10 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Options de Connectivité Multiples</h3>
                    <p className="text-gray-400">Ports HDMI, USB et support Ethernet pour une compatibilité maximale avec votre installation.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Installation Instantanée</h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex gap-3">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</span>
                  <span>Connectez l'HDMI à votre TV</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</span>
                  <span>Branchez l'adaptateur secteur</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</span>
                  <span>Sélectionnez votre réseau Wi-Fi</span>
                </li>
                <li className="flex gap-3">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</span>
                  <span>Commencez à profiter de votre divertissement</span>
                </li>
              </ol>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Offer Section */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-8">Pro Max Tv Player 2026</h2>

            {/* Price */}
            <div className="text-center mb-10">
              <p className="text-gray-400 text-lg mb-2">Disponible Maintenant</p>
              <div className="text-6xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
                €34
              </div>
            </div>

            {/* In the Box */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-6"></h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inTheBox.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://wa.me/12096768909?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pro%20Max%20Tv%20Player%2C%20pouvez-vous%20me%20donner%20plus%20d%27infos%20%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-5 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-6 h-6" />
              Commander via WhatsApp
            </motion.a>

            {/* Features list below button */}
            <div className="mt-8 pt-8 border-t border-slate-700 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <Truck className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Livraison Rapide & Sécurisée</p>
              </div>
              <div>
                <Headphones className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Support Client 24h/24</p>
              </div>
              <div>
                <Lock className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Paiement Sécurisé</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pourquoi Choisir Pro Max Tv Player</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Truck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Livraison Rapide</h3>
              <p className="text-gray-400">Expédition rapide et fiable à votre porte. Suivez votre commande en temps réel.</p>
            </motion.div>

            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Headphones className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Support Technique</h3>
              <p className="text-gray-400">Équipe d'assistance experte disponible 24h/24 et 7j/7 pour vous aider à l'installation et au dépannage.</p>
            </motion.div>

            <motion.div
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Lock className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Paiement Sécurisé</h3>
              <p className="text-gray-400">Paiement 100% sécurisé avec chiffrement SSL et garantie de protection de l'acheteur.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Qu'est-ce que le <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span> ?
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Le <strong className="text-white">Pro Max TV Player</strong> est un Android TV Box de dernière génération conçu pour transformer n'importe quelle télévision en un centre de divertissement intelligent. Grâce à son processeur <strong className="text-white">Quad-Core Édition 2026</strong>, il offre une fluidité exceptionnelle pour regarder des films, jouer à des jeux et utiliser vos applications préférées.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Avec le <strong className="text-white">Pro Max TV Player</strong>, accédez instantanément à Netflix, YouTube, Prime Video, et des milliers d'applications Android. Sa résolution <strong className="text-white">4K Ultra HD</strong> avec support HDR vous garantit une qualité d'image cinématographique depuis votre canapé.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Compact, puissant et facile à configurer, le <strong className="text-white">Pro Max TV Player</strong> est la solution idéale pour profiter d'un divertissement illimité à domicile. Compatible avec toutes les télévisions via HDMI, il se connecte en quelques secondes et fonctionne immédiatement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
