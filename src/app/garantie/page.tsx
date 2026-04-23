'use client'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, XCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const covered = [
  'Défauts de fabrication du Pro Max TV Player',
  'Pannes électroniques sans cause externe',
  'Dysfonctionnement de la télécommande',
  'Problèmes liés au port HDMI ou USB',
  'Défaillance de la carte Wi-Fi intégrée',
]

const notCovered = [
  'Dommages causés par une chute ou choc physique',
  'Dommages causés par l\'eau ou l\'humidité',
  'Modifications non autorisées de l\'appareil',
  'Dommages causés par une surtension électrique',
  'Usure normale de l\'appareil',
]

export default function Garantie() {
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
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-violet-500" />
              <h1 className="text-4xl font-bold">Garantie</h1>
            </div>
            <p className="text-gray-400 text-lg mb-12">
              Chaque <strong className="text-white">Pro Max TV Player</strong> est couvert par une garantie de <strong className="text-white">12 mois</strong> contre les défauts de fabrication, à compter de la date de réception.
            </p>

            <div className="bg-gradient-to-r from-violet-600/20 to-purple-500/20 border border-violet-600/50 rounded-2xl p-8 text-center mb-10">
              <p className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent mb-2">12 Mois</p>
              <p className="text-gray-300">de garantie constructeur sur votre Pro Max TV Player</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" /> Ce qui est couvert
                </h2>
                <ul className="space-y-3">
                  {covered.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4 text-red-400 flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Ce qui n'est pas couvert
                </h2>
                <ul className="space-y-3">
                  {notCovered.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold mb-3 text-violet-400">Activer votre garantie</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Pour faire valoir votre garantie, contactez notre service client via WhatsApp en indiquant votre numéro de commande et une description du problème rencontré avec votre Pro Max TV Player. Notre équipe technique analysera votre demande et vous proposera une solution sous 48h.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                <Phone className="w-4 h-4" /> Contacter le support
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
