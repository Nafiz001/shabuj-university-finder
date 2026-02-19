'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [isSearching, setIsSearching] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Update search term when URL changes
  useEffect(() => {
    const urlSearch = searchParams.get('search') || '';
    if (urlSearch !== searchTerm) {
      setSearchTerm(urlSearch);
      setIsSearching(false);
    }
  }, [searchParams, searchTerm]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setIsSearching(true);

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Set new timer for debounced search (500ms delay)
    debounceTimer.current = setTimeout(() => {
      // Create new URLSearchParams from current params
      const params = new URLSearchParams(searchParams.toString());

      if (value.trim()) {
        params.set('search', value.trim());
      } else {
        params.delete('search');
      }

      // Update URL with new search parameter
      router.push(`/universities?${params.toString()}`);
      setIsSearching(false);
    }, 500);
  };

  const handleClear = () => {
    setSearchTerm('');
    setIsSearching(false);
    
    // Clear any pending debounce timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    
    const params = new URLSearchParams(searchParams.toString());
    params.delete('search');
    router.push(`/universities?${params.toString()}`);
  };

  return (
    <div className="relative w-full md:w-96">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <span className={`material-icons transition-colors duration-200 ${isSearching ? 'text-green-600' : 'text-gray-400'}`}>
          {isSearching ? 'hourglass_empty' : 'search'}
        </span>
      </span>
      <input
        className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-green-600 focus:border-transparent sm:text-sm transition-all duration-200"
        placeholder="Search by name, city, or country..."
        type="text"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        suppressHydrationWarning
      />
      {searchTerm && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Clear search"
          suppressHydrationWarning
        >
          <span className="material-icons text-lg">close</span>
        </button>
      )}
    </div>
  );
}
