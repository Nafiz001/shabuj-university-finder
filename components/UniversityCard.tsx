'use client';

import { University } from '@/lib/universities';

interface UniversityCardProps {
  university: University;
  onCompare?: (id: number) => void;
  isSelected?: boolean;
}

const universityImages: { [key: string]: string } = {
  'University of Toronto': 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80',
  'University of British Columbia': 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80',
  'McGill University': 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  'Harvard University': 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'Stanford University': 'https://images.unsplash.com/photo-1580928322023-6e4e63c15752?w=800&q=80',
  'Massachusetts Institute of Technology': 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&q=80',
  'University of Oxford': 'https://images.unsplash.com/photo-1543035030-a31b8023a0ee?w=800&q=80',
  'University of Cambridge': 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80',
  'Imperial College London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
  'default': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80',
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
        <img
          alt={`${university.name} campus`}
          className="w-full h-full object-cover"
          src={imageUrl}
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
          <button className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
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
