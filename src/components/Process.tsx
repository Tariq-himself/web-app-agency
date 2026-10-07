import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { processSteps } from '../translations';
import { ProcessStep } from '../types';

interface StepTheme {
  accent: string;
  glow: string;
  phaseTag: {
    en: string;
    ar: string;
  };
}

const stepThemes: Record<string, StepTheme> = {
  '01': {
    accent: '#60a5fa',
    glow: 'rgba(96, 165, 250, 0.22)',
    phaseTag: {
      en: 'Problem & Vision',
      ar: 'تحليل الهدف والجمهور',
    },
  },
  '02': {
    accent: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.22)',
    phaseTag: {
      en: 'UI, Motion & Brand',
      ar: 'الواجهات والتفاعل البصري',
    },
  },
  '03': {
    accent: '#2dd4bf',
    glow: 'rgba(45, 212, 191, 0.22)',
    phaseTag: {
      en: 'Production Code',
      ar: 'الهندسة البرمجية المتينة',
    },
  },
  '04': {
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.22)',
    phaseTag: {
      en: 'App Store & Iteration',
      ar: 'الإطلاق والنمو المستمر',
    },
  },
};

const ProcessCard: React.FC<{
  step: ProcessStep;
  index: number;
  activeHoverIndex: number | null;
  onHover: (idx: number | null) => void;
}> = ({ step, index, activeHoverIndex, onHover }) => {
  const { lang, isRTL } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const theme = stepThemes[step.n] || stepThemes['01'];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    setCoords({ x, y });
    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
    setTilt({ rx: 0, ry: 0 });
    setCoords({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative z-10 flex h-full flex-col justify-between rounded-3xl border border-white/8 bg-white/[0.025] p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-2.5 hover:border-white/30 [transform-style:preserve-3d] cursor-pointer overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        boxShadow: isHovered
          ? `0 24px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px -8px ${theme.glow}`
          : '0 10px 30px -10px rgba(0, 0, 0, 0.4)',
      }}
    >
      {/* Dynamic Cursor Spotlight Following Pointer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${coords.x}% ${coords.y}%, ${theme.glow}, transparent 60%)`,
        }}
      />

      {/* Shimmer Angle Ray */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(120deg, transparent 20%, ${theme.accent}10 50%, transparent 80%)`,
          transform: `translate(${coords.x * 0.3 - 15}%, ${coords.y * 0.3 - 15}%)`,
        }}
      />

      <div>
        {/* Header row: Step number pill & Interactive Micro Icon */}
        <div
          className="flex items-center justify-between mb-8 transition-transform duration-300 [transform:translateZ(24px)]"
        >
          {/* Illuminated Number Badge */}
          <div
            className="relative flex h-13 w-13 items-center justify-center rounded-2xl border bg-white/[0.05] font-display text-base font-bold transition-all duration-500 group-hover:scale-110 shadow-md"
            style={{
              borderColor: isHovered ? `${theme.accent}60` : 'rgba(255, 255, 255, 0.1)',
              backgroundColor: isHovered ? `${theme.accent}15` : 'rgba(255, 255, 255, 0.05)',
              color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
            }}
          >
            <span>{step.n}</span>
            {/* Subtle beacon pulse on hover */}
            <span
              className={`absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full transition-opacity duration-300 ${
                isHovered ? 'opacity-100 animate-ping' : 'opacity-0'
              }`}
              style={{ backgroundColor: theme.accent }}
            />
          </div>

          {/* Interactive Step Micro Icon */}
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
            style={{
              borderColor: isHovered ? `${theme.accent}50` : 'rgba(255, 255, 255, 0.1)',
              color: isHovered ? theme.accent : 'rgba(255, 255, 255, 0.5)',
            }}
          >
            {step.n === '01' && (
              /* Discover / Radar */
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="1.8">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 3v18M3 12h18" strokeDasharray="2 2" />
                <circle cx="12" cy="12" r="3" className="group-hover:animate-ping origin-center" />
              </svg>
            )}
            {step.n === '02' && (
              /* Design / Vector Pen */
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="1.8">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <circle cx="12" cy="12" r="1.5" />
              </svg>
            )}
            {step.n === '03' && (
              /* Build / Code Terminal */
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="1.8">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="10" y1="19" x2="14" y2="5" />
              </svg>
            )}
            {step.n === '04' && (
              /* Ship / Rocket Launch */
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-none stroke-current" strokeWidth="1.8">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
                <path d="M15 12v5s3.03.55 4.5 2c1.63 1.62 2.5 5 2.5 5" />
              </svg>
            )}
          </div>
        </div>

        {/* Phase Tag Pill */}
        <div className="mb-3">
          <span
            className="text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-300"
            style={{ color: theme.accent }}
          >
            {theme.phaseTag[lang]}
          </span>
        </div>

        {/* Step Title with Parallax & Hover Underline */}
        <h3
          className="font-display text-2xl font-semibold text-white transition-transform duration-300 [transform:translateZ(18px)]"
        >
          <span className="relative inline-block">
            {step.title[lang]}
            <span
              className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
              style={{ backgroundColor: theme.accent }}
            />
          </span>
        </h3>

        {/* Step Description with Parallax Depth */}
        <p
          className="mt-4 text-sm leading-relaxed text-white/60 transition-transform duration-300 [transform:translateZ(12px)]"
        >
          {step.desc[lang]}
        </p>
      </div>

      {/* Bottom Step Indicator Bar */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
        <span className="font-mono">
          0{index + 1} / 04
        </span>
        <span
          className="transition-all duration-300 group-hover:translate-x-1"
          style={{ color: isHovered ? theme.accent : 'inherit' }}
        >
          {isRTL ? '← تفاصيل المرحلة' : 'Phase details →'}
        </span>
      </div>
    </div>
  );
};

export const Process: React.FC = () => {
  const { t } = useLanguage();
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
          {t.process.label}
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white md:text-6xl">
          {t.process.heading}
        </h2>

        {/* Process Timeline Steps */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Subtle horizontal timeline connector on desktop with animated active glow */}
          <div className="hidden md:block absolute top-14 inset-x-8 h-[2px] bg-white/10 -z-0">
            <div
              className="h-full bg-gradient-to-r from-[#60a5fa] via-[#c084fc] to-[#fbbf24] transition-all duration-700"
              style={{
                width:
                  activeHoverIndex !== null
                    ? `${((activeHoverIndex + 1) / 4) * 100}%`
                    : '100%',
                opacity: activeHoverIndex !== null ? 1 : 0.4,
              }}
            />
          </div>

          {processSteps.map((step, idx) => (
            <ProcessCard
              key={step.n}
              step={step}
              index={idx}
              activeHoverIndex={activeHoverIndex}
              onHover={setActiveHoverIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
