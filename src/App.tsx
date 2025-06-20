import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index';
import { CartographyPage } from './pages/CartographyPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { AlertsPage } from './pages/AlertsPage';
import { TrendsPage } from './pages/TrendsPage';
import { SecurityPage } from './pages/SecurityPage';
import { SettingsPage } from './pages/SettingsPage';
import ROICostPage from './pages/ROICostPage';

// Placeholder pour la page ROI & cout
function RoiCoutPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>ROI & coût</h1>
      <p>Contenu à venir...</p>
    </div>
  );
}

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cartographie" element={<CartographyPage />} />
        <Route path="/analyse-dossiers" element={<AnalysisPage />} />
        <Route path="/tendances" element={<TrendsPage />} />
        <Route path="/securite" element={<SecurityPage />} />
        <Route path="/alertes" element={<AlertsPage />} />
        <Route path="/parametres" element={<SettingsPage />} />
        <Route path="/roi-cout" element={<ROICostPage />} />
        {/* Autres routes à ajouter plus tard */}
      </Routes>
    </Router>
  );
} 