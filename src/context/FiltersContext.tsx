import React, { createContext, useContext, useState, useMemo, ReactNode, Dispatch, SetStateAction } from "react";

export type FinancingType = 'LDD' | 'LOA' | 'CREDIT' | 'CASH' | 'LLD';
export type ClientType = 'B2B' | 'B2C';
export type DateRange = { from: string; to: string } | null;

export const FINANCING_TYPES = [
  { value: 'LDD', label: "Location avec Droit d'Achat (LDD)" },
  { value: 'LOA', label: "Location avec Option d'Achat (LOA)" },
  { value: 'CREDIT', label: 'Crédit Classique' },
  { value: 'CASH', label: 'Achat Comptant' },
  { value: 'LLD', label: 'Location Longue Durée (LLD)' }
];

export const CLIENT_TYPES = [
  { value: 'B2B', label: 'Professionnel (B2B)' },
  { value: 'B2C', label: 'Particulier (B2C)' }
];

export type FiltersState = {
  financingType: FinancingType[];
  clientType: ClientType[];
  dateRange: DateRange;
};

type FiltersContextType = {
  filters: FiltersState;
  setFilter: (key: keyof FiltersState, value: any) => void;
  resetFilters: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  getActiveFiltersCount: () => number;
};

const defaultFilters: FiltersState = {
  financingType: [],
  clientType: [],
  dateRange: null,
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export function FiltersProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<FiltersState>(defaultFilters);
  const [open, setOpen] = useState(false);

  const setFilter = (key: keyof FiltersState, value: any) => setFilters(f => ({ ...f, [key]: value }));
  const resetFilters = () => setFilters(defaultFilters);

  const getActiveFiltersCount = () =>
    filters.financingType.length + filters.clientType.length + (filters.dateRange ? 1 : 0);

  const value = useMemo(() => ({
    filters, setFilter, resetFilters, open, setOpen, getActiveFiltersCount
  }), [filters, open]);

  return (
    <FiltersContext.Provider value={value}>
      {children}
    </FiltersContext.Provider>
  );
}

export const useFilters = () => {
  const ctx = useContext(FiltersContext);
  if (!ctx) throw new Error('useFilters doit être utilisé dans un FiltersProvider');
  return ctx;
}; 