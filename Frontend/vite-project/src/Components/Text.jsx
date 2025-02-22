import 'react';
import styled from 'styled-components';

const Text = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        {"WELCOME TO BIOVERSE".split("").map((char, index) => (
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
  );
}

const StyledWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  
  .wrapper {
    display: inline-flex;
    font-size: 5rem;
    font-family: monospace;
    overflow: hidden;
    white-space: nowrap;
  }

  .letter {
    display: inline-block;
    animation: scroll 2s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-150%);
    }
  }
`;

export default Text;
