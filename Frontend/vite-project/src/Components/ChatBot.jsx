import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY ="AIzaSyCkvr4FIH9r9M5S_9VEEdJmAHvCxfaDF8Q";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${API_KEY}`;

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { text: userInput, sender: "user" };
    setMessages([...messages, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: userInput }] }],
      });

      const botReply = response.data.candidates[0]?.content?.parts[0]?.text || "Sorry, I couldn't understand that.";
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response from Gemini API:", error);
      setMessages((prev) => [...prev, { text: "Error connecting to chatbot.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyleWrapper>
      <div className="chat-container">
        <div className="chat-header">
          <h2 className="chat-title">Chatbot Assistant</h2>
          <div className="status">Online</div>
        </div>

        <div className="chat-display">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}-message`}>
              {msg.text}
            </div>
          ))}
          {loading && <div className="chat-message bot-message">Typing...</div>}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Chatbot;

const StyleWrapper = styled.div`
   max-width: 28rem;
  margin: 0 auto;
  background: rgb(31, 36, 39);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border: 0.1px dotted green;
  overflow: hidden;
  position: fixed;
  left: 76.3rem;
  top:0.1rem;
  bottom: 0.2rem;
  z-index: 1000;

  .chat-container {
    display: flex;
    flex-direction: column;
    height: 700px;
  }

  .chat-header {
    padding: 1rem;
    border-bottom: 1px solid #e5e7eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:rgb(105, 108, 110);
  }

  .chat-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
  }

  .status {
    background: #10b981;
    color: white;
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
  }

  .chat-display {
    flex: 1;
    padding: 1rem;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .chat-message {
    max-width: 75%;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }

  .user-message {
    align-self: flex-end;
    background:rgb(42, 101, 30);
    color: white;
  }

  .bot-message {
    align-self: flex-start;
    background: #6b7280;
    color: white;
  }

  .chat-input {
    padding: 0.75rem;
    border-top: 1px solid #e5e7eb;
    display: flex;
    gap: 0.5rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.5rem;
    font-size: 0.875rem;
  }

  button {
    background:rgb(50, 132, 31);
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: background 0.3s;
  }

  button:hover {
    background:rgb(54, 105, 31);
  }
`;
