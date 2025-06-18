import React from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const volumeData = [
  { month: 'Jan', clientIndex: 100, marketIndex: 100, clientTrend: 0, marketTrend: 0 },
  { month: 'Fév', clientIndex: 102, marketIndex: 101, clientTrend: 2, marketTrend: 1 },
  { month: 'Mar', clientIndex: 104, marketIndex: 102, clientTrend: 2, marketTrend: 1 },
  { month: 'Avr', clientIndex: 103, marketIndex: 104, clientTrend: -1, marketTrend: 2 },
  { month: 'Mai', clientIndex: 102, marketIndex: 105, clientTrend: -1, marketTrend: 1 },
  { month: 'Juin', clientIndex: 105, marketIndex: 104, clientTrend: 3, marketTrend: -1 },
  { month: 'Juil', clientIndex: 108, marketIndex: 105, clientTrend: 3, marketTrend: 1 },
  { month: 'Août', clientIndex: 105, marketIndex: 103, clientTrend: -3, marketTrend: -2 },
  { month: 'Sep', clientIndex: 107, marketIndex: 100, clientTrend: 2, marketTrend: -3 },
  { month: 'Oct', clientIndex: 102, marketIndex: 97, clientTrend: -5, marketTrend: -3 },
  { month: 'Nov', clientIndex: 98, marketIndex: 94, clientTrend: -4, marketTrend: -3 },
  { month: 'Déc', clientIndex: 80, marketIndex: 91, clientTrend: -18, marketTrend: -3 },
];

export function VolumeTab() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Évolution des indices (base 100 = Janvier)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[75, 110]} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="clientIndex"
                stroke="#6366f1"
                fill="#6366f1"
                fillOpacity={0.2}
                name="Indice client"
              />
              <Area
                type="monotone"
                dataKey="marketIndex"
                stroke="#8b5cf6"
                fill="#8b5cf6"
                fillOpacity={0.2}
                name="Indice marché"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Variations mensuelles (%)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={volumeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[-20, 5]} />
              <Tooltip />
              <Bar
                dataKey="clientTrend"
                fill="#6366f1"
                name="Variation client"
              />
              <Bar
                dataKey="marketTrend"
                fill="#8b5cf6"
                name="Variation marché"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 