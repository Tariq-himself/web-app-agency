import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { appsData } from '../translations';
import { AppItem } from '../types';
import { PhoneFrame } from './phone/PhoneFrame';
import { MethodMockup } from './phone/MethodMockup';
import { ThresholdMockup } from './phone/ThresholdMockup';
import { NawartoMockup } from './phone/NawartoMockup';

interface WorkProps {
  onSectionVisible?: (appId: string) => void;
}

export const Work: React.FC<WorkProps> = () => {
  const { lang, t, isRTL } = useLanguage();

  const renderMockup = (id: string) => {
    switch (id) {
      case 'method':
        return <MethodMockup />;
      case 'threshold':
        return <ThresholdMockup />;
      case 'nawarto':
        return <NawartoMockup />;
      default:
        return null;
    }
  };

  return (
    <section id="work" className="relative">
      {/* Section Header */}
      <div className="mx-auto max-w-[1400px] px-6 pt-28 md:px-10 md:pt-36">
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
          {t.work.label}
        </p>
        <h2 className="max-w-4xl font-display text-4xl font-medium leading-tight text-white md:text-7xl">
          {t.work.heading}
        </h2>
        <p className="mt-6 max-w-xl text-white/55 text-base md:text-lg leading-relaxed">
          {t.work.subheading}
        </p>
      </div>

      {/* App Showcase Rows */}
      <div className="mt-16 space-y-24 md:space-y-36">
        {appsData.map((app, index) => {
          const isOdd = index % 2 === 1;

          return (
            <div
              key={app.id}
              id={app.id}
              className="relative flex min-h-[90svh] items-center py-16 md:py-24"
            >
              {/* Soft ambient background glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background: `radial-gradient(70% 60% at ${
                    isOdd ? '75%' : '25%'
                  } 50%, ${app.accent}18, transparent 65%)`,
                }}
              />

              <div className="relative mx-auto grid w-full max-w-[1400px] items-center gap-12 px-6 md:grid-cols-2 md:gap-12 md:px-10">
                {/* Content Column */}
                <div className={isOdd ? 'md:order-2 md:pl-8' : 'md:pr-8'}>
                  {/* Category & Index */}
                  <div className="mb-6 flex items-center gap-4">
                    <span
                      className="font-display text-sm font-bold tracking-wider"
                      style={{ color: app.accent }}
                    >
                      0{index + 1}
                    </span>
                    <span className="h-px w-12 bg-white/20" />
                    <span className="text-[11px] uppercase tracking-[0.3em] text-white/50">
                      {app.category[lang]}
                    </span>
                  </div>

                  {/* App Title */}
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-5xl font-semibold text-white md:text-7xl">
                      {app.name}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p
                    className="mt-3 font-display text-xl font-medium italic md:text-2xl"
                    style={{ color: app.accent }}
                  >
                    {app.tagline[lang]}
                  </p>

                  {/* Description */}
                  <p className="mt-6 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
                    {app.description[lang]}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {app.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-white/80">
                        <span
                          className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                          style={{ backgroundColor: `${app.accent}25`, color: app.accent }}
                        >
                          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 fill-current">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                          </svg>
                        </span>
                        <span>{h[lang]}</span>
                      </div>
                    ))}
                  </div>

                  {/* App Store button if available */}
                  {app.appStoreUrl && (
                    <div className="mt-10">
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-6 py-2.5 text-xs uppercase tracking-[0.16em] text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white hover:text-black"
                      >
                        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-1 .04-2.17.67-2.76 1.36-.54.63-.99 1.68-.93 2.7 1.11.09 2.07-.44 2.68-1.19z" />
                        </svg>
                        <span>{t.work.viewOnAppStore}</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* 3D Phone Mockup Column */}
                <div
                  className={`flex justify-center items-center ${
                    isOdd ? 'md:order-1' : ''
                  }`}
                >
                  <PhoneFrame
                    glowColor={`${app.accent}45`}
                    lightMode={app.light}
                  >
                    {renderMockup(app.id)}
                  </PhoneFrame>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
