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
  
  export const getFollowUpQuestions = async (question: string, answer: string) => {
    const prompt = `
    You are a facilitator for parent-child interactions, aiming to foster meaningful connections as they read and discuss The Giving Tree together.
    Based on the following question and child's response, generate three thoughtful follow-up questions:
    - Question: "${question}"
    - Child's Response: "${answer}"
    Output the questions as a list: 1. Follow-up question A\n2. Follow-up question B\n3. Follow-up question C
  `;
    try {
        const response = await openai.post('/completions', {
            "model": "gpt-4o-mini",
            "messages": [{"role": "user", "content": prompt}],
            "temperature": 0.7
          });
        console.log(response.data);
        const followUpQuestions = response.data.choices[0].message.content;
        return followUpQuestions;
        // return response.data;
    } catch (error) {
        console.error("Error generating follow-up questions:", error);
        return ["Could not generate follow-up questions."];
    }
  };

  export const getChatGPTSummary = async (chatHistory: string) => {
    const prompt = `
      You are a helpful assistant providing insights to parents based on their child's answers.
      Here is the chat history:
      ${chatHistory}
      Provide a concise summary that gives parents insights into their child's thinking and feelings.
    `;
    try {
        const response = await openai.post('/completions', {
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
          });
          return response.data.choices[0].message.content;
    } catch (error) {
        console.error("Error generating chat summary.", error);
        return ["Could not generate chat summary."];
    }
  };