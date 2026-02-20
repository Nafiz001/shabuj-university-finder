'use client';

import { useState } from 'react';
import Filters from '@/components/Filters';
import UniversityList from '@/components/UniversityList';
import SearchBar from '@/components/SearchBar';
import { University } from '@/lib/universities';

interface UniversitiesContentProps {
  universities: University[];
}

export default function UniversitiesContent({ universities }: UniversitiesContentProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar Filters - Hidden on mobile, visible on lg+ */}
      <aside className="hidden lg:block lg:w-1/4 flex-shrink-0">
        <Filters />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4">
        {/* Search and Sort Bar */}
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <SearchBar />
          </div>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full justify-center"
          >
            <span className="material-icons">
              {showMobileFilters ? 'close' : 'filter_list'}
            </span>
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Mobile Filters - Toggleable */}
        {showMobileFilters && (
          <div className="lg:hidden mb-6">
            <Filters />
          </div>
        )}

        {/* Results Count */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {universities.length}
            </span>{' '}
            {universities.length === 1 ? 'university' : 'universities'}
          </p>
        </div>

        {/* University Grid */}
        {universities.length > 0 ? (
          <UniversityList universities={universities} />
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-12 text-center">
            <span className="material-icons text-6xl text-gray-400 mb-4">
              search_off
            </span>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              No universities found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your filters to see more results
            </p>
            <a
              href="/universities"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-200"
            >
              Clear All Filters
            </a>
          </div>
        )}
      </main>
    </div>
  );
}
