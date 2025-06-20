import React from 'react';
import type { CostPerCaseData } from '../../data/roiData';

function formatCurrency(value?: number) {
  if (typeof value !== 'number') return '-';
  return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
}

export function ROICostTable({ data }: { data?: CostPerCaseData[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow overflow-x-auto">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Détail par typologie de fraude</h3>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-gray-500 uppercase">
            <th className="py-2 px-3">Type de Fraude</th>
            <th className="py-2 px-3">Nb Dossiers</th>
            <th className="py-2 px-3">Coût Moyen</th>
            <th className="py-2 px-3 font-bold">Coût Total</th>
            <th className="py-2 px-3">Temps Moyen (h)</th>
            <th className="py-2 px-3">ROI Estimé</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <tr key={row.type} className="border-b last:border-0">
              <td className="py-2 px-3 font-medium text-gray-900">{row.type}</td>
              <td className="py-2 px-3">{row.nombreDossiers}</td>
              <td className="py-2 px-3">{formatCurrency(row.coutMoyen)}</td>
              <td className="py-2 px-3 font-bold">{formatCurrency(row.coutTotal)}</td>
              <td className="py-2 px-3">{row.tempsTraitement}</td>
              <td className="py-2 px-3">
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">ROI</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 