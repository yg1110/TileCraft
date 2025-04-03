'use client';

import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export default function Map() {
  const [geojsonData, setGeojsonData] = useState<any>(null);

  useEffect(() => {
    fetch('/sample.geojson')
      .then((res) => res.json())
      .then((data) => setGeojsonData(data));
  }, []);

  return (
    <MapContainer center={[37.5665, 126.9784]} zoom={13} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && (
        <GeoJSON
          data={geojsonData}
          style={() => ({
            color: '#ff7800',
            weight: 2,
            fillColor: '#ff9900',
            fillOpacity: 0.4,
          })}
          pointToLayer={(feature, latlng) => {
            return L.circleMarker(latlng, {
              radius: 8,
              fillColor: '#3388ff',
              color: '#000',
              weight: 1,
              opacity: 1,
              fillOpacity: 0.8,
            });
          }}
          onEachFeature={(feature, layer) => {
            if (feature.properties?.name) {
              layer.bindPopup(feature.properties.name);
            }
          }}
        />
      )}
    </MapContainer>
  );
}
