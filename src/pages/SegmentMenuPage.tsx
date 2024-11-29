import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import SegmentMenu from "../components/SegmentMenu";
import { bookPages } from "../data/bookPages";

const SegmentMenuPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // Get segment ID from the URL

  const segmentTitles = [
    "0. the beginning",
    "1. friendship & joy",
    "2. the boy grows older",
    "3. the boy seeks a house",
    "4. the boy wants to escape",
    "5. the final reunion",
  ];

  const segmentId = parseInt(id || "1", 10);
  const segmentTitle = segmentTitles[segmentId] || "Unknown Segment";

  return (
    <div className="segment-menu vh-100 d-flex flex-column align-items-center justify-content-center">
      {/* Home Button */}
      <button
        className="btn btn-home position-absolute top-0 start-0 m-3"
        onClick={() => navigate("/")}
      >
        home
      </button>

      {/* Segment Navigation Buttons */}
      <div className="button-container d-flex justify-content-center mt-3">
        <SegmentMenu
          onNavigate={(segmentId) => navigate(`/segment/${segmentId}`)}
        />
      </div>

      {/* Segment Title */}
      <h1 className="segment-title mt-5">{segmentTitle}</h1>

      {/* Start Segment Button */}
      <button
        className="btn btn-custom mt-5"
        onClick={() =>
          //   alert(`Navigating to the first page of Segment ${segmentId}`)
          //   navigate(`/book/${segmentId}/11`)
          // Navigate to the first page of the selected segment
          {
            // Navigate to the first page of the selected segment
            const firstPageId = bookPages.find(
              (page) => page.segment === segmentId
            )?.id;

            if (firstPageId !== undefined) {
              navigate(`/book/${segmentId}/${firstPageId}`);
            } else {
              console.error(`No pages found for segment ${segmentId}`);
            }
          }
        }
      >
        start segment
      </button>
    </div>
  );
};

export default SegmentMenuPage;
