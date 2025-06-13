import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';

const assetTrendsData = [
  {
    class: 'Véhicules',
    trend: 5,
    risk: 'Élevé',
    color: '#3B82F6'
  },
  {
    class: 'Équipements électroniques',
    trend: 3,
    risk: 'Moyen',
    color: '#10B981'
  },
  {
    class: 'Nautique',
    trend: -2,
    risk: 'Moyen',
    color: '#F59E0B'
  },
  {
    class: 'Équipements professionnels',
    trend: 4,
    risk: 'Élevé',
    color: '#EF4444'
  },
  {
    class: 'Immobilier',
    trend: -1,
    risk: 'Faible',
    color: '#8B5CF6'
  },
  {
    class: 'Autres',
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
            Tendance: {entry.value > 0 ? '+' : ''}{entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function AssetTrendsChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Tendances des actifs</h3>
        <p className="text-sm text-gray-600 mt-1">Évolution des cas de fraude par type d'actif</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={assetTrendsData}
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
              label={{ 
                value: 'Tendance (%)', 
                angle: -90, 
                position: 'insideLeft',
                style: { textAnchor: 'middle', fontSize: 12 }
              }}
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
              dataKey="trend" 
              name="Tendance" 
              radius={[4, 4, 0, 0]}
            >
              {assetTrendsData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 