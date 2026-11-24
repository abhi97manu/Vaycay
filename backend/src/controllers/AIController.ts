import askAi from "../services/aiAssistServices.js";
import { Request, Response } from "express";

export async function AIassist (request: Request, response: Response) {
    const { question } = request.body;
    const aiResponse = await askAi(question);

    console.log(aiResponse)
    response.json({ response: aiResponse });
}
