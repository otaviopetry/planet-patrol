import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import L from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';

import backgroundImage from '../../../../assets/images/nasa-galaxy.jpeg';
import geoData from '../../../../assets/planet-patrol.json';

function PlanetPatrol () {
  let tmagArray = [];
  let kmagArray = [];

  geoData.features.forEach(feature => {
      tmagArray.push(feature.properties.Tmag);
      kmagArray.push(feature.properties.Kmag);
  })

  function getAverage (array) {
      const sum = array.reduce((a, b) => a + b, 0);

      return sum/array.length;
  }

  // Exclude Kmags with zero value
  let filteredKmagArray = kmagArray.filter(element => element !== 0 && typeof(element) === "number");

  const [currentStar, setCurrentStar] = useState('');

  function openStar (star) {
      setCurrentStar(star);
      document.querySelector('#currentStarImg').classList.add('active');
  }

  function closeStar () {
      setCurrentStar('');
      document.querySelector('#currentStarImg').classList.remove('active');
  }

  const geojsonMarkerOptions = (radius) => {
      return {
          radius: radius/2,
          fillColor: "#eaeaea",
          color: "#fff",
          weight: 2,
          opacity: 1,
          fillOpacity: 0.8
      }
  }

  function myPointToLayer (latlng, radius) {
      return L.circleMarker(latlng, geojsonMarkerOptions(radius));
  }

  return (
    <>
    <MapContainer center={[10, 100]} zoom={5} className="map-container">
      <TileLayer url={backgroundImage} />

      {
        geoData['features'].map((planet) => {
            return ( 
                <GeoJSON                         
                    key={planet.properties.ID} 
                    data={planet} 
                    style={planet.geometry.type} 
                    pointToLayer={() => myPointToLayer([planet.geometry.coordinates[1], planet.geometry.coordinates[0]], planet.properties.Tmag )}
                    
                >
                    <Popup position={[0, -20]} onOpen={() => openStar(planet.properties.ID)} onClose={closeStar}>
                        <strong>ID: </strong>{planet.properties.ID}<br />
                        <strong>Tmag: </strong>{planet.properties.Tmag}<br />
                        <strong>Kmag: </strong>{planet.properties.Kmag}<br />
                        <strong>Vmag: </strong>{planet.properties.Vmag}<br />
                        <strong>e_rad: </strong>{planet.properties.e_rad}<br />
                        <strong>Mass: </strong>{planet.properties.mass}<br />
                        <strong>pmDEC: </strong>{planet.properties.pmDEC}<br />
                        <strong>pmRA: </strong>{planet.properties.pmRA}<br />
                        <strong>ra: </strong>{planet.properties.ra}<br />
                        <strong>rad: </strong>{planet.properties.rad}<br />
                    </Popup>
                </GeoJSON>                
            );
        })
      }
      
    </MapContainer>
    </>
  );
}

export default PlanetPatrol;