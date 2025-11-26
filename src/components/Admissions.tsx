import { Calendar, FileText, Lightbulb, MessageSquare, CheckCircle } from 'lucide-react';

interface AdmissionsProps {
  onRegister: () => void;
}

export function Admissions({ onRegister }: AdmissionsProps) {
  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Calendrier & Admissions
          </h2>
          <p className="text-xl text-gray-600">Rejoignez l'Institut</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200">
            <Calendar className="w-12 h-12 text-orange-500 mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Dates Importantes</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-gray-900 mb-1">Inscriptions</p>
                <p className="text-gray-700">Décembre & Juin</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <p className="font-semibold text-gray-900 mb-1">Démarrage des cours</p>
                <p className="text-gray-700">Janvier & Juillet</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <FileText className="w-12 h-12 text-amber-400 mb-6" />
            <h3 className="text-2xl font-bold mb-6">Conditions d'Admission</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Dossier de candidature complet</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageSquare className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Lettre de motivation</span>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>Portfolio (optionnel)</span>
              </li>
              <li className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Test de créativité ou entretien</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onRegister}
            className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-12 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Candidater maintenant
          </button>
        </div>
      </div>
    </section>
  );
}
