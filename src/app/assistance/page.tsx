'use client'
import { motion } from 'framer-motion'
import { Phone, Mail, MessageCircle, BookOpen, Wifi, Monitor, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

const faqs = [
  {
    q: 'Comment configurer mon Pro Max TV Player ?',
    a: 'Branchez le câble HDMI à votre TV, connectez l\'adaptateur secteur, allumez l\'appareil, sélectionnez votre réseau Wi-Fi et vous êtes prêt. La configuration prend moins de 5 minutes.',
  },
  {
    q: 'Mon Pro Max TV Player est compatible avec quelle TV ?',
    a: 'Le Pro Max TV Player est compatible avec toutes les télévisions disposant d\'un port HDMI, qu\'elles soient récentes ou anciennes.',
  },
  {
    q: 'Puis-je installer mes applications de divertissement sur le Pro Max TV Player ?',
    a: 'Oui, toutes vos applications de divertissement préférées sont disponibles et compatibles via le Google Play Store.',
  },
  {
    q: 'Comment mettre à jour le Pro Max TV Player ?',
    a: 'Les mises à jour se font automatiquement via Wi-Fi. Vous pouvez également vérifier manuellement dans Paramètres > Système > Mise à jour.',
  },
  {
    q: 'Que faire si le Pro Max TV Player ne se connecte pas au Wi-Fi ?',
    a: 'Redémarrez l\'appareil et votre routeur. Vérifiez que vous entrez le bon mot de passe. Si le problème persiste, contactez notre support via WhatsApp.',
  },
  {
    q: 'Quelle est la garantie du Pro Max TV Player ?',
    a: 'Le Pro Max TV Player est garanti 12 mois contre les défauts de fabrication. Consultez notre page Garantie pour plus de détails.',
  },
]

export default function Assistance() {
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
              Assistance <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">Notre équipe est disponible 24h/24 pour vous aider avec votre Pro Max TV Player.</p>

            {/* Contact options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { icon: MessageCircle, title: 'WhatsApp', desc: 'Réponse en moins d\'1 heure', color: 'text-violet-500' },
                { icon: Mail, title: 'Email', desc: 'Réponse sous 24h', color: 'text-purple-500' },
                { icon: Phone, title: 'Téléphone', desc: 'Disponible 9h – 21h', color: 'text-violet-500' },
              ].map((c, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center">
                  <c.icon className={`w-10 h-10 ${c.color} mx-auto mb-3`} />
                  <h3 className="font-bold text-lg mb-1">{c.title}</h3>
                  <p className="text-gray-400 text-sm">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                >
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400 leading-relaxed">{faq.a}</p>
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
