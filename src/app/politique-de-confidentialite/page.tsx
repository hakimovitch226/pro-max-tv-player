'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. Informations collectées',
    content: 'Lors de votre commande de Pro Max TV Player, nous collectons uniquement les informations nécessaires au traitement de votre commande : nom, adresse de livraison, numéro de téléphone et adresse email. Nous ne collectons aucune donnée de navigation ou de comportement d\'achat.',
  },
  {
    title: '2. Utilisation des données',
    content: 'Vos données personnelles sont utilisées exclusivement pour traiter et livrer votre commande de Pro Max TV Player, vous contacter en cas de question relative à votre commande, et vous envoyer des informations importantes concernant votre produit.',
  },
  {
    title: '3. Protection des données',
    content: 'Toutes vos données sont stockées de manière sécurisée avec un chiffrement SSL. Nous ne vendons, ne louons et ne partageons jamais vos informations personnelles avec des tiers à des fins commerciales.',
  },
  {
    title: '4. Cookies',
    content: 'Notre site utilise des cookies essentiels uniquement pour garantir le bon fonctionnement de la navigation. Aucun cookie publicitaire ou de suivi tiers n\'est utilisé.',
  },
  {
    title: '5. Vos droits',
    content: 'Conformément au RGPD, vous disposez d\'un droit d\'accès, de rectification et de suppression de vos données. Pour exercer ces droits, contactez-nous via WhatsApp ou email.',
  },
  {
    title: '6. Contact',
    content: 'Pour toute question relative à votre vie privée et au traitement de vos données personnelles par Pro Max TV Player, n\'hésitez pas à nous contacter via notre page Contact.',
  },
]

export default function PolitiqueConfidentialite() {
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
            <h1 className="text-4xl font-bold mb-2">Politique de Confidentialité</h1>
            <p className="text-gray-500 mb-10">Dernière mise à jour : Avril 2026</p>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Chez <strong className="text-white">Pro Max TV Player</strong>, la protection de vos données personnelles est une priorité. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.
            </p>

            <div className="space-y-6">
              {sections.map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <h2 className="text-xl font-bold mb-3 text-violet-400">{s.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{s.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
