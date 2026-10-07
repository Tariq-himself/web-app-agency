import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig, appsData } from '../translations';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const { t, lang, isRTL } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/8 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-start">
          {/* Brand Info */}
          <div className="max-w-sm">
            <BrandLogo showSubtitle={true} />
            <p className="mt-6 text-sm leading-relaxed text-white/50">
              {t.footer.description}
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
              <span>{isRTL ? siteConfig.locationAr : siteConfig.locationEn}</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-wrap gap-14 sm:gap-20">
            {/* Navigate */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold">
                {t.footer.navigate}
              </p>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <button
                    onClick={() => scrollTo('studio')}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {t.nav.studio}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('services')}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {t.nav.services}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('work')}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {t.nav.work}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('process')}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {t.nav.process}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="transition-colors hover:text-white cursor-pointer"
                  >
                    {t.nav.contact}
                  </button>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold">
                {t.footer.products}
              </p>
              <ul className="space-y-3 text-sm text-white/60">
                {appsData.map((app) => (
                  <li key={app.id}>
                    <button
                      onClick={() => scrollTo(app.id)}
                      className="transition-colors hover:text-white cursor-pointer"
                    >
                      {app.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.3em] text-white/30 font-semibold">
                {t.footer.connect}
              </p>
              <ul className="space-y-3 text-sm text-white/60">
                <li>
                  <button
                    onClick={onOpenModal}
                    className="text-[#7c9eff] hover:underline cursor-pointer"
                  >
                    {t.nav.startProject}
                  </button>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="transition-colors hover:text-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {siteConfig.year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p>{t.footer.designedIn}</p>
        </div>
      </div>
    </footer>
  );
};
