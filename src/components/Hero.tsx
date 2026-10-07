import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const { t, isRTL } = useLanguage();

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const letters = 'WEBSITEABLE'.split('');

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center"
    >
      {/* Atmospheric Glowing Orb behind the headline */}
      <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-[#5b8cff]/15 blur-3xl" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center">
        {/* Riyadh Studio Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-[#5b8cff] animate-pulse" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.35em] text-white/70 font-medium">
            {t.hero.locationBadge}
          </span>
        </div>

        {/* Hero Large Brand Letters */}
        <h1
          style={{ fontSize: '149px' }}
          className="flex flex-wrap justify-center font-display text-[149px] font-bold leading-[0.9] tracking-tight text-white select-none"
        >
          {letters.map((char, idx) => (
            <span
              key={idx}
              className="inline-block transition-transform duration-700 hover:-translate-y-2 hover:text-[#c4d6ff]"
              style={{
                textShadow: '0 10px 40px rgba(91, 140, 255, 0.25)',
              }}
            >
              {char}
            </span>
          ))}
        </h1>

        {/* Arabic Brand Subtitle when RTL */}
        {isRTL && (
          <p className="mt-3 font-display text-2xl sm:text-3xl font-bold text-white/80 tracking-widest">
            {t.hero.arabicBrandSubtitle}
          </p>
        )}

        {/* Tagline & Subtitle */}
        <p className="mt-8 max-w-2xl text-balance text-base sm:text-lg md:text-xl text-white/65 leading-relaxed">
          <span className="font-semibold text-white">{t.hero.tagline}</span>{' '}
          {t.hero.description}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            onClick={scrollToWork}
            className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-black transition-all hover:scale-105 hover:bg-white/90 shadow-xl cursor-pointer"
          >
            {t.hero.seeWork}
          </button>
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/10 cursor-pointer"
          >
            {t.hero.startProject}
          </button>
        </div>

        {/* Scroll prompt */}
        <div className="mt-16 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">{t.hero.scroll}</span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <div className="h-2 w-1 rounded-full bg-white animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
