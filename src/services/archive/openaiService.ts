// my OpenAI API key: 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

import { OpenAI } from "openai";
import Configuration from "openai"

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Set your OpenAI API key
});

export const generateFollowUpQuestion = async (answer: string): Promise<string> => {
    const completion = await configuration.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant generating questions for a parent to discuss with their kid about the content of a book." },
            {
                role: "user",
                content: `Generate a follow-up question based on this answer: "${answer}"`,
            },
        ],
    });
    
    return completion.choices[0].message.toString() || "No follow-up question available.";
  };

// const completion = await configuration.chat.completions.create({
//     model: "gpt-4o-mini",
//     messages: [
//         { role: "system", content: "You are a helpful assistant generating questions for a parent to discuss with their kid about the content of a book." },
//         {
//             role: "user",
//             content: `Generate a follow-up question based on this answer: "${answer}"`,
//         },
//     ],
// });

// return completion.choices[0].message || "No follow-up question available.";

// console.log(completion.choices[0].message);

// const openai = new OpenAI(configuration);

// export const generateFollowUpQuestion = async (answer: string): Promise<string> => {
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Generate a follow-up question based on this answer: "${answer}"`,
//     max_tokens: 100,
//   });

//   return response.data.choices[0].text?.trim() || "No follow-up question available.";
// };
