require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./Routers/userRouter');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios'); 
const { dbConnection } = require('./Database/dbConnection');

const PORT = process.env.PORT || 3000;

console.log("🚀 GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "Loaded" : "Missing API Key!");

dbConnection();

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta1/models/chat-bison-001:generateMessage?key=${GEMINI_API_KEY}`;
// ✅ Fixed URL

app.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        console.log("✅ Received message from frontend:", message);

        if (!message) {
            console.error("❌ ERROR: No message received in request body.");
            return res.status(400).json({ error: "Message is required" });
        }

        // ✅ Corrected API request format
        const response = await axios.post(GEMINI_URL, {
            prompt: {
                messages: [{ content: message }]
            }
        });

        console.log("✅ Gemini API Response:", JSON.stringify(response.data, null, 2));

        // ✅ Ensure correct response parsing
        const replyText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";
        res.json({ reply: replyText });
    } catch (error) {
        console.error("❌ ERROR in API Call:", error.response?.data || error.message);
        res.status(500).json({ error: error.response?.data || error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
