import { Microscope, Lightbulb, Recycle, Globe } from 'lucide-react';

export function Research() {
  const axes = [
    {
      title: 'Histoire et transmission du vêtement traditionnel congolais',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Impact des matières premières locales et durables',
      icon: Recycle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Innovation textile (fibres alternatives, impression 3D, teinture naturelle)',
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Économie circulaire et modèle de production inclusif',
      icon: Microscope,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="research" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recherche & Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un laboratoire d'idées au service de la mode africaine
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            IRMA soutient la recherche appliquée, les projets collectifs, les prototypes textiles
            et les initiatives expérimentales dans l'univers de la mode. Nous collaborons avec des
            institutions artistiques, universités, maisons de couture, ONG et incubateurs créatifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {axes.map((axe, idx) => {
            const IconComponent = axe.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${axe.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed">{axe.title}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white">
          <Microscope className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Collaborons ensemble</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vous avez un projet innovant ? Une idée de recherche ? Contactez-nous pour explorer les possibilités de partenariat.
          </p>
        </div>
      </div>
    </section>
  );
}
