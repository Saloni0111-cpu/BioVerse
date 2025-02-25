import React from "react";
import styled from "styled-components";

const SearchDescription = () => {
  return (
    <StyledCard>
      <div>
        <h1>Explore Biodiversity</h1>
        <p>
          Discover species, habitats, and conservation efforts with stunning visuals and in-depth insights.
        </p>
      </div>
      <StyledButton>
        <p>Learn More</p>
        <svg
          className="arrow"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </StyledButton>
    </StyledCard>
  );
};

export default SearchDescription;

// Styled Components
const StyledCard = styled.div`
position:relative;
top:-38rem;
left:60rem;
  width: 22em;
  height: 16em;
  border: 2px solid rgba(111, 106, 119, 0.5);
  border-radius: 1.5em;
  background: linear-gradient(135deg, rgba(102, 93, 114, 0.7), rgba(34, 27, 44, 0.2));
  color: white;
  font-family: "Nunito", sans-serif;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3);
  }

  h1 {
    font-size: 1.8em;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.9em;
    color: #ddd;
    margin-top: 0.5em;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em 1.2em;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 2em;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(2px);
  }

  .arrow {
    width: 1.2em;
    height: 1.2em;
    transition: transform 0.3s ease;
  }

  &:hover .arrow {
    transform: translateX(5px);
  }
`;
