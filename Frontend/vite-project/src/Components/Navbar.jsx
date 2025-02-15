import 'react'
import Styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate = useNavigate();

  const Profile = () => {
    navigate('/profile');
  }
  const Home = () => {
    navigate('/');
  }
  const Search = () => {
    navigate('/search');
  }
  const Categories = () => {  
    navigate('/categories');
  }
  const Shop = () => {
    navigate('/shop');
  }
  const Map = () => {
    navigate('/map');
  }




  return (
    <StyledWrapper>
      <div className='Nav-Container'>
        <div className='Nav-Logo'>
          <h1>Logo</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="button-container">
          {/* Home */}
          <button className="button" onClick={Home}>
            <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z"/>
            </svg>
            <span className="icon-text">Home</span>
          </button>

          {/* Search */}
          <button className="button" onClick={Search}>
            <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="icon-text">Search</span>
          </button>

          {/* Profile */}
          <button className="button" onClick={Profile}>
            <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
            </svg>
            <span className="icon-text">Profile</span>
          </button>

          {/* Categories */}
          <button className="button" onClick={Categories}>
            <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3H3v7h7V3zM21 3h-7v7h7V3zM10 14H3v7h7v-7zM21 14h-7v7h7v-7z" />
            </svg>
            <span className="icon-text">Categories</span>
          </button>

          {/* Shop */}
          <button className="button" onClick={Shop}>
            <svg className="icon" stroke="currentColor" fill="none" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="icon-text">Shop</span>
          </button>

          {/* Map */}
          <button className="button" onClick={Map}>
            <svg className="icon" stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 3.7l5 1.6 5.5-1.8V20l-5.5 1.8-5-1.6-5.5 1.8V4.5l5.5-1.8zM10 5L5 6.7v13.6l5-1.6V5zm9 0l-4 1.3v13.6l4-1.3V5zM11 6.4v12.2l4 1.3V7.7l-4-1.3z"/>
            </svg>
            <span className="icon-text">Map</span>
          </button>

        </div>
      </div>
    </StyledWrapper>
  )
}

export default Navbar;

const StyledWrapper = Styled.div`
  .Nav-Container {
    display: flex;
    position: fixed;
    height: 100%;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    color: #fff;
    background: #0F1014;
  }

  .button-container {
    position: fixed;
    top: 15rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #0F1014;
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .button {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 5px;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .icon {
    font-size: 20px;
  }

  .icon-text {
    position: absolute;
    left: 50px;
    white-space: nowrap;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .button:hover .icon-text {
    opacity: 1;
    transform: translateX(0);
  }
`;
