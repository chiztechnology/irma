import { Heart, Globe, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qui sommes-nous ?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              L'Institut régional de la Mode (IRMA) est une école innovante de formation professionnelle
              et artistique fondée au cœur de Kinshasa, en République Démocratique du Congo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Porté par Kobo-Art Fashion, IRMA a pour mission de former la nouvelle génération de créateurs,
              techniciens, entrepreneurs et chercheurs dans les métiers de la mode, du textile et du design.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nous conjuguons patrimoine culturel congolais, excellence académique et pratiques contemporaines
              durables pour offrir aux apprenants un parcours unique, à fort impact local et international.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-7 h-7 text-orange-500" />
              Notre Ambition
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Faire de Kinshasa une capitale éducative et créative de la mode en Afrique centrale et francophone.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <Heart className="w-12 h-12 text-amber-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Patrimoine Culturel</h3>
            <p className="text-gray-300">
              Valorisation de la richesse textile et vestimentaire congolaise
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <Globe className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Excellence Académique</h3>
            <p className="text-gray-100">
              Formation de haut niveau adaptée aux standards internationaux
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
            <TrendingUp className="w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold mb-3">Pratiques Durables</h3>
            <p className="text-gray-100">
              Innovation éco-responsable et économie circulaire
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
