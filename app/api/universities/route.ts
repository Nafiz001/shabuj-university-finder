import { NextRequest, NextResponse } from 'next/server';
import { filterUniversities, FilterParams } from '@/lib/universities';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    // Parse query parameters
    const filterParams: FilterParams = {
      country: searchParams.get('country') || undefined,
      minTuition: searchParams.get('minTuition')
        ? Number(searchParams.get('minTuition'))
        : undefined,
      maxTuition: searchParams.get('maxTuition')
        ? Number(searchParams.get('maxTuition'))
        : undefined,
      minRanking: searchParams.get('minRanking')
        ? Number(searchParams.get('minRanking'))
        : undefined,
      maxRanking: searchParams.get('maxRanking')
        ? Number(searchParams.get('maxRanking'))
        : undefined,
      establishedAfter: searchParams.get('establishedAfter')
        ? Number(searchParams.get('establishedAfter'))
        : undefined,
      scholarshipAvailable: searchParams.get('scholarshipAvailable')
        ? searchParams.get('scholarshipAvailable') === 'true'
        : undefined,
      maxIelts: searchParams.get('maxIelts')
        ? Number(searchParams.get('maxIelts'))
        : undefined,
      sortBy: (searchParams.get('sortBy') as 'tuition' | 'ranking') || undefined,
      order: (searchParams.get('order') as 'asc' | 'desc') || undefined,
    };

    // Filter universities based on parameters
    const filteredUniversities = filterUniversities(filterParams);

    return NextResponse.json({
      success: true,
      count: filteredUniversities.length,
      data: filteredUniversities,
    });
  } catch (error) {
    console.error('Error filtering universities:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to filter universities',
      },
      { status: 500 }
    );
  }
}
