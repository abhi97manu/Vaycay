import {GoogleGenAI} from '@google/genai';

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY || ''
});

async function askAi(question : string ){

    const response = await genAI.interactions.create({
        model: 'models/gemini-3.5-flash',
        input: question,
       
    });  
    console.log(response.output_text)  
    return response;
}

export default askAi;