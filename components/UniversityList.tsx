'use client';

import { useState } from 'react';
import UniversityCard from '@/components/UniversityCard';
import CompareModal from '@/components/CompareModal';
import { University } from '@/lib/universities';

interface UniversityListProps {
  universities: University[];
}

export default function UniversityList({ universities }: UniversityListProps) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const handleCompareToggle = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((selectedId) => selectedId !== id);
      } else if (prev.length < 2) {
        return [...prev, id];
      } else {
        alert('You can only compare up to 2 universities');
        return prev;
      }
    });
  };

  const handleCompare = () => {
    if (selectedIds.length === 2) {
      setShowCompareModal(true);
    } else {
      alert('Please select exactly 2 universities to compare');
    }
  };

  const handleCloseModal = () => {
    setShowCompareModal(false);
  };

  return (
    <>
      {selectedIds.length > 0 && (
        <div className="sticky top-0 z-10 bg-green-600 text-white py-4 px-6 mb-6 rounded-lg shadow-lg">
          <div className="flex items-center justify-between">
            <span className="font-semibold">
              {selectedIds.length} {selectedIds.length === 1 ? 'university' : 'universities'} selected
            </span>
            <div className="flex gap-4">
              <button
                onClick={handleCompare}
                disabled={selectedIds.length !== 2}
                className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                  selectedIds.length === 2
                    ? 'bg-white text-green-600 hover:bg-gray-100'
                    : 'bg-green-500 text-white cursor-not-allowed'
                }`}
              >
                Compare Now
              </button>
              <button
                onClick={() => setSelectedIds([])}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md font-semibold transition-colors"
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((university) => (
          <UniversityCard
            key={university.id}
            university={university}
            onCompare={handleCompareToggle}
            isSelected={selectedIds.includes(university.id)}
          />
        ))}
      </div>

      {showCompareModal && (
        <CompareModal
          universityIds={selectedIds}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}
