import React from 'react';

interface AssetDetailsData {
  type: string;
  value: number;
  count: number;
  risk: 'Élevé' | 'Moyen' | 'Faible';
  trend: number;
  subcategories: {
    name: string;
    value: number;
  }[];
}

const assetDetailsData: AssetDetailsData[] = [
  {
    type: 'Véhicules',
    value: 40,
    count: 482,
    risk: 'Élevé',
    trend: 8,
    subcategories: [
      { name: 'Voitures', value: 25 },
      { name: 'Citadines', value: 10 },
      { name: 'Deux-roues', value: 5 }
    ]
  },
  {
    type: 'Équipements électroniques',
    value: 25,
    count: 301,
    risk: 'Moyen',
    trend: 12,
    subcategories: [
      { name: 'Smartphones', value: 15 },
      { name: 'Matériel informatique', value: 10 }
    ]
  },
  {
    type: 'Nautique',
    value: 15,
    count: 181,
    risk: 'Élevé',
    trend: 5,
    subcategories: [
      { name: 'Bateaux', value: 10 },
      { name: 'Équipements nautiques', value: 5 }
    ]
  },
  {
    type: 'Équipements professionnels',
    value: 20,
    count: 241,
    risk: 'Moyen',
    trend: 6,
    subcategories: [
      { name: 'Matériel de chantier', value: 12 },
      { name: 'Équipements agricoles', value: 8 }
    ]
  }
];

const riskLevels = {
  'Élevé': {
    color: 'bg-red-100 text-red-800',
    description: 'Nécessite une surveillance immédiate',
  },
  'Moyen': {
    color: 'bg-yellow-100 text-yellow-800',
    description: 'Surveillance régulière requise',
  },
  'Faible': {
    color: 'bg-green-100 text-green-800',
    description: 'Surveillance standard',
  },
};

export function AssetDetails() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Détail des actifs</h3>
        <p className="text-sm text-gray-600 mt-1">Répartition et analyse par type d'actif</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {assetDetailsData.map((asset) => (
          <div key={asset.type} className="rounded-lg bg-gray-50 p-4">
            <h4 className="font-medium text-gray-900 mb-2">{asset.type}</h4>
            <div className="space-y-2">
              {asset.subcategories.map((sub) => (
                <div key={sub.name} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{sub.name}</span>
                  <span className="text-sm font-medium text-gray-900">{sub.value}%</span>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total</span>
                <span className="text-sm font-medium text-gray-900">{asset.value}%</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <span className="text-sm text-gray-600">Tendance</span>
                <span className={`text-sm font-medium ${asset.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {asset.trend > 0 ? '+' : ''}{asset.trend}%
                </span>
              </div>
              <div className="mt-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${riskLevels[asset.risk].color}`}>
                  {asset.risk}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 