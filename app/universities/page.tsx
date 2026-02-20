import { Metadata } from 'next';
import { filterUniversities, FilterParams } from '@/lib/universities';
import Navbar from '@/components/Navbar';
import UniversitiesContent from '@/components/UniversitiesContent';

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
    search: params.search as string,
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
          <UniversitiesContent universities={universities} />
        </div>
      </div>
    </>
  );
}
