import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { Admissions } from './components/Admissions';
import { Events } from './components/Events';
import { Research } from './components/Research';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { ProgramDetailsModal } from './components/ProgramDetailsModal';
import { RegistrationModal } from './components/RegistrationModal';
import { NotificationContainer } from './components/Notification';
import { SEO } from './components/SEO';
import { useNotification } from './hooks/useNotification';

function App() {
  const [programDetailsOpen, setProgramDetailsOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<'long' | 'short' | 'digital' | null>(null);
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const { notifications, addNotification, removeNotification } = useNotification();

  const handleOpenProgramDetails = (program: 'long' | 'short' | 'digital') => {
    setSelectedProgram(program);
    setProgramDetailsOpen(true);
  };

  const handleCloseProgramDetails = () => {
    setProgramDetailsOpen(false);
    setTimeout(() => setSelectedProgram(null), 300);
  };

  const handleOpenRegistration = () => {
    setRegistrationOpen(true);
  };

  const handleCloseRegistration = () => {
    setRegistrationOpen(false);
  };

  const handleRegistrationSubmit = (data: any) => {
    console.log('Registration data:', data);
    setRegistrationOpen(false);
    addNotification('success', 'Votre candidature a été envoyée avec succès ! Nous vous contactons bientôt.');
  };

  const handleDownloadBrochure = () => {
    addNotification('success', 'La brochure complète est en cours de téléchargement.');
  };

  const handleExplorePrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>


      <div className="min-h-screen bg-white">
        <Hero onExplore={handleExplorePrograms} />
        <About />
        <Programs onOpenDetails={handleOpenProgramDetails} />
        <Admissions onRegister={handleOpenRegistration} />
        <Events />
        <Research />
        <Testimonials />
        <Contact onDownloadBrochure={handleDownloadBrochure} />

        <footer className="bg-slate-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Institut Régional de la Mode (IRMA). Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-2">Porté par Kobo-Art Fashion</p>
          </div>
        </footer>

        <ProgramDetailsModal
          isOpen={programDetailsOpen}
          onClose={handleCloseProgramDetails}
          programType={selectedProgram}
        />

        <RegistrationModal
          isOpen={registrationOpen}
          onClose={handleCloseRegistration}
          onSubmit={handleRegistrationSubmit}
        />

        <NotificationContainer
          notifications={notifications}
          onRemove={removeNotification}
        />
      </div>
    </>
  );
}

export default App;
