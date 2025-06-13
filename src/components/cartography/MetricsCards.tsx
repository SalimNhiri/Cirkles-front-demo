import React from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, MapPin } from 'lucide-react';

const metrics = [
  {
    title: 'Tendance Volume',
    value: '+15.3%',
    description: 'vs mois dernier',
    icon: TrendingUp,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    trend: '',
    trendColor: 'text-green-600',
  },
  {
    title: 'Évolution Montants',
    value: '+8.2%',
    description: 'vs année dernière',
    icon: TrendingUp,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    trend: '',
    trendColor: 'text-blue-600',
  },
  {
    title: 'Coût de la Fraude',
    value: '2.4M€',
    description: '+12% ce trimestre',
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    trend: '+12%',
    trendColor: 'text-red-600',
  },
  {
    title: 'Régions Touchées',
    value: '13',
    description: 'Sur 18 régions',
    icon: MapPin,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    trend: '',
    trendColor: 'text-purple-600',
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <div className={`rounded-lg p-2 ${metric.bgColor}`}>
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
            </div>
            <div className={`text-sm font-medium ${metric.trendColor}`}>
              {metric.trend}
            </div>
          </div>
          
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{metric.value}</p>
            <p className="mt-1 text-sm text-gray-500">{metric.description}</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-50" />
        </div>
      ))}
    </div>
  );
} 