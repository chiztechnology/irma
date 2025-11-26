import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Stéphanie',
      year: '2023',
      text: 'IRMA m\'a permis d\'allier culture congolaise et vision contemporaine. Aujourd\'hui, j\'exporte mes pièces à Paris.',
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      name: 'Patrick',
      year: '2022',
      text: 'Avant IRMA, je n\'avais jamais touché une machine. Maintenant, je suis assistant modéliste dans un grand atelier.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Nadine',
      year: '2024',
      text: 'Les formateurs, les machines, l\'ambiance… tout est pensé pour nous pousser à réussir.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Témoignages & Parcours d'Alumni
          </h2>
          <p className="text-xl text-gray-600">Leurs mots, leur impact</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-300" />
              <div className="relative">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient}`} />
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">Diplômée {testimonial.year}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
