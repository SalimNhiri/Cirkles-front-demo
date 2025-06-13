export interface GeographicData {
  region: string;
  value: number;
  color: string;
}

export interface TrendData {
  month: string;
  value: number;
  category: string;
}

export interface TypologyData {
  name: string;
  value: number;
  color: string;
}

export interface ModusOperandiData {
  name: string;
  value: number;
  color: string;
}

export interface AssetData {
  name: string;
  value: number;
  color: string;
}

export interface VolumeData {
  month: string;
  value: number;
  category: string;
}

// Données géographiques
export const geographicData: GeographicData[] = [
  { region: 'Île-de-France', value: 35, color: '#3B82F6' },
  { region: 'Auvergne-Rhône-Alpes', value: 25, color: '#10B981' },
  { region: 'Hauts-de-France', value: 20, color: '#F59E0B' },
  { region: 'Provence-Alpes-Côte d\'Azur', value: 15, color: '#EF4444' },
  { region: 'Occitanie', value: 10, color: '#8B5CF6' },
];

// Données de tendances
export const trendData: TrendData[] = [
  { month: 'Jan', value: 45, category: 'Détections' },
  { month: 'Fév', value: 52, category: 'Détections' },
  { month: 'Mar', value: 48, category: 'Détections' },
  { month: 'Avr', value: 55, category: 'Détections' },
  { month: 'Mai', value: 58, category: 'Détections' },
  { month: 'Juin', value: 62, category: 'Détections' },
  { month: 'Jan', value: 38, category: 'Résolus' },
  { month: 'Fév', value: 45, category: 'Résolus' },
  { month: 'Mar', value: 42, category: 'Résolus' },
  { month: 'Avr', value: 48, category: 'Résolus' },
  { month: 'Mai', value: 52, category: 'Résolus' },
  { month: 'Juin', value: 55, category: 'Résolus' },
];

// Données de typologie
export const typologyData: TypologyData[] = [
  { name: 'Fraude documentaire', value: 35, color: '#3B82F6' },
  { name: 'Fraude à l\'identité', value: 25, color: '#10B981' },
  { name: 'Fraude au paiement', value: 20, color: '#F59E0B' },
  { name: 'Fraude au crédit', value: 15, color: '#EF4444' },
  { name: 'Autres', value: 5, color: '#8B5CF6' },
];

// Données de modus operandi
export const modusOperandiData: ModusOperandiData[] = [
  { name: 'Usurpation d\'identité', value: 30, color: '#3B82F6' },
  { name: 'Falsification de documents', value: 25, color: '#10B981' },
  { name: 'Blanchiment d\'argent', value: 20, color: '#F59E0B' },
  { name: 'Fraude au paiement', value: 15, color: '#EF4444' },
  { name: 'Autres', value: 10, color: '#8B5CF6' },
];

// Données d'actifs
export const assetData: AssetData[] = [
  { name: 'Comptes bancaires', value: 40, color: '#3B82F6' },
  { name: 'Cartes de crédit', value: 30, color: '#10B981' },
  { name: 'Prêts', value: 20, color: '#F59E0B' },
  { name: 'Investissements', value: 10, color: '#EF4444' },
];

// Données de volume
export const volumeData: VolumeData[] = [
  { month: 'Jan', value: 1500000, category: 'Montant' },
  { month: 'Fév', value: 1800000, category: 'Montant' },
  { month: 'Mar', value: 1600000, category: 'Montant' },
  { month: 'Avr', value: 2000000, category: 'Montant' },
  { month: 'Mai', value: 2200000, category: 'Montant' },
  { month: 'Juin', value: 2500000, category: 'Montant' },
  { month: 'Jan', value: 45, category: 'Cas' },
  { month: 'Fév', value: 52, category: 'Cas' },
  { month: 'Mar', value: 48, category: 'Cas' },
  { month: 'Avr', value: 55, category: 'Cas' },
  { month: 'Mai', value: 58, category: 'Cas' },
  { month: 'Juin', value: 62, category: 'Cas' },
]; 