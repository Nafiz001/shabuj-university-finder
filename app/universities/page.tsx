import { Metadata } from 'next';
import { filterUniversities, FilterParams } from '@/lib/universities';
import Filters from '@/components/Filters';
import UniversityList from '@/components/UniversityList';
import Navbar from '@/components/Navbar';

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const country = params.country as string;
  const sortBy = params.sortBy as string;

  let title = 'Find Universities | Shabuj University Finder';
  let description = 'Discover the perfect university for your study abroad journey. Filter by country, tuition fee, ranking, and more.';

  if (country) {
    title = `Universities in ${country} | Shabuj University Finder`;
    description = `Find the best universities in ${country}. Compare tuition fees, rankings, and scholarship opportunities.`;
  } else if (sortBy) {
    const sortLabel = sortBy === 'tuition' ? 'Tuition Fee' : 'Ranking';
    title = `Universities Sorted by ${sortLabel} | Shabuj University Finder`;
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function UniversitiesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  
  // Parse search parameters for server-side filtering
  const filterParams: FilterParams = {
    country: params.country as string,
    minTuition: params.minTuition
      ? Number(params.minTuition)
      : undefined,
    maxTuition: params.maxTuition
      ? Number(params.maxTuition)
      : undefined,
    minRanking: params.minRanking
      ? Number(params.minRanking)
      : undefined,
    maxRanking: params.maxRanking
      ? Number(params.maxRanking)
      : undefined,
    establishedAfter: params.establishedAfter
      ? Number(params.establishedAfter)
      : undefined,
    scholarshipAvailable: params.scholarshipAvailable
      ? params.scholarshipAvailable === 'true'
      : undefined,
    maxIelts: params.maxIelts
      ? Number(params.maxIelts)
      : undefined,
    sortBy: params.sortBy as 'tuition' | 'ranking',
    order: params.order as 'asc' | 'desc',
  };

  // Server-side filtering
  const universities = filterUniversities(filterParams);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-1/4 flex-shrink-0">
              <Filters />
            </aside>

            {/* Main Content */}
            <main className="w-full lg:w-3/4">
              {/* Search and Sort Bar */}
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 p-4 mb-6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                  <div className="relative w-full md:w-96">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-icons text-gray-400">search</span>
                    </span>
                    <input
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-green-600 focus:border-green-600 sm:text-sm"
                      placeholder="Search by name, city, or course..."
                      type="text"
                    />
                  </div>
                </div>
              </div>

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
        </div>
      </div>
    </>
  );
}
