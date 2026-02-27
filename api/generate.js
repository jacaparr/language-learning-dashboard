import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { topic, language, level } = req.body;

    if (!topic || !language || !level) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

    const prompt = `
    Generate a list of vocabulary words for a language learning app.
    Topic: ${topic}
    Target Language: ${language === 'en' ? 'English' : 'German'}
    Level: ${level} (CEFR)
    Translate the words and examples to Spanish.
    
    Return ONLY a JSON array of objects with the following format:
    [
      {
        "word": "The word in ${language === 'en' ? 'English' : 'German'}",
        "translation": "The translation in Spanish",
        "example": "A short example sentence in ${language === 'en' ? 'English' : 'German'}"
      }
    ]
    
    Generate exactly ${level === 'B1' ? 15 : level === 'B2' ? 20 : 25} items.
    Ensure the vocabulary is appropriate for the ${level} level.
    Do not include any other text or markdown formatting except the JSON array.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Extract JSON from potential markdown blocks
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (!jsonMatch) {
            throw new Error("Could not find JSON in AI response");
        }

        const words = JSON.parse(jsonMatch[0]);
        res.status(200).json(words);
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: 'Failed to generate content', details: error.message });
    }
}
