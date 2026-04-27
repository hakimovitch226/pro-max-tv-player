'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Home, Headphones } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
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

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center"
        >
          {/* Success icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-br from-violet-600/30 to-purple-500/20 rounded-full p-6 border border-violet-500/40">
              <CheckCircle className="w-20 h-20 text-violet-400" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Merci pour votre commande !
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 leading-relaxed"
          >
            Votre commande du <strong className="text-white">Pro Max TV Player</strong> a bien été reçue.
            Notre équipe va vous contacter très prochainement via WhatsApp pour confirmer votre livraison.
          </motion.p>

          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8 text-left"
          >
            <h2 className="font-bold text-lg mb-5 text-center">Prochaines étapes</h2>
            <ol className="space-y-4">
              <li className="flex gap-4 items-start">
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">1</span>
                <div>
                  <p className="font-semibold">Confirmation WhatsApp</p>
                  <p className="text-gray-400 text-sm">Nous vous contactons dans les 24h pour confirmer votre commande et votre adresse de livraison.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">2</span>
                <div>
                  <p className="font-semibold">Expédition rapide</p>
                  <p className="text-gray-400 text-sm">Votre Pro Max TV Player est expédié sous 24-48h en France métropolitaine.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">3</span>
                <div>
                  <p className="font-semibold">Profitez de votre box 4K !</p>
                  <p className="text-gray-400 text-sm">Installation en 5 minutes. Notre équipe est disponible pour vous accompagner.</p>
                </div>
              </li>
            </ol>
          </motion.div>

          {/* Support note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-8"
          >
            <Headphones className="w-4 h-4 text-purple-400" />
            <span>Support disponible 24h/24 — 7j/7</span>
          </motion.div>

          {/* Back home */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300">
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
