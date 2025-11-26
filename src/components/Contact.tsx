import { Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

interface ContactProps {
  onDownloadBrochure: () => void;
}

export function Contact({ onDownloadBrochure }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact & Informations
          </h2>
          <p className="text-xl text-gray-300">Où nous trouver ?</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Institut Régional de la Mode</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Siège</p>
                  <p className="text-gray-300">Kinshasa, RDC</p>
                  <p className="text-gray-400 text-sm">(au sein du hub Kobo-Art Fashion)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">Email</p>
                  <a href="mailto:info@irma-rdc.org" className="text-amber-400 hover:text-amber-300 transition-colors">
                    info@irma-rdc.org
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Restez connectés</h3>
            <div className="space-y-4 mb-6">
              <a
                href="#"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all rounded-xl p-4"
              >
                <Instagram className="w-6 h-6" />
                <span className="font-medium">Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all rounded-xl p-4"
              >
                <Facebook className="w-6 h-6" />
                <span className="font-medium">Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-white/20 hover:bg-white/30 transition-all rounded-xl p-4"
              >
                <Linkedin className="w-6 h-6" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onDownloadBrochure}
            className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Télécharger la brochure complète
          </button>
        </div>
      </div>
    </section>
  );
}
