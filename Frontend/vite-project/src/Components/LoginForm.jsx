import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ isVisible, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh

    try {
      const response = await fetch('http://localhost:5000/api/login', { // Ensure the correct backend API endpoint
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        setErrorMessage(data.error || 'Invalid credentials');
        return;
      }

      setSuccessMessage(data.message);
      setTimeout(() => {
        navigate('/profile');
        onClose(); // Close modal after navigating
      }, 500); 

    } catch (error) {
      console.error('An error occurred', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <form onSubmit={handleLogin}>
          <div className="form-header">
            <h1>BioVerse</h1>
            <p>Welcome Back!</p>
          </div>
          
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button className="submit-button" type="submit">Login</button>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #161616;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 15px 60px #00FF7F;
  outline: 1px solid #2b9962;
  z-index: 1000;

  .form-container {
    position: relative;
    width: 300px;
    text-align: center;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }

  .form-header h1 {
    color: #00FF7F;
    font-size: 28px;
    margin-bottom: 10px;
  }

  .form-header p {
    color: #fff;
    font-size: 16px;
  }

  .form-group {
    margin: 15px 0;
  }

  .form-group input {
    width: 100%;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #2b9962;
    background: #222;
    color: #00FF7F;
    font-size: 14px;
  }

  .form-group input:focus {
    outline: none;
    border-color: #00FF7F;
  }

  .submit-button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background: #00FF7F;
    color: #161616;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  .submit-button:hover {
    background: #2b9962;
  }

  .error-message, .success-message {
    margin-top: 10px;
    font-size: 14px;
    padding: 8px;
    border-radius: 5px;
  }

  .error-message {
    background: #ff4d4d;
    color: white;
  }

  .success-message {
    background: #00FF7F;
    color: #161616;
  }

  .forgot-password {
    margin-top: 10px;
  }

  .forgot-password a {
    color: #868686;
    font-size: 12px;
    text-decoration: none;
  }
`;

export default LoginForm;
