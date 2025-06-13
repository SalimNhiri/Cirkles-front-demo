import React from 'react';
import { typologyData, TypologyData } from '../../../data/cartography/typologyData';

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

export function TopTypologiesList() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-4">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900">Top 5 des typologies</h3>
        <p className="text-xs text-gray-600 mt-0.5">Répartition et analyse par type de fraude au financement</p>
      </div>
      <div className="space-y-3">
        {typologyData.map((typology: TypologyData, index: number) => (
          <div key={typology.type} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                {index + 1}
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">{typology.type}</h4>
                <p className="text-xs text-gray-500">{typology.cases} cas • {typology.percentage}%</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-end">
                <span className={`text-xs font-medium ${getTrendColor(typology.clientTrend)}`}>
                  Client: {getTrendIcon(typology.clientTrend)} {Math.abs(typology.clientTrend)}%
                </span>
                <span className={`text-xs font-medium ${getTrendColor(typology.marketTrend)}`}>
                  Marché: {getTrendIcon(typology.marketTrend)} {Math.abs(typology.marketTrend)}%
                </span>
              </div>
              <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(typology.risk)} bg-${typology.risk === 'Élevé' ? 'red' : typology.risk === 'Moyen' ? 'yellow' : 'green'}-50`}>
                {typology.risk}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 