import React from 'react';
import type { ROIMetrics } from '../../data/roiData';

export function ROIRecommendations({ metrics }: { metrics?: ROIMetrics }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-green-50 rounded-xl p-6 shadow flex flex-col">
        <h4 className="text-lg font-bold text-green-800 mb-2">Points forts</h4>
        <ul className="list-disc pl-5 text-green-900 space-y-1">
          <li>ROI {metrics?.roiGlobal ?? 285}%</li>
          <li>Réduction 52% pertes</li>
          <li>Efficacité &gt;94%</li>
        </ul>
      </div>
      <div className="bg-orange-50 rounded-xl p-6 shadow flex flex-col">
        <h4 className="text-lg font-bold text-orange-800 mb-2">Axes d'amélioration</h4>
        <ul className="list-disc pl-5 text-orange-900 space-y-1">
          <li>Automatisation détection</li>
          <li>Optimisation temps traitement</li>
          <li>Réduction coûts audit</li>
        </ul>
      </div>
    </div>
  );
} 