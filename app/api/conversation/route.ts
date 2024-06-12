import { GoogleGenerativeAI } from "@google/generative-ai";
import { conf } from "@/app/conf/conf";

const apiKey = conf.GEMINI_API;

const genAI = new GoogleGenerativeAI(apiKey);

export async function run(prompt: string) {
    const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
}