import React, { useState } from 'react';
import { Search, FileText, Clock, User, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

interface InvestigationCase {
  caseId: string;
  clientName: string;
  investigator: string;
  status: string;
  priority: string;
  openedDate: string;
  lastUpdate: string;
  documents: DocumentAnalysis[];
  timeline: TimelineEvent[];
  comments: Comment[];
  decision: 'approve' | 'reject' | null;
}

interface DocumentAnalysis {
  name: string;
  status: 'Analysé' | 'En cours' | 'Pending';
  result: 'Conforme' | 'Suspect' | 'Pending';
  notes: string;
  analysisDate?: string;
  validator?: string;
}

interface TimelineEvent {
  id: string;
  type: 'system' | 'human';
  action: string;
  timestamp: string;
  user?: string;
  details?: string;
  status: 'completed' | 'pending' | 'failed';
}

interface Comment {
  id: string;
  user: string;
  content: string;
  timestamp: string;
}

// Données de test
const testCase: InvestigationCase = {
  caseId: 'FR-2024-001',
  clientName: 'Martin Dubois',
  investigator: 'Jean Dupont',
  status: 'En cours',
  priority: 'Haute',
  openedDate: '2024-03-15 09:30',
  lastUpdate: '2024-03-15 14:45',
  documents: [
    {
      name: 'Carte d\'identité',
      status: 'Analysé',
      result: 'Suspect',
      notes: 'Modifications détectées sur la photo',
      analysisDate: '2024-03-15 10:15',
      validator: 'Marie Martin'
    },
    {
      name: 'Justificatif de domicile',
      status: 'Analysé',
      result: 'Suspect',
      notes: 'Adresse non vérifiée',
      analysisDate: '2024-03-15 11:30',
      validator: 'Marie Martin'
    },
    {
      name: 'Relevé bancaire',
      status: 'En cours',
      result: 'Pending',
      notes: 'Analyse en cours des transactions',
      analysisDate: '2024-03-15 14:00'
    }
  ],
  timeline: [
    {
      id: '1',
      type: 'system',
      action: 'Ouverture du dossier',
      timestamp: '2024-03-15 09:30',
      status: 'completed'
    },
    {
      id: '2',
      type: 'human',
      action: 'Analyse des documents',
      timestamp: '2024-03-15 10:15',
      user: 'Marie Martin',
      details: 'Vérification des documents d\'identité',
      status: 'completed'
    },
    {
      id: '3',
      type: 'system',
      action: 'Calcul du score de risque',
      timestamp: '2024-03-15 11:00',
      status: 'completed'
    },
    {
      id: '4',
      type: 'human',
      action: 'Vérification de l\'adresse',
      timestamp: '2024-03-15 11:30',
      user: 'Marie Martin',
      details: 'L\'adresse fournie n\'existe pas',
      status: 'completed'
    }
  ],
  comments: [
    {
      id: '1',
      user: 'Marie Martin',
      content: 'Documents d\'identité suspects, nécessite une vérification approfondie.',
      timestamp: '2024-03-15 10:20'
    },
    {
      id: '2',
      user: 'Jean Dupont',
      content: 'Je vais contacter le client pour plus d\'informations.',
      timestamp: '2024-03-15 11:45'
    }
  ],
  decision: null
};

export function CaseInvestigation() {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      // Logique d'ajout de commentaire
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      {/* En-tête du dossier */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Dossier {testCase.caseId}</h2>
            <p className="mt-1 text-sm text-gray-500">Client: {testCase.clientName}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500">Statut</p>
              <p className="text-sm font-medium text-gray-900">{testCase.status}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-500">Priorité</p>
              <p className="text-sm font-medium text-gray-900">{testCase.priority}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-500">Enquêteur</p>
            <p className="mt-1 text-sm text-gray-900">{testCase.investigator}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Date d'ouverture</p>
            <p className="mt-1 text-sm text-gray-900">{testCase.openedDate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Dernière mise à jour</p>
            <p className="mt-1 text-sm text-gray-900">{testCase.lastUpdate}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Décision</p>
            <p className="mt-1 text-sm text-gray-900">
              {testCase.decision ? (
                testCase.decision === 'approve' ? (
                  <span className="text-green-600">Approuvé</span>
                ) : (
                  <span className="text-red-600">Rejeté</span>
                )
              ) : (
                'En attente'
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Analyse des documents */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Analyse des documents</h3>
        <div className="space-y-4">
          {testCase.documents.map((doc, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex-shrink-0">
                <FileText className="w-6 h-6 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{doc.name}</h4>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    doc.result === 'Conforme' ? 'bg-green-100 text-green-800' :
                    doc.result === 'Suspect' ? 'bg-red-100 text-red-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {doc.result}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{doc.notes}</p>
                {doc.analysisDate && (
                  <p className="mt-1 text-xs text-gray-400">
                    Analysé le {doc.analysisDate} par {doc.validator}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chronologie */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Chronologie</h3>
        <div className="space-y-4">
          {testCase.timeline.map((event) => (
            <div key={event.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {event.type === 'system' ? (
                  <Clock className="w-5 h-5 text-blue-500" />
                ) : (
                  <User className="w-5 h-5 text-green-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{event.action}</p>
                  <span className="text-xs text-gray-500">{event.timestamp}</span>
                </div>
                {event.user && (
                  <p className="text-sm text-gray-500">Par {event.user}</p>
                )}
                {event.details && (
                  <p className="mt-1 text-sm text-gray-600">{event.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Commentaires */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Commentaires</h3>
        <div className="space-y-4">
          {testCase.comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-gray-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{comment.user}</p>
                  <span className="text-xs text-gray-500">{comment.timestamp}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ajout de commentaire */}
        <div className="mt-6">
          <div className="flex space-x-4">
            <input
              type="text"
              className="flex-1 block w-full px-3 py-2 border border-gray-200 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ajouter un commentaire..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleAddComment}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <XCircle className="w-4 h-4 mr-2" />
          Rejeter
        </button>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <CheckCircle className="w-4 h-4 mr-2" />
          Approuver
        </button>
      </div>
    </div>
  );
} 