import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RegistrationForm = ({ isVisible, onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  if (!isVisible) return null;

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent form refresh

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Registration failed");
        return;
      }

      setSuccessMessage("Registration successful!");
      setTimeout(() => {
        navigate("/profile");
        onClose();
      }, 1000);
    } catch (error) {
      console.error("An error occurred", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleRegister}>
          <div className="form-header">
            <h1>BioVerse</h1>
            <p>Create an Account</p>
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
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
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button className="submit-button" type="submit">
            Register
          </button>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
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
  box-shadow: 0px 15px 60px #00ff7f;
  outline: 1px solid #2b9962;
  z-index: 9999;

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
    color: #00ff7f;
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
    color: #00ff7f;
    font-size: 14px;
  }

  .submit-button {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background: #00ff7f;
    color: #161616;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }

  .error-message,
  .success-message {
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
    background: #00ff7f;
    color: #161616;
  }
`;

export default RegistrationForm;
