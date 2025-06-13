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
} from 'recharts';

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
          <h3 className="text-lg font-semibold mb-4">Évolution des méthodes de fraude</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={modusOperandiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="digital"
                  name="Fraude digitale"
                  stroke="#6366f1"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="physical"
                  name="Fraude physique"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="social"
                  name="Ingénierie sociale"
                  stroke="#ec4899"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Tendances mensuelles</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={modusOperandiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="digitalTrend"
                  name="Tendance digitale"
                  stroke="#6366f1"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="physicalTrend"
                  name="Tendance physique"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="socialTrend"
                  name="Tendance sociale"
                  stroke="#ec4899"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Analyse des tendances</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-indigo-50 p-4">
            <h4 className="font-medium text-indigo-700">Fraude digitale</h4>
            <p className="mt-2 text-sm text-gray-600">
              Augmentation constante de +15% sur 6 mois, principalement due à l'essor des attaques
              par phishing et malware.
            </p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4">
            <h4 className="font-medium text-purple-700">Fraude physique</h4>
            <p className="mt-2 text-sm text-gray-600">
              Diminution progressive de -7% sur 6 mois, reflétant la digitalisation des services.
            </p>
          </div>
          <div className="rounded-lg bg-pink-50 p-4">
            <h4 className="font-medium text-pink-700">Ingénierie sociale</h4>
            <p className="mt-2 text-sm text-gray-600">
              Légère baisse de -2% sur 6 mois, mais reste une menace significative nécessitant
              une vigilance accrue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 