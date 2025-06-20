import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import type { CostPerCaseData } from '../../data/roiData';

export function ROICostPerCaseChart({ data }: { data?: CostPerCaseData[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow h-[96vh] flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Analyse par typologie de fraude</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={v => v.toLocaleString('fr-FR')} />
            <YAxis type="category" dataKey="type" tick={{ fontSize: 12 }} width={120} />
            <Tooltip formatter={v => v.toLocaleString('fr-FR')} />
            <Legend />
            <Bar dataKey="coutMoyen" name="Coût moyen" fill="#3B82F6" barSize={18} />
            <Bar dataKey="tempsTraitement" name="Temps traitement (h)" fill="#10B981" barSize={18} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 