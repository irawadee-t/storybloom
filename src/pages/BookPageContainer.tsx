import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookPage from "../components/BookPage";
import ChatInterface from "../components/ChatInterface";
import { bookPages } from "../data/bookPages";
import SegmentMenu from "../components/SegmentMenu";
import { segmentData } from "../data/segmentData";

const BookPageContainer: React.FC = () => {
  const { segmentId, pageId } = useParams<{
    segmentId: string;
    pageId: string;
  }>();
  const navigate = useNavigate();

  const segmentIdNum = parseInt(segmentId || "1", 10);
  const pageIdNum = parseInt(pageId || "1", 10);

  // Get the current segment's questions
  const currentSegment = segmentData.find(
    (segment) => segment.segment_id === segmentIdNum
  );
  const questions = currentSegment
    ? currentSegment.questions.map((q) => q.question)
    : [];

  const currentPage = bookPages.find(
    (page) => page.segment === segmentIdNum && page.id === pageIdNum
  );

  // Find the last page in the current segment
  const lastPageId = Math.max(
    ...bookPages
      .filter((page) => page.segment === segmentIdNum)
      .map((page) => page.id)
  );

  // check for last page of segment
  const isLastPageOfSegment = pageIdNum === lastPageId;

  // check for last segment
  const isLastSegment = segmentIdNum === 5;

  const [showChat, setShowChat] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { question: string; answer: string }[]
  >([]);

  const handleAnswerSubmit = (question: string, answer: string) => {
    setChatHistory((prev) => [...prev, { question, answer }]);
    console.log("Chat History:", chatHistory); // For debugging
  };

  const handleNext = () => {
    // const nextPage = bookPages.find(
    //   (page) => page.segment === segmentIdNum && page.id === pageIdNum + 1
    // );
    // if (nextPage) navigate(`/book/${segmentIdNum}/${nextPage.id}`);
    if (isLastPageOfSegment) {
      if (isLastSegment) {
        // Navigate to the end page if it's the last segment
        navigate("/end");
      } else {
        // Navigate to the next segment's menu page
        navigate(`/segment/${segmentIdNum + 1}`);
      }
    } else {
      // Navigate to the next page in the current segment
      const nextPage = bookPages.find(
        (page) => page.segment === segmentIdNum && page.id === pageIdNum + 1
      );
      if (nextPage) navigate(`/book/${segmentIdNum}/${nextPage.id}`);
    }
  };

  const handlePrev = () => {
    const prevPage = bookPages.find(
      (page) => page.segment === segmentIdNum && page.id === pageIdNum - 1
    );
    if (prevPage) navigate(`/book/${segmentIdNum}/${prevPage.id}`);
  };

  if (!currentPage) return <div>Page not found.</div>;

  return (
    <div className="book-page-container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <button
          className="btn btn-home position-absolute top-0 start-0 m-3"
          onClick={() => navigate("/contents")}
        >
          segments
        </button>

        {/* <div className="d-flex gap-3">
          {[1, 2, 3, 4, 5].map((segment) => (
            <button
              key={segment}
              className="btn btn-outline-primary"
              onClick={() => navigate(`/segment/${segment}`)}
            >
              {segment}
            </button>
          ))}
        </div> */}
        {/* Segment Navigation Buttons */}
        {/* <div className="button-page-container d-flex mt-3">
          <SegmentMenu
            onNavigate={(segmentId) => navigate(`/segment/${segmentId}`)}
          />
        </div> */}
      </div>

      <div className="d-flex justify-content-center align-items-center mb-4">
        {[0, 1, 2, 3, 4, 5].map((segment) => (
          <button
            key={segment}
            className="btn btn-small-circle btn-light top-0 start-0 m-3"
            onClick={() => navigate(`/segment/${segment}`)}
          >
            {segment}
          </button>
        ))}
      </div>

      <div className="book-page-content d-flex flex-column align-items-center">
        <BookPage image={currentPage.image} />

        <div className="navigation mt-4 d-flex gap-3">
          <button className="btn btn-light" onClick={handlePrev}>
            prev
          </button>
          <button className="btn btn-light" onClick={handleNext}>
            {isLastPageOfSegment ? "next segment" : "next"}
          </button>
        </div>

        <button
          className="btn btn-chat mt-3"
          onClick={() => setShowChat(!showChat)}
        >
          {showChat ? "hide chat" : "show chat"}
        </button>

        {showChat && (
          <div className="chat-interface mt-4">
            {/* previous code that works */}
            {/* <ChatInterface segmentId={segmentIdNum} pageId={pageIdNum} /> */}
            {/* <ChatInterface
              initialQuestions={questions}
              onAnswerSubmit={(q, a) => console.log("Answer submitted:", q, a)}
              onGenerateFollowUp={async (answer) => `Follow-up: ${answer}`}
            /> */}
            <ChatInterface
              segmentId={segmentIdNum}
              initialQuestions={questions}
              onAnswerSubmit={handleAnswerSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookPageContainer;
