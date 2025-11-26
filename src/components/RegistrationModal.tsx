import { Modal } from './Modal';
import { useState } from 'react';
import { User, Mail, Phone, FileText, Briefcase } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  motivation: string;
}

export function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '', phone: '', program: '', motivation: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Candidature à une formation">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <User className="inline w-4 h-4 mr-1" />
            Nom complet
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
            placeholder="Votre nom complet"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <Mail className="inline w-4 h-4 mr-1" />
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <Phone className="inline w-4 h-4 mr-1" />
            Téléphone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors"
            placeholder="+243 XXX XXX XXX"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <Briefcase className="inline w-4 h-4 mr-1" />
            Programme souhaité
          </label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors bg-white"
          >
            <option value="">Sélectionnez un programme</option>
            <optgroup label="Formations Longues (6-12 mois)">
              <option value="creation-collection">Création de collection</option>
              <option value="patronnage">Patronnage</option>
              <option value="design-textile">Design Textile et Impression</option>
              <option value="management">Management de Marque de Mode</option>
              <option value="production">Production et évaluation produit</option>
              <option value="confection">Techniques de Confection</option>
              <option value="identite">Construire son identité de marque</option>
            </optgroup>
            <optgroup label="Formations Courtes (1-3 mois)">
              <option value="initiation">Initiation au patronage et à la couture</option>
              <option value="broderie">Techniques de broderie et finitions</option>
              <option value="eco">Éco-conception et upcycling</option>
              <option value="marketing">Marketing digital appliqué à la mode</option>
              <option value="atelier">Gestion d'atelier</option>
            </optgroup>
            <optgroup label="Modules Numériques">
              <option value="dao">DAO, Modélisation 3D</option>
              <option value="portfolio">Création de portfolios numériques</option>
              <option value="ecommerce">E-commerce et boutique en ligne</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            <FileText className="inline w-4 h-4 mr-1" />
            Lettre de motivation
          </label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none transition-colors resize-none"
            placeholder="Parlez-nous de votre parcours et de vos motivations..."
          />
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Après validation de votre candidature, vous serez contacté pour un entretien
            ou un test de créativité.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:shadow-lg transition-all"
          >
            Envoyer ma candidature
          </button>
        </div>
      </form>
    </Modal>
  );
}
