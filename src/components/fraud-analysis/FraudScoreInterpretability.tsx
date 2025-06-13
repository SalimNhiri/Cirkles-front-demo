import React from 'react';
import { AlertTriangle, Shield, TrendingUp, Info } from 'lucide-react';
import { Progress } from '../ui/progress';
import { AIAnalysis, FraudFactor, ModelInfo } from './FraudCaseAnalysis';

// Données de test pour l'analyse IA
const testAnalysis: AIAnalysis = {
  globalScore: 85,
  confidence: 92,
  factors: [
    {
      name: 'Documents falsifiés',
      impact: 90,
      type: 'critical',
      description: 'Détection de modifications sur les documents d\'identité'
    },
    {
      name: 'Revenus incohérents',
      impact: 75,
      type: 'high',
      description: 'Écart significatif entre les revenus déclarés et les transactions'
    },
    {
      name: 'Historique suspect',
      impact: 60,
      type: 'medium',
      description: 'Historique de transactions inhabituelles'
    },
    {
      name: 'Zone géographique',
      impact: 40,
      type: 'low',
      description: 'Zone géographique à risque modéré'
    }
  ],
  modelDetails: {
    name: 'FraudDetector v2.1',
    version: '2.1.0',
    lastUpdate: '2024-03-15',
    accuracy: 96.8,
    trainingData: '1.2M dossiers historiques'
  },
  recommendations: [
    'Vérification approfondie des documents d\'identité',
    'Contrôle des justificatifs de revenus',
    'Analyse des transactions récentes',
    'Vérification de l\'adresse déclarée'
  ]
};

// Mapping des couleurs pour les types de facteurs
const factorColors = {
  critical: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export function FraudScoreInterpretability() {
  return (
    <div className="space-y-6">
      {/* Score global et confiance */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Score global de fraude</h3>
            <AlertTriangle className="h-6 w-6 text-red-500" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Score</span>
                <span className="text-sm font-medium text-gray-900">{testAnalysis.globalScore}%</span>
              </div>
              <Progress value={testAnalysis.globalScore} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">Confiance du modèle</span>
                <span className="text-sm font-medium text-gray-900">{testAnalysis.confidence}%</span>
              </div>
              <Progress value={testAnalysis.confidence} className="h-2" />
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Informations du modèle</h3>
            <Shield className="h-6 w-6 text-blue-500" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Nom du modèle</span>
              <span className="text-sm font-medium">{testAnalysis.modelDetails.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Version</span>
              <span className="text-sm font-medium">{testAnalysis.modelDetails.version}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Dernière mise à jour</span>
              <span className="text-sm font-medium">{testAnalysis.modelDetails.lastUpdate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Précision</span>
              <span className="text-sm font-medium">{testAnalysis.modelDetails.accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Données d'entraînement</span>
              <span className="text-sm font-medium">{testAnalysis.modelDetails.trainingData}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Facteurs contributifs */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Facteurs contributifs</h3>
          <TrendingUp className="h-6 w-6 text-blue-500" />
        </div>
        <div className="space-y-4">
          {testAnalysis.factors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${factorColors[factor.type]}`}>
                    {factor.type}
                  </span>
                  <span className="font-medium">{factor.name}</span>
                </div>
                <span className="text-sm font-medium">{factor.impact}%</span>
              </div>
              <Progress value={factor.impact} className="h-2" />
              <p className="text-sm text-gray-500">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommandations */}
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Recommandations</h3>
          <Info className="h-6 w-6 text-blue-500" />
        </div>
        <div className="space-y-3">
          {testAnalysis.recommendations.map((recommendation, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">{index + 1}</span>
              </div>
              <p className="text-sm text-gray-600">{recommendation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 