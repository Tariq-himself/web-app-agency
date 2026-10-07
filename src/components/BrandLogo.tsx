import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BrandLogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = 'h-6 w-auto', showSubtitle = false }) => {
  const { isRTL } = useLanguage();

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] border border-white/15 backdrop-blur-sm shadow-sm group-hover:border-white/30 transition-all duration-300">
        <svg viewBox="0 0 28 28" className="h-4.5 w-4.5 text-white" fill="none">
          <path
            d="M5 7L9.5 21L14 11L18.5 21L23 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display text-lg font-bold tracking-[0.22em] text-white transition-opacity group-hover:opacity-90 ${
            isRTL ? 'font-arabic tracking-wider' : ''
          }`}
        >
          WEBSITEABLE
        </span>
        {showSubtitle && (
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">
            {isRTL ? 'ويب سايتبل' : 'Software Studio'}
          </span>
        )}
      </div>
    </div>
  );
};
