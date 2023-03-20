import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './marker-icon.png';
// import markerShadow from './marker-shadow.png';

function Map() {
  const position = [51.505, -0.09]; // London coordinates

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -38],
  });

  return (
    <MapContainer center={position} zoom={20} scrollWheelZoom={false} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customMarkerIcon}>
        <Popup>
          I am a popup.... <br /> that is easily customisable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
