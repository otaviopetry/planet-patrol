import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import L, { CRS } from 'leaflet';
import { MapContainer, ImageOverlay, GeoJSON, Popup } from 'react-leaflet';
import { Wrapper, Sidebar } from './styles';

import Panel from '../../../../components/Panel';

import mapImage from '../../../../assets/images/universe-grid.png';
import geoData from '../../../../assets/planet-patrol.json';

function PlanetPatrol () {
  let tmagArray = [];
  let kmagArray = [];

  geoData.features.forEach(feature => {
      tmagArray.push(feature.properties.Tmag);
      kmagArray.push(feature.properties.Kmag);
  })
  
  const [currentStar, setCurrentStar] = useState('');

  function openStar (star) {
      setCurrentStar(star);
  }

  function closeStar () {
      setCurrentStar('');
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

  function starInfo (star) {
    const href = 'https://exofop.ipac.caltech.edu/tess/target.php?id=' + star;
    return (
      <>
        <p>ID: {star}</p>
        <a href={href} target="_blank" rel="noreferrer">Check more information on ExoFOP</a>
      </>
    );
  }

  var bounds = [[-120,-20], [120, 380]];

  return (
    <>
    
    <Wrapper>

      <Sidebar>
        <Panel title="Current star" info={currentStar !== '' ? starInfo(currentStar.properties.ID) : '-'} />
        <Panel title="Star coordinates" info={currentStar !== '' ? currentStar.geometry.coordinates[1] + ', ' + currentStar.geometry.coordinates[0] : '-'} />
        <Panel title="Star Tmag" info={currentStar !== '' ? currentStar.properties.Tmag : '-'} />
        <Panel title="Star Kmag" info={currentStar !== '' ? currentStar.properties.Kmag : '-'} />
      </Sidebar>

      <MapContainer center={[0, 180]} minZoom={1} zoom={2} maxBounds={bounds} className="map-container" crs={CRS.Simple}>
        <ImageOverlay url={mapImage} bounds={bounds} />

        {
          geoData['features'].map((planet) => {
              return ( 
                  <GeoJSON                         
                      key={planet.properties.ID} 
                      data={planet} 
                      style={planet.geometry.type} 
                      pointToLayer={() => myPointToLayer([planet.geometry.coordinates[1], planet.geometry.coordinates[0]], planet.properties.Tmag )}
                      
                  >
                      <Popup position={[0, -20]} onOpen={() => openStar(planet)} onClose={closeStar}>
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
    </Wrapper>
    </>
  );
}

export default PlanetPatrol;