'use client';

import { University } from '@/lib/universities';
import Image from 'next/image';

interface UniversityCardProps {
  university: University;
  onCompare?: (id: number) => void;
  isSelected?: boolean;
}

const universityImages: { [key: string]: string } = {
  'University of Toronto': 'https://picsum.photos/seed/toronto/800/600',
  'University of British Columbia': 'https://picsum.photos/seed/ubc/800/600',
  'McGill University': 'https://picsum.photos/seed/mcgill/800/600',
  'Harvard University': 'https://picsum.photos/seed/harvard/800/600',
  'Stanford University': 'https://picsum.photos/seed/stanford/800/600',
  'Massachusetts Institute of Technology': 'https://picsum.photos/seed/mit/800/600',
  'University of Oxford': 'https://picsum.photos/seed/oxford/800/600',
  'University of Cambridge': 'https://picsum.photos/seed/cambridge/800/600',
  'Imperial College London': 'https://picsum.photos/seed/imperial/800/600',
  'University College London': 'https://picsum.photos/seed/ucl/800/600',
  'University of Melbourne': 'https://picsum.photos/seed/melbourne/800/600',
  'Australian National University': 'https://picsum.photos/seed/anu/800/600',
  'University of Sydney': 'https://picsum.photos/seed/sydney/800/600',
  'ETH Zurich': 'https://picsum.photos/seed/eth/800/600',
  'National University of Singapore': 'https://picsum.photos/seed/nus/800/600',
  'Nanyang Technological University': 'https://picsum.photos/seed/ntu/800/600',
  'University of Auckland': 'https://picsum.photos/seed/auckland/800/600',
  'Technical University of Munich': 'https://picsum.photos/seed/tum/800/600',
  'Ludwig Maximilian University of Munich': 'https://picsum.photos/seed/lmu/800/600',
  'University of Hong Kong': 'https://picsum.photos/seed/hku/800/600',
  'University of Tokyo': 'https://picsum.photos/seed/tokyo/800/600',
  'Seoul National University': 'https://picsum.photos/seed/seoul/800/600',
  'University of Edinburgh': 'https://picsum.photos/seed/edinburgh/800/600',
  'University of Manchester': 'https://picsum.photos/seed/manchester/800/600',
  'King\'s College London': 'https://picsum.photos/seed/kings/800/600',
  'University of California, Berkeley': 'https://picsum.photos/seed/berkeley/800/600',
  'Princeton University': 'https://picsum.photos/seed/princeton/800/600',
  'Yale University': 'https://picsum.photos/seed/yale/800/600',
  'University of Waterloo': 'https://picsum.photos/seed/waterloo/800/600',
  'Monash University': 'https://picsum.photos/seed/monash/800/600',
  'default': 'https://picsum.photos/seed/university/800/600',
};

export default function UniversityCard({
  university,
  onCompare,
  isSelected,
}: UniversityCardProps) {
  const imageUrl = universityImages[university.name] || universityImages['default'];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48">
        <Image
          alt={`${university.name} campus`}
          className="object-cover"
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-gray-800 dark:text-white flex items-center shadow-sm">
          <span className="material-icons text-yellow-500 text-sm mr-1">star</span>
          Rank #{university.ranking}
        </div>
        {university.tuitionFee < 10000 && (
          <div className="absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            Best Value
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-green-600 cursor-pointer transition-colors line-clamp-2">
              {university.name}
            </h3>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span className="material-icons text-base mr-1">location_on</span>
              {university.city}, {university.country}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-4 grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              Tuition
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              ${university.tuitionFee.toLocaleString()} / yr
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              IELTS
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {university.ieltsRequirement}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              Scholarship
            </span>
            {university.scholarshipAvailable ? (
              <span className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                <span className="material-icons text-sm">check_circle</span>
                Available
              </span>
            ) : (
              <span className="font-semibold text-gray-500">Not Available</span>
            )}
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-wide">
              Established
            </span>
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {university.establishedYear}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex gap-3">
          <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors" suppressHydrationWarning>
            View Details
          </button>
          {onCompare && (
            <button
              onClick={() => onCompare(university.id)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium shadow-sm transition-all flex items-center justify-center gap-2 ${
                isSelected
                  ? 'bg-green-600 text-white hover:bg-green-700 shadow-green-500/30'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-green-500/30'
              }`}
              suppressHydrationWarning
            >
              <span className="material-icons text-sm">
                {isSelected ? 'check' : 'add'}
              </span>
              {isSelected ? 'Selected' : 'Compare'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
