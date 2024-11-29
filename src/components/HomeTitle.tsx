import React from "react";
import { useNavigate } from "react-router-dom";

// interface HomeTitleProps {
//   onStart?: () => void;
// }

const HomeTitle: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/contents"); // Navigate to ContentsPage
  };

  return (
    <div className="home-title text-center mt-5 d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <h1 className="title-text">The Giving Tree</h1>
      <button className="btn btn-custom mt-5" onClick={handleStart}>
        start reading
      </button>
    </div>
  );
};

// const HomeTitle: React.FC<HomeTitleProps> = ({ onStart }) => {
//   return (
//     <div className="home-title text-center mt-5 d-flex flex-column justify-content-center align-items-center vh-100 text-center">
//       <h1 className="title-text">The Giving Tree</h1>
//       {/* <p className="mt-2">
//         begin your journey through the pages of this beloved story.
//       </p> */}
//       <button className="btn btn-custom mt-5" onClick={onStart}>
//         start reading
//       </button>
//     </div>
//   );
// };

export default HomeTitle;
