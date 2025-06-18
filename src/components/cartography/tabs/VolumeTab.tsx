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
  LineChart,
  Line,
  Legend,
  ReferenceArea,
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
  // Calcul de la progression depuis janvier
  const clientStart = volumeData[0].clientIndex;
  const clientEnd = volumeData[volumeData.length - 1].clientIndex;
  const marketStart = volumeData[0].marketIndex;
  const marketEnd = volumeData[volumeData.length - 1].marketIndex;
  const clientProgressNum = ((clientEnd - clientStart) / clientStart) * 100;
  const marketProgressNum = ((marketEnd - marketStart) / marketStart) * 100;
  const clientProgress = clientProgressNum.toFixed(1);
  const marketProgress = marketProgressNum.toFixed(1);
  const conclusion = `Depuis janvier, l'indice client a progressé de ${clientProgressNum > 0 ? '+' : ''}${clientProgress}%, contre ${marketProgressNum > 0 ? '+' : ''}${marketProgress}% pour le marché.`;

  // Création des segments pour l'air entre les deux courbes (ReferenceArea)
  const referenceAreas = [];
  for (let i = 0; i < volumeData.length - 1; i++) {
    const d1 = volumeData[i];
    const d2 = volumeData[i + 1];
    referenceAreas.push({
      x1: d1.month,
      x2: d2.month,
      y1: Math.min(d1.clientIndex, d1.marketIndex),
      y2: Math.max(d1.clientIndex, d1.marketIndex),
    });
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Évolution des indices (base 100 = Janvier)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={volumeData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[Math.min(...volumeData.map(d => Math.min(d.clientIndex, d.marketIndex))) - 2, Math.max(...volumeData.map(d => Math.max(d.clientIndex, d.marketIndex))) + 2]} />
              <Tooltip />
              {/* Air discret entre les deux courbes */}
              {referenceAreas.map((area, idx) => (
                <ReferenceArea
                  key={idx}
                  x1={area.x1}
                  x2={area.x2}
                  y1={area.y1}
                  y2={area.y2}
                  stroke={undefined}
                  fill="#a5b4fc"
                  fillOpacity={0.15}
                />
              ))}
              {/* Lignes nettes */}
              <Line
                type="monotone"
                dataKey="clientIndex"
                stroke="#6366f1"
                strokeWidth={2}
                dot={false}
                name="Indice client"
              />
              <Line
                type="monotone"
                dataKey="marketIndex"
                stroke="#8b5cf6"
                strokeWidth={2}
                dot={false}
                name="Indice marché"
              />
              <Legend verticalAlign="top" height={36} wrapperStyle={{ fontSize: '13px', color: '#64748b' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs text-gray-500 mt-2 italic text-right">{conclusion}</div>
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
        <div className="text-xs text-gray-500 mt-2 italic text-right">
          Les variations mensuelles montrent une volatilité marquée, avec des pics et des baisses notables selon les périodes.
        </div>
      </div>
    </div>
  );
} 