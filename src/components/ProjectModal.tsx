import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../translations';
import { SaudiRiyalSymbol } from './SaudiRiyalSymbol';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();
  const [projectType, setProjectType] = useState<string>('mobile');
  const [budget, setBudget] = useState<string>(t.modal.budgets[1]);
  const [timeline, setTimeline] = useState<string>(t.modal.timelines[1]);
  const [details, setDetails] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const getWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Websiteable! I am interested in starting a project.\nName: ${name || 'Prospective Client'}\nType: ${projectType}\nBudget: ${budget}`
    );
    return `https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-2xl rounded-3xl border border-white/15 bg-[#090b12] p-6 sm:p-10 text-white shadow-2xl z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 sm:top-8 sm:right-8 flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" stroke="currentColor" strokeWidth="2" fill="none">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#5b8cff]/15 border border-[#5b8cff]/30 text-[#7c9eff]">
              <svg viewBox="0 0 24 24" className="h-8 w-8 fill-none stroke-current" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-white">
              {t.modal.successTitle}
            </h3>
            <p className="max-w-md mx-auto text-sm text-white/60 leading-relaxed">
              {t.modal.successDesc}
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-transform hover:scale-105"
              >
                <span>{t.modal.whatsappAlternative}</span>
              </a>
              <button
                onClick={handleReset}
                className="rounded-full border border-white/20 px-6 py-3 text-xs uppercase tracking-wider text-white hover:bg-white/5 transition-all"
              >
                {t.modal.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7c9eff] font-semibold">
                {t.modal.badge}
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-medium text-white">
                {t.modal.title}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-white/55">{t.modal.description}</p>
            </div>

            {/* Project Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                {t.modal.projectTypeLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Object.entries(t.modal.types).map(([key, label]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setProjectType(key)}
                    className={`rounded-xl border px-3.5 py-2.5 text-xs text-left transition-all cursor-pointer ${
                      projectType === key
                        ? 'border-[#5b8cff] bg-[#5b8cff]/15 text-white font-medium'
                        : 'border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.05]'
                    } ${isRTL ? 'text-right' : 'text-left'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range */}
            <div>
              <label className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-white/60 mb-2">
                <SaudiRiyalSymbol className="h-3.5 w-auto text-[#7c9eff]" />
                <span>{t.modal.budgetLabel}</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {t.modal.budgets.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBudget(b)}
                    className={`rounded-xl border px-3 py-2 text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      budget === b
                        ? 'border-[#5b8cff] bg-[#5b8cff]/15 text-white font-medium'
                        : 'border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{b.replace('SAR', '').replace('ر.س', '').trim()}</span>
                    <SaudiRiyalSymbol className="h-3 w-auto text-current" />
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-2">
                {t.modal.timelineLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {t.modal.timelines.map((tm) => (
                  <button
                    key={tm}
                    type="button"
                    onClick={() => setTimeline(tm)}
                    className={`rounded-xl border px-3 py-2 text-xs transition-all cursor-pointer ${
                      timeline === tm
                        ? 'border-[#5b8cff] bg-[#5b8cff]/15 text-white font-medium'
                        : 'border-white/10 bg-white/[0.02] text-white/70 hover:bg-white/[0.05]'
                    }`}
                  >
                    {tm}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-white/60 mb-1.5">
                {t.modal.detailsLabel}
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.modal.detailsPlaceholder}
                className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:border-[#5b8cff] focus:outline-none focus:ring-1 focus:ring-[#5b8cff] transition-all"
              />
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1">
                  {t.modal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.modal.namePlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#5b8cff] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1">
                  {t.modal.emailLabel}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.modal.emailPlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#5b8cff] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-white/60 mb-1">
                  {t.modal.phoneLabel}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.modal.phonePlaceholder}
                  className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-3 py-2 text-xs text-white placeholder-white/30 focus:border-[#5b8cff] focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Submit & WhatsApp */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-black hover:scale-105 transition-all cursor-pointer shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? t.modal.submitting : t.modal.submitBtn}
              </button>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#25D366] hover:underline flex items-center gap-1.5"
              >
                <span>{t.modal.whatsappAlternative}</span>
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
