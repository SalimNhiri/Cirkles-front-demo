import React from 'react';
import { geographicData } from '../../../data/cartography/geographyData';

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Élevé':
      return 'text-red-600';
    case 'Moyen':
      return 'text-yellow-600';
    case 'Faible':
      return 'text-green-600';
    default:
      return 'text-gray-600';
  }
};

const getTrendColor = (trend: number) => {
  if (trend > 0) return 'text-red-600';
  if (trend < 0) return 'text-green-600';
  return 'text-gray-600';
};

const getTrendIcon = (trend: number) => {
  if (trend > 0) return '↑';
  if (trend < 0) return '↓';
  return '→';
};

export function TopRegionsList() {
  // Trier les données par nombre de cas décroissant
  const sortedData = [...geographicData].sort((a, b) => b.cases - a.cases);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-4">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900">Répartition géographique</h3>
        <p className="text-xs text-gray-600 mt-0.5">Distribution des cas de fraude par région</p>
      </div>
      <div className="space-y-2">
        {sortedData.map((region, index) => (
          <div 
            key={region.region}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 text-sm font-semibold">
                {index + 1}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{region.region}</h4>
                <div className="flex items-center space-x-1">
                  <p className="text-xs text-gray-600">
                    {region.cases} cas ({region.percentage}%)
                  </p>
                  <span className={`text-xs font-medium ${getTrendColor(region.companyTrend)}`}>
                    {getTrendIcon(region.companyTrend)} {Math.abs(region.companyTrend)}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(region.risk)} bg-${region.risk === 'Élevé' ? 'red' : region.risk === 'Moyen' ? 'yellow' : 'green'}-50`}>
                {region.risk}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 