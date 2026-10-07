import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CosmicBackground } from './components/CosmicBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Studio } from './components/Studio';
import { Services } from './components/Services';
import { Work } from './components/Work';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

interface AccentTheme {
  accent: string;
  accent2: string;
  intensity: number;
}

export function AppContent() {
  const [theme, setTheme] = useState<AccentTheme>({
    accent: '#5b8cff',
    accent2: '#9a7bff',
    intensity: 0.35,
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.45;

      const getTop = (id: string) => {
        const el = document.getElementById(id);
        return el ? el.offsetTop : Infinity;
      };

      const topPos = getTop('top');
      const studioPos = getTop('studio');
      const servicesPos = getTop('services');
      const methodPos = getTop('method');
      const thresholdPos = getTop('threshold');
      const nawartoPos = getTop('nawarto');
      const processPos = getTop('process');
      const contactPos = getTop('contact');

      if (scrollPos >= contactPos) {
        setTheme({ accent: '#7c8cff', accent2: '#b39cff', intensity: 0.5 });
      } else if (scrollPos >= processPos) {
        setTheme({ accent: '#6d7bff', accent2: '#9a7bff', intensity: 0.35 });
      } else if (scrollPos >= nawartoPos) {
        setTheme({ accent: '#25D366', accent2: '#128C7E', intensity: 0.4 });
      } else if (scrollPos >= thresholdPos) {
        setTheme({ accent: '#1E88E5', accent2: '#FF1744', intensity: 0.45 });
      } else if (scrollPos >= methodPos) {
        setTheme({ accent: '#1E88E5', accent2: '#FFD700', intensity: 0.45 });
      } else if (scrollPos >= servicesPos) {
        setTheme({ accent: '#7896ff', accent2: '#9a7bff', intensity: 0.3 });
      } else if (scrollPos >= studioPos) {
        setTheme({ accent: '#5b8cff', accent2: '#9a7bff', intensity: 0.3 });
      } else {
        setTheme({ accent: '#5b8cff', accent2: '#9a7bff', intensity: 0.35 });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#04050a] text-white selection:bg-[#5b8cff]/30 selection:text-white">
      {/* Dynamic Cosmic Background */}
      <CosmicBackground
        accent={theme.accent}
        accent2={theme.accent2}
        intensity={theme.intensity}
      />

      {/* Main Navigation */}
      <Navbar onOpenModal={() => setIsModalOpen(true)} />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <Studio />
        <Services />
        <Work />
        <Process />
        <ContactSection onOpenModal={() => setIsModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenModal={() => setIsModalOpen(true)} />

      {/* Interactive Project Inquiry Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
