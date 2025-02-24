import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0"; // 🔹 Replace with your actual API key

const SearchCards = () => {
  const [images, setImages] = useState({
    species: "",
    habitat: "",
    conservation: "",
  });

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const speciesRes = await axios.get(`${API_URL}?query=wildlife&per_page=1`, {
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });

        const habitatRes = await axios.get(`${API_URL}?query=forest&per_page=1`, {
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });

        const conservationRes = await axios.get(`${API_URL}?query=nature&per_page=1`, {
          headers: { Authorization: `Client-ID ${API_KEY}` },
        });

        setImages({
          species: speciesRes.data.results[0]?.urls.regular || "",
          habitat: habitatRes.data.results[0]?.urls.regular || "",
          conservation: conservationRes.data.results[0]?.urls.regular || "",
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <StyledWrapper>
      <div className="cards">
        <h3>Species</h3>
        <figure className="card">
          {images.species ? <img src={images.species} alt="Species" className="card_image" /> : <p>Loading...</p>}
        </figure>
      </div>
      <div className="cards">
        <h3>Habitat</h3>
        <figure className="card">
          {images.habitat ? <img src={images.habitat} alt="Habitat" className="card_image" /> : <p>Loading...</p>}
        </figure>
      </div>
      <div className="cards">
        <h3>Conservation Status</h3>
        <figure className="card">
          {images.conservation ? <img src={images.conservation} alt="Conservation" className="card_image" /> : <p>Loading...</p>}
        </figure>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  top: 15rem;
  left: 7rem;

  .cards {
    perspective: 500px;
    margin-bottom: 20px;
  }

  .card {
    width: 200px;
    height: 250px;
    background: #16161d;
    border: 2px solid #555555;
    border-radius: 4px;
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.5s;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card:hover {
    transform: translateZ(10px) rotateX(20deg) rotateY(20deg);
  }

  .card_image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

export default SearchCards;
