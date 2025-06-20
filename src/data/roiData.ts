// Données statiques pour la vue ROI & Coûts Fraude

export interface CostEvolutionData {
  month: string;
  coutDetection: number;
  coutInvestigation: number;
  coutPrevention: number;
  pertesEvitees: number;
  pertesReelles: number;
}

export interface CostPerCaseData {
  type: string;
  coutMoyen: number;
  nombreDossiers: number;
  coutTotal: number;
  tempsTraitement: number;
}

export interface CostBreakdownData {
  name: string;
  value: number;
  color: string;
}

export interface ROIMetrics {
  roiGlobal: number;
  coutTotalInvesti: number;
  pertesEvitees: number;
  beneficeNet: number;
  paybackPeriod: number;
  efficaciteDetection: number;
}

export const costEvolutionData: CostEvolutionData[] = [
  { month: 'Jan', coutDetection: 12000, coutInvestigation: 8000, coutPrevention: 5000, pertesEvitees: 120000, pertesReelles: 18000 },
  { month: 'Fév', coutDetection: 11000, coutInvestigation: 8500, coutPrevention: 5200, pertesEvitees: 130000, pertesReelles: 17000 },
  { month: 'Mar', coutDetection: 12500, coutInvestigation: 9000, coutPrevention: 5400, pertesEvitees: 140000, pertesReelles: 16000 },
  { month: 'Avr', coutDetection: 13000, coutInvestigation: 9500, coutPrevention: 5600, pertesEvitees: 150000, pertesReelles: 15000 },
  { month: 'Mai', coutDetection: 13500, coutInvestigation: 10000, coutPrevention: 5800, pertesEvitees: 160000, pertesReelles: 14000 },
  { month: 'Juin', coutDetection: 14000, coutInvestigation: 10500, coutPrevention: 6000, pertesEvitees: 170000, pertesReelles: 13000 },
  { month: 'Juil', coutDetection: 14500, coutInvestigation: 11000, coutPrevention: 6200, pertesEvitees: 180000, pertesReelles: 12000 },
  { month: 'Août', coutDetection: 15000, coutInvestigation: 11500, coutPrevention: 6400, pertesEvitees: 190000, pertesReelles: 11000 },
  { month: 'Sep', coutDetection: 15500, coutInvestigation: 12000, coutPrevention: 6600, pertesEvitees: 200000, pertesReelles: 10000 },
  { month: 'Oct', coutDetection: 16000, coutInvestigation: 12500, coutPrevention: 6800, pertesEvitees: 210000, pertesReelles: 9000 },
  { month: 'Nov', coutDetection: 16500, coutInvestigation: 13000, coutPrevention: 7000, pertesEvitees: 220000, pertesReelles: 8000 },
  { month: 'Déc', coutDetection: 17000, coutInvestigation: 13500, coutPrevention: 7200, pertesEvitees: 230000, pertesReelles: 7000 },
];

export const costPerCaseData: CostPerCaseData[] = [
  { type: 'Fraude carte', coutMoyen: 3200, nombreDossiers: 120, coutTotal: 384000, tempsTraitement: 6.2 },
  { type: 'Fraude virement', coutMoyen: 4100, nombreDossiers: 80, coutTotal: 328000, tempsTraitement: 7.1 },
  { type: 'Fraude chèque', coutMoyen: 2900, nombreDossiers: 60, coutTotal: 174000, tempsTraitement: 5.8 },
  { type: 'Phishing', coutMoyen: 2500, nombreDossiers: 40, coutTotal: 100000, tempsTraitement: 4.9 },
  { type: 'Faux ordres', coutMoyen: 5200, nombreDossiers: 30, coutTotal: 156000, tempsTraitement: 8.3 },
  { type: 'Autres', coutMoyen: 1800, nombreDossiers: 20, coutTotal: 36000, tempsTraitement: 3.7 },
];

export const costBreakdownData: CostBreakdownData[] = [
  { name: 'Personnel investigation', value: 42, color: '#FF6B6B' },
  { name: 'Outils IA/Detection', value: 28, color: '#4ECDC4' },
  { name: 'Audit externe', value: 15, color: '#45B7D1' },
  { name: 'Formation équipes', value: 8, color: '#96CEB4' },
  { name: 'Compliance', value: 7, color: '#FFEAA7' },
];

export const roiMetrics: ROIMetrics = {
  roiGlobal: 285,
  coutTotalInvesti: 1447000,
  pertesEvitees: 1965000,
  beneficeNet: 518000,
  paybackPeriod: 8.3,
  efficaciteDetection: 94.2,
}; 