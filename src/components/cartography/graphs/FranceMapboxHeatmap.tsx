import React, { useState } from 'react';
import Map, { Marker, Popup, Source, Layer, NavigationControl, ViewState } from 'react-map-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';
import { geographicData, GeographicData } from '../../../data/cartography/geographyData';
import { Feature, FeatureCollection, Point } from 'geojson';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FsaW0xOSIsImEiOiJjbGs1NW45NjIwb25hM2dyeWp3bmIzaWt6In0.EePk1YR2G9pk7OJ2PgEQRg';

// Coordonnées approximatives des centres régionaux (13 régions métropolitaines)
const regionCoords: Record<string, [number, number]> = {
  'Île-de-France': [2.35, 48.85],
  'Auvergne-Rhône-Alpes': [4.83, 45.75],
  'Hauts-de-France': [3.06, 50.63],
  'Provence-Alpes-Côte d\'Azur': [5.93, 43.94],
  'Occitanie': [1.44, 43.60],
  'Nouvelle-Aquitaine': [-0.58, 44.84],
  'Bretagne': [-2.76, 48.20],
  'Grand Est': [6.18, 48.69],
  'Pays de la Loire': [-0.56, 47.22],
  'Normandie': [0.37, 49.18],
  'Centre-Val de Loire': [1.70, 47.90],
  'Bourgogne-Franche-Comté': [4.84, 47.32],
  'Corse': [9.16, 42.04],
};

const riskColors: Record<string, string> = {
  'Élevé': '#EF4444',
  'Moyen': '#F59E0B',
  'Faible': '#10B981',
};

const riskLevels = ['Faible', 'Moyen', 'Élevé'];

const heatmapLayer: any = {
  id: 'fraud-heat',
  type: 'heatmap',
  source: 'fraud',
  maxzoom: 8,
  paint: {
    'heatmap-weight': [
      'interpolate',
      ['linear'],
      ['get', 'cases'],
      0, 0,
      500, 1
    ],
    'heatmap-intensity': 1.2,
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(33,102,172,0)',
      0.2, 'rgb(103,169,207)',
      0.4, 'rgb(209,229,240)',
      0.6, 'rgb(253,219,199)',
      0.8, 'rgb(239,138,98)',
      1, 'rgb(178,24,43)'
    ],
    'heatmap-radius': 40,
    'heatmap-opacity': 0.7
  }
};

type NullableRegion = GeographicData | null;

function getRegionFeature(region: GeographicData): Feature<Point> {
  const coords = regionCoords[region.region];
  return {
    type: 'Feature',
    properties: {
      ...region,
    },
    geometry: {
      type: 'Point',
      coordinates: coords,
    },
  };
}

export const FranceMapboxHeatmap = () => {
  const [viewState, setViewState] = useState<ViewState>({
    latitude: 46.227638,
    longitude: 2.213749,
    zoom: 4.2,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  const [selectedRegion, setSelectedRegion] = useState<NullableRegion>(null);
  const [error, setError] = useState<string | null>(null);

  // Correction stricte du type pour GeoJSON
  const geojson: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: geographicData.map(getRegionFeature),
  };

  // Statistiques globales
  const totalCases = geographicData.reduce((sum, r) => sum + r.cases, 0);
  const maxCases = Math.max(...geographicData.map(r => r.cases));
  const minCases = Math.min(...geographicData.map(r => r.cases));
  const avgCases = Math.round(totalCases / geographicData.length);

  const sortedRegions = [...geographicData].sort((a, b) => b.cases - a.cases);

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6">
      {/* Carte Mapbox */}
      <div className="w-full lg:w-2/3 h-[400px] rounded-2xl overflow-hidden border shadow relative">
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 text-red-600 font-bold">
            {error}
          </div>
        )}
        <Map
          {...viewState}
          style={{ width: '100%', height: '100%' }}
          mapStyle="https://demotiles.maplibre.org/style.json"
          mapboxAccessToken={undefined}
          mapLib={maplibregl as any}
          onMove={evt => setViewState(evt.viewState)}
          onError={() => setError('Erreur de chargement de la carte.')}
        >
          <NavigationControl position="top-left" />
          {/* Heatmap */}
          <Source id="fraud" type="geojson" data={geojson}>
            <Layer {...heatmapLayer} />
          </Source>
          {/* Marqueurs multiples pour chaque type de fraude */}
          {geographicData.map(region => {
            const coords = regionCoords[region.region];
            if (!coords) return null;
            // Paramètres pour chaque type
            const types = [
              { key: 'averee', color: '#3B82F6', label: 'Avérée', value: region.averee },
              { key: 'dejouee', color: '#10B981', label: 'Déjouée', value: region.dejouee },
              { key: 'suspectee', color: '#F59E0B', label: 'Suspectée', value: region.suspectee },
              { key: 'benchmark', color: '#A3A3A3', label: 'Benchmark', value: region.benchmark }
            ];
            return (
              <React.Fragment key={region.region}>
                {types.map((type, idx) => (
                  <Marker
                    key={type.key}
                    longitude={Number(coords[0]) + idx * 0.05 - 0.075}
                    latitude={Number(coords[1])}
                    anchor="center"
                  >
                    <div
                      className={`rounded-full border-2 shadow-lg cursor-pointer`}
                      style={{
                        width: 16 + Math.sqrt(type.value) * 1.5,
                        height: 16 + Math.sqrt(type.value) * 1.5,
                        background: type.color,
                        opacity: type.key === 'benchmark' ? 0.5 : 0.85,
                        borderColor: type.key === 'benchmark' ? '#A3A3A3' : type.color,
                        marginLeft: idx * 8,
                        zIndex: type.key === 'benchmark' ? 1 : 2
                      }}
                      title={`${region.region} - ${type.label}: ${type.value}`}
                      onClick={() => setSelectedRegion(region)}
                    />
                  </Marker>
                ))}
              </React.Fragment>
            );
          })}
          {/* Popup enrichi */}
          {selectedRegion && regionCoords[selectedRegion.region] && (
            <Popup
              longitude={Number(regionCoords[selectedRegion.region][0])}
              latitude={Number(regionCoords[selectedRegion.region][1])}
              anchor="top"
              onClose={() => setSelectedRegion(null)}
              closeOnClick={false}
              focusAfterOpen={false}
            >
              <div className="text-sm">
                <div className="font-bold text-gray-900">{selectedRegion.region}</div>
                <div className="mt-1">Fraude avérée : <span className="font-semibold text-blue-600">{selectedRegion.averee}</span> <span className="text-xs">({selectedRegion.averee - selectedRegion.benchmark >= 0 ? '+' : ''}{selectedRegion.averee - selectedRegion.benchmark}) vs marché</span></div>
                <div className="mt-1">Fraude déjouée : <span className="font-semibold text-green-600">{selectedRegion.dejouee}</span> <span className="text-xs">({selectedRegion.dejouee - selectedRegion.benchmark >= 0 ? '+' : ''}{selectedRegion.dejouee - selectedRegion.benchmark}) vs marché</span></div>
                <div className="mt-1">Fraude suspectée : <span className="font-semibold text-yellow-600">{selectedRegion.suspectee}</span> <span className="text-xs">({selectedRegion.suspectee - selectedRegion.benchmark >= 0 ? '+' : ''}{selectedRegion.suspectee - selectedRegion.benchmark}) vs marché</span></div>
                <div className="mt-1">Benchmark marché : <span className="font-semibold text-gray-600">{selectedRegion.benchmark}</span></div>
                <div className="mt-2">Total cas : <span className="font-semibold">{selectedRegion.cases}</span></div>
                <div className="mt-1">Risque : <span className="font-semibold" style={{ color: riskColors[selectedRegion.risk] }}>{selectedRegion.risk}</span></div>
              </div>
            </Popup>
          )}
        </Map>
        {/* Légende */}
        <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-3 py-2 shadow text-xs flex flex-col gap-1">
          <div className="font-semibold mb-1">Niveau de risque</div>
          {riskLevels.map(level => (
            <div key={level} className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full" style={{ background: riskColors[level] }}></span>
              <span>{level}</span>
            </div>
          ))}
          <div className="mt-2 text-gray-500">Cercle rouge = zone critique</div>
        </div>
      </div>
      {/* Liste des régions + stats */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="font-bold text-gray-900 mb-2">Régions (triées par cas)</div>
          <ul className="space-y-1">
            {sortedRegions.map(region => (
              <li
                key={region.region}
                className="flex items-center justify-between cursor-pointer hover:bg-gray-100 rounded px-2 py-1"
                onClick={() => {
                  const coords = regionCoords[region.region];
                  if (!coords) return;
                  setViewState({
                    ...viewState,
                    latitude: coords[1],
                    longitude: coords[0],
                    zoom: 6.2,
                  });
                  setSelectedRegion(region);
                }}
              >
                <span className="truncate font-medium" title={region.region}>{region.region}</span>
                <span className="text-xs text-gray-600">{region.cases} cas</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Cartes de stats */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500">Total cas</div>
            <div className="font-bold text-lg text-blue-700">{totalCases}</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500">Cas moyen</div>
            <div className="font-bold text-lg text-green-700">{avgCases}</div>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500">Min cas</div>
            <div className="font-bold text-lg text-yellow-700">{minCases}</div>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center">
            <div className="text-xs text-gray-500">Max cas</div>
            <div className="font-bold text-lg text-red-700">{maxCases}</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 