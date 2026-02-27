import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listAllModels() {
    try {
        // The listModels method is actually available on the genAI object in newer SDK versions
        // If not, we can use the low level fetch to the list endpoint
        console.log("Fetching available models...");

        // Attempting to use the direct API call since the SDK sometimes hides the list method
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
        const data = await response.json();

        if (data.error) {
            console.error("API Error:", data.error);
        } else if (data.models) {
            console.log("Available Models:");
            data.models.forEach(m => {
                console.log(`- ${m.name} (Supports: ${m.supportedGenerationMethods.join(", ")})`);
            });
        } else {
            console.log("No models returned in response:", data);
        }
    } catch (error) {
        console.error("Network or Script Error:", error);
    }
}

listAllModels();
