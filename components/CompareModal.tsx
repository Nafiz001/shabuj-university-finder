'use client';

import { useEffect, useState } from 'react';
import { University, getUniversityById } from '@/lib/universities';

interface CompareModalProps {
  universityIds: number[];
  onClose: () => void;
}

export default function CompareModal({ universityIds, onClose }: CompareModalProps) {
  const [universities, setUniversities] = useState<(University | undefined)[]>([]);

  useEffect(() => {
    const unis = universityIds.map((id) => getUniversityById(id));
    setUniversities(unis);
  }, [universityIds]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (universities.length !== 2 || universities.some((uni) => !uni)) {
    return null;
  }

  const [uni1, uni2] = universities as University[];

  // Get first letter for avatar
  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  // Generate color based on university name
  const getAvatarColor = (name: string) => {
    const colors = [
      { bg: 'bg-blue-100 dark:bg-blue-900/40', text: 'text-blue-700 dark:text-blue-400' },
      { bg: 'bg-red-100 dark:bg-red-900/40', text: 'text-red-700 dark:text-red-400' },
      { bg: 'bg-green-100 dark:bg-green-900/40', text: 'text-green-700 dark:text-green-400' },
      { bg: 'bg-purple-100 dark:bg-purple-900/40', text: 'text-purple-700 dark:text-purple-400' },
      { bg: 'bg-orange-100 dark:bg-orange-900/40', text: 'text-orange-700 dark:text-orange-400' },
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const uni1Color = getAvatarColor(uni1.name);
  const uni2Color = getAvatarColor(uni2.name);

  // Determine which university has better value
  const isBestValue = (uni: University, other: University) => {
    return uni.tuitionFee < other.tuitionFee && uni.ranking < other.ranking;
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 w-full max-w-6xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] relative border border-slate-200 dark:border-slate-700 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="px-6 py-3 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
            <span className="material-icons text-green-600">compare_arrows</span>
            Compare Universities
          </h2>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
            suppressHydrationWarning
          >
            <span className="material-icons">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow p-4 sm:p-6 bg-slate-50 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Labels Column - Hidden on Mobile */}
            <div className="hidden md:flex flex-col gap-2 pt-[90px]">
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Ranking
              </div>
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Location
              </div>
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Tuition/Year
              </div>
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                IELTS
              </div>
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Established
              </div>
              <div className="h-10 flex items-center text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Scholarship
              </div>
            </div>

            {/* University 1 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 flex flex-col relative group hover:border-green-600 transition-colors duration-300">
              {isBestValue(uni1, uni2) && (
                <div className="absolute top-2 right-2 text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold">
                  Best Value
                </div>
              )}
              
              {/* University Header */}
              <div className="flex flex-col items-center mb-4 h-[80px] justify-center">
                <div className={`w-12 h-12 ${uni1Color.bg} rounded-full flex items-center justify-center mb-2 text-xl font-bold ${uni1Color.text} shadow-inner`}>
                  {getInitial(uni1.name)}
                </div>
                <h3 className="text-base font-bold text-center text-slate-900 dark:text-white leading-tight">
                  {uni1.name}
                </h3>
              </div>

              {/* Comparison Data */}
              <div className="flex flex-col gap-2">
                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Global Ranking
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-amber-500 text-lg">emoji_events</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    #{uni1.ranking}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Location
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-red-500 text-lg">place</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                    {uni1.city}, {uni1.country}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Tuition
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-green-600 text-lg">payments</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    ${uni1.tuitionFee.toLocaleString()}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  IELTS
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-purple-500 text-lg">school</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni1.ieltsRequirement}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Established
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-blue-500 text-lg">calendar_today</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni1.establishedYear}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Scholarship
                </span>
                <div className="h-10 flex items-center gap-2">
                  <span className="material-icons text-indigo-500 text-lg">card_giftcard</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni1.scholarshipAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>

            {/* University 2 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-4 flex flex-col relative group hover:border-green-600 transition-colors duration-300">
              {isBestValue(uni2, uni1) && (
                <div className="absolute top-2 right-2 text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded text-xs font-bold">
                  Best Value
                </div>
              )}
              
              {/* University Header */}
              <div className="flex flex-col items-center mb-4 h-[80px] justify-center">
                <div className={`w-12 h-12 ${uni2Color.bg} rounded-full flex items-center justify-center mb-2 text-xl font-bold ${uni2Color.text} shadow-inner`}>
                  {getInitial(uni2.name)}
                </div>
                <h3 className="text-base font-bold text-center text-slate-900 dark:text-white leading-tight">
                  {uni2.name}
                </h3>
              </div>

              {/* Comparison Data */}
              <div className="flex flex-col gap-2">
                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Global Ranking
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-amber-500 text-lg">emoji_events</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    #{uni2.ranking}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Location
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-red-500 text-lg">place</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">
                    {uni2.city}, {uni2.country}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Tuition
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-green-600 text-lg">payments</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    ${uni2.tuitionFee.toLocaleString()}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  IELTS
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-purple-500 text-lg">school</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni2.ieltsRequirement}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Established
                </span>
                <div className="h-10 flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-blue-500 text-lg">calendar_today</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni2.establishedYear}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase">
                  Scholarship
                </span>
                <div className="h-10 flex items-center gap-2">
                  <span className="material-icons text-indigo-500 text-lg">card_giftcard</span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {uni2.scholarshipAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Insights Section - Compact */}
          <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2">
            <span className="material-icons text-blue-600 dark:text-blue-400 text-lg">info</span>
            <p className="text-xs text-blue-800 dark:text-blue-300">
              {uni1.ranking < uni2.ranking ? (
                <><strong>{uni1.name}</strong> ranks higher (#{uni1.ranking} vs #{uni2.ranking}). </>
              ) : uni2.ranking < uni1.ranking ? (
                <><strong>{uni2.name}</strong> ranks higher (#{uni2.ranking} vs #{uni1.ranking}). </>
              ) : null}
              {uni1.tuitionFee < uni2.tuitionFee ? (
                <><strong>{uni1.name}</strong> costs less (${uni1.tuitionFee.toLocaleString()} vs ${uni2.tuitionFee.toLocaleString()}).</>
              ) : uni2.tuitionFee < uni1.tuitionFee ? (
                <><strong>{uni2.name}</strong> costs less (${uni2.tuitionFee.toLocaleString()} vs ${uni1.tuitionFee.toLocaleString()}).</>
              ) : null}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={onClose}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-1"
            suppressHydrationWarning
          >
            <span className="material-icons text-base">close</span> Close
          </button>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors text-sm font-medium" suppressHydrationWarning>
              <span className="material-icons text-base">download</span>
              PDF
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm font-medium" suppressHydrationWarning>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
