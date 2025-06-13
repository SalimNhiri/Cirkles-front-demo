import React from 'react';
import { GeographyTrendsChart } from '../graphs/GeographyTrendsChart';
import { TopRegionsList } from '../graphs/TopRegionsList';

export function GeographyTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopRegionsList />
        <GeographyTrendsChart />
      </div>
    </div>
  );
} 