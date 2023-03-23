import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './marker-icon.png';
// import markerShadow from './marker-shadow.png';

function Map(props) {
  // const position = [51.505, -0.09]; // London coordinates

  const customMarkerIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [50, 50],
    iconAnchor: [12, 41],
    popupAnchor: [1, -38],
  });

  return (
    <MapContainer center={props.coords} zoom={20} scrollWheelZoom={false} style={{ height: '200px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={props.coords} icon={customMarkerIcon}>
        <Popup>
          I am a popup.... <br /> that is easily customisable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
