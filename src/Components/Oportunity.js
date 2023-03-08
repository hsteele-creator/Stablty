import React from "react";
import "./Overview.css";
import "./Oportunity.css";
import future from "./future.jpg"


const Opportunity = () => {
  return (
    <>
      <h1 id="opportunity-title">Strengthen Your Mind</h1>
      <div id="opportunity-container">
        <div className="opportunity-box">
          Stablty helps you control your life by providing key skills to help
          you navigate {" "}
          <span style={{ fontWeight: "bold" }}>hightened emotional states</span>{" "}
          like stress, anger, dissapointment.
        </div>
        <div className="opportunity-box">
          Clients works towards a foundation of strong{" "}
          <span style={{ fontWeight: "bold" }}>optimism</span> to develop resilience against hardships.
        </div>
        <div className="opportunity-box">
          Users can <span style={{ fontWeight: "bold" }}>access proven tools</span> in a simple format from specialists in the field to improve quickly.
        </div>
      </div>

      <img id="future" src={future} />
    </>
  );
};

export default Opportunity;
