import React from "react";
import ReactDOM from "react-dom/client";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpg";
import "./index.css";
import { useState } from "react";

const Slideshow = () => {
  const images = [
    [img1, "text1"],
    [img2, "text2"],
    [img3, "text3"],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      style={{ textAlign: "center", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{ textAlign: "center", display: "flex", flexDirection: "row" }}
      >
        <img
          src={images[currentIndex][0]}
          alt="Slideshow"
          style={{ width: "400px", height: "300px" }}
        />
        <div>{images[currentIndex][1]}</div>
      </div>
      <div>
        <div>
          <button onClick={prevImage}>Previous</button>
          <button onClick={nextImage}>Next</button>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Slideshow />
  </React.StrictMode>
);
