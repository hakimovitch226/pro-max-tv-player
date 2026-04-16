'use client'
import { motion } from 'framer-motion'
import { Cpu, HardDrive, Monitor, Wifi, Zap, Tv } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const specs = [
  { icon: Cpu, label: 'Processeur', value: 'Quad-Core 1.8 GHz — Édition 2026', color: 'text-violet-500' },
  { icon: Zap, label: 'RAM', value: '2 Go DDR3', color: 'text-purple-500' },
  { icon: HardDrive, label: 'Stockage', value: '16 Go eMMC (extensible via microSD)', color: 'text-violet-500' },
  { icon: Monitor, label: 'Résolution', value: '4K Ultra HD (3840×2160) — Support HDR', color: 'text-purple-500' },
  { icon: Wifi, label: 'Wi-Fi', value: 'Double bande 2,4 GHz & 5 GHz — 802.11ac', color: 'text-violet-500' },
  { icon: Tv, label: 'Système', value: 'Android TV 11', color: 'text-purple-500' },
  { icon: HardDrive, label: 'Connectique', value: 'HDMI 2.0 — 2× USB 2.0 — Port Ethernet — Micro SD', color: 'text-violet-500' },
  { icon: Zap, label: 'Alimentation', value: '5V / 2A via adaptateur inclus', color: 'text-purple-500' },
  { icon: Monitor, label: 'Bluetooth', value: 'Bluetooth 5.0', color: 'text-violet-500' },
  { icon: Cpu, label: 'GPU', value: 'Mali-G31 MP2', color: 'text-purple-500' },
]

export default function Specifications() {
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
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Spécifications du <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span>
            </h1>
            <p className="text-gray-400 text-lg mb-12">Toutes les caractéristiques techniques du Pro Max TV Player Édition 2026.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specs.map((s, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-4 items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <s.icon className={`w-8 h-8 ${s.color} flex-shrink-0 mt-1`} />
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{s.label}</p>
                    <p className="font-semibold text-white">{s.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-violet-600/20 to-purple-500/20 border border-violet-600/50 rounded-2xl p-8 text-center">
              <p className="text-lg text-gray-300 mb-4">Prêt à commander votre <strong className="text-white">Pro Max TV Player</strong> ?</p>
              <Link href="/#order" className="inline-block bg-gradient-to-r from-violet-600 to-purple-500 px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all">
                Commander maintenant — €34
              </Link>
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
