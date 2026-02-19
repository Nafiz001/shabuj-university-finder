export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-6 animate-pulse"></div>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-3 animate-pulse"></div>
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <main className="w-full lg:w-3/4">
            {/* Search Bar Skeleton */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-6">
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full md:w-96 animate-pulse"></div>
            </div>

            {/* Results Count Skeleton */}
            <div className="mb-4">
              <div className="h-5 bg-gray-200 dark:bg-gray-700 rounded w-40 animate-pulse"></div>
            </div>

            {/* Cards Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div 
                  key={i} 
                  className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
                >
                  {/* Image Skeleton */}
                  <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                  
                  <div className="p-6">
                    {/* University Name */}
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4 animate-pulse"></div>
                    
                    {/* Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-32 animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-28 animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Button */}
                    <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-full mt-6 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
