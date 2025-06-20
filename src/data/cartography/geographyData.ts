export interface GeographicData {
  region: string;
  cases: number;
  percentage: number;
  companyTrend: number;
  marketTrend: number;
  risk: 'Élevé' | 'Moyen' | 'Faible';
  color: string;
  averee: number;
  dejouee: number;
  suspectee: number;
  benchmark: number;
}

export const geographicData: GeographicData[] = [
  {
    region: 'Île-de-France',
    cases: 423,
    percentage: 28,
    companyTrend: 5,
    marketTrend: 3,
    risk: 'Élevé',
    color: '#3B82F6',
    averee: 220,
    dejouee: 120,
    suspectee: 83,
    benchmark: 350
  },
  {
    region: 'Auvergne-Rhône-Alpes',
    cases: 312,
    percentage: 21,
    companyTrend: 3,
    marketTrend: 4,
    risk: 'Moyen',
    color: '#10B981',
    averee: 150,
    dejouee: 90,
    suspectee: 72,
    benchmark: 280
  },
  {
    region: 'Hauts-de-France',
    cases: 245,
    percentage: 16,
    companyTrend: -2,
    marketTrend: -1,
    risk: 'Moyen',
    color: '#F59E0B',
    averee: 110,
    dejouee: 80,
    suspectee: 55,
    benchmark: 200
  },
  {
    region: 'Provence-Alpes-Côte d\'Azur',
    cases: 198,
    percentage: 13,
    companyTrend: 4,
    marketTrend: 2,
    risk: 'Élevé',
    color: '#EF4444',
    averee: 90,
    dejouee: 60,
    suspectee: 48,
    benchmark: 160
  },
  {
    region: 'Occitanie',
    cases: 156,
    percentage: 10,
    companyTrend: -1,
    marketTrend: 1,
    risk: 'Faible',
    color: '#8B5CF6',
    averee: 70,
    dejouee: 50,
    suspectee: 36,
    benchmark: 120
  },
  {
    region: 'Nouvelle-Aquitaine',
    cases: 134,
    percentage: 9,
    companyTrend: 2,
    marketTrend: 3,
    risk: 'Moyen',
    color: '#EC4899',
    averee: 60,
    dejouee: 40,
    suspectee: 34,
    benchmark: 100
  }
]; 