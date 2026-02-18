export interface University {
  id: number;
  name: string;
  country: string;
  city: string;
  tuitionFee: number;
  ranking: number;
  establishedYear: number;
  scholarshipAvailable: boolean;
  ieltsRequirement: number;
}

export interface FilterParams {
  country?: string;
  minTuition?: number;
  maxTuition?: number;
  minRanking?: number;
  maxRanking?: number;
  establishedAfter?: number;
  scholarshipAvailable?: boolean;
  maxIelts?: number;
  sortBy?: 'tuition' | 'ranking';
  order?: 'asc' | 'desc';
}

// Dummy university data with 30 realistic universities
export const universities: University[] = [
  {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    city: "Toronto",
    tuitionFee: 45000,
    ranking: 34,
    establishedYear: 1827,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 2,
    name: "University of British Columbia",
    country: "Canada",
    city: "Vancouver",
    tuitionFee: 40000,
    ranking: 46,
    establishedYear: 1908,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 3,
    name: "McGill University",
    country: "Canada",
    city: "Montreal",
    tuitionFee: 38000,
    ranking: 54,
    establishedYear: 1821,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 4,
    name: "Harvard University",
    country: "USA",
    city: "Cambridge",
    tuitionFee: 75000,
    ranking: 1,
    establishedYear: 1636,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 5,
    name: "Stanford University",
    country: "USA",
    city: "Stanford",
    tuitionFee: 73000,
    ranking: 3,
    establishedYear: 1885,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 6,
    name: "Massachusetts Institute of Technology",
    country: "USA",
    city: "Cambridge",
    tuitionFee: 77000,
    ranking: 2,
    establishedYear: 1861,
    scholarshipAvailable: true,
    ieltsRequirement: 7.5,
  },
  {
    id: 7,
    name: "University of Oxford",
    country: "UK",
    city: "Oxford",
    tuitionFee: 35000,
    ranking: 5,
    establishedYear: 1096,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 8,
    name: "University of Cambridge",
    country: "UK",
    city: "Cambridge",
    tuitionFee: 36000,
    ranking: 4,
    establishedYear: 1209,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 9,
    name: "Imperial College London",
    country: "UK",
    city: "London",
    tuitionFee: 38000,
    ranking: 7,
    establishedYear: 1907,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 10,
    name: "University College London",
    country: "UK",
    city: "London",
    tuitionFee: 32000,
    ranking: 9,
    establishedYear: 1826,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 11,
    name: "University of Melbourne",
    country: "Australia",
    city: "Melbourne",
    tuitionFee: 42000,
    ranking: 33,
    establishedYear: 1853,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 12,
    name: "Australian National University",
    country: "Australia",
    city: "Canberra",
    tuitionFee: 40000,
    ranking: 30,
    establishedYear: 1946,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 13,
    name: "University of Sydney",
    country: "Australia",
    city: "Sydney",
    tuitionFee: 44000,
    ranking: 41,
    establishedYear: 1850,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 14,
    name: "ETH Zurich",
    country: "Switzerland",
    city: "Zurich",
    tuitionFee: 1500,
    ranking: 11,
    establishedYear: 1855,
    scholarshipAvailable: false,
    ieltsRequirement: 7.0,
  },
  {
    id: 15,
    name: "National University of Singapore",
    country: "Singapore",
    city: "Singapore",
    tuitionFee: 30000,
    ranking: 8,
    establishedYear: 1905,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 16,
    name: "Nanyang Technological University",
    country: "Singapore",
    city: "Singapore",
    tuitionFee: 28000,
    ranking: 26,
    establishedYear: 1991,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 17,
    name: "University of Auckland",
    country: "New Zealand",
    city: "Auckland",
    tuitionFee: 35000,
    ranking: 85,
    establishedYear: 1883,
    scholarshipAvailable: true,
    ieltsRequirement: 6.0,
  },
  {
    id: 18,
    name: "Technical University of Munich",
    country: "Germany",
    city: "Munich",
    tuitionFee: 0,
    ranking: 49,
    establishedYear: 1868,
    scholarshipAvailable: false,
    ieltsRequirement: 6.5,
  },
  {
    id: 19,
    name: "Ludwig Maximilian University of Munich",
    country: "Germany",
    city: "Munich",
    tuitionFee: 0,
    ranking: 59,
    establishedYear: 1472,
    scholarshipAvailable: false,
    ieltsRequirement: 6.0,
  },
  {
    id: 20,
    name: "University of Hong Kong",
    country: "Hong Kong",
    city: "Hong Kong",
    tuitionFee: 18000,
    ranking: 21,
    establishedYear: 1911,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 21,
    name: "University of Tokyo",
    country: "Japan",
    city: "Tokyo",
    tuitionFee: 5000,
    ranking: 23,
    establishedYear: 1877,
    scholarshipAvailable: true,
    ieltsRequirement: 6.0,
  },
  {
    id: 22,
    name: "Seoul National University",
    country: "South Korea",
    city: "Seoul",
    tuitionFee: 6000,
    ranking: 29,
    establishedYear: 1946,
    scholarshipAvailable: true,
    ieltsRequirement: 6.0,
  },
  {
    id: 23,
    name: "University of Edinburgh",
    country: "UK",
    city: "Edinburgh",
    tuitionFee: 30000,
    ranking: 15,
    establishedYear: 1583,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 24,
    name: "University of Manchester",
    country: "UK",
    city: "Manchester",
    tuitionFee: 28000,
    ranking: 27,
    establishedYear: 1824,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 25,
    name: "King's College London",
    country: "UK",
    city: "London",
    tuitionFee: 31000,
    ranking: 35,
    establishedYear: 1829,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 26,
    name: "University of California, Berkeley",
    country: "USA",
    city: "Berkeley",
    tuitionFee: 65000,
    ranking: 10,
    establishedYear: 1868,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 27,
    name: "Princeton University",
    country: "USA",
    city: "Princeton",
    tuitionFee: 74000,
    ranking: 6,
    establishedYear: 1746,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 28,
    name: "Yale University",
    country: "USA",
    city: "New Haven",
    tuitionFee: 75000,
    ranking: 12,
    establishedYear: 1701,
    scholarshipAvailable: true,
    ieltsRequirement: 7.0,
  },
  {
    id: 29,
    name: "University of Waterloo",
    country: "Canada",
    city: "Waterloo",
    tuitionFee: 43000,
    ranking: 166,
    establishedYear: 1957,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
  {
    id: 30,
    name: "Monash University",
    country: "Australia",
    city: "Melbourne",
    tuitionFee: 38000,
    ranking: 42,
    establishedYear: 1958,
    scholarshipAvailable: true,
    ieltsRequirement: 6.5,
  },
];

/**
 * Filter universities based on provided criteria
 * @param params - Filter parameters
 * @returns Filtered and sorted array of universities
 */
export function filterUniversities(params: FilterParams): University[] {
  let filtered = [...universities];

  // Apply filters
  if (params.country) {
    filtered = filtered.filter(
      (uni) => uni.country.toLowerCase() === params.country!.toLowerCase()
    );
  }

  if (params.minTuition !== undefined) {
    filtered = filtered.filter((uni) => uni.tuitionFee >= params.minTuition!);
  }

  if (params.maxTuition !== undefined) {
    filtered = filtered.filter((uni) => uni.tuitionFee <= params.maxTuition!);
  }

  if (params.minRanking !== undefined) {
    filtered = filtered.filter((uni) => uni.ranking >= params.minRanking!);
  }

  if (params.maxRanking !== undefined) {
    filtered = filtered.filter((uni) => uni.ranking <= params.maxRanking!);
  }

  if (params.establishedAfter !== undefined) {
    filtered = filtered.filter(
      (uni) => uni.establishedYear >= params.establishedAfter!
    );
  }

  if (params.scholarshipAvailable !== undefined) {
    filtered = filtered.filter(
      (uni) => uni.scholarshipAvailable === params.scholarshipAvailable
    );
  }

  if (params.maxIelts !== undefined) {
    filtered = filtered.filter(
      (uni) => uni.ieltsRequirement <= params.maxIelts!
    );
  }

  // Apply sorting
  if (params.sortBy) {
    filtered.sort((a, b) => {
      const field = params.sortBy!;
      const order = params.order === 'desc' ? -1 : 1;
      return (a[field] - b[field]) * order;
    });
  }

  return filtered;
}

/**
 * Get unique countries from universities data
 */
export function getUniqueCountries(): string[] {
  return Array.from(new Set(universities.map((uni) => uni.country))).sort();
}

/**
 * Get university by ID
 */
export function getUniversityById(id: number): University | undefined {
  return universities.find((uni) => uni.id === id);
}
