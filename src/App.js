import './App.css';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import geoData from './planetpatrol.js';

function App() {

  const mapBoxId = 'lucasterres/ckhqcpaho0xap19kejha475h9';
  const mapBoxToken = 'pk.eyJ1IjoibHVjYXN0ZXJyZXMiLCJhIjoiY2o2aHhhZHc2MGxoMjMzbnljZWNwd3JqciJ9.6Om_5YEOr-K1kEVBFZcq8w';

  return (
    <div className="main-container">
      <h1 className="headline">Planet Patrol</h1>

      <MapContainer center={[0, 0]} zoom={2} className="map-container">
          <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url={`https://api.mapbox.com/styles/v1/${mapBoxId}/tiles/{z}/{x}/{y}?access_token=${mapBoxToken}`}
          />

          {geoData['features'].map((planet) => {
            setTimeout(500);

            return (
              <Marker key={planet.properties.ID} position={planet.geometry.coordinates}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>

            );
          })}

      </MapContainer>
    
    </div>      
  );
}

export default App;
