import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { SaudiRiyalSymbol } from '../SaudiRiyalSymbol';

export const RedactMockup: React.FC = () => {
  const { isRTL } = useLanguage();
  const [scanStep, setScanStep] = useState<number>(0); // 0: scanning, 1: redacting, 2: ready
  const [selectedAI, setSelectedAI] = useState<string>('Claude');

  useEffect(() => {
    const cycle = () => {
      setScanStep(0);
      const t1 = setTimeout(() => setScanStep(1), 1000);
      const t2 = setTimeout(() => setScanStep(2), 2200);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    };

    const cleanup = cycle();
    const interval = setInterval(cycle, 6500);

    return () => {
      cleanup();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col h-full px-4 text-white font-sans text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-lg font-semibold tracking-wide text-white">
              Redact <span className="text-[#2DE2C0]">AI</span>
            </h3>
            <span className="h-1.5 w-1.5 rounded-full bg-[#2DE2C0]" />
          </div>
          <p className="text-[10px] text-white/50">{isRTL ? 'التقط · احجب · انسخ' : 'Capture · Redact · Copy'}</p>
        </div>
        <div className="flex items-center gap-1 rounded-full border border-[#2DE2C0]/30 bg-[#2DE2C0]/10 px-2 py-0.5 text-[9px] text-[#2DE2C0]">
          <svg viewBox="0 0 16 16" className="h-2.5 w-2.5 fill-current">
            <path d="M4 6V4a4 4 0 018 0v2h1a1 1 0 011 1v7a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1h2zm2-2a2 2 0 114 0v2H6V4z" />
          </svg>
          <span>{isRTL ? 'معالجة على الجهاز' : 'On-Device'}</span>
        </div>
      </div>

      {/* Document Scanner Area */}
      <div className="relative mt-3 flex-1 rounded-2xl border border-white/10 bg-[#061014] p-3.5 overflow-hidden flex flex-col justify-between">
        {/* Scanning beam animation */}
        {scanStep === 0 && (
          <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2DE2C0] to-transparent animate-bounce opacity-80" />
        )}

        <div>
          <div className="flex items-center justify-between text-[9px] text-white/40 pb-2 border-b border-white/5">
            <span>OCR_SCREEN_BUFFER_01.TXT</span>
            <span>{scanStep === 0 ? 'Scanning...' : scanStep === 1 ? 'Redacting PII...' : 'Protected'}</span>
          </div>

          <div className="mt-3 space-y-2 text-[11px] leading-relaxed text-white/70 font-mono">
            <p>
              <span>Meeting summary with </span>
              {scanStep >= 1 ? (
                <span className="inline-block bg-[#2DE2C0]/30 text-[#2DE2C0] px-1.5 py-0.2 rounded font-bold">
                  █████████
                </span>
              ) : (
                <span className="text-white font-semibold">Khaled Al-Otaibi</span>
              )}
              <span> regarding Q3 investment round.</span>
            </p>

            <p>
              <span>Projected gross valuation: </span>
              {scanStep >= 1 ? (
                <span className="inline-block bg-[#2DE2C0]/30 text-[#2DE2C0] px-1.5 py-0.2 rounded font-bold">
                  ██████████
                </span>
              ) : (
                <span className="text-white font-semibold inline-flex items-center gap-1">
                  <span>68,500,000</span>
                  <SaudiRiyalSymbol className="h-3 w-auto inline" />
                  <span>SAR</span>
                </span>
              )}
              <span> under escrow code </span>
              {scanStep >= 1 ? (
                <span className="inline-block bg-[#2DE2C0]/30 text-[#2DE2C0] px-1.5 py-0.2 rounded font-bold">
                  ████████
                </span>
              ) : (
                <span className="text-white font-semibold">SA-940284</span>
              )}
              .
            </p>
          </div>
        </div>

        {/* Protection Pill */}
        <div className="mt-3 rounded-xl bg-white/[0.04] border border-white/8 p-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#2DE2C0] animate-pulse" />
            <span className="text-[10px] text-white/90">
              {isRTL ? '٤ عناصر محجوبة · صفر بيانات تغادر جهازك' : '4 items redacted · Zero data left device'}
            </span>
          </div>
        </div>
      </div>

      {/* One-Tap AI Handoff */}
      <div className="mt-3">
        <span className="text-[9px] uppercase tracking-wider text-white/40 block mb-1.5">
          {isRTL ? 'نسخ آمن بنقرة واحدة إلى' : 'One-Tap AI Handoff'}
        </span>
        <div className="grid grid-cols-4 gap-1.5">
          {['ChatGPT', 'Claude', 'Gemini', 'Grok'].map((ai) => (
            <button
              key={ai}
              onClick={() => setSelectedAI(ai)}
              className={`rounded-lg py-1.5 text-center text-[10px] font-medium transition-all ${
                selectedAI === ai
                  ? 'bg-[#2DE2C0] text-black font-semibold shadow-sm'
                  : 'bg-white/[0.06] text-white/70 hover:bg-white/[0.1]'
              }`}
            >
              {ai}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
