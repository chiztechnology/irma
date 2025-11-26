import { Clock, Award, Zap, ArrowRight} from 'lucide-react'

interface ProgramsProps {
  onOpenDetails : (program : string) => void;
}

export function Programs ({ onOpenDetails } : ProgramsProps){
  const longPrograms = [
    'Création de collection',
    'Patronnage',
    'Design Textile et Impression',
    'Management de Marque de Mode',
    'Production et évaluation produit',
    'Techniques de Confection',
    'Construire son identité de marque'
  ]

  const shortPrograms = [
    'Initiation au patronage et à la couture',
    'Techniques de broderie et finitions',
    'Éco-conception et upcycling',
    'Marketing digital appliqué à la mode',
    'Gestion d\'atelier'
  ]

  const digitalModules = [
    'DAO, Modélisation 3D (CLO3D, Illustrator, Photoshop)',
    'Création de portfolios numériques',
    'E-commerce et création de boutique en ligne'
  ]

  return (
    <section id="programs" className='py-24 bg-gradient-to-br from-gray-50 to-gray-100'>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programmes Académiques
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une offre de formation modulaire et certifiante, adaptée aux réalités du marché
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-amber-500 transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Formations Longues</h3>
            <p className="text-gray-600 mb-4 font-medium">6 à 12 mois</p>
            <p className="text-gray-700 mb-6">Formation certifiante complète pour une maîtrise approfondie</p>
            <ul className="space-y-3 mb-6">
              {longPrograms.map((program, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{program}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onOpenDetails('long')}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir les détails
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Formations Courtes</h3>
            <p className="text-gray-600 mb-4 font-medium">1 à 3 mois</p>
            <p className="text-gray-700 mb-6">Perfectionnement ciblé sur des compétences spécifiques</p>
            <ul className="space-y-3 mb-6">
              {shortPrograms.map((program, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{program}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onOpenDetails('short')}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir les détails
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-transparent hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
            <div className="bg-gradient-to-br from-slate-700 to-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Modules Numériques</h3>
            <p className="text-gray-600 mb-4 font-medium">Durée variable</p>
            <p className="text-gray-700 mb-6">Maîtrise des outils digitaux essentiels</p>
            <ul className="space-y-3 mb-6">
              {digitalModules.map((program, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
                  <span>{program}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => onOpenDetails('digital')}
              className="w-full bg-gradient-to-r from-slate-700 to-slate-900 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir les détails
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
