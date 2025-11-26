import { Modal } from './Modal';
import { Clock, Award, CheckCircle } from 'lucide-react';

interface ProgramDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  programType: 'long' | 'short' | 'digital' | null;
}

export function ProgramDetailsModal({ isOpen, onClose, programType }: ProgramDetailsModalProps) {
  const programDetails = {
    long: {
      title: 'Formations Longues',
      duration: '6 à 12 mois',
      description: 'Une formation certifiante complète pour acquérir une expertise approfondie dans votre domaine.',
      programs: [
        {
          name: 'Création de collection',
          details: 'Apprenez à concevoir des collections cohérentes, de la recherche conceptuelle à la présentation finale.'
        },
        {
          name: 'Patronnage',
          details: 'Maîtrisez l\'art de la construction de vêtements et des techniques de coupe avancées.'
        },
        {
          name: 'Design Textile et Impression',
          details: 'Explorez les techniques d\'impression, de création de motifs et de manipulation textile.'
        },
        {
          name: 'Management de Marque de Mode',
          details: 'Développez les compétences entrepreneuriales pour lancer et gérer votre marque.'
        },
        {
          name: 'Production et évaluation produit',
          details: 'Comprenez les processus de fabrication et les standards de qualité de l\'industrie.'
        },
        {
          name: 'Techniques de Confection',
          details: 'Perfectionnez vos compétences en couture et assemblage professionnel.'
        },
        {
          name: 'Construire son identité de marque',
          details: 'Créez une identité visuelle forte et une stratégie de positionnement unique.'
        }
      ],
      benefits: [
        'Certification reconnue',
        'Stage en entreprise inclus',
        'Accompagnement personnalisé',
        'Accès aux équipements professionnels',
        'Réseau d\'alumni actif'
      ]
    },
    short: {
      title: 'Formations Courtes',
      duration: '1 à 3 mois',
      description: 'Des formations intensives pour développer rapidement des compétences spécifiques.',
      programs: [
        {
          name: 'Initiation au patronage et à la couture',
          details: 'Acquérez les bases essentielles du patronnage et des techniques de couture.'
        },
        {
          name: 'Techniques de broderie et finitions',
          details: 'Maîtrisez les techniques de broderie à la main et à la machine, ainsi que les finitions haut de gamme.'
        },
        {
          name: 'Éco-conception et upcycling',
          details: 'Apprenez à créer de la mode durable en transformant et revalorisant les textiles.'
        },
        {
          name: 'Marketing digital appliqué à la mode',
          details: 'Développez votre présence en ligne et maîtrisez les outils de marketing digital.'
        },
        {
          name: 'Gestion d\'atelier',
          details: 'Optimisez l\'organisation et la rentabilité de votre atelier de création.'
        }
      ],
      benefits: [
        'Formation intensive',
        'Certificat de participation',
        'Petits groupes',
        'Pratique immédiate',
        'Horaires flexibles'
      ]
    },
    digital: {
      title: 'Modules Numériques',
      duration: 'Durée variable',
      description: 'Maîtrisez les outils digitaux essentiels pour la mode contemporaine.',
      programs: [
        {
          name: 'DAO et Modélisation 3D',
          details: 'Apprenez CLO3D, Illustrator et Photoshop pour la conception assistée par ordinateur.'
        },
        {
          name: 'Création de portfolios numériques',
          details: 'Construisez un portfolio professionnel percutant pour valoriser votre travail.'
        },
        {
          name: 'E-commerce et boutique en ligne',
          details: 'Créez et gérez votre boutique en ligne pour vendre vos créations.'
        }
      ],
      benefits: [
        'Outils professionnels',
        'Supports de cours téléchargeables',
        'Projets pratiques',
        'Feedback personnalisé',
        'Certification numérique'
      ]
    }
  };

  if (!programType) return null;

  const details = programDetails[programType];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={details.title}>
      <div className="space-y-6">
        <div className="flex items-center gap-4 bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-200">
          <Clock className="w-8 h-8 text-orange-500" />
          <div>
            <p className="text-sm text-gray-600 font-medium">Durée</p>
            <p className="text-lg font-bold text-gray-900">{details.duration}</p>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed">{details.description}</p>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Programmes inclus
          </h3>
          <div className="space-y-4">
            {details.programs.map((program, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                <h4 className="font-bold text-gray-900 mb-2">{program.name}</h4>
                <p className="text-gray-700">{program.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Avantages</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {details.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 text-white">
          <p className="text-center text-lg">
            Prêt à vous lancer ? Contactez-nous pour plus d'informations ou pour candidater.
          </p>
        </div>
      </div>
    </Modal>
  );
}
