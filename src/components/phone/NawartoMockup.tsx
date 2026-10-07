import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const NawartoMockup: React.FC = () => {
  const { isRTL } = useLanguage();
  const [attending, setAttending] = useState<boolean>(false);
  const [confirmedCount, setConfirmedCount] = useState<number>(142);

  const toggleAttendance = () => {
    if (!attending) {
      setAttending(true);
      setConfirmedCount((c) => c + 1);
    } else {
      setAttending(false);
      setConfirmedCount((c) => c - 1);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0b141a] text-white font-sans text-xs select-none -mt-4">
      {/* WhatsApp Header */}
      <div className="flex items-center gap-2.5 bg-[#1f2c34] px-3.5 pb-2.5 pt-6 shadow-sm border-b border-black/30">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70" fill="none" stroke="currentColor">
          <path d="M15 18l-6-6 6-6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-black font-bold font-serif text-sm">
          ن
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-semibold leading-tight text-white flex items-center gap-1.5">
            <span>Nawarto · نورتو</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
          </p>
          <p className="text-[9px] text-[#25D366]">online · متصل الآن</p>
        </div>

        <div className="flex items-center gap-2 text-white/70">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
          </svg>
        </div>
      </div>

      {/* WhatsApp Chat Body */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3">
        {/* Date bubble */}
        <div className="flex justify-center">
          <span className="rounded-md bg-[#182229] px-2 py-0.5 text-[8px] text-white/50">
            TODAY · اليوم
          </span>
        </div>

        {/* Elegant Event Card Message */}
        <div className="rounded-2xl rounded-tl-none bg-[#202c33] p-3 border border-white/5 shadow-md">
          {/* Card Banner */}
          <div className="relative rounded-xl bg-gradient-to-br from-[#2a2118] via-[#1c1510] to-[#120d09] p-3.5 text-center border border-[#d4af37]/30 shadow-inner">
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#d4af37] font-semibold">
              VIP INVITATION · دعوة خاصة
            </span>
            <h4 className="mt-1 font-serif text-sm font-semibold text-[#f5e6c8]">
              حفل زفاف آل عبد العزيز
            </h4>
            <p className="text-[10px] text-[#f5e6c8]/70">The Wedding Celebration</p>

            <div className="my-2 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

            <div className="text-[9px] text-white/80 space-y-0.5">
              <p className="font-medium text-[#d4af37]">The Ritz-Carlton, Riyadh</p>
              <p className="text-white/60">فندق الريتز كارلتون — قاعة الاحتفالات</p>
              <p className="text-[8px] text-white/50">Thursday, 8:00 PM · الخميس</p>
            </div>

            {/* Attendance Status Counter */}
            <div className="mt-3 flex items-center justify-between rounded-lg bg-black/40 px-2.5 py-1.5 border border-white/5">
              <span className="text-[9px] text-white/60">
                {isRTL ? 'المؤكدون حتى الآن' : 'Confirmed Guests'}
              </span>
              <span className="font-mono text-[10px] font-bold text-[#25D366]">
                {confirmedCount} {isRTL ? 'ضيف' : 'RSVPs'}
              </span>
            </div>
          </div>

          {/* Interactive RSVP Action */}
          <div className="mt-3">
            <button
              onClick={toggleAttendance}
              className={`w-full rounded-xl py-2 px-3 text-center text-[11px] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                attending
                  ? 'bg-[#25D366] text-black font-semibold'
                  : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
              }`}
            >
              {attending ? (
                <>
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                  <span>{isRTL ? 'تم تأكيد حضورك — نتشرف بك!' : "You're confirmed — see you there!"}</span>
                </>
              ) : (
                <>
                  <span>{isRTL ? 'تأكيد الحضور بنقرة واحدة' : 'Tap to RSVP (Confirm Attendance)'}</span>
                </>
              )}
            </button>
          </div>

          {/* Mini QR Check-in badge */}
          {attending && (
            <div className="mt-2.5 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center gap-2">
              <div className="h-7 w-7 rounded bg-white p-0.5 shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-black fill-current">
                  <path d="M2 2h8v8H2zM4 4v4h4V4zm10-2h8v8h-8zM16 4v4h4V4zM2 14h8v8H2zM4 16v4h4v-4zm10 0h3v3h-3zm5 0h3v3h-3zm-5 5h3v3h-3zm5 0h3v3h-3z" />
                </svg>
              </div>
              <div className="text-[8px] leading-tight text-white/70">
                <p className="font-semibold text-white">{isRTL ? 'بطاقة الدخول السريع' : 'Fast-Track QR Pass'}</p>
                <p>{isRTL ? 'جاهزة للمسح عند الاستقبال' : 'Ready for reception check-in'}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
