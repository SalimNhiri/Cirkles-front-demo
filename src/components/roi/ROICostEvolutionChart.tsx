import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';
import type { CostEvolutionData } from '../../data/roiData';

export function ROICostEvolutionChart({ data }: { data?: CostEvolutionData[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow h-[80vh] flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Évolution mensuelle des coûts & pertes</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={v => v.toLocaleString('fr-FR')} />
            <Tooltip formatter={v => v.toLocaleString('fr-FR')} />
            <Legend />
            <Line type="monotone" dataKey="pertesEvitees" name="Pertes évitées" stroke="#10B981" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="coutDetection" name="Coût détection" stroke="#EF4444" strokeDasharray="6 4" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="pertesReelles" name="Pertes réelles" stroke="#F59E42" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 