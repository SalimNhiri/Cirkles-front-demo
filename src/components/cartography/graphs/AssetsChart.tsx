import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const assetData = [
  {
    type: 'Véhicules',
    value: 40,
    count: 482,
    risk: 'Élevé',
    trend: 8,
    color: '#3B82F6'
  },
  {
    type: 'Équipements électroniques',
    value: 25,
    count: 301,
    risk: 'Moyen',
    trend: 12,
    color: '#10B981'
  },
  {
    type: 'Nautique',
    value: 15,
    count: 181,
    risk: 'Élevé',
    trend: 5,
    color: '#F59E0B'
  },
  {
    type: 'Équipements professionnels',
    value: 20,
    count: 241,
    risk: 'Moyen',
    trend: 6,
    color: '#EF4444'
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AssetsChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Répartition des actifs</h3>
        <p className="text-sm text-gray-600 mt-1">Distribution par type d'actif</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={assetData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              stroke="#FFFFFF"
              strokeWidth={2}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {assetData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke="#FFFFFF"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{
                paddingTop: '20px',
                fontSize: '12px',
                color: '#64748b'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 