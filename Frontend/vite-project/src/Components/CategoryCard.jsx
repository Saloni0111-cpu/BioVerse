import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const UNSPLASH_ACCESS_KEY = "L70C7mwJpSXEu6KYs-PyEJVx50rsNaXVu9dOyZuY7M0";
const categories = ["Forests", "Oceans", "Deserts", "Mountains", "Animals", "Birds"];

const CategoryCard = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (cat) => {
            const response = await axios.get(
              `https://api.unsplash.com/search/photos?query=${cat}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=2`
            );

            return {
              name: cat,
              image: response.data.results?.[0]?.urls?.regular || "default.jpg",
              icon: response.data.results?.[1]?.urls?.thumb || "default-icon.png",
            };
          })
        );
        setCategoryData(results);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
    <StyledWrapper>
        <div className="wrapper">
          {"Look for Each Categories".split("").map((char, index) => (
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
    <Container>
      {categoryData.map((cat, index) => (
        <Card key={index}>
          <Banner src={cat.image} alt={cat.name} />
          <Title>{cat.name}</Title>
          <Icon src={cat.icon} alt={`${cat.name} icon`} />
          <Link to={`/category/${cat.name.toLowerCase()}`}>
            <ExploreButton>Explore</ExploreButton>
          </Link>
        </Card>
      ))}
    </Container>
    </>
  );
};

export default CategoryCard;

// Styled Components
const Container = styled.div`
position:relative;
left:8rem;
top:12rem;
color:white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
  justify-items: center;
   &:hover {
    border-color: rgb(40, 43, 54);

  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  background:rgb(32, 34, 43);
  color:white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width: 200px;
`;

const Banner = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 10px 0;
  font-size: 18px;
  color: white;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ExploreButton = styled.button`
  margin: 10px 4px;
  padding: 8px 12px;
  background:rgb(39, 86, 40);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background:rgb(37, 94, 41);
  }
`;
const StyledWrapper = styled.div`
   .wrapper {
   position:relative;
   left:26rem;
    font-size: 4rem;
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
  }

  .letter {
    display: inline-block;
    animation: scroll 4s linear infinite;
  }`;