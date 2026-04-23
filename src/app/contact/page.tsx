'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { fireWhatsAppConversion } from '@/lib/gtag'

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={36} height={36} style={{ filter: 'brightness(1.1) saturate(1.2)' }} />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max Tv Player</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contactez <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">Nous sommes là pour vous aider. Choisissez le moyen de contact qui vous convient le mieux.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: MessageCircle, title: 'WhatsApp', detail: 'Cliquez pour nous écrire', desc: 'Moyen le plus rapide — réponse en moins d\'1 heure', color: 'text-violet-500' },
                { icon: Mail, title: 'Email', detail: 'contact@promaxtvbox.com', desc: 'Pour les demandes détaillées — réponse sous 24h', color: 'text-purple-500' },
                { icon: Phone, title: 'Téléphone', detail: 'Disponible sur demande', desc: 'Assistance téléphonique 9h – 21h', color: 'text-violet-500' },
                { icon: Clock, title: 'Horaires', detail: '7j/7 — 9h à 21h', desc: 'Support WhatsApp disponible 24h/24', color: 'text-purple-500' },
              ].map((c, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <c.icon className={`w-10 h-10 ${c.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-1">{c.title}</h3>
                  <p className="text-white font-medium mb-2">{c.detail}</p>
                  <p className="text-gray-400 text-sm">{c.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-violet-600/20 to-purple-500/20 border border-violet-600/50 rounded-2xl p-8 text-center">
              <MessageCircle className="w-12 h-12 text-violet-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-3">Commander via WhatsApp</h2>
              <p className="text-gray-300 mb-6">La façon la plus rapide de passer votre commande de <strong className="text-white">Pro Max TV Player</strong> à seulement <strong className="text-white">€34</strong>.</p>
              <a href="https://wa.me/12096768909?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pro%20Max%20Tv%20Player%2C%20pouvez-vous%20me%20donner%20plus%20d%27infos%20%3F" target="_blank" rel="noopener noreferrer" onClick={fireWhatsAppConversion} className="inline-block bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                Commander maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
