import { useState } from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const ProfilePic = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <StyledWrapper>
      <img src='/public/Profile.webp' alt='Profile' />
      <div className='profile-info'>
        <h2>Bioverse</h2>
        <p>Login to explore in detail</p>
      </div>
      <div className='buttons'>
        <button className="button" onClick={() => setShowLogin(true)}>Login</button>
        <button className="button" onClick={() => setShowRegister(true)}>Registration</button>
      </div>

      {showLogin && <LoginForm isVisible={showLogin} onClose={() => setShowLogin(false)} />}
      {showRegister && <RegistrationForm isVisible={showRegister}  onClose={() => setShowRegister(false)} />}
    </StyledWrapper>
  );
};

export default ProfilePic;


const StyledWrapper = styled.div`
    position:relative;
    height:50rem;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;



    .backgroundVideo{
        position:absolute;
        top:0rem;
        width: 100vw;
        height: 10rem;
        z-index: 1;
        opacity: 0.8;
        box-shadow: inset 0px -20px 30px rgbargba(236, 236, 236, 0.7)
    }

  .backgroundVideo video {
  position: fixed;
    width: 100%;
    height: 10rem;
    object-fit: cover; /* Ensures the video covers the full width */

        -webkit-mask-image: linear-gradient(to bottom, rgb(255, 255, 255) 60%, rgba(0, 0, 0, 0.5) 100%);
    mask-image: linear-gradient(to bottom, rgb(255, 255, 255) 60%, rgba(255, 255, 255, 0.5) 100%)
  }
.backgroundVideo::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}


img{
display: flex;

position: relative;
left: 30rem;
background: transparent;
top:3rem;
}

.profile-info{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
left:30rem;
top:1.5rem;
color: #fff;
}
.buttons{
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap:2rem;
left:30rem;
position: relative;
top: 3rem;
}
.button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color:rgb(64, 72, 55);
    transition: all 0.2s ease;
  }

  .button:active {
    transform: scale(0.96);
  }

  .button:before,
  .button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }

  .button:hover:before {
    top: -70%;
    background-image: radial-gradient(circle,rgb(42, 232, 71) 20%, transparent 20%),
      radial-gradient(circle, transparent 20%,rgb(42, 232, 45) 20%, transparent 30%),
      radial-gradient(circle,rgb(105, 232, 42) 20%, transparent 20%),
      radial-gradient(circle,rgb(58, 232, 42) 20%, transparent 20%),
      radial-gradient(circle, transparent 10%,rgb(58, 232, 42) 15%, transparent 20%),
      radial-gradient(circle,rgb(52, 232, 42) 20%, transparent 20%),
      radial-gradient(circle,rgb(58, 232, 42) 20%, transparent 20%),
      radial-gradient(circle,rgb(64, 232, 42) 20%, transparent 20%),
      radial-gradient(circle,rgb(64, 232, 42) 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%,
      10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
  }

  @keyframes greentopBubbles {
    0% {
      background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
        40% 90%, 55% 90%, 70% 90%;
    }

    50% {
      background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
        50% 50%, 65% 20%, 90% 30%;
    }

    100% {
      background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
        50% 40%, 65% 10%, 90% 20%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }

  .button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(circle,rgb(169, 232, 42) 20%, transparent 20%),
      radial-gradient(circle, rgb(169, 232, 42) 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, rgb(169, 232, 42) 15%, transparent 20%),
      radial-gradient(circle, rgb(169, 232, 42) 20%, transparent 20%),
      radial-gradient(circle,rgb(169, 232, 42), transparent 20%),
      radial-gradient(circle, rgb(169, 232, 42), transparent 20%),
      radial-gradient(circle, rgb(169, 232, 42) 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
  }

  @keyframes greenbottomBubbles {
    0% {
      background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
        70% -10%, 70% 0%;
    }

    50% {
      background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
        105% 0%;
    }

    100% {
      background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
        110% 10%;
      background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
    }
  }
`