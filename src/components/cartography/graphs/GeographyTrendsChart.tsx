import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { geographicData } from '../../../data/cartography/geographyData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value > 0 ? '+' : ''}{entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function GeographyTrendsChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Tendances géographiques</h3>
        <p className="text-sm text-gray-600 mt-1">Évolution des cas de fraude par région</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={geographicData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="region" 
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
              dataKey="companyTrend" 
              name="Compagnie" 
              radius={[4, 4, 0, 0]}
              fill="#93C5FD"
            />
            <Bar 
              dataKey="marketTrend" 
              name="Marché" 
              radius={[4, 4, 0, 0]}
              fill="#FCA5A5"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 