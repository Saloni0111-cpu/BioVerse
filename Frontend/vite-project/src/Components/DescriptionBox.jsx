import 'react';
import styled from 'styled-components';

const Description = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div data-text="FAQ" style={{"-r": -15}} className="glass">
        <svg className='head'
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="48"
  height="48"
  fill="currentColor"
>
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-.83 0-1.5-.67-1.5-1.5S11.17 17 12 17s1.5.67 1.5 1.5S12.83 20 12 20zm1.07-5.25c-.38.35-.57.68-.57 1.25H10c0-1.02.42-1.94 1.22-2.66.61-.57 1.41-1.08 1.75-1.8.23-.48.28-1.07.03-1.53-.33-.62-1.02-1.02-1.87-1.02-1.15 0-2.04.93-2.04 2.04H7c0-2.33 1.9-4.22 4.22-4.22 1.49 0 2.81.71 3.58 1.84.76 1.12.88 2.56.34 3.79-.48 1.16-1.55 1.81-2.09 2.32z" />
</svg>

        <p className='para'>1. What is BioVerse Pro? <br/>2. How does BioVerse Pro fetch biodiversity-related videos? <br/>3. Can I download videos or articles from BioVerse Pro?</p>
        </div>
        <div data-text="About" style={{"-r": 5}} className="glass">
          <svg viewBox="0 0 640 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
          </svg>
        </div>
        <div data-text="Help" style={{"-r": 25}} className="glass">
          <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`

  .container {
    position: relative;
    top:35rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container .glass {
    position: relative;
    width: 280px;
    height: 400px;
    background: linear-gradient(#fff2, transparent);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    border-radius: 10px;
    margin: 0 -45px;
    backdrop-filter: blur(10px);
    transform: rotate(calc(var(--r) * 1deg));
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 10px;
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .container .glass svg {
    font-size: 2.5em;
    fill: #fff;
  }
  
  .para{
  font-width:4rem;
  font-size: 1.5rem;
  font-family: Arial, sans-serif;
  
  }
  .head{
  display:flex;
  justify-content:space-between;
  align-item:center;
  
  }
  `;

export default Description;
