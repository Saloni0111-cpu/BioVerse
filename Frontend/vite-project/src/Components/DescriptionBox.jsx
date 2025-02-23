import 'react';
import styled from 'styled-components';

const Description = () => {
  return (
    <StyledWrapper>
      <div className="container">
      {/* FAQ */}
        <div data-text="FAQ" style={{"-r": -15}} className="glass">

        <p className='para'>1. What is BioVerse Pro? <br/>2. How does BioVerse Pro fetch biodiversity-related videos? <br/>3. Can I download videos or articles from BioVerse Pro?</p>
        </div>

        {/* ABOUT */}
        <div data-text="About" style={{"-r": 5}} className="glass">
          <p className='para'>BioVerse is designed to help users explore biodiversity-related content and enhance their knowledge about ecosystems, species, and environmental conservation.</p>
        </div>

        {/* HELP */}
        <div data-text="Help" style={{"-r": 25}} className="glass">
          <p className='para'>Getting Started:<br/>
1. Exploring Biodiversity Content<br/>
2. Watching Videos<br/>
3. Searching for Topics<br/>
4. Educational Hub<br/>
5. FAQs<br/>
6. Contact & Support</p>
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
    z-index:-1;
    left:7rem;
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
  font-width:3rem;
  font-size: 1.3rem;
  font-family: Arial, sans-serif;
  padding: 2rem;
  }
  .head{
  display:flex;
  justify-content:space-between;
  align-item:center;
  
  }
  `;

export default Description;
