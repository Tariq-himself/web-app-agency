import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface Exercise {
  id: string;
  nameEn: string;
  nameAr: string;
  sets: string;
  completed: boolean;
}

export const MethodMockup: React.FC = () => {
  const { isRTL } = useLanguage();
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: '1', nameEn: 'Barbell Bench Press', nameAr: 'بنش برس بالبار', sets: '4 × 8', completed: true },
    { id: '2', nameEn: 'Incline Dumbbell Press', nameAr: 'ضغط دمبل مائل', sets: '3 × 10', completed: true },
    { id: '3', nameEn: 'Cable Fly', nameAr: 'تفتيح كيبل للصدر', sets: '3 × 12', completed: false },
    { id: '4', nameEn: 'Overhead Press', nameAr: 'ضغط أكتاف علوي', sets: '4 × 8', completed: false },
    { id: '5', nameEn: 'Triceps Rope Pushdown', nameAr: 'مد ترايسبس بالحبل', sets: '3 × 15', completed: false },
  ]);

  const toggleExercise = (id: string) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, completed: !ex.completed } : ex))
    );
  };

  const completedCount = exercises.filter((e) => e.completed).length;
  const progressPercent = Math.round((completedCount / exercises.length) * 100);

  return (
    <div className="flex flex-col h-full px-4 text-white font-sans text-xs select-none">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="font-display text-lg font-semibold tracking-wide text-white">Method</h3>
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E88E5]" />
          </div>
          <p className="text-[10px] text-white/50">
            {isRTL ? 'تدريب مركّز بدون تعقيد' : 'Focused training. No noise.'}
          </p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[9px] text-white/70">
          {isRTL ? 'أسبوع ٣ · يوم ٢' : 'Week 3 · Day 2'}
        </span>
      </div>

      {/* Routine Hero Card */}
      <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0f1a30] to-[#080d1a] p-3.5 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-[#1E88E5] font-semibold">
              {isRTL ? 'البرنامج الرئيسي' : 'Hypertrophy Track'}
            </span>
            <h4 className="mt-0.5 text-sm font-semibold text-white">
              {isRTL ? 'قوة الجزء العلوي والكتفين' : 'Upper Body Power'}
            </h4>
            <p className="mt-0.5 text-[10px] text-white/50">
              {isRTL ? 'الصدر · الأكتاف · الترايسبس' : 'Chest · Shoulders · Triceps'}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-mono text-sm font-bold text-[#FFD700]">
              {progressPercent}%
            </span>
            <span className="text-[9px] text-white/40">
              {completedCount}/{exercises.length}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-3 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#1E88E5] to-[#FFD700] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Exercise List */}
      <div className="mt-4 flex-1">
        <div className="flex items-center justify-between pb-1.5">
          <span className="text-[10px] uppercase tracking-wider text-white/40">
            {isRTL ? 'التمارين المجدولة' : 'Target Exercises'}
          </span>
          <span className="text-[9px] text-[#1E88E5]">{isRTL ? 'انقر لتحديث' : 'Tap to complete'}</span>
        </div>

        <div className="space-y-1.5">
          {exercises.map((ex) => (
            <div
              key={ex.id}
              onClick={() => toggleExercise(ex.id)}
              className={`flex items-center justify-between rounded-xl border p-2.5 transition-all cursor-pointer ${
                ex.completed
                  ? 'border-white/5 bg-white/[0.03] text-white/60'
                  : 'border-white/12 bg-white/[0.07] text-white hover:bg-white/[0.1]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-md border transition-all ${
                    ex.completed
                      ? 'border-[#1E88E5] bg-[#1E88E5] text-black'
                      : 'border-white/30 bg-transparent'
                  }`}
                >
                  {ex.completed && (
                    <svg viewBox="0 0 16 16" className="h-3 w-3 text-white" fill="none">
                      <path
                        d="M3.5 8.5L6.5 11.5L12.5 4.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <span
                  className={`text-[11px] font-medium transition-all ${
                    ex.completed ? 'line-through text-white/40' : 'text-white'
                  }`}
                >
                  {isRTL ? ex.nameAr : ex.nameEn}
                </span>
              </div>
              <span className="font-mono text-[10px] text-white/50">{ex.sets}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Video Coaching Tag */}
      <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E88E5]/20 text-[#1E88E5]">
            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="text-[10px] text-white/80">
            {isRTL ? 'إرشادات فيديو عالية الدقة' : 'HD Form Coaching Video'}
          </span>
        </div>
        <span className="text-[9px] text-[#FFD700]">4K</span>
      </div>
    </div>
  );
};
