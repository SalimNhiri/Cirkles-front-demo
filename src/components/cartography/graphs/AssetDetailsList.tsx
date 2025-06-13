import React from 'react';
import { assetData } from '../../../data/cartography/assetData';

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

export function AssetDetailsList() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-4">
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900">Détail des actifs</h3>
        <p className="text-xs text-gray-600 mt-0.5">Répartition et analyse par type d'actif</p>
      </div>
      <div className="space-y-4">
        {assetData.map((asset) => (
          <div key={asset.category} className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-gray-900">{asset.category}</h4>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-600">Total {asset.totalPercentage}%</span>
                <span className={`text-xs font-medium ${getTrendColor(asset.trend)}`}>
                  {getTrendIcon(asset.trend)} {Math.abs(asset.trend)}%
                </span>
                <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(asset.risk)} bg-${asset.risk === 'Élevé' ? 'red' : asset.risk === 'Moyen' ? 'yellow' : 'green'}-50`}>
                  {asset.risk}
                </div>
              </div>
            </div>
            <div className="pl-4 space-y-1">
              {asset.subCategories.map((subCategory) => (
                <div key={subCategory.name} className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">{subCategory.name}</span>
                  <span className="text-gray-900 font-medium">{subCategory.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 