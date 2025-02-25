import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0"; // 🔹 Replace with your actual Unsplash API key

const SearchCards = ({ categories = ["species", "habitat", "Geographic Location", "Conservation Status"] }) => {
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
  top: 10rem;
  left: 10rem;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .cards {
    width: 66rem;
    max-width: 100%;
    gap: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .card {
  cursor:pointer;
    width: 320px;
    height: 200px;
    background: #16161d;
    border: 2px solid #555555;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    transition: transform 0.5s ease;
    
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card_image {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .cards {
      flex-direction: column;
    }
  }
`;

export default SearchCards;
