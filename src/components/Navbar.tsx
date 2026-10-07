import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const { t, lang, toggleLang, isRTL } = useLanguage();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-md bg-black/40 border-b border-white/8 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('top')}
            className="group flex items-center gap-3 text-left cursor-pointer"
            aria-label="Websiteable Home"
          >
            <BrandLogo />
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden items-center gap-1 md:flex">
            <button
              onClick={() => scrollTo('studio')}
              className="px-3.5 py-2 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {t.nav.studio}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="px-3.5 py-2 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollTo('work')}
              className="px-3.5 py-2 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollTo('process')}
              className="px-3.5 py-2 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-3.5 py-2 text-[12px] uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white cursor-pointer"
            >
              {t.nav.contact}
            </button>

            {/* Language Switcher Button */}
            <button
              onClick={toggleLang}
              className="mx-2 flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium tracking-wide text-white/80 transition-all hover:bg-white/[0.1] hover:text-white cursor-pointer"
              aria-label="Switch Language"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current fill-none" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Start a project CTA Button */}
            <button
              onClick={onOpenModal}
              className="ml-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[12px] uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:border-white/60 hover:bg-white hover:text-black cursor-pointer shadow-sm"
            >
              {t.nav.startProject}
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Quick Lang Switch on mobile */}
            <button
              onClick={toggleLang}
              className="rounded-full border border-white/15 bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/80 cursor-pointer"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current fill-none" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col justify-between bg-[#04050a]/95 px-8 pt-24 pb-12 backdrop-blur-2xl md:hidden">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollTo('studio')}
              className={`py-2 text-left font-display text-3xl text-white ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t.nav.studio}
            </button>
            <button
              onClick={() => scrollTo('services')}
              className={`py-2 text-left font-display text-3xl text-white ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollTo('work')}
              className={`py-2 text-left font-display text-3xl text-white ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t.nav.work}
            </button>
            <button
              onClick={() => scrollTo('process')}
              className={`py-2 text-left font-display text-3xl text-white ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t.nav.process}
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`py-2 text-left font-display text-3xl text-white ${
                isRTL ? 'text-right' : 'text-left'
              }`}
            >
              {t.nav.contact}
            </button>
          </div>

          <div className="space-y-4 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full rounded-full bg-white py-3.5 text-center text-xs font-semibold uppercase tracking-[0.16em] text-black"
            >
              {t.nav.startProject}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
