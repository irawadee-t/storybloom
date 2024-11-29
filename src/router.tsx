import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContentsPage from "./pages/ContentsPage";
import SegmentMenuPage from "./pages/SegmentMenuPage";
import BookPageContainer from "./pages/BookPageContainer";
import EndPageContainer from "./pages/EndPageContainer";
import GPTTestComponent from "./components/GPTTestComponent";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Home Page */}
      <Route path="/" element={<HomePage />} />

      {/* Contents Page */}
      <Route path="/contents" element={<ContentsPage />} />

      {/* Segment Menu Page (Dynamic Route for Segment Navigation) */}
      <Route path="/segment/:id" element={<SegmentMenuPage />} />
      <Route path="/book/:segmentId/:pageId" element={<BookPageContainer />} />
      <Route path="/end" element={<EndPageContainer />} />
      <Route path="/test-gpt" element={<GPTTestComponent />} />
    </Routes>
  );
};

export default AppRouter;
