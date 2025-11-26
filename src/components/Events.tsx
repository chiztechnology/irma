import { Mic, Users, Sparkles, Clock } from 'lucide-react';

export function Events() {
  const events = [
    {
      title: 'Mode et patrimoine africain : une lecture contemporaine',
      type: 'Conférence',
      icon: Mic
    },
    {
      title: 'Stratégies pour une marque de mode durable',
      type: 'Masterclass',
      icon: Sparkles
    },
    {
      title: 'Digitalisation de la chaîne de production textile',
      type: 'Atelier',
      icon: Clock
    },
    {
      title: 'Femmes créatrices dans la mode en Afrique',
      type: 'Panel',
      icon: Users
    }
  ];

  return (
    <section id="events" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Conférences & Masterclass
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Apprendre avec les meilleurs. Événements animés par des intervenants locaux et internationaux
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="mb-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 max-w-3xl mx-auto">
          <p className="text-center text-gray-300">
            <Sparkles className="inline w-5 h-5 text-amber-400 mr-2" />
            Les sujets évoluent en répondant à une étude du marché authentique
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, idx) => {
            const IconComponent = event.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-500 p-3 rounded-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {event.type}
                    </span>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
