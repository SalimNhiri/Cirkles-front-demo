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
        onTimeframeChange={setTimeframe}
        onAnalysisTypeChange={setAnalysisType}
      />
    </PageLayout>
  );
} 