import React, { useState } from 'react';
import { Search, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { FraudTypology } from './FraudCaseAnalysis';

// Données de test pour les typologies
const typologies: FraudTypology[] = [
  {
    id: 'TYP-001',
    name: 'Usurpation d\'Identité',
    riskLevel: 'Élevé',
    frequency: '23 cas/mois',
    averageLoss: 450000,
    detectionRate: 87,
    description: 'Utilisation frauduleuse des informations d\'identité d\'une personne pour obtenir des avantages financiers.',
    indicators: [
      'Documents d\'identité falsifiés',
      'Incohérences informations personnelles',
      'Adresses fictives',
      'Signatures atypiques'
    ],
    detectionMethods: [
      'Vérification biométrique',
      'Analyse comportementale',
      'Contrôle documentaire approfondi',
      'Vérification croisée des données'
    ],
    preventionMeasures: [
      'Renforcement de l\'authentification',
      'Formation des équipes',
      'Mise à jour régulière des procédures',
      'Veille technologique'
    ],
    casesThisMonth: 23,
    trend: 'increasing'
  },
  {
    id: 'TYP-002',
    name: 'Blanchiment d\'Argent',
    riskLevel: 'Critique',
    frequency: '18 cas/mois',
    averageLoss: 680000,
    detectionRate: 72,
    description: 'Dissimulation de l\'origine illicite de fonds par le biais de transactions complexes.',
    indicators: [
      'Sources de revenus opaques',
      'Transactions complexes',
      'Montants disproportionnés',
      'Utilisation de prête-noms'
    ],
    detectionMethods: [
      'Analyse des flux financiers',
      'Détection des patterns suspects',
      'Vérification des bénéficiaires',
      'Surveillance des montants'
    ],
    preventionMeasures: [
      'Renforcement des contrôles KYC',
      'Analyse transactionnelle avancée',
      'Formation anti-blanchiment',
      'Coopération interbancaire'
    ],
    casesThisMonth: 18,
    trend: 'stable'
  },
  {
    id: 'TYP-003',
    name: 'Falsification Documents',
    riskLevel: 'Moyen',
    frequency: '34 cas/mois',
    averageLoss: 280000,
    detectionRate: 94,
    description: 'Modification ou création de documents officiels pour obtenir des avantages financiers.',
    indicators: [
      'Fiches de paie modifiées',
      'Avis d\'imposition falsifiés',
      'Relevés bancaires altérés',
      'Contrats frauduleux'
    ],
    detectionMethods: [
      'Vérification documentaire',
      'Analyse d\'image',
      'Contrôle des sources',
      'Validation croisée'
    ],
    preventionMeasures: [
      'Numérisation sécurisée',
      'Formation documentaire',
      'Procédures de vérification',
      'Outils de détection'
    ],
    casesThisMonth: 34,
    trend: 'decreasing'
  }
];

// Mapping des icônes de tendance
const trendIcons = {
  increasing: <TrendingUp className="h-4 w-4 text-red-500" />,
  decreasing: <TrendingDown className="h-4 w-4 text-green-500" />,
  stable: <Minus className="h-4 w-4 text-gray-500" />
};

// Mapping des couleurs pour les niveaux de risque
const riskColors: Record<string, string> = {
  'Critique': 'bg-red-100 text-red-800',
  'Élevé': 'bg-orange-100 text-orange-800',
  'Moyen': 'bg-yellow-100 text-yellow-800',
  'Faible': 'bg-green-100 text-green-800'
};

export function FraudTypologyReference() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypology, setSelectedTypology] = useState<FraudTypology | null>(null);

  // Filtrage des typologies
  const filteredTypologies = typologies.filter(typology =>
    typology.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    typology.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Barre de recherche */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Rechercher une typologie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grille des typologies */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredTypologies.map((typology) => (
          <div
            key={typology.id}
            className="rounded-lg border bg-card p-6 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedTypology(typology)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{typology.name}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${riskColors[typology.riskLevel]}`}>
                {typology.riskLevel}
              </span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Fréquence</span>
                <span className="font-medium">{typology.frequency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Perte moyenne</span>
                <span className="font-medium">{typology.averageLoss.toLocaleString()}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Taux de détection</span>
                <span className="font-medium">{typology.detectionRate}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tendance</span>
                <span className="flex items-center space-x-1">
                  {trendIcons[typology.trend]}
                  <span className="font-medium">{typology.casesThisMonth} cas ce mois</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de détails */}
      {selectedTypology && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedTypology.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">{selectedTypology.description}</p>
                </div>
                <button
                  className="text-gray-400 hover:text-gray-500"
                  onClick={() => setSelectedTypology(null)}
                >
                  <span className="sr-only">Fermer</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Indicateurs</h3>
                  <ul className="space-y-2">
                    {selectedTypology.indicators.map((indicator, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-blue-600">{index + 1}</span>
                        </span>
                        <span className="text-sm text-gray-600">{indicator}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Méthodes de détection</h3>
                  <ul className="space-y-2">
                    {selectedTypology.detectionMethods.map((method, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-green-600">{index + 1}</span>
                        </span>
                        <span className="text-sm text-gray-600">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-lg font-semibold mb-4">Mesures préventives</h3>
                  <ul className="space-y-2">
                    {selectedTypology.preventionMeasures.map((measure, index) => (
                      <li key={index} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mr-2">
                          <span className="text-xs font-medium text-purple-600">{index + 1}</span>
                        </span>
                        <span className="text-sm text-gray-600">{measure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 