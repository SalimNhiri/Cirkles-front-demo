import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { fraudTypeData, chartStyles } from '../../../data/dashboard/dashboardData';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 p-4 rounded-xl shadow-lg border border-gray-100">
        <p className="text-sm font-medium text-gray-900">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
            {entry.dataKey === 'amount' ? `€ (${(entry.value / 1000000).toFixed(1)}M)` : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function FraudTypeChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Types de fraude</h3>
        <p className="text-sm text-gray-600 mt-1">Répartition des différents types de fraudes détectées</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={fraudTypeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={chartStyles.pieChart.outerRadius}
              innerRadius={chartStyles.pieChart.innerRadius}
              fill="#8884d8"
              dataKey="value"
              stroke={chartStyles.pieChart.stroke}
              strokeWidth={chartStyles.pieChart.strokeWidth}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {fraudTypeData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color}
                  stroke={chartStyles.pieChart.stroke}
                  strokeWidth={chartStyles.pieChart.strokeWidth}
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