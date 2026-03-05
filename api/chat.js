import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    const { message, history, language, level } = req.body;
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

    if (!apiKey) return res.status(500).json({ error: 'API Key not configured' });

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        res.status(200).json({ reply: response.text() });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
}
