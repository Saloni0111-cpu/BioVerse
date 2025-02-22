import React from 'react';
import styled from 'styled-components';

const Banner = () => {
  return (
    <StyledWrapper>
      <div className="YoutubeVideo">
        <div className="Image" />
        <div className="Icon" />
        <div className="Title" />
        <div className="Name" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .YoutubeVideo {
    width: 250px;
    height: 220px;
    background: transparent;
  }

  .Image {
    width: 250px;
    height: 154px;
    border-radius: 10px;
    background: #3a3a3a;
  }

  .Icon {
    width: 40px;
    height: 40px;
    border-radius: 100px;
    float: right;
    background-color: #3a3a3a;
    transform: translate(0px,10px);
  }

  .Title {
    width: 180px;
    height: 15px;
    border-radius: 2px;
    float: right;
    background-color: #3a3a3a;
    transform: translate(-15px,10px);
  }

  .Name {
    width: 100px;
    height: 15px;
    border-radius: 2px;
    float: right;
    background-color: #3a3a3a;
    transform: translate(-15px,20px);
  }`;

export default Banner;
