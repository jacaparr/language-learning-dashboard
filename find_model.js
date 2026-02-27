import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function findWorkingModel() {
    const candidates = [
        "gemini-flash-latest",
        "gemini-2.0-flash-lite",
        "gemini-pro-latest",
        "gemini-2.0-flash-exp"
    ];

    console.log("Checking for a working model with quota...");

    for (const m of candidates) {
        try {
            console.log(`Trying model: ${m}...`);
            const model = genAI.getGenerativeModel({ model: m });
            const result = await model.generateContent("Say 'OK'");
            const text = result.response.text();
            if (text) {
                console.log(`✅ SUCCESS! Model ${m} is working and has quota.`);
                return m;
            }
        } catch (e) {
            console.log(`❌ FAILED for ${m}: ${e.message.substring(0, 100)}...`);
        }
    }
    console.log("No working model found in the list.");
}

findWorkingModel();
