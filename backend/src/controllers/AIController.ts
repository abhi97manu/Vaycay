import askAi from "../services/aiAssistServices.js";

export async function AIassist (request , response) {
    const { question } = request.body;
    const aiResponse = await askAi(question);

    console.log(aiResponse)
    response.json({ response: aiResponse });
}