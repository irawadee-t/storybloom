import React from "react";

interface SegmentMenuProps {
  onNavigate: (segmentId: number) => void;
}

const SegmentMenu: React.FC<SegmentMenuProps> = ({ onNavigate }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2">
      {[0, 1, 2, 3, 4, 5].map((segmentId) => (
        <button
          key={segmentId}
          className="btn btn-light btn-small-circle"
          onClick={() => onNavigate(segmentId)}
        >
          {segmentId}
        </button>
      ))}
    </div>
  );
};

export default SegmentMenu;
