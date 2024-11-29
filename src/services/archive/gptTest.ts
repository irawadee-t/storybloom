// my OpenAI API key: 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

import { OpenAI } from "openai";
import Configuration from "openai"
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY

const openai = axios.create({
    baseURL: 'https://api.openai.com/v1/chat',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  
  export const getOpenAIResponse = async (prompt: string) => {
    const response = await openai.post('/completions', {
        "model": "gpt-4o-mini",
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0.7
      });
    console.log(response.data);
    return response.data;
  };

// const configuration = new Configuration({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Set your OpenAI API key
// });

// export const testGPTPrompt = async (prompt: string) => {
//     try {
//         const completion = await configuration.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: [
//                 { role: "system", content: "You are a helpful assistant generating questions for a parent to discuss with their kid about the content of a book." },
//                 {
//                     role: "user",
//                     content: `${prompt}`,
//                 },
//             ],
//         });
//         console.log(completion.choices[0].message.toString())
//         return completion.choices[0].message.toString()
//     } catch (error) {
//         console.error("Error with OpenAI API:", error);
//         return "Error occurred while communicating with GPT.";
//     }
//   };