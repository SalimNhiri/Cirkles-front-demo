import React from 'react';
import { Card, Progress, Button, Badge } from 'flowbite-react';
import { HiChartBar, HiDocumentSearch, HiClipboardList, HiLightningBolt } from 'react-icons/hi';

interface FacteurContributif {
  nom: string;
  score: number;
  impact: 'Élevé' | 'Moyen' | 'Faible';
  description: string;
}

interface PlanAction {
  id: string;
  titre: string;
  priorite: 'Haute' | 'Moyenne' | 'Basse';
  statut: 'En cours' | 'Terminé' | 'À faire';
  dateEcheance: string;
}

const AnalyseDossier: React.FC = () => {
  const scoreFraude = 75;
  const facteursContributifs: FacteurContributif[] = [
    {
      nom: "Anomalies de comportement",
      score: 85,
      impact: "Élevé",
      description: "Détection de comportements inhabituels dans les transactions"
    },
    {
      nom: "Historique client",
      score: 65,
      impact: "Moyen",
      description: "Historique de transactions suspectes"
    },
    {
      nom: "Risque géographique",
      score: 45,
      impact: "Faible",
      description: "Zone géographique à risque"
    }
  ];

  const plansAction: PlanAction[] = [
    {
      id: "1",
      titre: "Vérification approfondie des transactions",
      priorite: "Haute",
      statut: "En cours",
      dateEcheance: "2024-03-20"
    },
    {
      id: "2",
      titre: "Contact client",
      priorite: "Moyenne",
      statut: "À faire",
      dateEcheance: "2024-03-25"
    }
  ];

  return (
    <div className="p-6 space-y-6 bg-white">
      {/* En-tête avec score global */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-lg">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-gray-900">Score de Fraude Global</h5>
            <HiChartBar className="w-8 h-8 text-blue-600" />
          </div>
          <div className="mt-4">
            <Progress
              progress={scoreFraude}
              color={scoreFraude > 70 ? "red" : scoreFraude > 40 ? "yellow" : "green"}
              size="lg"
              className="h-4"
            />
            <p className="mt-2 text-sm text-gray-600">
              Score de risque: {scoreFraude}/100
            </p>
          </div>
        </Card>

        <Card className="shadow-lg">
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold text-gray-900">Interprétation</h5>
            <HiDocumentSearch className="w-8 h-8 text-blue-600" />
          </div>
          <p className="mt-4 text-gray-600">
            Ce score indique un niveau de risque {scoreFraude > 70 ? "élevé" : scoreFraude > 40 ? "modéré" : "faible"}.
            Une investigation approfondie est {scoreFraude > 70 ? "fortement recommandée" : scoreFraude > 40 ? "recommandée" : "non nécessaire"}.
          </p>
        </Card>
      </div>

      {/* Facteurs Contributifs */}
      <Card className="shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-900">Facteurs Contributifs</h5>
          <HiLightningBolt className="w-8 h-8 text-blue-600" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Facteur</th>
                <th scope="col" className="px-6 py-3">Score</th>
                <th scope="col" className="px-6 py-3">Impact</th>
                <th scope="col" className="px-6 py-3">Description</th>
              </tr>
            </thead>
            <tbody>
              {facteursContributifs.map((facteur, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{facteur.nom}</td>
                  <td className="px-6 py-4">
                    <Progress
                      progress={facteur.score}
                      color={facteur.score > 70 ? "red" : facteur.score > 40 ? "yellow" : "green"}
                      size="sm"
                      className="h-2"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <Badge color={facteur.impact === "Élevé" ? "red" : facteur.impact === "Moyen" ? "yellow" : "green"}>
                      {facteur.impact}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">{facteur.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Plans d'Action */}
      <Card className="shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-900">Plans d'Action</h5>
          <HiClipboardList className="w-8 h-8 text-blue-600" />
        </div>
        <div className="space-y-4">
          {plansAction.map((plan) => (
            <div key={plan.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-center">
                <h6 className="font-semibold text-gray-900">{plan.titre}</h6>
                <Badge color={
                  plan.priorite === "Haute" ? "red" :
                  plan.priorite === "Moyenne" ? "yellow" : "green"
                }>
                  {plan.priorite}
                </Badge>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <Badge color={
                  plan.statut === "En cours" ? "blue" :
                  plan.statut === "Terminé" ? "green" : "gray"
                }>
                  {plan.statut}
                </Badge>
                <span className="text-sm text-gray-600">
                  Échéance: {new Date(plan.dateEcheance).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Outil d'Investigation */}
      <Card className="shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold text-gray-900">Outil d'Investigation</h5>
          <HiDocumentSearch className="w-8 h-8 text-blue-600" />
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button color="gray" size="lg" className="w-full hover:bg-gray-700">
              Vérifier l'historique des transactions
            </Button>
            <Button color="gray" size="lg" className="w-full hover:bg-gray-700">
              Analyser les documents
            </Button>
            <Button color="gray" size="lg" className="w-full hover:bg-gray-700">
              Vérifier les alertes
            </Button>
            <Button color="gray" size="lg" className="w-full hover:bg-gray-700">
              Générer rapport d'investigation
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AnalyseDossier; 