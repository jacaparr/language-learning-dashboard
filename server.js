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
    model: "gemini-2.0-flash",
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
    1. word: The actual vocabulary word or phrase ONLY in the target language (${language === 'en' ? 'English' : 'German'}). 
       CRITICAL: Do NOT include Spanish translations, No numbers, No indices. (Example: "Pauschalreise" instead of "el viaje de Pauschalreise").
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
        console.error("AI Generation failed:", error);
        res.status(500).json({
            error: "Error de IA",
            details: error.message || "Unknown error",
            fullError: error.toString()
        });
    }
});

app.post('/api/chat', async (req, res) => {
    const { message, history, language, level } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API Key not configured' });
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const systemPrompt = `You are a professional language tutor for a student learning ${language === 'de' ? 'German' : 'English'} at level ${level}. 
        Your goal is to have a natural conversation, correct their mistakes gently, and provide translations if needed. 
        Keep responses concise, encouraging and premium. 
        Translate any complex terms. 
        If they speak in Spanish, encourage them to use ${language === 'de' ? 'German' : 'English'}.`;

        const chat = model.startChat({
            history: [
                { role: "user", parts: [{ text: systemPrompt }] },
                { role: "model", parts: [{ text: "Understood. I am ready to be your tutor." }] },
                ...history
            ],
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        res.json({ reply: response.text() });
    } catch (err) {
        console.error("Chat error:", err);
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
