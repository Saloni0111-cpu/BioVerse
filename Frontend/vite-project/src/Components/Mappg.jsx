import "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import styled from "styled-components";

// Fix Leaflet marker issue in React
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Custom Icon for Markers
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Styled Components
const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 6rem;
  max-width: 100%;
  overflow-x: hidden;
`;

const MapBox = styled.div`
  width: 25vw;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  background: transparent;
  text-align: center;
  max-width: 100%;
`;

const CategoryWrapper = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  overflow-x: hidden;

  .wrapper {
    font-size: 4rem;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
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


// Biodiversity Locations categorized
const categoryLocations = {
    "Biodiversity Hotspots": [
      { id: 1, name: "Amazon Rainforest", lat: -3.4653, lng: -62.2159, description: "Home to 10% of known species." },
      { id: 2, name: "Great Barrier Reef", lat: -18.2871, lng: 147.6992, description: "World's largest coral reef system." },
      { id: 3, name: "Madagascar", lat: -18.7669, lng: 46.8691, description: "90% of wildlife found nowhere else." },
    ],
    "Endangered Species Zones": [
      { id: 4, name: "Galápagos Islands", lat: -0.8293, lng: -90.9821, description: "Home to species like the Galápagos tortoise and marine iguanas." },
      { id: 5, name: "Sundarbans", lat: 21.9497, lng: 89.1833, description: "Largest mangrove forest and critical tiger habitat." },
      { id: 6, name: "Eastern Himalayas", lat: 27.9878, lng: 86.9250, description: "Diverse ecosystem with snow leopards and red pandas." },
    ],
    "Protected Areas": [
      { id: 7, name: "Yosemite National Park", lat: 37.8651, lng: -119.5383, description: "Protected wilderness with ancient sequoias and waterfalls." },
      { id: 8, name: "Pantanal Conservation Area", lat: -16.7755, lng: -57.5858, description: "One of the world's largest tropical wetland ecosystems." },
      { id: 9, name: "Great Smoky Mountains", lat: 35.6118, lng: -83.4895, description: "Rich biodiversity with diverse plant and animal life." },
    ],
    "National Parks": [
      { id: 10, name: "Yellowstone National Park", lat: 44.428, lng: -110.5885, description: "First national park in the world." },
      { id: 11, name: "Serengeti National Park", lat: -2.154, lng: 34.6857, description: "Famous for its great migration." },
      { id: 12, name: "Kruger National Park", lat: -23.9884, lng: 31.5547, description: "One of Africa's largest game reserves, home to the Big Five." },
    ],
    "Marine Conservation Areas": [
      { id: 13, name: "Papahānaumokuākea Marine National Monument", lat: 25.7086, lng: -171.7389, description: "One of the largest marine protected areas in the world." },
      { id: 14, name: "Great Australian Bight Marine Park", lat: -33.7569, lng: 133.4609, description: "Critical whale breeding and feeding grounds." },
      { id: 15, name: "Ross Sea Marine Reserve", lat: -75.0000, lng: 175.0000, description: "World’s largest marine reserve in Antarctica." },
    ],
    "Forest Reserves": [
      { id: 16, name: "Sinharaja Forest Reserve", lat: 6.4263, lng: 80.4474, description: "UNESCO-listed rainforest with unique biodiversity." },
      { id: 17, name: "Daintree Rainforest", lat: -16.1719, lng: 145.4185, description: "Ancient rainforest with rare plant and animal species." },
      { id: 18, name: "Congo Rainforest", lat: -0.6347, lng: 23.6557, description: "Second-largest rainforest with rich biodiversity." },
    ],
    "Wildlife Sanctuaries": [
      { id: 19, name: "Gir Wildlife Sanctuary", lat: 21.1248, lng: 70.8242, description: "Only habitat of the Asiatic Lion." },
      { id: 20, name: "Ranthambore Wildlife Sanctuary", lat: 26.0173, lng: 76.5026, description: "Famous for Bengal tigers." },
      { id: 21, name: "Kaziranga National Park", lat: 26.5833, lng: 93.3333, description: "Known for one-horned rhinoceroses." },
    ],
    "Wetlands": [
      { id: 22, name: "Sundarbans Wetlands", lat: 21.9497, lng: 89.1833, description: "Home to mangrove forests and the Bengal tiger." },
      { id: 23, name: "Camargue Wetlands", lat: 43.5297, lng: 4.6782, description: "Known for flamingos, wild horses, and marshes." },
      { id: 24, name: "Everglades National Park", lat: 25.2866, lng: -80.8987, description: "Largest subtropical wilderness in the U.S." },
    ],
    "Coral Reefs": [
      { id: 25, name: "Belize Barrier Reef", lat: 17.3133, lng: -87.5344, description: "A UNESCO World Heritage site." },
      { id: 26, name: "Raja Ampat Reefs", lat: -0.2346, lng: 130.5170, description: "Home to the highest marine biodiversity on Earth." },
      { id: 27, name: "New Caledonia Barrier Reef", lat: -21.5, lng: 165.5, description: "Second-largest double barrier reef in the world." },
    ],
  };
  

// Map Categories
const mapCategories = [
    { id: 1, title: "Biodiversity Hotspots", description: "Regions with rich ecosystems and rare species" },
    { id: 4, title: "National Parks", description: "Famous wildlife national parks around the world" },
    { id: 9, title: "Coral Reefs", description: "Fragile ecosystems under threat" },
    { id: 2, title: "Endangered Species Zones", description: "Places where endangered species are found" },
    { id: 3, title: "Protected Areas", description: "Conserved regions for wildlife protection" },
    { id: 5, title: "Marine Conservation Areas", description: "Oceans and water bodies with rare species" },
    { id: 6, title: "Forest Reserves", description: "Forests that house unique species" },
    { id: 7, title: "Wildlife Sanctuaries", description: "Safe zones for endangered species" },
    { id: 8, title: "Wetlands", description: "Critical habitats for migratory birds and amphibians" },
  ];
  

const Mappg = () => {
  return (
    <>
      <StyledWrapper>
        <div className="wrapper">
          {"BioVerse On Earth".split("").map((char, index) => (
            <span key={index} className="letter" style={{ animationDelay: `${index * 0.1}s` }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </StyledWrapper>
      <MapWrapper>
        {mapCategories.map((category) => (
          <div key={category.id}>
            <CategoryWrapper>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </CategoryWrapper>
            <MapBox>
              <MapContainer center={[10, 20]} zoom={2} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {categoryLocations[category.title]?.map((spot) => (
                  <Marker key={spot.id} position={[spot.lat, spot.lng]} icon={customIcon}>
                    <Popup>
                      <h3>{spot.name}</h3>
                      <p>{spot.description}</p>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </MapBox>
          </div>
        ))}
      </MapWrapper>
    </>
  );
};

export default Mappg;
