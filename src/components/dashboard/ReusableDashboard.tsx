import React from 'react';
import { DetectionTrendChart } from './graphs/DetectionTrendChart';
import { FraudTypeChart } from './graphs/FraudTypeChart';

export function ReusableDashboard() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <DetectionTrendChart />
        <FraudTypeChart />
      </div>
    </div>
  );
} 