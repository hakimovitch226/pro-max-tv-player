export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-violet-600 to-purple-500 bg-clip-text text-transparent">
              Pro Max Tv Player
            </h3>
            <p className="text-gray-400 text-sm">Appareil de divertissement à domicile premium avec des performances et une connectivité avancées.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Produit</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/produit" className="hover:text-white transition-colors">Commander</a></li>
              <li><a href="/specifications" className="hover:text-white transition-colors">Spécifications</a></li>
              <li><a href="/fonctionnalites" className="hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="/assistance" className="hover:text-white transition-colors">Assistance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/a-propos" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de Confidentialité</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Mentions Légales</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/conditions-utilisation" className="hover:text-white transition-colors">Conditions d&apos;Utilisation</a></li>
              <li><a href="/politique-de-retour" className="hover:text-white transition-colors">Politique de Retour</a></li>
              <li><a href="/garantie" className="hover:text-white transition-colors">Garantie</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Pro Max Tv Player. Tous droits réservés. | Conçu pour un Divertissement à Domicile Premium.</p>
        </div>
      </div>
    </footer>
  )
}
