import React, { useMemo } from 'react';
import { FraudCase, testCases } from '../../data/fraud-analysis/fraudData';
import { FraudStats } from './graphs/FraudStats';
import { FraudCasesList } from './graphs/FraudCasesList';

interface FraudCasesPriorityProps {
  searchTerm: string;
  riskFilter: string;
  statusFilter: string;
}

// Fonction utilitaire pour calculer l'ancienneté en jours
const getDaysOld = (date: string): number => {
  const submissionDate = new Date(date);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - submissionDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

// Calcul automatique de la priorité
const calculatePriority = (case_: FraudCase): number => {
  let score = case_.riskScore;
  score += case_.amount > 500000 ? 20 : 0;  // Montant élevé
  score += case_.indicators.length * 5;     // Nombre d'indicateurs
  score += getDaysOld(case_.submissionDate) * 2; // Ancienneté
  return score;
};

export function FraudCasesPriority({ searchTerm, riskFilter, statusFilter }: FraudCasesPriorityProps) {
  // Calcul des priorités et filtrage des cas
  const filteredCases = useMemo(() => {
    return testCases
      .map(case_ => ({
        ...case_,
        priority: calculatePriority(case_)
      }))
      .filter(case_ => {
        const matchesSearch = 
          case_.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          case_.id.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesRisk = riskFilter === 'all' || case_.riskLevel === riskFilter;
        const matchesStatus = statusFilter === 'all' || case_.status === statusFilter;
        
        return matchesSearch && matchesRisk && matchesStatus;
      })
      .sort((a, b) => b.priority - a.priority);
  }, [searchTerm, riskFilter, statusFilter]);

  return (
    <div className="space-y-6">
      <FraudStats cases={filteredCases} />
      <FraudCasesList cases={filteredCases} />
    </div>
  );
} 