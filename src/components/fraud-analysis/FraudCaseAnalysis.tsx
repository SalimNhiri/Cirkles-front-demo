import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { FraudCasesPriority } from './FraudCasesPriority';
import { FraudScoreInterpretability } from './FraudScoreInterpretability';
import { FraudTypologyReference } from './FraudTypologyReference';
import { CaseInvestigation } from './CaseInvestigation';
import { Search, Filter } from 'lucide-react';

export interface FraudCase {
  id: string;                    // Identifiant unique (ex: FR-2024-001)
  clientName: string;            // Nom du demandeur
  amount: number;                // Montant demandé en euros
  riskScore: number;             // Score de risque (0-100)
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  fraudType: string;             // Type de fraude détecté
  submissionDate: string;        // Date de soumission ISO
  status: 'pending' | 'investigating' | 'validated' | 'rejected';
  priority: number;              // Rang de priorité (1 = plus urgent)
  indicators: string[];          // Liste des indicateurs de fraude
}

export interface AIAnalysis {
  globalScore: number;           // Score global de fraude (0-100)
  confidence: number;            // Niveau de confiance du modèle (0-100)
  factors: FraudFactor[];        // Facteurs contributifs détaillés
  modelDetails: ModelInfo;       // Informations sur le modèle IA
  recommendations: string[];     // Actions recommandées
}

export interface FraudFactor {
  name: string;                  // Nom du facteur
  impact: number;                // Impact sur le score (0-100)
  type: 'critical' | 'high' | 'medium' | 'low';
  description: string;           // Explication détaillée
}

export interface ModelInfo {
  name: string;                  // Nom du modèle
  version: string;               // Version du modèle
  lastUpdate: string;            // Date de dernière mise à jour
  accuracy: number;              // Précision du modèle
  trainingData: string;          // Description des données d'entraînement
}

export interface FraudTypology {
  id: string;                    // Identifiant unique
  name: string;                  // Nom de la typologie
  riskLevel: string;             // Niveau de risque global
  frequency: string;             // Fréquence d'occurrence
  averageLoss: number;           // Perte financière moyenne
  detectionRate: number;         // Taux de détection (0-100)
  description: string;           // Description détaillée
  indicators: string[];          // Signaux d'alerte
  detectionMethods: string[];    // Méthodes de détection
  preventionMeasures: string[];  // Mesures préventives
  casesThisMonth: number;        // Nombre de cas récents
  trend: 'increasing' | 'decreasing' | 'stable';
}

export function FraudCaseAnalysis() {
  const [activeTab, setActiveTab] = useState('priority');
  const [searchTerm, setSearchTerm] = useState('');
  const [riskFilter, setRiskFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  return (
    <div className="space-y-6">
      {/* En-tête avec recherche et filtres */}
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Rechercher un dossier..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center space-x-4 ml-4">
          <select
            className="block w-40 px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
          >
            <option value="all">Tous les risques</option>
            <option value="critical">Critique</option>
            <option value="high">Élevé</option>
            <option value="medium">Moyen</option>
            <option value="low">Faible</option>
          </select>
          <select
            className="block w-40 px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">Tous les statuts</option>
            <option value="pending">En attente</option>
            <option value="investigating">En cours</option>
            <option value="validated">Validé</option>
            <option value="rejected">Rejeté</option>
          </select>
        </div>
      </div>

      {/* Onglets de navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 gap-4 p-1.5 bg-gray-100 rounded-xl">
          <TabsTrigger value="priority" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
            Priorisation
          </TabsTrigger>
          <TabsTrigger value="score" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
            Score IA
          </TabsTrigger>
          <TabsTrigger value="typology" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
            Typologies
          </TabsTrigger>
          <TabsTrigger value="investigation" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
            Investigation
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="priority">
            <FraudCasesPriority 
              searchTerm={searchTerm}
              riskFilter={riskFilter}
              statusFilter={statusFilter}
            />
          </TabsContent>

          <TabsContent value="score">
            <FraudScoreInterpretability />
          </TabsContent>

          <TabsContent value="typology">
            <FraudTypologyReference />
          </TabsContent>

          <TabsContent value="investigation">
            <CaseInvestigation />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
} 