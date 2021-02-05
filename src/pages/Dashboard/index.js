import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import './styles.css';
import L, { CRS } from 'leaflet';
import { MapContainer, ImageOverlay, GeoJSON, Popup, useMap } from 'react-leaflet';

import { Header, HeaderWrapper, SearchStar, MainContainer, Sidebar, TheMap } from './styles';

import { FaSearch } from 'react-icons/fa';

import Panel from '../../components/Panel';

import mapImage from '../../assets/images/universe-grid.png';
import geoData from '../../assets/planet-patrol.json';

function Dashboard () {  
  const [currentStar, setCurrentStar] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentStarCoordinates, setCurrentStarCoordinates] = useState([0, 180]);

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
        <span>ID: {star}</span><br />
        <a href={href} target="_blank" rel="noreferrer">Check more information on ExoFOP</a>
      </>
    );
  }

  async function goToStar(starID) {
    let theStar = '';
    const theID = parseInt(starID);
    theStar = await geoData.features.filter(star => star.properties.ID === theID);

    if (theStar[0]) {
      setCurrentStar(theStar[0]);
      setCurrentStarCoordinates([theStar[0].geometry.coordinates[1], theStar[0].geometry.coordinates[0]]);
    }
  }

  function MapController() {
    const map = useMap();
    
    useEffect(() => {
      if (currentStar !== '') {
        map.flyTo([currentStar.geometry.coordinates[1], currentStar.geometry.coordinates[0]]);
        map.openPopup(`
          <strong>ID: </strong>${currentStar.properties.ID}<br />
          <strong>Tmag: </strong>${currentStar.properties.Tmag}<br />
          <strong>Kmag: </strong>${currentStar.properties.Kmag}<br />
          <strong>Vmag: </strong>${currentStar.properties.Vmag}<br />
          <strong>e_rad: </strong>${currentStar.properties.e_rad}<br />
          <strong>Mass: </strong>${currentStar.properties.mass}<br />
          <strong>pmDEC: </strong>${currentStar.properties.pmDEC}<br />
          <strong>pmRA: </strong>${currentStar.properties.pmRA}<br />
          <strong>ra: </strong>${currentStar.properties.ra}<br />
          <strong>rad: </strong>${currentStar.properties.rad}<br />
        `, [currentStar.geometry.coordinates[1], currentStar.geometry.coordinates[0]]);        
      }
    }, [currentStar, map]);

    return null;
  }

  const bounds = [[-120,-20], [120, 380]];

  return (
    <>
    <Header>
      <HeaderWrapper>
        <SearchStar>
            <input 
              type="text" 
              placeholder="Search for Star ID" 
              onChange={(evt) => setSearchTerm(evt.target.value)}
            />
            <FaSearch onClick={() => goToStar(searchTerm)} />
        </SearchStar>
      </HeaderWrapper>
    </Header>
    
    <MainContainer>
      <Sidebar>
        <Panel title="Current star" info={currentStar !== '' ? starInfo(currentStar.properties.ID) : '-'} />
        <Panel title="Star coordinates" info={currentStar !== '' ? currentStar.geometry.coordinates[1] + ', ' + currentStar.geometry.coordinates[0] : '-'} />
        <Panel title="Star Tmag" info={currentStar !== '' ? currentStar.properties.Tmag : '-'} />
        <Panel title="Star Kmag" info={currentStar !== '' ? currentStar.properties.Kmag : '-'} />
      </Sidebar>

      <TheMap>
        <MapContainer 
          center={currentStarCoordinates} 
          minZoom={1} 
          zoom={2} 
          maxBounds={bounds} 
          className="map-container" 
          crs={CRS.Simple}
        >
          <ImageOverlay url={mapImage} bounds={bounds} />
  
          <MapController />
  
          {
            geoData['features'].map((planet) => {
                return ( 
                    <GeoJSON                         
                        key={planet.properties.ID} 
                        data={planet} 
                        style={planet.geometry.type} 
                        pointToLayer={() => myPointToLayer([planet.geometry.coordinates[1], planet.geometry.coordinates[0]], planet.properties.Tmag )}
                        
                    >
                        <Popup onOpen={() => openStar(planet)} onClose={closeStar}>
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
      </TheMap>    
    </MainContainer>
    </>
  );
}

export default Dashboard;