import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { fraudTrendData, chartStyles } from '../../../data/dashboard/dashboardData';

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

const axisStyle = {
  fontSize: 12,
  fill: '#64748b'
};

export function DetectionTrendChart() {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in hover:scale-[1.02] p-6">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Évolution des détections</h3>
        <p className="text-sm text-gray-600 mt-1">Suivi mensuel des cas détectés et résolus</p>
      </div>
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={fraudTrendData}>
            <CartesianGrid 
              stroke={chartStyles.lineChart.grid.stroke}
              strokeOpacity={chartStyles.lineChart.grid.strokeOpacity}
              strokeDasharray={chartStyles.lineChart.grid.strokeDasharray}
            />
            <XAxis 
              dataKey="month" 
              stroke={chartStyles.lineChart.axis.stroke}
              style={axisStyle}
            />
            <YAxis 
              stroke={chartStyles.lineChart.axis.stroke}
              style={axisStyle}
              domain={[0, 60]}
              tickCount={7}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              height={36}
              wrapperStyle={{
                paddingBottom: '20px',
                fontSize: '12px',
                color: '#64748b'
              }}
            />
            <Line
              type="monotone"
              dataKey="detections"
              name="Détections : Nombre de cas de fraude détectés par mois"
              stroke={chartStyles.lineChart.detections.stroke}
              strokeWidth={chartStyles.lineChart.detections.strokeWidth}
              dot={{
                ...chartStyles.lineChart.detections.dot,
                fill: '#fff',
                stroke: chartStyles.lineChart.detections.stroke,
                strokeWidth: 2
              }}
              activeDot={{
                ...chartStyles.lineChart.detections.dot.activeDot,
                fill: '#fff',
                stroke: chartStyles.lineChart.detections.stroke,
                strokeWidth: 2
              }}
            />
            <Line
              type="monotone"
              dataKey="resolved"
              name="Résolus : Nombre de cas résolus par mois"
              stroke={chartStyles.lineChart.resolved.stroke}
              strokeWidth={chartStyles.lineChart.resolved.strokeWidth}
              dot={{
                ...chartStyles.lineChart.resolved.dot,
                fill: '#fff',
                stroke: chartStyles.lineChart.resolved.stroke,
                strokeWidth: 2
              }}
              activeDot={{
                ...chartStyles.lineChart.resolved.dot.activeDot,
                fill: '#fff',
                stroke: chartStyles.lineChart.resolved.stroke,
                strokeWidth: 2
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 