import React from "react";
import { useNavigate } from "react-router-dom";
import ContentMenu from "../components/ContentMenu";

const ContentsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="contents-page vh-100 d-flex flex-column align-items-center justify-content-center">
      {/* Home Button */}
      <button
        className="btn btn-home position-absolute top-0 start-0 m-3"
        onClick={() => navigate("/")}
      >
        home
      </button>

      {/* Title */}
      <h2 className="mb-5">thought segments</h2>

      {/* Content Menu */}
      <ContentMenu
        onNavigate={(segmentId) => navigate(`/segment/${segmentId}`)}
      />
    </div>
  );
};

export default ContentsPage;
