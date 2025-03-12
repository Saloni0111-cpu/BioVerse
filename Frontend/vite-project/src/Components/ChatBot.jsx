import  { useState } from "react";
import axios from "axios";

function Chatbot() {
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const sendMessage = async () => {
        try {
            const res = await axios.post("http://localhost:3000/chat", { message });
            setResponse(res.data.reply);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Gemini Chatbot</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
            <p><strong>Response:</strong> {response}</p>
        </div>
    );
}

export default Chatbot;
