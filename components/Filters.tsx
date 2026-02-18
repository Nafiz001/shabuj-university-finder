'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getUniqueCountries } from '@/lib/universities';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const countries = getUniqueCountries();

  // Initialize form state from URL params
  const [filters, setFilters] = useState({
    country: searchParams.get('country') || '',
    minTuition: searchParams.get('minTuition') || '',
    maxTuition: searchParams.get('maxTuition') || '',
    minRanking: searchParams.get('minRanking') || '',
    maxRanking: searchParams.get('maxRanking') || '',
    establishedAfter: searchParams.get('establishedAfter') || '',
    scholarshipAvailable: searchParams.get('scholarshipAvailable') || '',
    maxIelts: searchParams.get('maxIelts') || '',
    sortBy: searchParams.get('sortBy') || '',
    order: searchParams.get('order') || 'asc',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query string
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '') {
        params.set(key, value);
      }
    });

    router.push(`/universities?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      country: '',
      minTuition: '',
      maxTuition: '',
      minRanking: '',
      maxRanking: '',
      establishedAfter: '',
      scholarshipAvailable: '',
      maxIelts: '',
      sortBy: '',
      order: 'asc',
    });
    router.push('/universities');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Filter Universities</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={filters.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">All Countries</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>

        {/* Tuition Fee Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="minTuition" className="block text-sm font-medium text-gray-700 mb-2">
              Min Tuition Fee ($)
            </label>
            <input
              type="number"
              id="minTuition"
              name="minTuition"
              value={filters.minTuition}
              onChange={handleChange}
              placeholder="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="maxTuition" className="block text-sm font-medium text-gray-700 mb-2">
              Max Tuition Fee ($)
            </label>
            <input
              type="number"
              id="maxTuition"
              name="maxTuition"
              value={filters.maxTuition}
              onChange={handleChange}
              placeholder="100000"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Ranking Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="minRanking" className="block text-sm font-medium text-gray-700 mb-2">
              Min Ranking
            </label>
            <input
              type="number"
              id="minRanking"
              name="minRanking"
              value={filters.minRanking}
              onChange={handleChange}
              placeholder="1"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="maxRanking" className="block text-sm font-medium text-gray-700 mb-2">
              Max Ranking
            </label>
            <input
              type="number"
              id="maxRanking"
              name="maxRanking"
              value={filters.maxRanking}
              onChange={handleChange}
              placeholder="500"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Established After */}
        <div>
          <label htmlFor="establishedAfter" className="block text-sm font-medium text-gray-700 mb-2">
            Established After Year
          </label>
          <input
            type="number"
            id="establishedAfter"
            name="establishedAfter"
            value={filters.establishedAfter}
            onChange={handleChange}
            placeholder="1900"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {/* Max IELTS Requirement */}
        <div>
          <label htmlFor="maxIelts" className="block text-sm font-medium text-gray-700 mb-2">
            Maximum IELTS Requirement
          </label>
          <select
            id="maxIelts"
            name="maxIelts"
            value={filters.maxIelts}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="6.0">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
          </select>
        </div>

        {/* Scholarship Available */}
        <div>
          <label htmlFor="scholarshipAvailable" className="block text-sm font-medium text-gray-700 mb-2">
            Scholarship Available
          </label>
          <select
            id="scholarshipAvailable"
            name="scholarshipAvailable"
            value={filters.scholarshipAvailable}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Any</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        {/* Sorting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="sortBy" className="block text-sm font-medium text-gray-700 mb-2">
              Sort By
            </label>
            <select
              id="sortBy"
              name="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="">Default</option>
              <option value="tuition">Tuition Fee</option>
              <option value="ranking">Ranking</option>
            </select>
          </div>
          <div>
            <label htmlFor="order" className="block text-sm font-medium text-gray-700 mb-2">
              Order
            </label>
            <select
              id="order"
              name="order"
              value={filters.order}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Apply Filters
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-md transition-colors duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
