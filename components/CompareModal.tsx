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

  if (universities.length !== 2 || universities.some((uni) => !uni)) {
    return null;
  }

  const [uni1, uni2] = universities as University[];

  const compareRows = [
    {
      label: 'Name',
      value1: uni1.name,
      value2: uni2.name,
    },
    {
      label: 'Country',
      value1: uni1.country,
      value2: uni2.country,
    },
    {
      label: 'City',
      value1: uni1.city,
      value2: uni2.city,
    },
    {
      label: 'Tuition Fee',
      value1: `$${uni1.tuitionFee.toLocaleString()}/year`,
      value2: `$${uni2.tuitionFee.toLocaleString()}/year`,
      highlight: uni1.tuitionFee < uni2.tuitionFee ? 'left' : uni1.tuitionFee > uni2.tuitionFee ? 'right' : null,
    },
    {
      label: 'Global Ranking',
      value1: `#${uni1.ranking}`,
      value2: `#${uni2.ranking}`,
      highlight: uni1.ranking < uni2.ranking ? 'left' : uni1.ranking > uni2.ranking ? 'right' : null,
    },
    {
      label: 'Established Year',
      value1: uni1.establishedYear.toString(),
      value2: uni2.establishedYear.toString(),
    },
    {
      label: 'IELTS Requirement',
      value1: uni1.ieltsRequirement.toString(),
      value2: uni2.ieltsRequirement.toString(),
      highlight: uni1.ieltsRequirement < uni2.ieltsRequirement ? 'left' : uni1.ieltsRequirement > uni2.ieltsRequirement ? 'right' : null,
    },
    {
      label: 'Scholarship Available',
      value1: uni1.scholarshipAvailable ? 'Yes' : 'No',
      value2: uni2.scholarshipAvailable ? 'Yes' : 'No',
      highlight: uni1.scholarshipAvailable && !uni2.scholarshipAvailable ? 'left' : !uni1.scholarshipAvailable && uni2.scholarshipAvailable ? 'right' : null,
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Compare Universities</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border border-gray-200">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border border-gray-200">
                    {uni1.name}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border border-gray-200">
                    {uni2.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 border border-gray-200 bg-gray-50">
                      {row.label}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm text-gray-700 border border-gray-200 ${
                        row.highlight === 'left' ? 'bg-green-50 font-semibold text-green-700' : ''
                      }`}
                    >
                      {row.value1}
                    </td>
                    <td
                      className={`px-6 py-4 text-sm text-gray-700 border border-gray-200 ${
                        row.highlight === 'right' ? 'bg-green-50 font-semibold text-green-700' : ''
                      }`}
                    >
                      {row.value2}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg
                className="w-5 h-5 text-blue-600 mr-3 mt-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-sm text-blue-800">
                <p className="font-semibold mb-1">Comparison Tips:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Highlighted values indicate better performance in that category</li>
                  <li>Lower tuition fees and ranking numbers are generally better</li>
                  <li>Consider all factors together, not just individual metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
          <button
            onClick={onClose}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}
