import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import { MetricsCards } from '../components/cartography/MetricsCards';
import { VolumeTab } from '../components/cartography/tabs/VolumeTab';
import { TypologyTab } from '../components/cartography/tabs/TypologyTab';
import { ModusOperandiTab } from '../components/cartography/tabs/ModusOperandiTab';
import { GeographyTab } from '../components/cartography/tabs/GeographyTab';
import { TrendsTab } from '../components/cartography/tabs/TrendsTab';
import { AssetsTab } from '../components/cartography/tabs/AssetsTab';
import { PageLayout } from '../components/layout/PageLayout';
import { Download, Filter } from 'lucide-react';

export function CartographyPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-10 py-10 space-y-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Cartographie de la fraude</h1>
              <p className="mt-2 text-gray-600">Analyse des tendances et patterns de fraude | Dernière synchronisation: 12:22:28</p>
            </div>
            <div className="flex space-x-4">
              <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm">
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </button>
              <button className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all shadow-sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </button>
            </div>
          </div>

          <MetricsCards />

          <Tabs defaultValue="volume" className="w-full">
            <TabsList className="grid w-full grid-cols-6 gap-4 p-1.5 bg-gray-100 rounded-xl">
              <TabsTrigger value="volume" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Volume
              </TabsTrigger>
              <TabsTrigger value="typology" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Typologie
              </TabsTrigger>
              <TabsTrigger value="modus" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Modus Operandi
              </TabsTrigger>
              <TabsTrigger value="geography" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Géographie
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Tendances
              </TabsTrigger>
              <TabsTrigger value="assets" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all">
                Assets
              </TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="volume">
                <VolumeTab />
              </TabsContent>

              <TabsContent value="typology">
                <TypologyTab />
              </TabsContent>

              <TabsContent value="modus">
                <ModusOperandiTab />
              </TabsContent>

              <TabsContent value="geography">
                <GeographyTab />
              </TabsContent>

              <TabsContent value="trends">
                <TrendsTab />
              </TabsContent>

              <TabsContent value="assets">
                <AssetsTab />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </PageLayout>
  );
} 