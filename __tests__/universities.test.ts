import { filterUniversities, getUniqueCountries, getUniversityById, FilterParams } from '../lib/universities';

describe('filterUniversities', () => {
  describe('Search filtering', () => {
    it('should filter universities by name', () => {
      const params: FilterParams = { search: 'Harvard' };
      const result = filterUniversities(params);
      
      expect(result.length).toBe(1);
      expect(result[0].name).toBe('Harvard University');
    });

    it('should filter universities by city', () => {
      const params: FilterParams = { search: 'London' };
      const result = filterUniversities(params);
      
      expect(result.length).toBeGreaterThan(0);
      result.forEach(uni => {
        expect(uni.city.toLowerCase()).toContain('london');
      });
    });

    it('should filter universities by country', () => {
      const params: FilterParams = { search: 'Canada' };
      const result = filterUniversities(params);
      
      expect(result.length).toBeGreaterThan(0);
      result.forEach(uni => {
        expect(uni.country.toLowerCase()).toContain('canada');
      });
    });

    it('should be case-insensitive', () => {
      const params1: FilterParams = { search: 'HARVARD' };
      const params2: FilterParams = { search: 'harvard' };
      const params3: FilterParams = { search: 'HaRvArD' };
      
      const result1 = filterUniversities(params1);
      const result2 = filterUniversities(params2);
      const result3 = filterUniversities(params3);
      
      expect(result1.length).toBe(result2.length);
      expect(result2.length).toBe(result3.length);
    });

    it('should return empty array when no matches found', () => {
      const params: FilterParams = { search: 'NonExistentUniversity' };
      const result = filterUniversities(params);
      
      expect(result.length).toBe(0);
    });
  });

  describe('Country filtering', () => {
    it('should filter universities by country', () => {
      const params: FilterParams = { country: 'USA' };
      const result = filterUniversities(params);
      
      expect(result.length).toBeGreaterThan(0);
      result.forEach(uni => {
        expect(uni.country).toBe('USA');
      });
    });

    it('should be case-insensitive for country filter', () => {
      const params1: FilterParams = { country: 'USA' };
      const params2: FilterParams = { country: 'usa' };
      
      const result1 = filterUniversities(params1);
      const result2 = filterUniversities(params2);
      
      expect(result1.length).toBe(result2.length);
    });
  });

  describe('Tuition filtering', () => {
    it('should filter by minimum tuition', () => {
      const params: FilterParams = { minTuition: 50000 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.tuitionFee).toBeGreaterThanOrEqual(50000);
      });
    });

    it('should filter by maximum tuition', () => {
      const params: FilterParams = { maxTuition: 20000 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.tuitionFee).toBeLessThanOrEqual(20000);
      });
    });

    it('should filter by tuition range', () => {
      const params: FilterParams = { minTuition: 30000, maxTuition: 50000 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.tuitionFee).toBeGreaterThanOrEqual(30000);
        expect(uni.tuitionFee).toBeLessThanOrEqual(50000);
      });
    });
  });

  describe('Ranking filtering', () => {
    it('should filter by minimum ranking', () => {
      const params: FilterParams = { minRanking: 50 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.ranking).toBeGreaterThanOrEqual(50);
      });
    });

    it('should filter by maximum ranking', () => {
      const params: FilterParams = { maxRanking: 10 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.ranking).toBeLessThanOrEqual(10);
      });
    });

    it('should filter by ranking range', () => {
      const params: FilterParams = { minRanking: 10, maxRanking: 50 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.ranking).toBeGreaterThanOrEqual(10);
        expect(uni.ranking).toBeLessThanOrEqual(50);
      });
    });
  });

  describe('Established year filtering', () => {
    it('should filter universities established after a specific year', () => {
      const params: FilterParams = { establishedAfter: 1900 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.establishedYear).toBeGreaterThanOrEqual(1900);
      });
    });
  });

  describe('Scholarship filtering', () => {
    it('should filter universities with scholarships available', () => {
      const params: FilterParams = { scholarshipAvailable: true };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.scholarshipAvailable).toBe(true);
      });
    });

    it('should filter universities without scholarships', () => {
      const params: FilterParams = { scholarshipAvailable: false };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.scholarshipAvailable).toBe(false);
      });
    });
  });

  describe('IELTS filtering', () => {
    it('should filter by maximum IELTS requirement', () => {
      const params: FilterParams = { maxIelts: 6.5 };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.ieltsRequirement).toBeLessThanOrEqual(6.5);
      });
    });
  });

  describe('Sorting', () => {
    it('should sort by tuition in ascending order', () => {
      const params: FilterParams = { sortBy: 'tuition', order: 'asc' };
      const result = filterUniversities(params);
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].tuitionFee).toBeLessThanOrEqual(result[i + 1].tuitionFee);
      }
    });

    it('should sort by tuition in descending order', () => {
      const params: FilterParams = { sortBy: 'tuition', order: 'desc' };
      const result = filterUniversities(params);
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].tuitionFee).toBeGreaterThanOrEqual(result[i + 1].tuitionFee);
      }
    });

    it('should sort by ranking in ascending order', () => {
      const params: FilterParams = { sortBy: 'ranking', order: 'asc' };
      const result = filterUniversities(params);
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].ranking).toBeLessThanOrEqual(result[i + 1].ranking);
      }
    });

    it('should sort by ranking in descending order', () => {
      const params: FilterParams = { sortBy: 'ranking', order: 'desc' };
      const result = filterUniversities(params);
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].ranking).toBeGreaterThanOrEqual(result[i + 1].ranking);
      }
    });
  });

  describe('Combined filters', () => {
    it('should apply multiple filters together', () => {
      const params: FilterParams = {
        country: 'USA',
        minTuition: 50000,
        maxTuition: 80000,
        maxRanking: 10,
        scholarshipAvailable: true,
      };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.country).toBe('USA');
        expect(uni.tuitionFee).toBeGreaterThanOrEqual(50000);
        expect(uni.tuitionFee).toBeLessThanOrEqual(80000);
        expect(uni.ranking).toBeLessThanOrEqual(10);
        expect(uni.scholarshipAvailable).toBe(true);
      });
    });

    it('should apply search with other filters', () => {
      const params: FilterParams = {
        search: 'University',
        country: 'Canada',
        maxTuition: 50000,
      };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.name.toLowerCase()).toContain('university');
        expect(uni.country).toBe('Canada');
        expect(uni.tuitionFee).toBeLessThanOrEqual(50000);
      });
    });

    it('should apply filters and then sort', () => {
      const params: FilterParams = {
        country: 'UK',
        sortBy: 'tuition',
        order: 'asc',
      };
      const result = filterUniversities(params);
      
      result.forEach(uni => {
        expect(uni.country).toBe('UK');
      });
      
      for (let i = 0; i < result.length - 1; i++) {
        expect(result[i].tuitionFee).toBeLessThanOrEqual(result[i + 1].tuitionFee);
      }
    });
  });

  describe('Edge cases', () => {
    it('should return all universities when no filters are applied', () => {
      const params: FilterParams = {};
      const result = filterUniversities(params);
      
      expect(result.length).toBe(30); // Total number of universities
    });

    it('should handle empty search string', () => {
      const params: FilterParams = { search: '' };
      const result = filterUniversities(params);
      
      expect(result.length).toBe(30);
    });

    it('should handle zero tuition (free universities)', () => {
      const params: FilterParams = { maxTuition: 1000 };
      const result = filterUniversities(params);
      
      expect(result.length).toBeGreaterThan(0);
      result.forEach(uni => {
        expect(uni.tuitionFee).toBeLessThanOrEqual(1000);
      });
    });
  });
});

describe('getUniqueCountries', () => {
  it('should return an array of unique countries', () => {
    const countries = getUniqueCountries();
    
    expect(Array.isArray(countries)).toBe(true);
    expect(countries.length).toBeGreaterThan(0);
    
    // Check uniqueness
    const uniqueSet = new Set(countries);
    expect(uniqueSet.size).toBe(countries.length);
  });

  it('should be sorted alphabetically', () => {
    const countries = getUniqueCountries();
    
    for (let i = 0; i < countries.length - 1; i++) {
      expect(countries[i].localeCompare(countries[i + 1])).toBeLessThanOrEqual(0);
    }
  });
});

describe('getUniversityById', () => {
  it('should return university with matching id', () => {
    const university = getUniversityById(1);
    
    expect(university).toBeDefined();
    expect(university?.id).toBe(1);
  });

  it('should return undefined for non-existent id', () => {
    const university = getUniversityById(999);
    
    expect(university).toBeUndefined();
  });

  it('should return correct university data', () => {
    const university = getUniversityById(4);
    
    expect(university?.name).toBe('Harvard University');
    expect(university?.country).toBe('USA');
    expect(university?.ranking).toBe(1);
  });
});
