
import  { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyleWrapper = styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 2px solid #6c63ff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    font-family: "Arial", sans-serif;
    background: #f9f9f9;

    h2 {
        text-align: center;
        color: #6c63ff;
    }

    .chat-container {
        min-height: 250px;
        border: 1px solid #ddd;
        padding: 10px;
        margin-bottom: 10px;
        overflow-y: auto;
        background: white;
        border-radius: 5px;
    }

    .message {
        margin: 5px 0;
        padding: 8px 12px;
        border-radius: 10px;
        max-width: 80%;
    }

    .user {
        background: #6c63ff;
        color: white;
        align-self: flex-end;
        text-align: right;
    }

    .bot {
        background: #ddd;
        color: black;
        text-align: left;
    }

    .input-container {
        display: flex;
        gap: 10px;
    }

    input {
        flex: 1;
        padding: 8px;
        border: 1px solid #6c63ff;
        border-radius: 5px;
    }

    button {
        background: #6c63ff;
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover {
        background: #564ecc;
    }
`;

const ChatBot = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [...messages, userMessage],
                },
                {
                    headers: {
                        "Authorization": `Bearer process.env.OPENAPI_KEY`,
                        "Content-Type": "application/json"
                    }
                }
            );

            const botMessage = { role: "assistant", content: response.data.choices[0].message.content };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error("Error fetching response:", error);
        }

        setInput("");
    };

    return (
        <StyleWrapper>
            <h2>Chatbot</h2>
            <div className="chat-container">
                {messages.map((msg, index) => (
                    <p key={index} className={`message ${msg.role}`}>
                        <strong>{msg.role === "user" ? "You: " : "Bot: "}</strong>{msg.content}
                    </p>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </StyleWrapper>
    );
};

export default ChatBot;
