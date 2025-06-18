import React from "react";
import { useFilters, FINANCING_TYPES, CLIENT_TYPES } from "../../context/FiltersContext";
import { X } from "lucide-react";

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={"inline-flex items-center px-3 py-1 rounded-2xl bg-slate-100 text-slate-700 text-xs font-medium shadow " + (className || "")}>{children}</span>
);

export function ActiveFiltersBadges() {
  const { filters, setFilter } = useFilters();

  if (
    filters.financingType.length === 0 &&
    filters.clientType.length === 0 &&
    !filters.dateRange
  ) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {filters.financingType.map((type) => (
        <Badge key={type} className="animate-pulse flex items-center gap-1">
          {FINANCING_TYPES.find(t => t.value === type)?.label || type}
          <button aria-label="Supprimer ce filtre" onClick={() => setFilter("financingType", filters.financingType.filter(t => t !== type))}>
            <X className="w-3 h-3 ml-1" />
          </button>
        </Badge>
      ))}
      {filters.clientType.map((type) => (
        <Badge key={type} className="animate-pulse flex items-center gap-1">
          {CLIENT_TYPES.find(t => t.value === type)?.label || type}
          <button aria-label="Supprimer ce filtre" onClick={() => setFilter("clientType", filters.clientType.filter(t => t !== type))}>
            <X className="w-3 h-3 ml-1" />
          </button>
        </Badge>
      ))}
      {filters.dateRange && (
        <Badge className="animate-pulse flex items-center gap-1">
          {`Du ${filters.dateRange.from} au ${filters.dateRange.to}`}
          <button aria-label="Supprimer ce filtre" onClick={() => setFilter("dateRange", null)}>
            <X className="w-3 h-3 ml-1" />
          </button>
        </Badge>
      )}
    </div>
  );
} 