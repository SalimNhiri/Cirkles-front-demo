import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import type { CostBreakdownData } from '../../data/roiData';

export function ROICostBreakdownChart({ data }: { data?: CostBreakdownData[] }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow h-[48vh] flex flex-col">
      <h3 className="text-lg font-bold mb-4 text-gray-900">Répartition budgétaire</h3>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
            >
              {data?.map((entry, i) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={v => v + ' %'} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 