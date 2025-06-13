import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';

export function TrendsPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-10 py-10 space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tendances</h1>
            <p className="mt-2 text-gray-600">Analyse des tendances et évolutions</p>
          </div>
        </div>
        
        {/* Contenu à venir */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-500">Contenu en cours de développement...</p>
        </div>
      </div>
    </PageLayout>
  );
} 