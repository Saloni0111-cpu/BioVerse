import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";

// Fix Leaflet marker issue in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Styled Container to Center Map
const MapWrapper = styled.div`

`;

const MapBox = styled.div`
  position: relative;
  opacity: 0.6;
  top: 47rem;
  left:26rem;
  width: 50vw;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  z-index: -1;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 83rem;
  left: 38rem;
  
  .wrapper {
    display: inline-flex;
    font-size: 3rem;
    font-family: monospace;
    overflow: hidden;
    white-space: nowrap;
  }

  .letter {
    display: inline-block;
    animation: scroll 4s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const Map = () => {
  // Sample Biodiversity Hotspot Data
  const hotspots = [
    { id: 1, name: "Amazon Rainforest", lat: -3.4653, lng: -62.2159, description: "Home to 10% of known species." },
    { id: 2, name: "Great Barrier Reef", lat: -18.2871, lng: 147.6992, description: "World's largest coral reef system." },
    { id: 3, name: "Madagascar", lat: -18.7669, lng: 46.8691, description: "90% of wildlife found nowhere else." },
  ];

  return (
    <>
      <MapWrapper>
        <MapBox>
          <MapContainer center={[10, 20]} zoom={2} style={{ height: "100%", width: "100%" }}>
            {/* OpenStreetMap Layer */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            
            {/* Add Hotspot Markers */}
            {hotspots.map((spot) => (
              <Marker key={spot.id} position={[spot.lat, spot.lng]} icon={customIcon}>
                <Popup>
                  <h3>{spot.name}</h3>
                  <p>{spot.description}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapBox>
      </MapWrapper>

      {/* Animated Text */}
      <StyledWrapper>
        <div className="wrapper">
          {"BioVerse Hotspot".split("").map((char, index) => (
            <span 
              key={index} 
              className="letter" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </StyledWrapper>
    </>
  );
};

export default Map;
