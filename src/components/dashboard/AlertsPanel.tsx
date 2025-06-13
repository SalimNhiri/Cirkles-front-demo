import React from 'react';
import { AlertTriangle, Bell } from 'lucide-react';

const alerts = [
  {
    id: 1,
    title: 'Transaction suspecte détectée',
    description: 'Transaction de 50,000€ depuis un nouveau compte',
    severity: 'high',
    time: 'Il y a 5 minutes',
  },
  {
    id: 2,
    title: 'Pattern de fraude identifié',
    description: 'Série de transactions similaires sur plusieurs comptes',
    severity: 'medium',
    time: 'Il y a 15 minutes',
  },
  {
    id: 3,
    title: 'Tentative d\'accès non autorisé',
    description: 'Plusieurs tentatives de connexion depuis une nouvelle IP',
    severity: 'low',
    time: 'Il y a 30 minutes',
  },
];

export function AlertsPanel() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Alertes en temps réel</h2>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </div>
      
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <div className={`rounded-full p-2 ${
              alert.severity === 'high' ? 'bg-red-100 text-red-500' :
              alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-500' :
              'bg-blue-100 text-blue-500'
            }`}>
              <AlertTriangle className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{alert.title}</h3>
              <p className="text-sm text-muted-foreground">{alert.description}</p>
              <p className="mt-1 text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 