import React from 'react';
import { PageLayout } from '../components/layout/PageLayout';
import { SettingsView } from '../components/settings/SettingsView';

export function SettingsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-10 py-10">
          <SettingsView />
        </div>
      </div>
    </PageLayout>
  );
} 