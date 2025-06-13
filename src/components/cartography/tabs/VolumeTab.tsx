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
  { month: 'Fév', clientIndex: 105, marketIndex: 102, clientTrend: 5, marketTrend: 2 },
  { month: 'Mar', clientIndex: 112, marketIndex: 105, clientTrend: 7, marketTrend: 3 },
  { month: 'Avr', clientIndex: 108, marketIndex: 107, clientTrend: -4, marketTrend: 2 },
  { month: 'Mai', clientIndex: 115, marketIndex: 110, clientTrend: 7, marketTrend: 3 },
  { month: 'Juin', clientIndex: 120, marketIndex: 112, clientTrend: 5, marketTrend: 2 },
];

export function VolumeTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Évolution des indices (base 100 = Janvier)</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
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
                <YAxis />
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
    </div>
  );
} 