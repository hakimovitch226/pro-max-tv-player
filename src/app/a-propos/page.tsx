'use client'
import { motion } from 'framer-motion'
import { Target, Heart, Zap, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

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
            <Link href="/#order" className="bg-gradient-to-r from-violet-600 to-purple-500 px-5 py-2 rounded-full font-semibold text-sm hover:shadow-lg transition-all">Commander</Link>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </motion.div>
        </div>
      </main>

      <footer className="py-6 border-t border-slate-800 text-center text-gray-500 text-sm">
        <p>&copy; 2026 Pro Max Tv Player. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
