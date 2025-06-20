import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { modusOperandiYearlyData } from '../../../data/cartography/cartographyData';

const modusOperandiData = [
  {
    month: 'Jan',
    digital: 45,
    physical: 30,
    social: 25,
    digitalTrend: 5,
    physicalTrend: -2,
    socialTrend: 3,
  },
  {
    month: 'Fév',
    digital: 48,
    physical: 28,
    social: 24,
    digitalTrend: 6,
    physicalTrend: -3,
    socialTrend: 2,
  },
  {
    month: 'Mar',
    digital: 52,
    physical: 25,
    social: 23,
    digitalTrend: 8,
    physicalTrend: -4,
    socialTrend: 1,
  },
  {
    month: 'Avr',
    digital: 55,
    physical: 22,
    social: 23,
    digitalTrend: 10,
    physicalTrend: -5,
    socialTrend: 0,
  },
  {
    month: 'Mai',
    digital: 58,
    physical: 20,
    social: 22,
    digitalTrend: 12,
    physicalTrend: -6,
    socialTrend: -1,
  },
  {
    month: 'Juin',
    digital: 62,
    physical: 18,
    social: 20,
    digitalTrend: 15,
    physicalTrend: -7,
    socialTrend: -2,
  },
];

export function ModusOperandiTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Évolution annuelle (proportion %) par modus operandi vs benchmarks marché</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={modusOperandiYearlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis unit="%" />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                  formatter={(value) => {
                    switch (value) {
                      case 'usurpation':
                      case 'benchmarkUsurpation':
                        return "Usurpation d'identité";
                      case 'fausseDeclaration':
                      case 'benchmarkFausseDeclaration':
                        return 'Fausse déclaration';
                      case 'falsification':
                      case 'benchmarkFalsification':
                        return 'Falsification de documents';
                      case 'collusion':
                      case 'benchmarkCollusion':
                        return 'Collusion interne';
                      default:
                        return value;
                    }
                  }}
                  payload={[
                    { value: 'usurpation', type: 'line', color: '#3B82F6' },
                    { value: 'fausseDeclaration', type: 'line', color: '#6366f1' },
                    { value: 'falsification', type: 'line', color: '#10B981' },
                    { value: 'collusion', type: 'line', color: '#F472B6' },
                  ]}
                />
                <Line type="monotone" dataKey="usurpation" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="benchmarkUsurpation" stroke="#3B82F6" strokeDasharray="4 4" strokeWidth={2} />
                <Line type="monotone" dataKey="fausseDeclaration" stroke="#6366f1" strokeWidth={2} />
                <Line type="monotone" dataKey="benchmarkFausseDeclaration" stroke="#6366f1" strokeDasharray="4 4" strokeWidth={2} />
                <Line type="monotone" dataKey="falsification" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="benchmarkFalsification" stroke="#10B981" strokeDasharray="4 4" strokeWidth={2} />
                <Line type="monotone" dataKey="collusion" stroke="#F472B6" strokeWidth={2} />
                <Line type="monotone" dataKey="benchmarkCollusion" stroke="#F472B6" strokeDasharray="4 4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Comparaison annuelle vs benchmark</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modusOperandiYearlyData} barCategoryGap={16}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis unit="%" />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend
                  formatter={(value) => {
                    switch (value) {
                      case 'usurpation':
                      case 'benchmarkUsurpation':
                        return "Usurpation d'identité";
                      case 'fausseDeclaration':
                      case 'benchmarkFausseDeclaration':
                        return 'Fausse déclaration';
                      case 'falsification':
                      case 'benchmarkFalsification':
                        return 'Falsification de documents';
                      case 'collusion':
                      case 'benchmarkCollusion':
                        return 'Collusion interne';
                      default:
                        return value;
                    }
                  }}
                  payload={[
                    { value: 'usurpation', type: 'rect', color: '#3B82F6' },
                    { value: 'fausseDeclaration', type: 'rect', color: '#6366f1' },
                    { value: 'falsification', type: 'rect', color: '#10B981' },
                    { value: 'collusion', type: 'rect', color: '#F472B6' },
                  ]}
                />
                <Bar dataKey="usurpation" fill="#3B82F6" />
                <Bar dataKey="benchmarkUsurpation" fill="#3B82F6" fillOpacity={0.3} />
                <Bar dataKey="fausseDeclaration" fill="#6366f1" />
                <Bar dataKey="benchmarkFausseDeclaration" fill="#6366f1" fillOpacity={0.3} />
                <Bar dataKey="falsification" fill="#10B981" />
                <Bar dataKey="benchmarkFalsification" fill="#10B981" fillOpacity={0.3} />
                <Bar dataKey="collusion" fill="#F472B6" />
                <Bar dataKey="benchmarkCollusion" fill="#F472B6" fillOpacity={0.3} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Analyse des tendances</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-indigo-50 p-4">
            <h4 className="font-medium text-indigo-700">Usurpation d'identité</h4>
            <p className="mt-2 text-sm text-gray-600">Baisse progressive mais reste élevée, nécessite une vigilance continue.</p>
          </div>
          <div className="rounded-lg bg-blue-50 p-4">
            <h4 className="font-medium text-blue-700">Fausse déclaration</h4>
            <p className="mt-2 text-sm text-gray-600">Tendance à la baisse, mais attention aux pics ponctuels.</p>
          </div>
          <div className="rounded-lg bg-green-50 p-4">
            <h4 className="font-medium text-green-700">Falsification de documents</h4>
            <p className="mt-2 text-sm text-gray-600">En hausse, notamment sur les dossiers complexes.</p>
          </div>
          <div className="rounded-lg bg-pink-50 p-4">
            <h4 className="font-medium text-pink-700">Collusion interne</h4>
            <p className="mt-2 text-sm text-gray-600">Forte progression, dépasse le benchmark du marché en 2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 