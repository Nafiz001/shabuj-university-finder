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
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto overscroll-contain">
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-icons text-green-600">filter_alt</span>
            Filters
          </h2>
          <button
            onClick={handleReset}
            className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
            suppressHydrationWarning
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
                  suppressHydrationWarning
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
              suppressHydrationWarning
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
            suppressHydrationWarning
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
            suppressHydrationWarning
          >
            <option value="">Any</option>
            <option value="6.0">6.0</option>
            <option value="6.5">6.5</option>
            <option value="7.0">7.0</option>
            <option value="7.5">7.5</option>
          </select>
        </div>

        <hr className="border-gray-200 dark:border-gray-700" />

        {/* Established Year */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">
            Established After
          </h3>
          <select
            name="establishedAfter"
            value={filters.establishedAfter}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white shadow-sm focus:border-green-600 focus:ring focus:ring-green-600 focus:ring-opacity-50 text-sm py-2 px-3"
            suppressHydrationWarning
          >
            <option value="">Any Year</option>
            <option value="1600">Before 1700</option>
            <option value="1700">After 1700</option>
            <option value="1800">After 1800</option>
            <option value="1900">After 1900</option>
            <option value="1950">After 1950</option>
            <option value="2000">After 2000</option>
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
                  suppressHydrationWarning
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
            suppressHydrationWarning
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
            suppressHydrationWarning
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        {/* Apply Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md shadow-green-500/30"
          suppressHydrationWarning
        >
          Apply Filters
        </button>
      </form>
      </div>
    </div>
  );
}
