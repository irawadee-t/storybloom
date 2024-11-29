import React, { useState } from "react";
import { getFollowUpQuestions } from "../services/openaiFinal";
import { saveChatInteraction } from "../services/supabaseService";

interface ChatInterfaceProps {
  segmentId: number;
  initialQuestions: string[];
  onAnswerSubmit: (question: string, answer: string) => void;
  //onGenerateFollowUp: (answer: string) => Promise<string>;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  segmentId,
  initialQuestions,
  onAnswerSubmit,
  // onGenerateFollowUp,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]); //useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmitAnswer = async () => {
    const question = initialQuestions[currentQuestionIndex];
    onAnswerSubmit(question, userAnswer);

    // Generate follow-up questions
    setLoading(true);
    try {
      const followUpsRaw = await getFollowUpQuestions(question, userAnswer);
      const followUps = followUpsRaw
        .split("\n")
        .map((line: string) => line.trim()); // Split and trim
      setFollowUpQuestions(followUps.filter((q: string) => q.length > 0)); // Remove empty lines
      await saveChatInteraction(segmentId, question, userAnswer, followUps);
    } catch (error) {
      console.error("Error generating follow-up questions:", error);
      setFollowUpQuestions(["Error generating follow-up questions."]);
    } finally {
      setLoading(false);
      setUserAnswer("");
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) =>
      Math.min(prev + 1, initialQuestions.length - 1)
    );
    setUserAnswer("");
    setFollowUpQuestions([]);
  };

  // const handleSubmitAnswer = () => {
  //   const question = initialQuestions[currentQuestionIndex];
  //   onAnswerSubmit(question, userAnswer);
  //   setUserAnswer("");
  // };

  // const handleGenerateFollowUp = async () => {
  //   if (userAnswer) {
  //     const followUp = await onGenerateFollowUp(userAnswer);
  //     setFollowUpQuestion(followUp);
  //   }
  // };

  return (
    <div className="chat-interface">
      <h5>{initialQuestions[currentQuestionIndex]}</h5>
      <input
        className="mt-2 bg-white border border-gray-300 text-center font-serif italic text-gray-500 lg:text-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="type your answer here..."
      />
      <div className="button-group">
        {/* <button onClick={handleSubmitAnswer} disabled={!userAnswer}>
          submit answer
        </button> */}
        <button
          className="btn btn-home"
          onClick={handleSubmitAnswer}
          disabled={!userAnswer || loading}
        >
          {loading ? "loading..." : "submit answer"}
        </button>
        <button className="btn btn-home" onClick={handleNextQuestion}>
          skip
        </button>
      </div>
      {followUpQuestions.length > 0 && (
        <div className="follow-up-questions mt-3">
          <p>'deeper connection' q's:</p>
          <ul>
            {followUpQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
          {/* <p>{followUpQuestions}</p> */}
          {/* <ul>
            {followUpQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul> */}
        </div>
      )}
      {/* <button onClick={handleGenerateFollowUp} disabled={!userAnswer}>
          generate follow-up
        </button>
      </div>
      {followUpQuestion && <p>Follow-Up: {followUpQuestion}</p>}
    </div> */}
    </div>
  );
};

export default ChatInterface;
