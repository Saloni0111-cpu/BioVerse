import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0"; // 🔹 Replace with your actual Unsplash API key

const SearchCards = ({ categories = ["Animal species", "habitat", "Conservation Status"] }) => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const categoryImages = {};
        for (const category of categories) {
          const res = await axios.get(`${API_URL}?query=${category}&per_page=6`, {
            headers: { Authorization: `Client-ID ${API_KEY}` },
          });

          categoryImages[category] = res.data.results.map((img) => img.urls.regular);
        }
        setImages(categoryImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [categories]);

  return (
    <StyledWrapper>
      {categories.map((category) => (
        <div key={category}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <div className="cards">
            {images[category]?.length > 0 ? (
              images[category].map((img, index) => (
                <figure key={index} className="card">
                  <img src={img} alt={category} className="card_image" />
                </figure>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      ))}
    </StyledWrapper>
  );
};

SearchCards.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

const StyledWrapper = styled.div`
  position: relative;
  height:100vh;
  margin: 5rem auto; /* Centered */
  max-width: 60vw; /* Prevents overflow */
  left:1rem;
  top:10rem;
  z-index:;
  

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .cards {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.3rem;
    margin: 0 auto; /* Keeps cards centered */
  }

  .card {
    cursor: pointer;
    width: 300px;
    height: 120px;
    background: linear-gradient(135deg, #1a1a2e, #16213e);
    border: 2px solid #555555;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    margin: 0.3rem;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  }

  .card:hover {
  cursor:pointer;
    transform: scale(1.02) rotate(2deg);
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.4);
  }

  .card_image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
      align-items: center;
    }
  }
`;


export default SearchCards;
