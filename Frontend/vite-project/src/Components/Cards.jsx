import  { useEffect, useState } from 'react';
import styled from 'styled-components';

const habitatNames = ["Forest", "Ocean", "Desert"]; // Add more habitats

const Cards = () => {
  const [habitatImages, setHabitatImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const images = await Promise.all(
        habitatNames.map(async (habitat) => {
          const response = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${habitat}`
          );
          const data = await response.json();
          return data.thumbnail ? data.thumbnail.source : null;
        })
      );
      setHabitatImages(images);
    };

    fetchImages();
  }, []);

  return (
    <StyledWrapper>
      <div className="card">
        {habitatNames.map((habitat, index) => (
          <p key={habitat}>
            <span>{habitat}</span>
            {habitatImages[index] && <img src={habitatImages[index]} alt={habitat} />}
          </p>
        ))}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 470px;
    height: 254px;
    border-radius: 4px;
    background: #0F1014;
    display: flex;
    gap: 5px;
    padding: .4em;
    position: relative;
    left: 10rem;
    top: 25rem;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    background: #212121;
    border: 1px solid rgb(92, 92, 92);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .card p:hover {
    flex: 4;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: rgb(140, 140, 140);
    letter-spacing: .1em;
  }

  .card p:hover span {
    transform: rotate(0);
  }

  .card p img {
    width: 100%;
    height: 100%;
    max-height: 120px;
    object-fit: cover;
    border-radius: 4px;
    margin-top: 5px;
  }
`;

export default Cards;
