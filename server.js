import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

console.log("Starting server...");
console.log("API Key present:", !!process.env.GEMINI_API_KEY);
if (process.env.GEMINI_API_KEY) {
    console.log("API Key starts with:", process.env.GEMINI_API_KEY.substring(0, 5) + "...");
}

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

app.post('/api/generate', async (req, res) => {
    const { topic, language, level } = req.body;
    console.log(`\n--- New Request ---`);
    console.log(`Topic: ${topic}, Lang: ${language}, Level: ${level}`);

    if (!topic || !language || !level) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const prompt = `
    Generate a list of vocabulary words for a language learning app.
    Topic: ${topic}
    Target Language: ${language === 'en' ? 'English' : 'German'}
    Level: ${level} (CEFR)
    Translate the words and examples to Spanish.
    
    Return ONLY a JSON array of objects with the following format:
    [
      {"word": "Word", "translation": "Traduccion", "example": "Example sentence"}
    ]
    
    Generate exactly ${level === 'B1' ? 15 : level === 'B2' ? 20 : 25} items.
    Do not include any markdown formatting.
  `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        const words = JSON.parse(jsonMatch[0]);
        res.json(words);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Local API server running at http://localhost:${PORT}`);
});
