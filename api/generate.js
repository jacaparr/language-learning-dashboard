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
    1. word: The actual vocabulary word or phrase in the target language. Do NOT include numbers, indices, or topic names (e.g., use "Subway" instead of "Subway term 1").
    2. translation: Accurate Spanish translation of the word.
    3. example: A short, natural example sentence in the target language (${language === 'en' ? 'English' : 'German'}).
    
    Ensure all content is appropriate for ${level} level.
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
