import React from 'react';
import { AlertTriangle, Shield, TrendingUp, Clock } from 'lucide-react';

const stats = [
  {
    title: 'Détections',
    value: '1,234',
    change: '+12.3%',
    icon: AlertTriangle,
    color: 'text-red-500',
  },
  {
    title: 'Montants bloqués',
    value: '€2.5M',
    change: '+8.1%',
    icon: Shield,
    color: 'text-green-500',
  },
  {
    title: 'Taux de résolution',
    value: '87%',
    change: '+2.4%',
    icon: TrendingUp,
    color: 'text-blue-500',
  },
  {
    title: 'Temps moyen',
    value: '4.2h',
    change: '-0.8h',
    icon: Clock,
    color: 'text-purple-500',
  },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </p>
              <h3 className="mt-2 text-2xl font-bold">{stat.value}</h3>
              <p className={`mt-1 text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </p>
            </div>
            <div className={`rounded-full bg-muted p-3 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 