'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { getUniqueCountries } from '@/lib/universities';

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const countries = getUniqueCountries();

  // Initialize form state from URL params
  const [filters, setFilters] = useState({
    country: searchParams.get('country') || '',
    maxTuition: searchParams.get('maxTuition') || '100000',
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
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFilters((prev) => ({ ...prev, [name]: checkbox.checked ? value : '' }));
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build query string
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== '' && value !== '100000') {
        params.set(key, value);
      }
    });

    router.push(`/universities?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters({
      country: '',
      maxTuition: '100000',
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

  const formatCurrency = (value: string) => {
    const num = parseInt(value);
    if (num >= 100000) return '$100k+';
    return `$${(num / 1000).toFixed(0)}k`;
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          <span className="material-icons text-green-600">filter_alt</span>
          Filters
        </h2>
        <button
          onClick={handleReset}
          className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          Reset All
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country Filter */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Country
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {countries.map((country) => (
              <label key={country} className="flex items-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700/50 -mx-2 px-2 py-1 rounded">
                <input
                  type="checkbox"
                  name="country"
                  value={country}
                  checked={filters.country === country}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFilters((prev) => ({ ...prev, country }));
                    } else {
                      setFilters((prev) => ({ ...prev, country: '' }));
                    }
                  }}
                  className="form-checkbox h-4 w-4 text-green-600 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 focus:ring-green-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                  {country}
                </span>
              </label>
            ))}
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Tuition Slider */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Max Tuition (USD)
          </h3>
          <div className="px-1">
            <input
              type="range"
              name="maxTuition"
              min="0"
              max="100000"
              step="5000"
              value={filters.maxTuition}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
              <span>$0</span>
              <span className="font-medium text-green-600">
                {formatCurrency(filters.maxTuition)}
              </span>
              <span>$100k+</span>
            </div>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Global Ranking */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Global Ranking
          </h3>
          <select
            name="maxRanking"
            value={filters.maxRanking}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50 text-sm py-2 px-3"
          >
            <option value="">All</option>
            <option value="50">Top 50</option>
            <option value="100">Top 100</option>
            <option value="500">Top 500</option>
          </select>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* IELTS Requirement */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Max IELTS Required
          </h3>
          <select
            name="maxIelts"
            value={filters.maxIelts}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50 text-sm py-2 px-3"
          >
            <option value="">Any</option>
            <option value="6.0">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
          </select>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Opportunities */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Opportunities
          </h3>
          <div className="space-y-3">
            <label className="flex items-start group cursor-pointer">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  name="scholarshipAvailable"
                  value="true"
                  checked={filters.scholarshipAvailable === 'true'}
                  onChange={(e) => {
                    setFilters((prev) => ({
                      ...prev,
                      scholarshipAvailable: e.target.checked ? 'true' : '',
                    }));
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600 dark:border-gray-600 dark:bg-gray-700"
                />
              </div>
              <div className="ml-3 text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:text-green-600 transition-colors">
                  Scholarship Available
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  Full or partial funding
                </p>
              </div>
            </label>
          </div>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Sorting */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Sort By
          </h3>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50 text-sm py-2 px-3 mb-3"
          >
            <option value="">Default</option>
            <option value="ranking">Top Ranked</option>
            <option value="tuition">Lowest Tuition</option>
          </select>
          <select
            name="order"
            value={filters.order}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50 text-sm py-2 px-3"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Apply Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md shadow-green-500/30"
        >
          Apply Filters
        </button>
      </form>
    </div>
  );
}

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
