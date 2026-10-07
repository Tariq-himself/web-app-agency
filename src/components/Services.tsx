import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../translations';
import { ServiceItem } from '../types';

interface CardTheme {
  accent: string;
  glow: string;
  badge: {
    en: string;
    ar: string;
  };
}

const cardThemes: Record<string, CardTheme> = {
  mobile: {
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.25)',
    badge: {
      en: 'App Store Ready',
      ar: 'جاهز للمتجر',
    },
  },
  web: {
    accent: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.25)',
    badge: {
      en: 'Interactive 3D & WebGL',
      ar: 'تفاعلي وبصري فائق',
    },
  },
  products: {
    accent: '#fbbf24',
    glow: 'rgba(251, 191, 36, 0.25)',
    badge: {
      en: 'In-House Studio',
      ar: 'إنتاج رقمي خاص',
    },
  },
};

const ServiceCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const { lang, isRTL } = useLanguage();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 50, y: 50 });
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const theme = cardThemes[item.iconType] || cardThemes.mobile;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    setCoords({ x, y });
    setTilt({ rx, ry });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
    setCoords({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-white/30 [transform-style:preserve-3d] overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        boxShadow: isHovered
          ? `0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px ${theme.glow}`
          : '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Dynamic Cursor Light Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${coords.x}% ${coords.y}%, ${theme.glow}, transparent 55%)`,
        }}
      />

      {/* Subtle Animated Shimmer Ray on Hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0"
        style={{
          background: `linear-gradient(135deg, transparent 30%, ${theme.accent}12 50%, transparent 70%)`,
          transform: `translate(${coords.x * 0.4 - 20}%, ${coords.y * 0.4 - 20}%)`,
        }}
      />

      {/* Top Header Row with Parallax Pop */}
      <div
        className="flex items-center justify-between transition-transform duration-300 [transform:translateZ(26px)]"
      >
        {/* Animated Icon Container */}
        <div
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur-md transition-all duration-300 group-hover:scale-110 shadow-lg"
          style={{
            borderColor: isHovered ? `${theme.accent}60` : 'rgba(255, 255, 255, 0.12)',
            backgroundColor: isHovered ? `${theme.accent}15` : 'rgba(255, 255, 255, 0.06)',
          }}
        >
          {/* Pulsing ambient glow dot */}
          <span
            className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full transition-opacity duration-300 animate-pulse"
            style={{
              backgroundColor: theme.accent,
              boxShadow: `0 0 10px ${theme.accent}`,
            }}
          />

          {item.iconType === 'mobile' && (
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current fill-none transition-transform duration-500 group-hover:-translate-y-0.5"
                style={{ color: isHovered ? theme.accent : 'rgba(255, 255, 255, 0.9)' }}
                strokeWidth="1.6"
              >
                <rect x="5" y="2" width="14" height="20" rx="3" />
                <line x1="10" y1="18" x2="14" y2="18" />
              </svg>
              {/* Animated screen signal beam inside phone */}
              <div
                className="absolute left-1/2 top-2 h-0.5 w-2 -translate-x-1/2 rounded-full transition-all duration-300"
                style={{ backgroundColor: theme.accent }}
              />
            </div>
          )}

          {item.iconType === 'web' && (
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current fill-none transition-transform duration-500 group-hover:scale-105"
                style={{ color: isHovered ? theme.accent : 'rgba(255, 255, 255, 0.9)' }}
                strokeWidth="1.6"
              >
                <rect x="3" y="4" width="18" height="15" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="9" y1="21" x2="15" y2="21" />
                <line x1="12" y1="19" x2="12" y2="21" />
              </svg>
              {/* Window dots with animated color */}
              <div className="absolute top-[6px] left-[5px] flex gap-0.5">
                <span className="h-1 w-1 rounded-full bg-[#ff5f56]" />
                <span className="h-1 w-1 rounded-full bg-[#ffbd2e]" />
                <span className="h-1 w-1 rounded-full bg-[#27c93f]" />
              </div>
            </div>
          )}

          {item.iconType === 'products' && (
            <div className="relative">
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6 stroke-current fill-none transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"
                style={{ color: isHovered ? theme.accent : 'rgba(255, 255, 255, 0.9)' }}
                strokeWidth="1.6"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Number & Micro badge with animated glow */}
        <div className="flex flex-col items-end">
          <span
            className="font-display text-sm font-bold tracking-wider transition-colors duration-300"
            style={{ color: isHovered ? theme.accent : 'rgba(255, 255, 255, 0.35)' }}
          >
            {item.n}
          </span>
          <span
            className="mt-1 text-[9px] uppercase tracking-[0.2em] transition-opacity duration-300 font-mono"
            style={{ color: theme.accent, opacity: isHovered ? 1 : 0.6 }}
          >
            {theme.badge[lang]}
          </span>
        </div>
      </div>

      {/* Title with Parallax Pop */}
      <h3
        className="mt-9 font-display text-2xl font-semibold text-white md:text-3xl transition-transform duration-300 [transform:translateZ(20px)]"
      >
        <span className="relative inline-block">
          {item.title[lang]}
          {/* Subtle animated underline on hover */}
          <span
            className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
            style={{ backgroundColor: theme.accent }}
          />
        </span>
      </h3>

      {/* Description with Parallax Depth */}
      <p
        className="mt-4 text-sm leading-relaxed text-white/65 md:text-base transition-transform duration-300 [transform:translateZ(14px)]"
      >
        {item.desc[lang]}
      </p>

      {/* Tech Tags with Interactive Pop */}
      <div
        className="mt-8 flex flex-wrap gap-2 transition-transform duration-300 [transform:translateZ(18px)]"
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-[11px] font-mono text-white/70 transition-all duration-300 hover:scale-105"
            style={{
              borderColor: isHovered ? `${theme.accent}40` : 'rgba(255, 255, 255, 0.1)',
              backgroundColor: isHovered ? `${theme.accent}12` : 'rgba(255, 255, 255, 0.04)',
              color: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
          {t.services.label}
        </p>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white md:text-6xl">
          {t.services.heading}
        </h2>

        {/* 3 Grid Cards */}
        <div className="perspective mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
          {servicesData.map((item, idx) => (
            <ServiceCard key={item.n} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
