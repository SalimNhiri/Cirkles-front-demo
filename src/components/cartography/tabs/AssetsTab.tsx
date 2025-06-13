import React from 'react';
import { AssetDistributionChart } from '../graphs/AssetDistributionChart';
import { AssetDetailsList } from '../graphs/AssetDetailsList';

export function AssetsTab() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AssetDistributionChart />
        <AssetDetailsList />
      </div>
    </div>
  );
} 