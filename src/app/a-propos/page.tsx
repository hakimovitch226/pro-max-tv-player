'use client'
import { motion } from 'framer-motion'
import { Target, Heart, Zap, Users, CheckCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function APropos() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de <span className="bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">Pro Max TV Player</span>
            </h1>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong className="text-white">Pro Max TV Player</strong> est une marque dédiée à révolutionner le divertissement à domicile. Nous croyons que chaque foyer mérite accès aux meilleures technologies de streaming sans dépenser une fortune.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Notre <strong className="text-white">Pro Max TV Player Édition 2026</strong> est le fruit d'années de recherche et développement pour offrir un produit alliant performance, simplicité et accessibilité. Conçu pour fonctionner avec toutes les télévisions, il transforme instantanément n'importe quel écran en un centre multimédia intelligent.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nous nous engageons à fournir un support client exceptionnel et des produits de haute qualité à des prix accessibles. Chaque <strong className="text-white">Pro Max TV Player</strong> est testé rigoureusement avant expédition pour garantir votre satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { icon: Target, title: 'Notre Mission', desc: 'Rendre le divertissement 4K accessible à tous grâce au Pro Max TV Player.', color: 'text-violet-500' },
                { icon: Heart, title: 'Notre Passion', desc: 'Créer des produits technologiques qui améliorent la vie quotidienne de nos clients.', color: 'text-purple-500' },
                { icon: Zap, title: 'Notre Expertise', desc: 'Spécialistes des Android TV Box depuis plusieurs années avec des milliers de clients satisfaits.', color: 'text-violet-500' },
                { icon: Users, title: 'Notre Communauté', desc: 'Une base de clients fidèles qui nous fait confiance pour leur divertissement au quotidien.', color: 'text-purple-500' },
              ].map((v, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <v.icon className={`w-10 h-10 ${v.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-2">{v.title}</h3>
                  <p className="text-gray-400">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Product section */}
            <motion.div
              className="bg-gradient-to-r from-violet-600/20 to-purple-500/20 border border-violet-600/50 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Notre Produit</h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 flex justify-center">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-violet-600/60 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                    <img src="/Promaxtvbox.PNG" alt="Pro Max TV Player" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Pro Max TV Player <span className="text-violet-400">Édition 2026</span></h3>
                  <p className="text-gray-300 mb-4">Android TV Box premium conçu pour transformer votre télévision en centre multimédia intelligent.</p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Processeur Quad-Core Édition 2026',
                      '2 Go de RAM — multitâche fluide',
                      '16 Go de stockage interne',
                      '4K Ultra HD + HDR',
                      'Wi-Fi Double Bande 2.4 & 5 GHz',
                    ].map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">€34</span>
                    <a
                      href="https://wa.me/12096768909?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pro%20Max%20Tv%20Player%2C%20pouvez-vous%20me%20donner%20plus%20d%27infos%20%3F"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-500 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      Commander sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
