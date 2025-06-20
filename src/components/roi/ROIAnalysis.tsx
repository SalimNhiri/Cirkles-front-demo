import React from 'react';
import { ROIMetricsCards } from './ROIMetricsCards';
import { ROICostEvolutionChart } from './ROICostEvolutionChart';
import { ROICostBreakdownChart } from './ROICostBreakdownChart';
import { ROICostPerCaseChart } from './ROICostPerCaseChart';
import { ROICostTable } from './ROICostTable';
import { ROIRecommendations } from './ROIRecommendations';
import type { CostEvolutionData, CostPerCaseData, CostBreakdownData, ROIMetrics } from '../../data/roiData';

export interface ROIAnalysisProps {
  timeframe?: 'month' | 'quarter' | 'year';
  analysisType?: 'global' | 'secteur' | 'region';
  data?: {
    costEvolution?: CostEvolutionData[];
    costPerCase?: CostPerCaseData[];
    costBreakdown?: CostBreakdownData[];
    roiMetrics?: ROIMetrics;
  };
  onTimeframeChange?: (value: string) => void;
  onAnalysisTypeChange?: (value: string) => void;
  onExportData?: () => void;
  onGenerateReport?: () => void;
}

export function ROIAnalysis({
  timeframe = 'year',
  analysisType = 'global',
  data = {},
  onTimeframeChange,
  onAnalysisTypeChange,
  onExportData,
  onGenerateReport
}: ROIAnalysisProps) {
  return (
    <div className="space-y-8">
      {/* Filtres */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-2">
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={timeframe}
            onChange={e => onTimeframeChange?.(e.target.value)}
          >
            <option value="month">Mois</option>
            <option value="quarter">Trimestre</option>
            <option value="year">Année</option>
          </select>
          <select
            className="border rounded-lg px-3 py-2 text-sm"
            value={analysisType}
            onChange={e => onAnalysisTypeChange?.(e.target.value)}
          >
            <option value="global">Global</option>
            <option value="secteur">Secteur</option>
            <option value="region">Région</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700" onClick={onExportData}>Exporter</button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200" onClick={onGenerateReport}>Générer rapport</button>
        </div>
      </div>
      {/* Grille principale */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="col-span-1 md:col-span-2 xl:col-span-4">
          <ROIMetricsCards metrics={data.roiMetrics} />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <ROICostEvolutionChart data={data.costEvolution} />
        </div>
        <div className="col-span-1 md:col-span-1 xl:col-span-1">
          <ROICostBreakdownChart data={data.costBreakdown} />
        </div>
        <div className="col-span-1 md:col-span-1 xl:col-span-1">
          <ROICostPerCaseChart data={data.costPerCase} />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <ROICostTable data={data.costPerCase} />
        </div>
        <div className="col-span-1 md:col-span-2 xl:col-span-2">
          <ROIRecommendations metrics={data.roiMetrics} />
        </div>
      </div>
    </div>
  );
} 