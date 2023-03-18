import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  const position = [51.505, -0.09]; // London coordinates

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: '100vh' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
      </Marker>
    </MapContainer>
  );
}

export default Map;
