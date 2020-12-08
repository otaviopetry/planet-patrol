import './App.css';
import React from 'react';
import { mapBoxId, mapBoxToken } from './env.js';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet';
import geoData from './planet_patrol.json';

function App() {

  const geojsonMarkerOptions = (radius) => {
    return {
      radius,
      fillColor: "#ff7800",
      color: "#000",
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }
  }

  function myPointToLayer (latlng, radius) {
    return L.circleMarker(latlng, geojsonMarkerOptions(radius));
  }

  return (
    <div className="main-container">
      <h1 className="headline">Planet Patrol</h1>

      <MapContainer center={[-5, -15]} zoom={4} className="map-container">
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/${mapBoxId}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`}
          />

          {geoData['features'].map((planet) => {
            setTimeout(500);

            return ( 
              <GeoJSON 
                key={planet.properties.} 
                data={planet} 
                style={planet.geometry.type} 
                pointToLayer={() => myPointToLayer(planet.geometry.coordinates, planet.properties.Kmag )}
              >
                <Popup>
                  <strong>ID: </strong>{planet.properties.ID}<br />
                  <strong>Kmag: </strong>{planet.properties.Kmag}
                </Popup>

              </GeoJSON>
                
            );
          })}

      </MapContainer>
    
    </div>      
  );
}

export default App;
