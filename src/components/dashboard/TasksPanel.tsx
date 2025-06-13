import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Vérifier la transaction suspecte #1234',
    priority: 'high',
    status: 'pending',
    dueDate: 'Aujourd\'hui',
  },
  {
    id: 2,
    title: 'Analyser le pattern de fraude #5678',
    priority: 'medium',
    status: 'in_progress',
    dueDate: 'Dans 2 jours',
  },
  {
    id: 3,
    title: 'Rapport mensuel de surveillance',
    priority: 'low',
    status: 'completed',
    dueDate: 'Hier',
  },
];

export function TasksPanel() {
  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Tâches prioritaires</h2>
        <div className="flex space-x-2">
          <span className="text-sm text-muted-foreground">3 tâches</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <div className={`rounded-full p-2 ${
              task.status === 'completed' ? 'bg-green-100 text-green-500' :
              task.status === 'in_progress' ? 'bg-blue-100 text-blue-500' :
              'bg-yellow-100 text-yellow-500'
            }`}>
              {task.status === 'completed' ? <CheckCircle2 className="h-4 w-4" /> :
               task.status === 'in_progress' ? <Clock className="h-4 w-4" /> :
               <AlertCircle className="h-4 w-4" />}
            </div>
            <div className="flex-1">
              <h3 className="font-medium">{task.title}</h3>
              <div className="mt-1 flex items-center space-x-2">
                <span className={`text-xs ${
                  task.priority === 'high' ? 'text-red-500' :
                  task.priority === 'medium' ? 'text-yellow-500' :
                  'text-blue-500'
                }`}>
                  {task.priority === 'high' ? 'Haute priorité' :
                   task.priority === 'medium' ? 'Priorité moyenne' :
                   'Basse priorité'}
                </span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{task.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 