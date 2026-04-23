'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const sections = [
  {
    title: '1. Acceptation des conditions',
    content: 'En commandant un Pro Max TV Player, vous acceptez les présentes conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas effectuer de commande.',
  },
  {
    title: '2. Produit',
    content: 'Le Pro Max TV Player est un appareil Android TV Box destiné à un usage domestique. Il est vendu avec tous les accessoires mentionnés sur la page produit (télécommande, câble HDMI, adaptateur secteur, guide de démarrage rapide).',
  },
  {
    title: '3. Commande et paiement',
    content: 'Les commandes sont passées via WhatsApp. Le paiement est effectué selon les modalités convenues avec notre équipe. Le prix affiché de €34 est le prix final toutes taxes comprises.',
  },
  {
    title: '4. Livraison',
    content: 'Nous nous engageons à expédier votre Pro Max TV Player dans les plus brefs délais. Les délais de livraison varient selon votre zone géographique. Vous serez informé du suivi de votre colis.',
  },
  {
    title: '5. Utilisation du produit',
    content: 'Le Pro Max TV Player doit être utilisé conformément aux lois en vigueur dans votre pays. Il est interdit d\'utiliser l\'appareil pour accéder à des contenus illicites. L\'utilisateur est seul responsable de l\'usage qu\'il fait de l\'appareil.',
  },
  {
    title: '6. Limitation de responsabilité',
    content: 'Pro Max TV Player ne saurait être tenu responsable des dommages indirects liés à l\'utilisation du produit, notamment la perte de données ou l\'interruption de service.',
  },
  {
    title: '7. Modification des conditions',
    content: 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entrent en vigueur dès leur publication sur ce site.',
  },
]

export default function ConditionsUtilisation() {
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
            <h1 className="text-4xl font-bold mb-2">Conditions d'Utilisation</h1>
            <p className="text-gray-500 mb-10">Dernière mise à jour : Avril 2026</p>

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
