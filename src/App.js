import './App.css';
import React from 'react';
import { mapBoxId, mapBoxToken } from './env.js';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, GeoJSON } from 'react-leaflet';
import geoData from './planet_patrol_fix.json';

function App() {

  const geojsonMarkerOptions = (radius) => {
    return {
      radius: radius*1.5,
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

      <MapContainer center={[10, 100]} zoom={6} className="map-container" >
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/${mapBoxId}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`}
          />

          {
            geoData['features'].map((planet) => {
                return ( 
                    <GeoJSON 
                        key={planet.properties.ID} 
                        data={planet} 
                        style={planet.geometry.type} 
                        pointToLayer={() => myPointToLayer([planet.geometry.coordinates[1], planet.geometry.coordinates[0]], planet.properties.Tmag )}
                    >
                        <Popup position={[0, -20]}>
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
    
    </div>      
  );
}

export default App;
