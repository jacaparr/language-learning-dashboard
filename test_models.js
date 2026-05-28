import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
console.log("Using API Key:", apiKey ? apiKey.substring(0, 10) + "..." : "undefined");

const genAI = new GoogleGenerativeAI(apiKey);

const modelsToTest = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-1.5-flash",
  "gemini-flash-latest",
  "gemini-pro-latest"
];

async function testModel(modelName) {
  console.log(`Testing model: ${modelName}...`);
  try {
    const model = genAI.getGenerativeModel({
      model: modelName,
      generationConfig: {
        responseMimeType: "application/json"
      }
    });
    const result = await model.generateContent("Respond with a JSON array containing one object with a field 'test' set to 'ok'.");
    const response = await result.response;
    console.log(`✅ Success for ${modelName}:`, response.text().trim());
    return true;
  } catch (err) {
    console.error(`❌ Failed for ${modelName}:`, err.message);
    return false;
  }
}

async function run() {
  for (const model of modelsToTest) {
    const success = await testModel(model);
    if (success) {
      console.log(`🚀 MODEL THAT WORKS: ${model}`);
    }
    console.log("------------------------");
  }
}

run();
