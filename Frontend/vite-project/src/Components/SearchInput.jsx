import  { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import styled from "styled-components";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <StyledWrapper>
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <div className="search-icon" onClick={handleSearch} style={{ cursor: "pointer" }}>
            <svg xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}>
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>
        </div>
        <div className="glow" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  top: 3rem;
  left: 30rem;

  .search-container {
    position: relative;
    width: 600px;
  }

  .search-bar {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 1px;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .search-input {
    width: 100%;
    border: none;
    background: none;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    outline: none;
  }

  .search-input::placeholder {
    color: #aaa;
  }

  .search-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    background-color: #333;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    margin-right: 0.2rem;
    transition: background-color 0.3s ease;
  }

  .search-icon svg {
    fill: #fff;
  }

  .search-icon:hover {
    background-color: #555;
  }

  .search-bar:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }

  .search-bar:focus-within {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.4);
  }

  .glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 200%;
    border-radius: 100px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
    transition: all 0.5s ease;
    transform: translate(-50%, -50%) scale(0);
    z-index: -1;
  }

  .search-bar:hover + .glow {
    transform: translate(-50%, -50%) scale(1);
  }

  .search-bar:focus-within + .glow {
    transform: translate(-50%, -50%) scale(1.2);
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
  }
`;

export default SearchInput;
