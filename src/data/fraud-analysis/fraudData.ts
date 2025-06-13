export interface FraudCase {
  id: string;
  clientName: string;
  amount: number;
  riskScore: number;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  fraudType: string;
  submissionDate: string;
  status: 'pending' | 'investigating' | 'validated' | 'rejected';
  priority: number;
  indicators: string[];
}

export const testCases: FraudCase[] = [
  {
    id: 'FR-2024-001',
    clientName: 'Martin Dubois',
    amount: 850000,
    riskScore: 92,
    riskLevel: 'critical',
    fraudType: 'Usurpation d\'identité',
    submissionDate: '2024-03-15',
    status: 'investigating',
    priority: 0,
    indicators: ['Documents falsifiés', 'Revenus incohérents', 'Adresse fictive']
  },
  {
    id: 'FR-2024-002',
    clientName: 'Sophie Martin',
    amount: 450000,
    riskScore: 75,
    riskLevel: 'high',
    fraudType: 'Blanchiment d\'argent',
    submissionDate: '2024-03-14',
    status: 'pending',
    priority: 0,
    indicators: ['Transactions complexes', 'Montants disproportionnés']
  },
  {
    id: 'FR-2024-003',
    clientName: 'Pierre Durand',
    amount: 280000,
    riskScore: 60,
    riskLevel: 'medium',
    fraudType: 'Falsification de documents',
    submissionDate: '2024-03-13',
    status: 'investigating',
    priority: 0,
    indicators: ['Fiches de paie modifiées', 'Avis d\'imposition falsifiés']
  }
];

export const riskColors = {
  critical: 'bg-red-100 text-red-800',
  high: 'bg-orange-100 text-orange-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

export const statusColors = {
  pending: 'bg-blue-100 text-blue-800',
  investigating: 'bg-yellow-100 text-yellow-800',
  validated: 'bg-green-100 text-green-800',
  rejected: 'bg-red-100 text-red-800'
}; 