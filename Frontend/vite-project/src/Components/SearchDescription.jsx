import "react";
import styled from "styled-components";

const SearchDescription = () => {
  return (
    <StyledCard>
      <div className="head">
      <div className="container">
        <h1>Species</h1>
        <p>
        A species is a group of organisms that share common characteristics and can interbreed to produce fertile offspring. It is the fundamental unit of biological classification and biodiversity. Members of a species typically have similar physical traits, behaviors, and genetic makeup, allowing them to thrive in specific environments. Species play a crucial role in ecosystems, interacting with other organisms and contributing to the balance of nature. The concept of species is central to taxonomy, evolution, and conservation efforts, as understanding species diversity helps in studying ecological relationships and protecting endangered organisms.
        </p>
        <h3>Animal Species</h3>
        <p>Scientists estimate that there are around 8.7 million species of organisms on Earth, with about 7.77 million being animal species. However, only about 1.5 million animal species have been scientifically described and classified so far. The majority of undiscovered species are believed to exist in deep oceans, dense forests, and remote ecosystems. New species are still being discovered every year, highlighting the vast biodiversity of the planet.</p>
      </div>
      
      {/* 2 */}
      <div className="container">
        <h1>Species</h1>
        <p>
        A species is a group of organisms that share common characteristics and can interbreed to produce fertile offspring. It is the fundamental unit of biological classification and biodiversity. Members of a species typically have similar physical traits, behaviors, and genetic makeup, allowing them to thrive in specific environments. Species play a crucial role in ecosystems, interacting with other organisms and contributing to the balance of nature. The concept of species is central to taxonomy, evolution, and conservation efforts, as understanding species diversity helps in studying ecological relationships and protecting endangered organisms.
        </p>
        <h3>Animal Species</h3>
        <p>Scientists estimate that there are around 8.7 million species of organisms on Earth, with about 7.77 million being animal species. However, only about 1.5 million animal species have been scientifically described and classified so far. The majority of undiscovered species are believed to exist in deep oceans, dense forests, and remote ecosystems. New species are still being discovered every year, highlighting the vast biodiversity of the planet.</p>
      </div>
      
      
      {/* 3 */}
      <div className="container">
        <h1>Species</h1>
        <p>
        A species is a group of organisms that share common characteristics and can interbreed to produce fertile offspring. It is the fundamental unit of biological classification and biodiversity. Members of a species typically have similar physical traits, behaviors, and genetic makeup, allowing them to thrive in specific environments. Species play a crucial role in ecosystems, interacting with other organisms and contributing to the balance of nature. The concept of species is central to taxonomy, evolution, and conservation efforts, as understanding species diversity helps in studying ecological relationships and protecting endangered organisms.
        </p>
        <h3>Animal Species</h3>
        <p>Scientists estimate that there are around 8.7 million species of organisms on Earth, with about 7.77 million being animal species. However, only about 1.5 million animal species have been scientifically described and classified so far. The majority of undiscovered species are believed to exist in deep oceans, dense forests, and remote ecosystems. New species are still being discovered every year, highlighting the vast biodiversity of the planet.</p>
      </div>
      </div>
    </StyledCard>
  );
};

export default SearchDescription;


const StyledCard = styled.div`
position:relative;
.head{
position:relative;
display:flex;
flex-direction:column;
gap:5rem;
}
.container{
display: flex;
flex-direction: column;

position:relative;
top:-38rem;
left:51rem;
  width: 40em;
  height: 23em;
  border: 2px solid rgba(72, 72, 72, 0.5);
  border-radius: 1.5em;
  background: linear-gradient(135deg, rgba(48, 48, 48, 0.7), rgba(42, 42, 42, 0.2));
  color: white;
  font-family: "Nunito", sans-serif;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(12px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;}
  margin-bottom:3rem;

  .container:hover {
   
    box-shadow: 0px 6px 15px rgba(255, 255, 255, 0.3);
  }

  h1 {
    font-size: 1.8em;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  p {
    font-size: 0.8em;
    color: #ddd;
    margin-top: 0.5em;
  }
`;


