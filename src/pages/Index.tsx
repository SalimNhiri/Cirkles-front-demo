import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { 
  TrendingUp, 
  AlertTriangle, 
  Shield, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  FileText
} from 'lucide-react';
import { ReusableDashboard } from '../components/dashboard/ReusableDashboard';

const metrics = [
  {
    title: 'Détections ce mois',
    value: '47',
    description: 'Cas détectés',
    icon: AlertTriangle,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    trend: '+12.5%',
    trendColor: 'text-red-600',
  },
  {
    title: 'Montant bloqué',
    value: '2.9M€',
    description: 'Fraudes empêchées',
    icon: Shield,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    trend: '+8.3%',
    trendColor: 'text-green-600',
  },
  {
    title: 'Taux de résolution',
    value: '78.5%',
    description: 'Cas résolus/traités',
    icon: TrendingUp,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    trend: '+5.2%',
    trendColor: 'text-blue-600',
  },
  {
    title: 'Temps moyen',
    value: '3.2j',
    description: 'Résolution d\'un cas',
    icon: Clock,
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    trend: '-12.5%',
    trendColor: 'text-red-600',
  },
];

const recentAlerts = [
  {
    id: 1,
    type: 'Fraude documentaire',
    amount: '12,450€',
    status: 'En cours',
    time: 'Il y a 2h',
    trend: 'up',
  },
  {
    id: 2,
    type: 'Usurpation d\'identité',
    amount: '8,750€',
    status: 'Résolu',
    time: 'Il y a 4h',
    trend: 'down',
  },
  {
    id: 3,
    type: 'Transaction suspecte',
    amount: '5,200€',
    status: 'En cours',
    time: 'Il y a 5h',
    trend: 'up',
  },
];

export function Index() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-10 py-10 space-y-10">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="mt-2 text-gray-600">Vue d'ensemble de l'activité et des alertes</p>
            </div>
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm">
                <Users className="w-4 h-4 mr-2" />
                Équipe
              </button>
              <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm">
                <FileText className="w-4 h-4 mr-2" />
                Rapports
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className={`rounded-xl p-2 ${metric.bgColor}`}>
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

          {/* Charts */}
          <ReusableDashboard />

          {/* Recent Alerts */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Alertes récentes</h2>
                <p className="mt-1 text-sm text-gray-500">Dernières alertes détectées</p>
              </div>
            </div>
            <div className="space-y-4">
              {recentAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      alert.trend === 'up' ? 'bg-red-100' : 'bg-green-100'
                    }`}>
                      {alert.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4 text-red-600" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-green-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{alert.type}</h3>
                      <p className="text-sm text-gray-500">{alert.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">{alert.amount}</span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      alert.status === 'En cours' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 