import React from 'react';
import { AlertTriangle, TrendingUp, Clock, Eye } from 'lucide-react';
import { FraudCase } from '../../../data/fraud-analysis/fraudData';

interface FraudStatsProps {
  cases: FraudCase[];
}

// Fonction utilitaire pour calculer l'ancienneté en jours
const getDaysOld = (date: string): number => {
  const submissionDate = new Date(date);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - submissionDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export function FraudStats({ cases }: FraudStatsProps) {
  // Calcul des statistiques
  const stats = {
    criticalCases: cases.filter(c => c.riskLevel === 'critical').length,
    totalAmount: cases.reduce((sum, c) => sum + c.amount, 0),
    avgTime: Math.round(cases.reduce((sum, c) => sum + getDaysOld(c.submissionDate), 0) / cases.length),
    detectionRate: Math.round((cases.filter(c => c.status === 'validated' || c.status === 'rejected').length / cases.length) * 100)
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Cas critiques</p>
            <p className="text-2xl font-bold text-red-600">{stats.criticalCases}</p>
          </div>
          <AlertTriangle className="h-8 w-8 text-red-500" />
        </div>
      </div>
      
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Montant total</p>
            <p className="text-2xl font-bold text-blue-600">{stats.totalAmount.toLocaleString()}€</p>
          </div>
          <TrendingUp className="h-8 w-8 text-blue-500" />
        </div>
      </div>
      
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Temps moyen</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.avgTime} jours</p>
          </div>
          <Clock className="h-8 w-8 text-yellow-500" />
        </div>
      </div>
      
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">Taux de détection</p>
            <p className="text-2xl font-bold text-green-600">{stats.detectionRate}%</p>
          </div>
          <Eye className="h-8 w-8 text-green-500" />
        </div>
      </div>
    </div>
  );
} 