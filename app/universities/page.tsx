import { Metadata } from 'next';
import { filterUniversities, FilterParams } from '@/lib/universities';
import Filters from '@/components/Filters';
import UniversityList from '@/components/UniversityList';

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const country = searchParams.country as string;
  const sortBy = searchParams.sortBy as string;

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

export default function UniversitiesPage({ searchParams }: PageProps) {
  // Parse search parameters for server-side filtering
  const filterParams: FilterParams = {
    country: searchParams.country as string,
    minTuition: searchParams.minTuition
      ? Number(searchParams.minTuition)
      : undefined,
    maxTuition: searchParams.maxTuition
      ? Number(searchParams.maxTuition)
      : undefined,
    minRanking: searchParams.minRanking
      ? Number(searchParams.minRanking)
      : undefined,
    maxRanking: searchParams.maxRanking
      ? Number(searchParams.maxRanking)
      : undefined,
    establishedAfter: searchParams.establishedAfter
      ? Number(searchParams.establishedAfter)
      : undefined,
    scholarshipAvailable: searchParams.scholarshipAvailable
      ? searchParams.scholarshipAvailable === 'true'
      : undefined,
    maxIelts: searchParams.maxIelts
      ? Number(searchParams.maxIelts)
      : undefined,
    sortBy: searchParams.sortBy as 'tuition' | 'ranking',
    order: searchParams.order as 'asc' | 'desc',
  };

  // Server-side filtering
  const universities = filterUniversities(filterParams);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Find Your Perfect University
        </h1>

        <Filters />

        <div className="mb-6">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">{universities.length}</span>{' '}
            {universities.length === 1 ? 'university' : 'universities'} found
          </p>
        </div>

        {universities.length > 0 ? (
          <UniversityList universities={universities} />
        ) : (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              No universities found
            </h2>
            <p className="text-gray-600 mb-6">
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
      </div>
    </main>
  );
}
