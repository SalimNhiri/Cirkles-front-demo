export interface AssetSubCategory {
  name: string;
  percentage: number;
}

export interface AssetData {
  category: string;
  subCategories: AssetSubCategory[];
  totalPercentage: number;
  trend: number;
  risk: 'Élevé' | 'Moyen' | 'Faible';
  color: string;
}

export const assetData: AssetData[] = [
  {
    category: 'Véhicules',
    subCategories: [
      { name: 'Voitures', percentage: 25 },
      { name: 'Citadines', percentage: 10 },
      { name: 'Deux-roues', percentage: 5 }
    ],
    totalPercentage: 40,
    trend: 8,
    risk: 'Élevé',
    color: '#93C5FD'
  },
  {
    category: 'Équipements électroniques',
    subCategories: [
      { name: 'Smartphones', percentage: 15 },
      { name: 'Matériel informatique', percentage: 10 }
    ],
    totalPercentage: 25,
    trend: 12,
    risk: 'Moyen',
    color: '#86EFAC'
  },
  {
    category: 'Nautique',
    subCategories: [
      { name: 'Bateaux', percentage: 10 },
      { name: 'Équipements nautiques', percentage: 5 }
    ],
    totalPercentage: 15,
    trend: 5,
    risk: 'Élevé',
    color: '#FCD34D'
  },
  {
    category: 'Équipements professionnels',
    subCategories: [
      { name: 'Matériel de chantier', percentage: 12 },
      { name: 'Équipements agricoles', percentage: 8 }
    ],
    totalPercentage: 20,
    trend: 6,
    risk: 'Moyen',
    color: '#FCA5A5'
  }
]; 