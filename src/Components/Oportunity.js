import React from "react";
import "./Overview.css";
import "./Oportunity.css";
import nature from "./nature.jpg";
import holdingphone from "./holdingphone.jpg";
import meditation from "./meditation.jpg";

const Opportunity = () => {
  return (
    <>
      <h1 id="opportunity-title">Strengthen Your Mind</h1>
      <div id="opportunity-container">
        <div className="opportunity-box">
          <div className="opportunity-image-container"><img src={nature} /></div>
          Stablty helps you control your life by providing key skills to help
          you navigate{" "}
          <span style={{ fontWeight: "bold" }}>
            hightened emotional states
          </span>{" "}
          like stress, anger, dissapointment.
        </div>
        <div className="opportunity-box">
          <div className="opportunity-image-container"><img src={meditation} /></div>
          Clients works towards a foundation of strong{" "}
          <span style={{ fontWeight: "bold" }}>optimism</span> to develop
          resilience against hardships.
        </div>
        <div className="opportunity-box">
          <div className="opportunity-image-container"><img src={holdingphone} /></div>
          Users can{" "}
          <span style={{ fontWeight: "bold" }}>access proven tools</span> in a
          simple format from specialists in the field to improve quickly.
        </div>
      </div>
    </>
  );
};

export default Opportunity;
