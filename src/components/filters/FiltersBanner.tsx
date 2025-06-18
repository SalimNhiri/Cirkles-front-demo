import React from "react";
import { useFilters, FINANCING_TYPES, CLIENT_TYPES, FinancingType, ClientType, DateRange } from "../../context/FiltersContext";
// Remplacer ce Badge par un composant de badge de votre design system si besoin
const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={"inline-flex items-center px-3 py-1 rounded-2xl bg-slate-100 text-slate-700 text-xs font-medium shadow " + (className || "")}>{children}</span>
);
import { X, Calendar as CalendarIcon } from "lucide-react";
import DatePicker from "react-datepicker";
import { fr } from "date-fns/locale/fr";
import "react-datepicker/dist/react-datepicker.css";

function DateRangePicker({ value, onChange }: { value: DateRange; onChange: (val: DateRange) => void }) {
  const startDate = value?.from ? new Date(value.from) : null;
  const endDate = value?.to ? new Date(value.to) : null;

  return (
    <div>
      <label className="text-sm font-medium text-slate-700 mb-2 block">Période</label>
      <div className="relative flex items-center w-auto min-w-[180px]">
        <CalendarIcon className="absolute w-4 h-4 text-slate-400 pointer-events-none" />
        <DatePicker
          selectsRange
          startDate={startDate}
          endDate={endDate}
          onChange={([start, end]: [Date | null, Date | null]) => {
            if (start && end) {
              onChange({
                from: start.toISOString().slice(0, 10),
                to: end.toISOString().slice(0, 10),
              });
            } else if (start) {
              onChange({ from: start.toISOString().slice(0, 10), to: "" });
            } else {
              onChange(null);
            }
          }}
          locale={fr}
          dateFormat="dd/MM/yyyy"
          isClearable
          placeholderText="Sélectionner une période"
          className="pl-6 pr-4 py-2 rounded-2xl border border-slate-200 bg-white shadow w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          calendarClassName="rounded-2xl shadow-lg border border-slate-200 z-50"
          popperPlacement="bottom-start"
          popperClassName="z-50"
        />
      </div>
      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          className="px-3 py-1 rounded-2xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 shadow transition-all"
          onClick={() => {
            const now = new Date();
            const from = new Date(now); from.setMonth(now.getMonth() - 1);
            onChange({ from: from.toISOString().slice(0, 10), to: now.toISOString().slice(0, 10) });
          }}
        >
          30 jours
        </button>
        <button
          className="px-3 py-1 rounded-2xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 shadow transition-all"
          onClick={() => {
            const now = new Date();
            const from = new Date(now); from.setMonth(now.getMonth() - 3);
            onChange({ from: from.toISOString().slice(0, 10), to: now.toISOString().slice(0, 10) });
          }}
        >
          1 trimestre
        </button>
        <button
          className="px-3 py-1 rounded-2xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 shadow transition-all"
          onClick={() => {
            const now = new Date();
            const from = new Date(now); from.setFullYear(now.getFullYear() - 1);
            onChange({ from: from.toISOString().slice(0, 10), to: now.toISOString().slice(0, 10) });
          }}
        >
          1 an
        </button>
        <button
          className="px-3 py-1 rounded-2xl bg-white border text-xs font-medium text-slate-700 shadow transition-all"
          onClick={() => onChange(null)}
        >
          Effacer
        </button>
      </div>
    </div>
  );
}

export function FiltersBanner() {
  const { filters, setFilter, resetFilters, open, setOpen, getActiveFiltersCount } = useFilters();
  if (!open) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg animate-fade-in transition-all duration-300 mb-6 border border-slate-100">
      {/* Badges actifs */}
      <div className="flex flex-wrap gap-2 p-4">
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
      {/* Grille de contrôles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Type de financement */}
        <div>
          <div className="text-lg font-semibold mb-2">Type de financement</div>
          <div className="flex flex-col gap-2">
            {FINANCING_TYPES.map((type) => (
              <label key={type.value} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={filters.financingType.includes(type.value as FinancingType)}
                  onChange={e => {
                    if (e.target.checked) {
                      setFilter("financingType", [...filters.financingType, type.value as FinancingType]);
                    } else {
                      setFilter("financingType", filters.financingType.filter(t => t !== type.value));
                    }
                  }}
                  className="accent-blue-600 rounded"
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
        {/* Période */}
        <div>
          <DateRangePicker value={filters.dateRange} onChange={val => setFilter("dateRange", val)} />
        </div>
        {/* Type de client */}
        <div>
          <div className="text-lg font-semibold mb-2">Type de client</div>
          <div className="flex flex-col gap-2">
            {CLIENT_TYPES.map((type) => (
              <label key={type.value} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <input
                  type="checkbox"
                  checked={filters.clientType.includes(type.value as ClientType)}
                  onChange={e => {
                    if (e.target.checked) {
                      setFilter("clientType", [...filters.clientType, type.value as ClientType]);
                    } else {
                      setFilter("clientType", filters.clientType.filter(t => t !== type.value));
                    }
                  }}
                  className="accent-blue-600 rounded"
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Actions */}
      <div className="flex justify-between items-center p-4">
        {getActiveFiltersCount() > 0 && (
          <button onClick={resetFilters} className="px-4 py-2 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 shadow transition-all hover:scale-105 text-sm font-medium">
            Réinitialiser
          </button>
        )}
        <button onClick={() => setOpen(false)} className="ml-auto px-3 py-2 rounded-2xl hover:bg-slate-100 transition-all" aria-label="Fermer les filtres">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
} 