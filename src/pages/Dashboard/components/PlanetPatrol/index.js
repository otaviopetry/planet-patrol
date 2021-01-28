import React from 'react';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';

import backgroundImage from '../../../../assets/images/nasa-galaxy.jpeg';

import { MapRules } from './styles';

function PlanetPatrol () {
  return (
    <>
    <MapContainer center={[10, 100]} zoom={5} className="map-container">
      <TileLayer url={backgroundImage} />
      
    </MapContainer>
    </>
  );
}

export default PlanetPatrol;