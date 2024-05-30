import React from "react";
import ReactDOM from "react-dom/client";

import { useState } from "react";

import Slideshow from "./Slideshow/UserInfo.jsx";

const info = [
  {
    id: 1,
    name: "John",
    info: "ajdjdjdjdfj akdkddfddkdk lslslsslsll lsslslslfs djdkjkdjksdjfdkj",
  },
  {
    id: 2,
    name: "Alis",
    info: "mkmkknnknknkn bubjjbjh jjbjbjbjbbbkk mkmkknnknknkn bubjjbjh jjbjbjbjbbbkk 11111111111111111111111111111111111111111111  11111111111111111111111111111111111111111111 mkmkknnknknkn bubjjbjh jjbjbjbjbbbkk 11111111111111111111111111111111111111111111  ssssssssssssssssssssssssssssssssssss ",
  },
  {
    id: 3,
    name: "Ann",
    info: "2125485787545 57979 snhdsihckjsncjkcnk bjkbscihdcish nkasjcsjcoscjk nccccccccccccccccc",
  },
];

const App = () => {
  return (
    <div className="app">
      <Slideshow info={info} />
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
