import React, { useState } from "react";
import { getOpenAIResponse } from "../services/archive/gptTest"; // Import your GPT test function

const GPTTestComponent: React.FC = () => {
  const handleTest = async () => {
    const you =
      "You are a facilitator for parent-child interactions, aiming to foster meaningful connections as they read and discuss The Giving Tree together.";
    const question = "Why do you think the tree loved the boy so much?";
    const child_response = "The tree enjoys spending time with the boy.";
    const prompt =
      you +
      "Based on my 6-year-old childs response to the initial question below, come up with three thoughtful follow-up questions that I, the parent, can ask to dive deeper into my childs response and encourage them to further reflect on their response. The follow-up questions do not have to directly relate to the story. Question: " +
      question +
      "My childs response: " +
      child_response +
      "Please output the three follow-up questions as a list of strings: ['follow-up question A', 'follow-up question B', 'follow-up question C']";
    await getOpenAIResponse(prompt);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <h1>Test GPT Prompt</h1>
      <button className="btn btn-primary" onClick={handleTest}>
        Test GPT
      </button>
    </div>
  );
};

export default GPTTestComponent;
