import React from "react";
import SolutionBox from "./SolutionBox";
import meditation from "./meditation.jpg";
import nature from "./nature.jpg";
import holdingphone from "./holdingphone.jpg";
import "./Solution.css";

const Solution = () => {
  return (
    <>
      <div id="solution-container">
        <h1 id="solution-title">Our Solution</h1>
        <div id="solution">
          <SolutionBox
            header="Intuitive"
            image={meditation}
            content="Stablty is a solution for people who don't connect with meditation. It offers an intuituve and comprehensive platform that engages users to learn and utilize healthy tools to control their mind."
          />
          <SolutionBox
            header="Innovative"
            image={nature}
            content="Stablty combines the latest scientific research in mental health with effective techniques that users can quickly pick up and adapt to their lifestyle. It's a fitness app for mindfulness that helps users build their mental muscles."
          />
          <SolutionBox
            header="Adaptive"
            image={holdingphone}
            content="Stablty offers customization that analyzes user patterns, suggests targeted areas for improvement, and allows the user to choose their own learning paths."
          />
        </div>
      </div>
    </>
  );
};

export default Solution;
