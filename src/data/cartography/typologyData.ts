export interface TypologyData {
  type: string;
  cases: number;
  percentage: number;
  clientTrend: number;
  marketTrend: number;
  risk: 'Élevé' | 'Moyen' | 'Faible';
  color: string;
}

export const typologyData: TypologyData[] = [
  {
    type: 'Usurpation d\'identité',
    cases: 423,
    percentage: 35,
    clientTrend: 8,
    marketTrend: -5,
    risk: 'Élevé',
    color: '#93C5FD'
  },
  {
    type: 'Fraude documentaire',
    cases: 338,
    percentage: 28,
    clientTrend: -12,
    marketTrend: -15,
    risk: 'Élevé',
    color: '#86EFAC'
  },
  {
    type: 'Manipulation de compte',
    cases: 266,
    percentage: 22,
    clientTrend: 5,
    marketTrend: 8,
    risk: 'Moyen',
    color: '#FCD34D'
  },
  {
    type: 'Phishing',
    cases: 181,
    percentage: 15,
    clientTrend: -6,
    marketTrend: -4,
    risk: 'Moyen',
    color: '#FCA5A5'
  },
  {
    type: 'Faux permis',
    cases: 142,
    percentage: 12,
    clientTrend: 4,
    marketTrend: -6,
    risk: 'Moyen',
    color: '#C4B5FD'
  }
]; 