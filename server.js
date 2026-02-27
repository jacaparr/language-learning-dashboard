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
const model = genAI.getGenerativeModel({
    model: "gemini-flash-latest",
    generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    word: { type: "string" },
                    translation: { type: "string" },
                    example: { type: "string" }
                },
                required: ["word", "translation", "example"]
            }
        }
    }
});

app.post('/api/generate', async (req, res) => {
    const { topic, language, level } = req.body;
    console.log(`\n--- New Request ---`);
    console.log(`Topic: ${topic}, Lang: ${language}, Level: ${level}`);

    if (!topic || !language || !level) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    const prompt = `
    Generate a list of exactly ${level === 'B1' ? 15 : level === 'B2' ? 20 : 25} vocabulary words/phrases for a language learning app.
    
    Topic: ${topic}
    Target Language: ${language === 'en' ? 'English' : 'German'}
    Level: ${level} (CEFR)
    
    Requirements:
    1. word: The actual vocabulary word or phrase in the target language. Do NOT include numbers, indices, or topic names (e.g., use "Subway" instead of "Subway term 1").
    2. translation: Accurate Spanish translation of the word.
    3. example: A short, natural example sentence in the target language (${language === 'en' ? 'English' : 'German'}).
    
    Ensure all content is appropriate for ${level} level.
    `;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();

        // With JSON mode, the text is a valid JSON string already
        const words = JSON.parse(text);
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
