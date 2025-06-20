import React, { useState } from 'react';
import { ROIAnalysis } from '../components/roi/ROIAnalysis';
import {
  costEvolutionData,
  costPerCaseData,
  costBreakdownData,
  roiMetrics
} from '../data/roiData';
import { PageLayout } from '../components/layout/PageLayout';

export default function ROICostPage() {
  const [timeframe, setTimeframe] = useState<'month' | 'quarter' | 'year'>('year');
  const [analysisType, setAnalysisType] = useState<'global' | 'secteur' | 'region'>('global');

  // Fonctions d'adaptation pour les changements
  const handleTimeframeChange = (value: string) => {
    if (["month", "quarter", "year"].includes(value)) {
      setTimeframe(value as 'month' | 'quarter' | 'year');
    }
  };

  const handleAnalysisTypeChange = (value: string) => {
    if (["global", "secteur", "region"].includes(value)) {
      setAnalysisType(value as 'global' | 'secteur' | 'region');
    }
  };

  return (
    <PageLayout>
      <ROIAnalysis
        timeframe={timeframe}
        analysisType={analysisType}
        data={{
          costEvolution: costEvolutionData,
          costPerCase: costPerCaseData,
          costBreakdown: costBreakdownData,
          roiMetrics: roiMetrics
        }}
        onTimeframeChange={handleTimeframeChange}
        onAnalysisTypeChange={handleAnalysisTypeChange}
      />
    </PageLayout>
  );
} 