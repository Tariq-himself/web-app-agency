import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../translations';

interface ContactSectionProps {
  onOpenModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  const { t, isRTL } = useLanguage();

  return (
    <section
      id="contact"
      className="relative flex min-h-[95svh] items-center justify-center overflow-hidden py-32"
    >
      {/* Center glowing orb */}
      <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-[#7c8cff]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
          {t.cta.label}
        </p>

        <h2 className="font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-8xl">
          {t.cta.heading1}
          <br />
          {t.cta.heading2}
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
          {t.cta.description}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:scale-105 hover:bg-white/95 shadow-2xl cursor-pointer"
          >
            <span>{t.cta.startProject}</span>
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 stroke-current fill-none transition-transform group-hover:translate-x-1 ${
                isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
              }`}
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-8 py-5 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#25D366]">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
            </svg>
            <span>{t.cta.whatsappDirect}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
