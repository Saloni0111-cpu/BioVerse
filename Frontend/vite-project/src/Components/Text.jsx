import 'react';
import styled from 'styled-components';

const Text = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <span className="letter letter1">L</span>
        <span className="letter letter2">o</span>
        <span className="letter letter3">a</span>
        <span className="letter letter4">d</span>
        <span className="letter letter5">i</span>
        <span className="letter letter6">n</span>
        <span className="letter letter7">g</span>
        <span className="letter letter8">.</span>
        <span className="letter letter9">.</span>
        <span className="letter letter10">.</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    min-height: 3rem;
    min-width: 14rem;
    font-size: 2rem;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0)
    );
    font-family: monospace;
  }

  .letter {
    width: 1ch;
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    left: 100%;
    animation: scroll 2.5s linear infinite;
  }

  @keyframes scroll {
    to {
      left: -1ch;
    }
  }

  .letter1 {
    animation-delay: calc(2.5s / 10 * (10 - 1) * -1);
  }
  .letter2 {
    animation-delay: calc(2.5s / 10 * (10 - 2) * -1);
  }
  .letter3 {
    animation-delay: calc(2.5s / 10 * (10 - 3) * -1);
  }
  .letter4 {
    animation-delay: calc(2.5s / 10 * (10 - 4) * -1);
  }
  .letter5 {
    animation-delay: calc(2.5s / 10 * (10 - 5) * -1);
  }
  .letter6 {
    animation-delay: calc(2.5s / 10 * (10 - 6) * -1);
  }
  .letter7 {
    animation-delay: calc(2.5s / 10 * (10 - 7) * -1);
  }
  .letter8 {
    animation-delay: calc(2.5s / 10 * (10 - 8) * -1);
  }
  .letter9 {
    animation-delay: calc(2.5s / 10 * (10 - 9) * -1);
  }
  .letter10 {
    animation-delay: calc(2.5s / 10 * (10 - 10) * -1);
  }`;

export default Text;
