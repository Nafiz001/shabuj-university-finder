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
    <div className="fixed inset-0 bg-slate-900/60 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-slate-800 w-full max-w-5xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden relative border border-slate-200 dark:border-slate-700 animate-[fadeIn_0.3s_ease-out]">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-white dark:bg-slate-800 sticky top-0 z-10">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <span className="material-icons text-green-600">compare_arrows</span>
              Compare Universities
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Reviewing side-by-side details for your selection.
            </p>
          </div>
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
        <div className="overflow-y-auto flex-grow p-6 sm:p-8 bg-slate-50 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Labels Column - Hidden on Mobile */}
            <div className="hidden md:flex flex-col gap-4 pt-[180px]">
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Global Ranking
              </div>
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Location
              </div>
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Tuition / Year
              </div>
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                IELTS Required
              </div>
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Established
              </div>
              <div className="h-14 flex items-center text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                Scholarship
              </div>
            </div>

            {/* University 1 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col relative group hover:border-green-600 transition-colors duration-300">
              {isBestValue(uni1, uni2) && (
                <div className="absolute top-4 right-4 text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
                  Best Value
                </div>
              )}
              
              {/* University Header */}
              <div className="flex flex-col items-center mb-6 h-[140px] justify-center">
                <div className={`w-16 h-16 ${uni1Color.bg} rounded-full flex items-center justify-center mb-3 text-2xl font-bold ${uni1Color.text} shadow-inner`}>
                  {getInitial(uni1.name)}
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white">
                  {uni1.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {uni1.city}, {uni1.country}
                </p>
              </div>

              {/* Comparison Data */}
              <div className="flex flex-col gap-4">
                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Global Ranking
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-amber-500">emoji_events</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    #{uni1.ranking}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Location
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-red-500">place</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni1.city}, {uni1.country}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Tuition
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-green-600">payments</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    ${uni1.tuitionFee.toLocaleString()}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  IELTS
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-purple-500">school</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni1.ieltsRequirement}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Established
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-blue-500">calendar_today</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni1.establishedYear}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Scholarship
                </span>
                <div className="h-14 flex items-center gap-3">
                  <span className="material-icons text-indigo-500">card_giftcard</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni1.scholarshipAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/10 font-medium py-2 rounded-lg transition-colors" suppressHydrationWarning>
                  View Details
                </button>
              </div>
            </div>

            {/* University 2 Card */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col relative group hover:border-green-600 transition-colors duration-300">
              {isBestValue(uni2, uni1) && (
                <div className="absolute top-4 right-4 text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-bold">
                  Best Value
                </div>
              )}
              
              {/* University Header */}
              <div className="flex flex-col items-center mb-6 h-[140px] justify-center">
                <div className={`w-16 h-16 ${uni2Color.bg} rounded-full flex items-center justify-center mb-3 text-2xl font-bold ${uni2Color.text} shadow-inner`}>
                  {getInitial(uni2.name)}
                </div>
                <h3 className="text-xl font-bold text-center text-slate-900 dark:text-white">
                  {uni2.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {uni2.city}, {uni2.country}
                </p>
              </div>

              {/* Comparison Data */}
              <div className="flex flex-col gap-4">
                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Global Ranking
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-amber-500">emoji_events</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    #{uni2.ranking}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Location
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-red-500">place</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni2.city}, {uni2.country}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Tuition
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-green-600">payments</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    ${uni2.tuitionFee.toLocaleString()}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  IELTS
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-purple-500">school</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni2.ieltsRequirement}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Established
                </span>
                <div className="h-14 flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50">
                  <span className="material-icons text-blue-500">calendar_today</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni2.establishedYear}
                  </span>
                </div>

                <span className="md:hidden text-xs font-bold text-slate-600 dark:text-slate-400 uppercase mt-2">
                  Scholarship
                </span>
                <div className="h-14 flex items-center gap-3">
                  <span className="material-icons text-indigo-500">card_giftcard</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {uni2.scholarshipAvailable ? 'Available' : 'Not Available'}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="w-full border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/10 font-medium py-2 rounded-lg transition-colors" suppressHydrationWarning>
                  View Details
                </button>
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-4 flex items-start gap-3">
            <span className="material-icons text-blue-600 dark:text-blue-400 mt-1">info</span>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 text-sm">Quick Insight</h4>
              <p className="text-sm text-blue-800 dark:text-blue-300 mt-1">
                {uni1.ranking < uni2.ranking ? (
                  <>
                    <strong>{uni1.name}</strong> has a better global ranking (#{uni1.ranking} vs #{uni2.ranking}).{' '}
                  </>
                ) : uni2.ranking < uni1.ranking ? (
                  <>
                    <strong>{uni2.name}</strong> has a better global ranking (#{uni2.ranking} vs #{uni1.ranking}).{' '}
                  </>
                ) : null}
                {uni1.tuitionFee < uni2.tuitionFee ? (
                  <>
                    <strong>{uni1.name}</strong> offers lower tuition fees (${uni1.tuitionFee.toLocaleString()} vs ${uni2.tuitionFee.toLocaleString()}).
                  </>
                ) : uni2.tuitionFee < uni1.tuitionFee ? (
                  <>
                    <strong>{uni2.name}</strong> offers lower tuition fees (${uni2.tuitionFee.toLocaleString()} vs ${uni1.tuitionFee.toLocaleString()}).
                  </>
                ) : (
                  'Both universities have similar tuition fees.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 sticky bottom-0 z-10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={onClose}
            className="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-medium flex items-center gap-2"
            suppressHydrationWarning
          >
            <span className="material-icons text-lg">close</span> Close
          </button>
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-sm font-medium" suppressHydrationWarning>
              <span className="material-icons text-lg">download</span>
              Download PDF
            </button>
            <button className="flex-1 sm:flex-none px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md font-medium" suppressHydrationWarning>
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
