import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeTitle from "../components/HomeTitle";

const HomePage: React.FC = () => {
  //   const handleStart = () => {
  //     alert("Start button clicked! (Navigate to the next page here.)");
  //   };

  return (
    <div>
      {/* <Header /> */}
      {/* <main className="container">
        <HomeTitle onStart={handleStart} />
      </main> */}
      <HomeTitle />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
