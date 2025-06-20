import React from 'react';
import { TrendingUp, DollarSign, Clock, AlertTriangle } from 'lucide-react';
import type { ROIMetrics } from '../../data/roiData';

function formatCurrency(value?: number) {
  if (typeof value !== 'number') return '-';
  return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}
function formatPercent(value?: number) {
  if (typeof value !== 'number') return '-';
  return value.toLocaleString('fr-FR', { maximumFractionDigits: 1 }) + ' %';
}

export function ROIMetricsCards({ metrics }: { metrics?: ROIMetrics }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="bg-green-50 rounded-xl p-6 flex items-center gap-4 shadow">
        <div className="bg-green-200 p-2 rounded-full"><TrendingUp className="text-green-700 w-6 h-6" /></div>
        <div>
          <div className="text-xs text-green-700 font-semibold uppercase">ROI Global</div>
          <div className="text-2xl font-bold text-green-900">{formatPercent(metrics?.roiGlobal)}</div>
        </div>
      </div>
      <div className="bg-blue-50 rounded-xl p-6 flex items-center gap-4 shadow">
        <div className="bg-blue-200 p-2 rounded-full"><DollarSign className="text-blue-700 w-6 h-6" /></div>
        <div>
          <div className="text-xs text-blue-700 font-semibold uppercase">Pertes évitées</div>
          <div className="text-2xl font-bold text-blue-900">{formatCurrency(metrics?.pertesEvitees)}</div>
        </div>
      </div>
      <div className="bg-orange-50 rounded-xl p-6 flex items-center gap-4 shadow">
        <div className="bg-orange-200 p-2 rounded-full"><Clock className="text-orange-700 w-6 h-6" /></div>
        <div>
          <div className="text-xs text-orange-700 font-semibold uppercase">Payback Period</div>
          <div className="text-2xl font-bold text-orange-900">{metrics?.paybackPeriod} mois</div>
        </div>
      </div>
      <div className="bg-violet-50 rounded-xl p-6 flex items-center gap-4 shadow">
        <div className="bg-violet-200 p-2 rounded-full"><AlertTriangle className="text-violet-700 w-6 h-6" /></div>
        <div>
          <div className="text-xs text-violet-700 font-semibold uppercase">Efficacité détection</div>
          <div className="text-2xl font-bold text-violet-900">{formatPercent(metrics?.efficaciteDetection)}</div>
        </div>
      </div>
    </div>
  );
} 