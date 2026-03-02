import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic, language, level } = req.body;

  if (!topic || !language || !level) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API Key not configured in Vercel' });
  }

  const genAI = new GoogleGenerativeAI(apiKey);
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
    
    CRITICAL: Output ONLY a raw JSON array. No markdown code blocks.
    `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // With JSON mode, the text is a valid JSON string already
    const words = JSON.parse(text);
    res.status(200).json(words);
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: 'Failed to generate content', details: error.message });
  }
}
