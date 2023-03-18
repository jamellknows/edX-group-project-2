import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./index.css";

export function Map({ latitude, longitude }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = L.map(mapRef.current).setView([latitude, longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);
    }
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ width: '500px', height: '500px' }} />;
}
