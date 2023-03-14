import React from "react";
import SolutionBox from "./SolutionBox";
import meditation from "./meditation.jpg";
import nature from "./nature.jpg";
import holdingphone from "./holdingphone.jpg";
import "./Solution.css";
import ImageSLider from "./ImageSlider";
import video from "./video.mp4";

const slides = [{ url: meditation }, { url: nature }, { url: holdingphone }];

const Solution = () => {
  return (
    <>

      <div id="video-section-container">
        <div id="video-container">
          <video id="video" controls width="300px" height="300px">
            <source src={video} type="video/mp4"></source>
          </video>
        </div>

        <div id="video-text">
          <h1 id="app-title">Our App</h1>
          <p>Check out our app to gain the full stablty experience with personalized content, catered just for you.</p>
        </div>
      </div>
    </>
  );
};

export default Solution;
