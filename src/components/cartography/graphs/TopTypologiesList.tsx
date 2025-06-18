import React, { useState } from 'react';
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
  const [selectedTypology, setSelectedTypology] = useState<TypologyData | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleInfoClick = (typology: TypologyData) => {
    setSelectedTypology(typology);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedTypology(null);
  };

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
                <h4
                  className="text-sm font-medium text-gray-900 cursor-pointer hover:underline hover:text-blue-600 transition-colors"
                  onClick={() => handleInfoClick(typology)}
                  tabIndex={0}
                  role="button"
                  aria-label={`En savoir plus sur ${typology.type}`}
                  onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') handleInfoClick(typology); }}
                >
                  {typology.type}
                </h4>
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
      {/* Modale d'information */}
      {modalOpen && selectedTypology && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative animate-fade-in">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
              onClick={handleCloseModal}
              aria-label="Fermer"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <h4 className="text-lg font-bold text-gray-900 mb-2">{selectedTypology.type}</h4>
            <p className="text-sm text-gray-700 mb-4">Voici une description détaillée et fictive de la typologie <span className="font-semibold">{selectedTypology.type}</span>. Cette typologie est caractérisée par des schémas de fraude spécifiques, une évolution récente de {selectedTypology.clientTrend > 0 ? '+' : ''}{selectedTypology.clientTrend}% côté client et {selectedTypology.marketTrend > 0 ? '+' : ''}{selectedTypology.marketTrend}% côté marché. Niveau de risque : <span className={`font-semibold ${getRiskColor(selectedTypology.risk)}`}>{selectedTypology.risk}</span>.</p>
            <ul className="text-xs text-gray-600 list-disc pl-5 space-y-1 mb-2">
              <li>Exemple de modus operandi : usurpation d'identité, faux documents, etc.</li>
              <li>Conseil : renforcer la vigilance sur les dossiers suspects.</li>
              <li>Impact potentiel : pertes financières, atteinte à la réputation.</li>
            </ul>
            <button
              className="mt-3 w-full py-2 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors"
              onClick={handleCloseModal}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 