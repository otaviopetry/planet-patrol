import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import L, { CRS } from 'leaflet';
import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import { StarInfo } from './styles';

import mapImage from '../../../../assets/images/universe-grid.png';
import geoData from '../../../../assets/planet-patrol.json';

function PlanetPatrol () {
  let tmagArray = [];
  let kmagArray = [];

  geoData.features.forEach(feature => {
      tmagArray.push(feature.properties.Tmag);
      kmagArray.push(feature.properties.Kmag);
  })
  
  // Exclude Kmags with zero value
  let filteredKmagArray = kmagArray.filter(element => element !== 0 && typeof(element) === "number");
  
  const [currentStar, setCurrentStar] = useState('');

  function getAverage (array) {
      const sum = array.reduce((a, b) => a + b, 0);

      return sum/array.length;
  }

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
      <a href={href} target="_blank">https://exofop.ipac.caltech.edu/tess/target.php?id={star}</a>
      </>
    );
  }

  var bounds = [[-160,-160], [150,150]];

  return (
    <>
    <MapContainer center={[500, 500]} minZoom={-5} zoom={5} maxBounds={bounds} className="map-container" crs={CRS.Simple}>
      <TileLayer url={mapImage} bounds={bounds} />

    </MapContainer>
    <StarInfo>
        <div id="currentStar">
            <h3 className="data-title">Current star</h3>
            <p className="data-value">{currentStar !== '' ? starInfo(currentStar) : '-'}</p>
        </div>      
    </StarInfo>
    </>
  );
}

export default PlanetPatrol;