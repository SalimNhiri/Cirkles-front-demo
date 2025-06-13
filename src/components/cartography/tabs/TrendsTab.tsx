import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const trendsData = [
  {
    month: 'Jan',
    total: 120,
    detected: 95,
    prevented: 25,
    detectionRate: 79,
    preventionRate: 21,
  },
  {
    month: 'Fév',
    total: 135,
    detected: 108,
    prevented: 27,
    detectionRate: 80,
    preventionRate: 20,
  },
  {
    month: 'Mar',
    total: 142,
    detected: 115,
    prevented: 27,
    detectionRate: 81,
    preventionRate: 19,
  },
  {
    month: 'Avr',
    total: 156,
    detected: 128,
    prevented: 28,
    detectionRate: 82,
    preventionRate: 18,
  },
  {
    month: 'Mai',
    total: 168,
    detected: 140,
    prevented: 28,
    detectionRate: 83,
    preventionRate: 17,
  },
  {
    month: 'Juin',
    total: 175,
    detected: 148,
    prevented: 27,
    detectionRate: 85,
    preventionRate: 15,
  },
];

export function TrendsTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Évolution des cas de fraude</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  name="Total des cas"
                  stroke="#6366f1"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="detected"
                  name="Cas détectés"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="prevented"
                  name="Cas prévenus"
                  stroke="#ec4899"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Taux de détection et prévention</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="detectionRate"
                  name="Taux de détection (%)"
                  fill="#6366f1"
                  stroke="#6366f1"
                />
                <Area
                  type="monotone"
                  dataKey="preventionRate"
                  name="Taux de prévention (%)"
                  fill="#8b5cf6"
                  stroke="#8b5cf6"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Analyse des tendances</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-indigo-50 p-4">
            <h4 className="font-medium text-indigo-700">Volume total</h4>
            <p className="mt-2 text-sm text-gray-600">
              Augmentation de 46% sur 6 mois, passant de 120 à 175 cas mensuels.
            </p>
          </div>
          <div className="rounded-lg bg-purple-50 p-4">
            <h4 className="font-medium text-purple-700">Efficacité de détection</h4>
            <p className="mt-2 text-sm text-gray-600">
              Amélioration du taux de détection de 79% à 85% grâce aux nouveaux systèmes.
            </p>
          </div>
          <div className="rounded-lg bg-pink-50 p-4">
            <h4 className="font-medium text-pink-700">Prévention</h4>
            <p className="mt-2 text-sm text-gray-600">
              Maintien stable du nombre de cas prévenus malgré l'augmentation du volume total.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Recommandations</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
              <span className="text-indigo-600 font-medium">1</span>
            </div>
            <div>
              <h4 className="font-medium">Renforcement des systèmes de détection</h4>
              <p className="mt-1 text-sm text-gray-600">
                Investir dans l'IA et le machine learning pour améliorer encore les taux de détection.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-purple-600 font-medium">2</span>
            </div>
            <div>
              <h4 className="font-medium">Optimisation des processus de prévention</h4>
              <p className="mt-1 text-sm text-gray-600">
                Développer des alertes préventives plus précoces et des contrôles automatisés.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
              <span className="text-pink-600 font-medium">3</span>
            </div>
            <div>
              <h4 className="font-medium">Formation continue des équipes</h4>
              <p className="mt-1 text-sm text-gray-600">
                Maintenir un programme de formation régulier sur les nouvelles techniques de fraude.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 