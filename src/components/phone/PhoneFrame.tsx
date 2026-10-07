import React, { useRef, useState } from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
  lightMode?: boolean;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  glowColor = 'rgba(120, 150, 255, 0.35)',
  className = '',
  lightMode = false,
}) => {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>('rotateY(-8deg) rotateX(4deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform('rotateY(-8deg) rotateX(4deg)');
  };

  return (
    <div className={`perspective select-none ${className}`}>
      <div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative mx-auto transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{ transform }}
      >
        {/* Soft colored atmospheric glow behind the phone */}
        <div
          className="absolute -inset-10 -z-10 rounded-[60px] blur-3xl opacity-75 transition-opacity duration-700 pointer-events-none"
          style={{ background: glowColor }}
        />

        {/* Outer Titanium Frame */}
        <div className="relative h-[620px] w-[304px] sm:h-[640px] sm:w-[316px] rounded-[48px] border border-white/20 bg-[#090b10] p-3 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/10">
          {/* Subtle phone side button notches */}
          <div className="absolute -left-[3.5px] top-28 h-8 w-1 rounded-l-sm bg-white/25" />
          <div className="absolute -left-[3.5px] top-40 h-12 w-1 rounded-l-sm bg-white/25" />
          <div className="absolute -left-[3.5px] top-56 h-12 w-1 rounded-l-sm bg-white/25" />
          <div className="absolute -right-[3.5px] top-36 h-16 w-1 rounded-r-sm bg-white/25" />

          {/* Screen Inner Bezel */}
          <div
            className={`relative h-full w-full overflow-hidden rounded-[38px] border border-black/80 ${
              lightMode ? 'bg-[#f4ebe1] text-black' : 'bg-[#04060a] text-white'
            }`}
          >
            {/* Dynamic Island Notch */}
            <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-40 h-6 w-24 rounded-full bg-black border border-white/10 flex items-center justify-between px-2.5 pointer-events-none">
              <div className="h-2 w-2 rounded-full bg-[#111] ring-1 ring-white/5" />
              <div className="h-2.5 w-2.5 rounded-full bg-black/90 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0a192f]/60" />
              </div>
            </div>

            {/* Status bar (Time & Indicators) */}
            <div
              className={`absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 pt-2.5 text-[12px] font-semibold tracking-tight pointer-events-none ${
                lightMode ? 'text-black/80' : 'text-white/90'
              }`}
            >
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                {/* Signal bars */}
                <svg viewBox="0 0 18 12" className="h-[10px] w-[15px]" fill="currentColor">
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                  <rect x="10" y="3" width="3" height="9" rx="1" />
                  <rect x="15" y="0.5" width="3" height="11.5" rx="1" />
                </svg>
                {/* Battery */}
                <div className="flex items-center">
                  <div className="h-2.5 w-5 rounded-[3px] border border-current p-[1px]">
                    <div className="h-full w-3.5 rounded-[1px] bg-current" />
                  </div>
                  <div className="h-1 w-[2px] rounded-r-[1px] bg-current ml-[1px]" />
                </div>
              </div>
            </div>

            {/* App Screen Content */}
            <div className="h-full w-full overflow-y-auto overflow-x-hidden pt-10 pb-6 scrollbar-none">
              {children}
            </div>

            {/* iOS Home Indicator Bar */}
            <div className="absolute inset-x-0 bottom-2 z-30 flex justify-center pointer-events-none">
              <div
                className={`h-1 w-32 rounded-full ${
                  lightMode ? 'bg-black/30' : 'bg-white/40'
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
