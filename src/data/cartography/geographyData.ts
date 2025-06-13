export interface GeographicData {
  region: string;
  cases: number;
  percentage: number;
  companyTrend: number;
  marketTrend: number;
  risk: 'Élevé' | 'Moyen' | 'Faible';
  color: string;
}

export const geographicData: GeographicData[] = [
  {
    region: 'Île-de-France',
    cases: 423,
    percentage: 28,
    companyTrend: 5,
    marketTrend: 3,
    risk: 'Élevé',
    color: '#3B82F6'
  },
  {
    region: 'Auvergne-Rhône-Alpes',
    cases: 312,
    percentage: 21,
    companyTrend: 3,
    marketTrend: 4,
    risk: 'Moyen',
    color: '#10B981'
  },
  {
    region: 'Hauts-de-France',
    cases: 245,
    percentage: 16,
    companyTrend: -2,
    marketTrend: -1,
    risk: 'Moyen',
    color: '#F59E0B'
  },
  {
    region: 'Provence-Alpes-Côte d\'Azur',
    cases: 198,
    percentage: 13,
    companyTrend: 4,
    marketTrend: 2,
    risk: 'Élevé',
    color: '#EF4444'
  },
  {
    region: 'Occitanie',
    cases: 156,
    percentage: 10,
    companyTrend: -1,
    marketTrend: 1,
    risk: 'Faible',
    color: '#8B5CF6'
  },
  {
    region: 'Nouvelle-Aquitaine',
    cases: 134,
    percentage: 9,
    companyTrend: 2,
    marketTrend: 3,
    risk: 'Moyen',
    color: '#EC4899'
  }
]; 