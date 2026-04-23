'use client'
import { motion } from 'framer-motion'
import { Tv, Wifi, Monitor, Zap, Headphones, Shield, Gamepad2, Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: Monitor,
    title: 'Streaming 4K Ultra HD',
    desc: 'Le Pro Max TV Player supporte la résolution 4K avec HDR pour une qualité d\'image exceptionnelle. Regardez vos contenus préférés avec des couleurs vibrantes et des détails précis.',
  },
  {
    icon: Tv,
    title: 'Android TV 11',
    desc: 'Accédez à des milliers d\'applications depuis le Google Play Store : Netflix, YouTube, Prime Video, Disney+, Spotify et bien plus encore.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi Double Bande',
    desc: 'Connexion stable et rapide grâce au Wi-Fi 2,4 GHz et 5 GHz. Profitez d\'un streaming sans interruption même avec plusieurs appareils connectés.',
  },
  {
    icon: Zap,
    title: 'Performance Quad-Core',
    desc: 'Le processeur Quad-Core Édition 2026 garantit des transitions fluides entre les applications et une expérience sans lag.',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Android',
    desc: 'Jouez aux meilleurs jeux Android directement sur votre TV grâce à la puissance du Pro Max TV Player et son GPU intégré.',
  },
  {
    icon: Download,
    title: '16 Go de Stockage',
    desc: 'Installez autant d\'applications que vous voulez. Le stockage peut également être étendu via une carte microSD.',
  },
  {
    icon: Headphones,
    title: 'Son Dolby Audio',
    desc: 'Profitez d\'un son immersif avec le support Dolby Audio pour une expérience cinéma complète depuis votre salon.',
  },
  {
    icon: Shield,
    title: 'Sécurité Google',
    desc: 'Android TV intègre les protections Google Play Protect pour garder votre appareil et vos données en sécurité.',
  },
]

export default function Fonctionnalites() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={36} height={36} style={{ filter: 'brightness(1.1) saturate(1.2)' }} />
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max Tv Player</span>
            </Link>
            <Link href="/#order" className="bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all">Commander</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fonctionnalités du <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">Découvrez tout ce que le Pro Max TV Player peut faire pour votre divertissement quotidien.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                >
                  <f.icon className="w-10 h-10 text-violet-500 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a href="https://wa.me/12096768909?text=Bonjour%2C%20je%20voudrais%20commander%20le%20Pro%20Max%20TV%20Player" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                Commander votre Pro Max TV Player — €34
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-6 border-t border-slate-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Pro Max Tv Player. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
