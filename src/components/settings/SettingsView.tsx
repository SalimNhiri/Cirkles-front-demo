import React, { useState } from "react";
import {
  UserCircle, Building2, Sliders, BarChart3, FileText, ShieldCheck
} from "lucide-react";

const sections = [
  { key: "users", label: "Utilisateurs & Accès", icon: <UserCircle size={22} /> },
  { key: "org", label: "Organisation client", icon: <Building2 size={22} /> },
  { key: "services", label: "Services & Abonnements", icon: <Sliders size={22} /> },
  { key: "analytics", label: "Modules analytiques", icon: <BarChart3 size={22} /> },
  { key: "reporting", label: "Reporting & Exports", icon: <FileText size={22} /> },
  { key: "security", label: "Sécurité & conformité", icon: <ShieldCheck size={22} /> },
];

export function SettingsView() {
  const [selected, setSelected] = useState("users");

  return (
    <div className="flex h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Sidebar */}
      <nav className="w-64 bg-white border-r border-gray-200 flex flex-col py-8 px-0">
        <h2 className="text-2xl font-bold text-center mb-8 tracking-tight text-blue-700">Paramètres</h2>
        <ul className="flex-1 space-y-1">
          {sections.map((s) => (
            <li key={s.key}>
              <button
                onClick={() => setSelected(s.key)}
                className={`w-full flex items-center gap-3 px-7 py-3 rounded-xl transition-all
                  ${selected === s.key
                    ? "bg-blue-50 text-blue-700 shadow font-bold"
                    : "hover:bg-gray-100 text-gray-700"
                  }`}
              >
                <span className="transition-transform">{s.icon}</span>
                <span className="text-base">{s.label}</span>
                {selected === s.key && (
                  <span className="ml-auto w-2 h-8 bg-blue-600 rounded-l-full block" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <main className="flex-1 p-10 bg-gradient-to-br from-white via-blue-50 to-white overflow-y-auto transition-all">
        <div className="animate-fade-in">
          {selected === "users" && <UsersSettings />}
          {selected === "org" && <OrgSettings />}
          {selected === "services" && <ServicesSettings />}
          {selected === "analytics" && <AnalyticsSettings />}
          {selected === "reporting" && <ReportingSettings />}
          {selected === "security" && <SecuritySettings />}
        </div>
      </main>
    </div>
  );
}

// --- Blocs stylisés ---

function UsersSettings() {
  return (
    <SectionCard
      icon={<UserCircle className="text-blue-600" size={28} />}
      title="Gestion des utilisateurs & des accès"
      subtitle="Créez, gérez les comptes, rôles, permissions et suivez l'activité."
    >
      <div className="flex gap-3 mb-6">
        <button className="btn-primary">Créer un utilisateur</button>
        <button className="btn-secondary">Importer CSV</button>
        <button className="btn-secondary">Exporter</button>
      </div>
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white rounded-xl">
          <thead>
            <tr className="bg-blue-50 text-blue-700">
              <th className="px-4 py-2 text-left">Nom</th>
              <th className="px-4 py-2 text-left">Rôle</th>
              <th className="px-4 py-2 text-left">Dernière connexion</th>
              <th className="px-4 py-2 text-left">Statut</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-blue-50 transition">
              <td className="px-4 py-2 font-semibold">Dupont J.</td>
              <td className="px-4 py-2">Admin</td>
              <td className="px-4 py-2">12/06/2024 09:12</td>
              <td className="px-4 py-2">
                <span className="badge badge-success">Actif</span>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="btn-mini">Modifier</button>
                <button className="btn-mini">Logs</button>
              </td>
            </tr>
            <tr className="hover:bg-blue-50 transition">
              <td className="px-4 py-2 font-semibold">Martin S.</td>
              <td className="px-4 py-2">Analyste</td>
              <td className="px-4 py-2">11/06/2024 17:45</td>
              <td className="px-4 py-2">
                <span className="badge badge-inactive">Inactif</span>
              </td>
              <td className="px-4 py-2 space-x-2">
                <button className="btn-mini">Modifier</button>
                <button className="btn-mini">Logs</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

function OrgSettings() {
  return (
    <SectionCard
      icon={<Building2 className="text-blue-600" size={28} />}
      title="Paramétrage de l'organisation client"
      subtitle="Structurez vos entités, BU, régions et affectez les utilisateurs."
    >
      <button className="btn-primary mb-4">Ajouter une entité</button>
      <div className="bg-blue-50 rounded-xl p-4 mb-2">
        <ul className="font-medium">
          <li>Groupe Cirkles
            <ul className="ml-6">
              <li>France
                <ul className="ml-6">
                  <li>Paris (BU)</li>
                  <li>Lyon (BU)</li>
                </ul>
              </li>
              <li>Belgique
                <ul className="ml-6">
                  <li>Bruxelles (BU)</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p className="text-gray-500">Sélectionnez une entité pour voir ou modifier ses paramètres.</p>
    </SectionCard>
  );
}

function ServicesSettings() {
  return (
    <SectionCard
      icon={<Sliders className="text-blue-600" size={28} />}
      title="Activation des services & niveaux d'abonnement"
      subtitle="Gérez les niveaux, modules débloqués et l'indice de contribution."
    >
      <div className="flex flex-wrap gap-6 mb-8">
        <ServiceCard level="ULTRA" modules={8} volume="Illimité" agents="IA avancée" />
        <ServiceCard level="PLATINIUM" modules={6} volume="Élevé" agents="IA premium" />
        <ServiceCard level="GOLD" modules={4} volume="Standard" agents="IA standard" />
        <ServiceCard level="SILVER" modules={2} volume="Basique" agents="IA basique" />
      </div>
      <div className="bg-blue-50 rounded-xl p-4">
        <h4 className="font-bold text-blue-700 mb-2">Indice de contribution : <span className="text-2xl">62/100</span></h4>
        <p className="text-gray-600 mb-2">Accès à certains modules conditionné par la contribution.</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>% de données partagées vs reçues</li>
          <li>Typologies contribuées</li>
          <li>Points de valorisation obtenus</li>
        </ul>
      </div>
    </SectionCard>
  );
}

function ServiceCard({ level, modules, volume, agents }: { level: string, modules: number, volume: string, agents: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-blue-100 p-5 min-w-[180px] flex-1 max-w-xs">
      <h4 className="font-bold text-blue-700 text-lg mb-1">{level}</h4>
      <ul className="text-gray-700 text-sm space-y-1">
        <li>{modules} modules</li>
        <li>Volume : {volume}</li>
        <li>{agents}</li>
      </ul>
    </div>
  );
}

function AnalyticsSettings() {
  return (
    <SectionCard
      icon={<BarChart3 className="text-blue-600" size={28} />}
      title="Paramétrage des modules analytiques"
      subtitle="Personnalisez les seuils, comparaisons et visualisations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h5 className="font-bold mb-2">Cartographie</h5>
          <div className="mb-2">
            <label className="block text-gray-600 mb-1">Seuil d'alerte :</label>
            <input type="number" defaultValue={5} className="input" /> %
          </div>
          <div className="mb-2">
            <label className="block text-gray-600 mb-1">Comparaison par défaut :</label>
            <select className="input">
              <option>vs marché</option>
              <option>vs secteur</option>
              <option>vs période N-1</option>
            </select>
          </div>
          <div>
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" defaultChecked className="accent-blue-600" />
              Activer tendances régionales
            </label>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-2">IA</h5>
          <div className="mb-2">
            <label className="block text-gray-600 mb-1">Fréquence de génération :</label>
            <select className="input">
              <option>Hebdomadaire</option>
              <option>Mensuel</option>
              <option>À la demande</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-1">Format de sortie :</label>
            <select className="input">
              <option>PDF</option>
              <option>PPT</option>
              <option>JSON</option>
              <option>Dashboard</option>
            </select>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function ReportingSettings() {
  return (
    <SectionCard
      icon={<FileText className="text-blue-600" size={28} />}
      title="Reporting & exports personnalisés"
      subtitle="Créez des modèles, planifiez les envois et ciblez les destinataires."
    >
      <button className="btn-primary mb-4">Créer un modèle de rapport</button>
      <div className="bg-blue-50 rounded-xl p-4 mb-2">
        <strong>Modèles existants :</strong>
        <ul className="ml-6 list-disc">
          <li>Rapport mensuel (PDF, envoyé à : admin@client.com)</li>
          <li>Export hebdo (Excel, envoyé à : manager@client.com)</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-gray-600 mb-1">Fréquence d'envoi :</label>
          <select className="input">
            <option>Hebdomadaire</option>
            <option>Mensuel</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Destinataires :</label>
          <input type="text" className="input" placeholder="Ajouter un email..." />
        </div>
        <div>
          <label className="block text-gray-600 mb-1">Format :</label>
          <select className="input">
            <option>Excel</option>
            <option>PDF</option>
            <option>PowerPoint</option>
            <option>Lien dashboard</option>
          </select>
        </div>
      </div>
    </SectionCard>
  );
}

function SecuritySettings() {
  return (
    <SectionCard
      icon={<ShieldCheck className="text-blue-600" size={28} />}
      title="Sécurité & conformité"
      subtitle="Pilotez la sécurité, la conformité RGPD et les logs."
    >
      <ul className="list-disc ml-6 text-gray-700">
        <li>Gestion des politiques de sécurité</li>
        <li>RGPD, consentements</li>
        <li>Logs de conformité</li>
      </ul>
    </SectionCard>
  );
}

// --- Composant générique de section ---
function SectionCard({ icon, title, subtitle, children }: { icon: React.ReactNode, title: string, subtitle: string, children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-blue-100 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
      </div>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}

// --- Styles utilitaires (à ajouter dans ton CSS global ou Tailwind config) ---
/*
.btn-primary {
  @apply bg-blue-600 text-white font-bold px-5 py-2 rounded-xl shadow hover:bg-blue-700 transition;
}
.btn-secondary {
  @apply bg-white text-blue-700 border border-blue-600 font-bold px-5 py-2 rounded-xl shadow hover:bg-blue-50 transition;
}
.btn-mini {
  @apply bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-100 transition;
}
.input {
  @apply border border-blue-200 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-400 focus:outline-none;
}
.badge {
  @apply px-2 py-1 rounded-full text-xs font-bold;
}
.badge-success {
  @apply bg-green-100 text-green-700;
}
.badge-inactive {
  @apply bg-gray-200 text-gray-500;
}
.animate-fade-in {
  @apply animate-fadeIn;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px);}
  to { opacity: 1; transform: none;}
}
*/ 