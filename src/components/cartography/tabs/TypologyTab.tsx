import React from 'react';
import { TopTypologiesList } from '../graphs/TopTypologiesList';
import { TypologyTrendsChart } from '../graphs/TypologyTrendsChart';

export function TypologyTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopTypologiesList />
        <TypologyTrendsChart />
      </div>
    </div>
  );
} 