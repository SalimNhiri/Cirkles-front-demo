import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const assetClassData = [
  {
    class: 'Véhicules',
    cases: 423,
    percentage: 28,
    trend: 5,
    risk: 'Élevé',
    color: '#3B82F6'
  },
  {
    class: 'Équipements électroniques',
    cases: 312,
    percentage: 21,
    trend: 3,
    risk: 'Moyen',
    color: '#10B981'
  },
  {
    class: 'Nautique',
    cases: 245,
    percentage: 16,
    trend: -2,
    risk: 'Moyen',
    color: '#F59E0B'
  },
  {
    class: 'Équipements professionnels',
    cases: 198,
    percentage: 13,
    trend: 4,
    risk: 'Élevé',
    color: '#EF4444'
  },
  {
    class: 'Immobilier',
    cases: 156,
    percentage: 10,
    trend: -1,
    risk: 'Faible',
    color: '#8B5CF6'
  },
  {
    class: 'Autres',
    cases: 134,
    percentage: 9,
    trend: 2,
    risk: 'Moyen',
    color: '#EC4899'
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AssetClassChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Répartition par classe d'actif</h3>
        <p className="text-sm text-gray-600 mt-1">Distribution des cas de fraude par type d'actif</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={assetClassData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="class" 
              stroke="#64748b"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={100}
            />
            <YAxis 
              stroke="#64748b"
              tick={{ fontSize: 12 }}
            />
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
            <Bar 
              dataKey="cases" 
              name="Nombre de cas" 
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
            >
              {assetClassData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                />
              ))}
            </Bar>
            <Bar 
              dataKey="trend" 
              name="Tendance (%)" 
              fill="#10B981"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 