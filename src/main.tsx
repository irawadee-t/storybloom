import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

// Global inline styles
const globalStyle = `
  body {
    font-family: 'Ovo', serif;
    background-color: #F8F3EADE;
    margin: 0;
  }

  .btn-custom {
    background-color: #F0DBCFDE;
    border: none;
    color: #333;
  }

  .btn-custom:hover {
    background-color: #e0c1b5;
  }

  .btn-home {
    background-color: rgba(217, 217, 217, 0.5); /* #D9D9D9 with 50% transparency */
    color: black; /* Adjust text color for better contrast */
    border: none
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .btn-home:hover {
    background-color: #D9D9D9; /* Fully opaque */
  }

  .btn-chat {
    background-color: rgba(143, 193, 143, 0.6); /* #8FC18F with 60% transparency */
    color: #497B49; /* Adjust text color for better contrast */
    border: none
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  .btn-chat:hover {
    background-color: #8FC18F; /* Fully opaque */
  }

  .home-title {
    width: 100%;
    padding: 0 2rem;
  }

  .title-text {
    font-size: 6vw; /* Scale text size relative to viewport width */
    line-height: 1.2; /* Adjust spacing between lines */
    max-width: 66%; /* Constrain text to 2/3 of the width */
    margin: 0 auto; /* Center-align the text block */
  }

  .btn-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .contents-page {
    text-align: center;
  }

  .segment-menu {
    text-align: center;
  }

  /* Smaller Circular Buttons */
.btn-small-circle {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
  margin: 10px
}

/* Segment Menu Page Layout */
.segment-menu h1 {
  font-size: 4rem;
}

.segment-menu .btn-custom {
  background-color: #f0dbcfde;
  border: none;
  color: #333;
}

.segment-menu .btn-custom:hover {
  background-color: #e0c1b5;
}

.button-container {
  margin-top: 20px; /* Move buttons closer to the top of the screen */
}

.button-page-container {
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
  margin-right: 20px;
}

.segment-title {
  margin-top: 100px; /* Add more spacing between buttons and title */
}

.book-page {
  max-width: 80%;
  margin: 0 auto;
}

.img-container {
  width: 700px; /* Fixed width */
  height: 500px; /* Fixed height */
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.book-page-image {
  max-width: 100%; /* Scale the image to fit the container width */
  max-height: 100%; /* Scale the image to fit the container height */
  object-fit: contain; /* Preserve aspect ratio and ensure the image fits */
}

// .book-page img {
//   width: 60%;
//   height: auto;
//   display: block;
//   border: 1px solid #ccc;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

.chat-interface {
  width: 70%;
  max-width: 400px;
  margin: 15px auto;
  padding: 1px;
  border: none;
  border-radius: 30px;
  background-color: #f9f9f9;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.follow-up-questions h4 {
  margin-bottom: 0.5rem;
}

.end-page {
  text-align: center;
  background-color: #f8f3ea;
}

.end-page button {
  width: 200px;
}


`;

const styleElement = document.createElement("style");
styleElement.innerHTML = globalStyle;
document.head.appendChild(styleElement);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
