import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EndPage from "../components/EndPage";

// import { generateSummaryPDF } from "../utils/pdfGenerator";
// import {
//   fetchChatHistory,
//   storeChatSummary,
// } from "../services/supabaseService";
// import { getChatGPTSummary } from "../services/openaiService";

const EndPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleReadAgain = () => {
    navigate("/contents");
  };

  //   const handleGenerateSummary = async () => {
  //     try {
  //       setIsGenerating(true);
  //       // Fetch chat history from Supabase
  //       const chatHistory = await fetchChatHistory();

  //       // Generate a summary using OpenAI API
  //       const summary = await getChatGPTSummary(chatHistory);

  //       // Store the summary in Supabase
  //       await storeChatSummary(summary);

  //       alert("Summary generated successfully!");
  //     } catch (error) {
  //       console.error("Error generating summary:", error);
  //       alert("Failed to generate summary. Please try again.");
  //     } finally {
  //       setIsGenerating(false);
  //     }
  //   };

  //   const handleDownloadSummary = async () => {
  //     try {
  //       // Fetch the chat summary from Supabase
  //       const summary = await fetchChatHistory(); // Replace with fetchSummary if stored separately

  //       // Generate and download a PDF
  //       generateSummaryPDF(summary);
  //     } catch (error) {
  //       console.error("Error downloading summary:", error);
  //       alert("Failed to download summary. Please try again.");
  //     }
  //   };

  return (
    <EndPage
      onReadAgain={handleReadAgain}
      //   onGenerateSummary={handleGenerateSummary}
      //   onDownloadSummary={handleDownloadSummary}
    />
  );
};

export default EndPageContainer;
