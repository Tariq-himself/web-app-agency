import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Studio: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress while section is in viewport
      const total = rect.height + windowHeight;
      const current = windowHeight - rect.top;
      const p = Math.max(0, Math.min(1, current / (total * 0.75)));
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const words = t.studio.statementWords;

  return (
    <section
      id="studio"
      ref={sectionRef}
      className="relative flex min-h-[90svh] items-center justify-center overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="mb-10 text-center text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
          {t.studio.label}
        </p>

        <p
          className={`text-center font-display text-3xl font-medium leading-[1.35] text-white sm:text-4xl md:text-[3.2rem] md:leading-[1.3] ${
            isRTL ? 'font-arabic leading-[1.5]' : ''
          }`}
        >
          {words.map((word, index) => {
            const wordProgress = index / words.length;
            const isLit = scrollProgress >= wordProgress;
            return (
              <span
                key={index}
                className={`inline-block transition-all duration-300 ${
                  isLit ? 'opacity-100 text-white' : 'opacity-20 text-white/30'
                }`}
              >
                {word}
                {index < words.length - 1 ? '\u00A0' : ''}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
};
