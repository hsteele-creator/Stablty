import React from "react";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content, color }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            style={{ backgroundColor: color }}
            onClick={() => setIsActive(!isActive)}
          >
            <div id="title-container">{title}</div>
            <div id="expand-container">{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div
              className="accordion-content"
              style={{ backgroundColor: color }}
            >
              content
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
