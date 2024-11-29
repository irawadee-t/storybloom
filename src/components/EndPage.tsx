import React from "react";

interface EndPageProps {
  onReadAgain: () => void;
  // onDownloadSummary: () => void;
  // onGenerateSummary: () => void;
}

const EndPage: React.FC<EndPageProps> = ({
  onReadAgain,
  // onDownloadSummary,
  // onGenerateSummary,
}) => {
  return (
    <div className="end-page d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="mb-4">
        Congratulations on finishing The Giving Tree book!
      </h1>
      <div className="d-flex flex-column align-items-center gap-3">
        <button className="btn btn-custom" onClick={onReadAgain}>
          read again
        </button>
        {/* <button className="btn btn-secondary" onClick={onGenerateSummary}>
          generate summary
        </button>
        <button className="btn btn-success" onClick={onDownloadSummary}>
          download summary
        </button> */}
      </div>
    </div>
  );
};

export default EndPage;
