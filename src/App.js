import './App.css';
import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Popup, GeoJSON  } from 'react-leaflet';
import geoData from './planet_patrol_fix.json';
import backgroundImage from './images/nasa-galaxy.jpg';

function App() {

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

    let filteredKmagArray = kmagArray.filter(element => element !== 0 && typeof(element) === "number")
  
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

    // const mapBoxId = 'lucasterres/ckhqcpaho0xap19kejha475h9';  
  
    return (
        <div className="main-container">

            <header className="dashboard-header"> 
                <h1 className="headline">Planet Patrol</h1>
            </header>

            <div className="container">

            <div className="dashboard">

                <div className="dashboard-panel">
                    <h3 className="data-title">Mapped Stars</h3>
                    <p className="data-value">{geoData.features.length}</p>
                </div>

                <div className="dashboard-panel green">
                    <h3 className="data-title">Average Tmag</h3>
                    <p className="data-value">{getAverage(tmagArray).toFixed(4)}</p>
                </div>

                <div className="dashboard-panel yellow">
                    <h3 className="data-title">Max Tmag</h3>
                    <p className="data-value">{Math.max(...tmagArray).toFixed(4)}</p>
                </div>

                <div className="dashboard-panel blue">
                    <h3 className="data-title">Min Kmag</h3>
                    <p className="data-value">{Math.min(...filteredKmagArray)}</p>
                </div>

                <div className="dashboard-panel red">
                    <h3 className="data-title">Max Kmag</h3>
                    <p className="data-value">{Math.max(...kmagArray).toFixed(4)}</p>
                </div>

                </div>

                <MapContainer center={[10, 100]} zoom={5} className="map-container"  >
                    {/* <TileLayer
                        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
                        url={`https://api.mapbox.com/styles/v1/${mapBoxId}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVjYXN0ZXJyZXMiLCJhIjoiY2o2aHhhZHc2MGxoMjMzbnljZWNwd3JqciJ9.6Om_5YEOr-K1kEVBFZcq8w`}
                    /> */}
        
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
        
        </div>      
    );
}

export default App;
