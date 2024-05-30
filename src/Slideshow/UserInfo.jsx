import img1 from "../images/img1.jpg";
import img2 from "../images/img2.webp";
import img3 from "../images/img3.jpg";
import "../index.css";
import { useState } from "react";

export default function Slideshow({ info }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3];

  const data = images.map((image, index) => {
    return {
      image: image,
      id: info[index].id,
      name: info[index].name,
      info: info[index].info,
    };
  });

  const UserInfo = ({ name, info }) => {
    return (
      <div className="info">
        <h3>{name}</h3>
        <p>{info}</p>
      </div>
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="container">
      <div className="main">
        <img src={data[currentIndex].image} alt="Slideshow" />
        <div className="btn-container">
          <button onClick={prevImage}>{"<"}</button>
          <button onClick={nextImage}>{">"}</button>
        </div>
      </div>
      <UserInfo name={data[currentIndex].name} info={data[currentIndex].info} />
    </div>
  );
}
