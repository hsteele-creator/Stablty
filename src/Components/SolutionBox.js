import React from "react";
import "./SolutionBox.css";

const SolutionBox = ({image, header, content }) => {
  return (
    <div id="solution-box">
      <img src={image} />
      <h3 id="solution-box-header">{header}</h3>
      <p className="solution-box-text">{content}</p>
    </div>
  );
};

export default SolutionBox;
