'use client'
import { motion } from 'framer-motion'
import { PackageCheck, RefreshCw, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PolitiqueRetour() {
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
            <h1 className="text-4xl font-bold mb-4">Politique de Retour</h1>
            <p className="text-gray-400 text-lg mb-12">Votre satisfaction est notre priorité. Si votre <strong className="text-white">Pro Max TV Player</strong> ne vous convient pas, voici notre politique de retour.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Clock, title: '14 jours', desc: 'Délai pour retourner votre produit à compter de la réception', color: 'text-violet-500' },
                { icon: PackageCheck, title: 'État original', desc: 'Le produit doit être retourné dans son emballage d\'origine, non utilisé', color: 'text-purple-500' },
                { icon: RefreshCw, title: 'Remboursement', desc: 'Remboursement complet sous 5 à 7 jours ouvrables après réception du retour', color: 'text-violet-500' },
                { icon: CheckCircle, title: 'Échange gratuit', desc: 'En cas de défaut de fabrication, échange gratuit sans frais supplémentaires', color: 'text-purple-500' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              {[
                { title: 'Procédure de retour', content: 'Pour initier un retour, contactez notre service client via WhatsApp en indiquant votre numéro de commande et la raison du retour. Notre équipe vous guidera dans les étapes suivantes.' },
                { title: 'Conditions de retour', content: 'Le Pro Max TV Player doit être retourné dans son emballage d\'origine avec tous les accessoires inclus (télécommande, câble HDMI, adaptateur secteur). Tout produit endommagé par l\'utilisateur ne pourra pas être remboursé.' },
                { title: 'Frais de retour', content: 'En cas de retour pour raison personnelle, les frais d\'expédition sont à la charge du client. En cas de défaut de fabrication, les frais de retour sont entièrement pris en charge par Pro Max TV Player.' },
              ].map((s, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h2 className="text-xl font-bold mb-3 text-violet-400">{s.title}</h2>
                  <p className="text-gray-300 leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
