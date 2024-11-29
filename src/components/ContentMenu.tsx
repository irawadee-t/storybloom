import React from "react";

interface ContentMenuProps {
  onNavigate: (segmentId: number) => void;
}

const ContentMenu: React.FC<ContentMenuProps> = ({ onNavigate }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {[0, 1, 2, 3, 4, 5].map((segmentId) => (
        <button
          key={segmentId}
          className="btn btn-custom btn-circle"
          onClick={() => onNavigate(segmentId)}
        >
          {segmentId}
        </button>
      ))}
    </div>
  );
};

export default ContentMenu;
