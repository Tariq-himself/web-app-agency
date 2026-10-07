import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const ThresholdMockup: React.FC = () => {
  const { isRTL } = useLanguage();
  const [selectedSport, setSelectedSport] = useState<'Football' | 'Basketball' | 'Track'>('Football');
  const [metrics, setMetrics] = useState({
    explosiveness: 84,
    strength: 78,
    conditioning: 72,
  });

  const [bars, setBars] = useState([45, 62, 38, 80, 58, 92, 50]);

  // Subtle telemetry pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setBars((prev) =>
        prev.map((val) => Math.max(30, Math.min(96, Math.round(val + (Math.random() * 14 - 7)))))
      );
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col h-full px-4 text-white font-sans text-xs select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-lg font-semibold tracking-wide text-white">Threshold</h3>
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF1744]" />
          </div>
          <p className="text-[10px] text-white/50">{isRTL ? 'صُمم للرياضيين' : 'Built for athletes.'}</p>
        </div>
        <span className="rounded-full border border-[#FF1744]/40 bg-[#FF1744]/15 px-2 py-0.5 text-[9px] text-[#ff617e]">
          {isRTL ? 'فترة الإعداد البدني' : 'Pre-season'}
        </span>
      </div>

      {/* Sport Selector Chips */}
      <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {(['Football', 'Basketball', 'Track'] as const).map((sport) => {
          const namesAr = { Football: 'كرة القدم', Basketball: 'كرة السلة', Track: 'ألعاب القوى' };
          const active = selectedSport === sport;
          return (
            <button
              key={sport}
              onClick={() => {
                setSelectedSport(sport);
                setMetrics({
                  explosiveness: sport === 'Football' ? 84 : sport === 'Basketball' ? 91 : 76,
                  strength: sport === 'Football' ? 82 : sport === 'Basketball' ? 70 : 88,
                  conditioning: sport === 'Football' ? 75 : sport === 'Basketball' ? 86 : 94,
                });
              }}
              className={`rounded-full px-2.5 py-1 text-[10px] transition-all ${
                active
                  ? 'bg-gradient-to-r from-[#1E88E5] to-[#FF1744] text-white font-medium shadow-md'
                  : 'bg-white/[0.05] text-white/60 hover:bg-white/10'
              }`}
            >
              {isRTL ? namesAr[sport] : sport}
            </button>
          );
        })}
      </div>

      {/* Performance Radar & Telemetry Card */}
      <div className="mt-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c0812] to-[#0a0408] p-3.5 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-wider text-white/40">
            {isRTL ? 'مؤشرات الأداء التنافسي' : 'Performance Index'}
          </span>
          <span className="text-[9px] font-mono text-[#ff617e]">Live Telemetry</span>
        </div>

        <div className="mt-3 space-y-2.5">
          {/* Explosiveness */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/80">{isRTL ? 'القوة الانفجارية' : 'Explosiveness'}</span>
              <span className="font-mono text-[#ff617e]">{metrics.explosiveness}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#FF1744] transition-all duration-500"
                style={{ width: `${metrics.explosiveness}%` }}
              />
            </div>
          </div>

          {/* Strength */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/80">{isRTL ? 'القوة العضلية' : 'Strength'}</span>
              <span className="font-mono text-[#1E88E5]">{metrics.strength}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#1E88E5] transition-all duration-500"
                style={{ width: `${metrics.strength}%` }}
              />
            </div>
          </div>

          {/* Conditioning */}
          <div>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/80">{isRTL ? 'اللياقة والتحمل' : 'Conditioning'}</span>
              <span className="font-mono text-[#FFD700]">{metrics.conditioning}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-[#FFD700] transition-all duration-500"
                style={{ width: `${metrics.conditioning}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Workload Bar Visualizer */}
      <div className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 flex-1 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/50">{isRTL ? 'حمل التدريب الأسبوعي' : 'Weekly Strain'}</span>
          <span className="text-[9px] text-[#ff617e]">16.8 Optimal</span>
        </div>

        <div className="flex items-end justify-between gap-1.5 h-16 pt-2">
          {bars.map((height, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
              <div
                className="w-full rounded-t-sm bg-gradient-to-t from-[#1E88E5]/50 to-[#FF1744] transition-all duration-500"
                style={{ height: `${height}%` }}
              />
              <span className="text-[8px] text-white/40">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
