import React, { useState } from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { FraudCaseAnalysis } from '../components/fraud-analysis/FraudCaseAnalysis';
import { Button } from 'flowbite-react';
import { HiDownload } from 'react-icons/hi';
import { 
  Search,
  Filter,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Eye,
  FileText,
  X
} from 'lucide-react';

const cases = [
  {
    id: 'CASE-001',
    type: 'Fraude documentaire',
    status: 'En cours',
    priority: 'Haute',
    date: '2024-03-15',
    amount: '12,450€',
    analyst: 'Jean Dupont',
    lastUpdate: 'Il y a 2h',
  },
  {
    id: 'CASE-002',
    type: 'Usurpation d\'identité',
    status: 'Résolu',
    priority: 'Moyenne',
    date: '2024-03-14',
    amount: '8,750€',
    analyst: 'Marie Martin',
    lastUpdate: 'Il y a 4h',
  },
  {
    id: 'CASE-003',
    type: 'Transaction suspecte',
    status: 'En cours',
    priority: 'Haute',
    date: '2024-03-14',
    amount: '5,200€',
    analyst: 'Pierre Durand',
    lastUpdate: 'Il y a 5h',
  },
];

const statusColors: Record<string, string> = {
  'En cours': 'bg-yellow-100 text-yellow-800',
  'Résolu': 'bg-green-100 text-green-800',
  'En attente': 'bg-blue-100 text-blue-800',
};

const priorityColors: Record<string, string> = {
  'Haute': 'bg-red-100 text-red-800',
  'Moyenne': 'bg-orange-100 text-orange-800',
  'Basse': 'bg-green-100 text-green-800',
};

export function AnalysisPage() {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  return (
    <PageLayout>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-10 py-10 space-y-10">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Analyse des Dossiers</h1>
            <div className="flex gap-4">
              <Button color="gray" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <HiDownload className="mr-2 h-5 w-5" />
                Exporter
              </Button>
              <Button color="gray" size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                <Filter className="mr-2 h-5 w-5" />
                Filtrer
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Rechercher un dossier..."
            />
          </div>

          {/* Cases Table */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Statut
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Priorité
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Montant
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Analyste
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dernière mise à jour
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cases.map((case_) => (
                    <tr key={case_.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                        {case_.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {case_.type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[case_.status]}`}>
                          {case_.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${priorityColors[case_.priority]}`}>
                          {case_.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {case_.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {case_.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {case_.analyst}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {case_.lastUpdate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <Button
                          color="gray"
                          size="sm"
                          className="bg-gray-800 text-white hover:bg-gray-900"
                          onClick={() => setSelectedCase(case_.id)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Analyser
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Analyse Dossier Modal */}
          {selectedCase && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl w-11/12 max-w-7xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Analyse du dossier {selectedCase}
                    </h2>
                    <Button
                      color="gray"
                      size="sm"
                      className="bg-gray-800 text-white hover:bg-gray-900"
                      onClick={() => setSelectedCase(null)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  <FraudCaseAnalysis />
                </div>
              </div>
            </div>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-50">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Dossiers actifs</h3>
                  <p className="text-2xl font-semibold text-gray-900">24</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-yellow-50">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">En attente</h3>
                  <p className="text-2xl font-semibold text-gray-900">8</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-50">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Résolus ce mois</h3>
                  <p className="text-2xl font-semibold text-gray-900">42</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 