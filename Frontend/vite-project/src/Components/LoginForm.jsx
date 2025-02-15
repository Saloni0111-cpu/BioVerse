import 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  
  const [isVisible, setIsVisible] = useState(false);
  // const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [ successMessage, setSuccessMessage] = useState('');

const navigate = useNavigate();

const handleClose =() => {
  setIsVisible(false);
}
const handleToggle = () => {
  setIsVisible(!isVisible);
}
if (!isVisible) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.error) {
        setErrorMessage(data.error);
      } else {
        setSuccessMessage(data.message);
        navigate('/profile');
      }
    }
    catch (error) {
      console.error('An error occurred', error);
    }
  }



  return (
    <StyledWrapper>
      <button onClick={handleClose}>&times;</button>
      <div id="form-ui">
        <form action method="post" id="form" onClick={handleLogin}>
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">BioVerse</div>
              <div id="welcome-line-2">Welcome Back, Loyd</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input placeholder="Email Address" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="form-inp">
                <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="submit">Login</button>

              {errorMessage && <div className='error'>{errorMessage}</div>}
              {successMessage && <div className='success'>{
                successMessage}</div>}
            </div>
            <div id="forgot-pass">
              <a href="#" onClick={handleToggle}>Forgot password?</a>
            </div>
            <div id="bar" />
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  #form {
    display: grid;
    place-items: center;
    width: 300px;
    height: 472px;
    padding: 25px;
    background-color: #161616;
    box-shadow: 0px 15px 60px #00FF7F;
    outline: 1px solid #2b9962;
    border-radius: 10px;
  }

  #form-body {
    position: absolute;
    top: 50%;
    right: 25px;
    left: 25px;
    width: 230px;
    margin: -156px auto 0 auto;
  }

  #welcome-lines {
    text-align: center;
    line-height: 1;
  }

  #welcome-line-1 {
    color: #00FF7F;
    font-weight: 600;
    font-size: 40px;
  }

  #welcome-line-2 {
    color: #ffffff;
    font-size: 18px;
    margin-top: 17px;
  }

  #input-area {
    margin-top: 40px;
  }

  .form-inp {
    padding: 11px 25px;
    background: transparent;
    border: 1px solid #e3e3e3;
    line-height: 1;
    border-radius: 8px;
  }

  .form-inp:focus {
    border: 1px solid #00FF7F;
  }

  .form-inp:first-child {
    margin-bottom: 15px;
  }

  .form-inp input {
    width: 100%;
    background: none;
    font-size: 13.4px;
    color: #00FF7F;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-inp input:focus {
    outline: none;
  }

  #submit-button-cvr {
    margin-top: 20px;
  }

  #submit-button {
    display: block;
    width: 100%;
    color: #00FF7F;
    background-color: transparent;
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    padding: 14px 13px 12px 13px;
    border: 0;
    outline: 1px solid #00FF7F;
    border-radius: 8px;
    line-height: 1;
    cursor: pointer;
    transition: all ease-in-out .3s;
  }

  #submit-button:hover {
    transition: all ease-in-out .3s;
    background-color: #00FF7F;
    color: #161616;
    cursor: pointer;
  }

  #forgot-pass {
    text-align: center;
    margin-top: 10px;
  }

  #forgot-pass a {
    color: #868686;
    font-size: 12px;
    text-decoration: none;
  }

  #bar {
    position: absolute;
    left: 50%;
    bottom: -50px;
    width: 28px;
    height: 8px;
    margin-left: -33px;
    background-color: #00FF7F;
    border-radius: 10px;
  }

  #bar:before,
  #bar:after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #ececec;
    border-radius: 50%;
  }

  #bar:before {
    right: -20px;
  }

  #bar:after {
    right: -38px;
  }`;

export default LoginForm;
