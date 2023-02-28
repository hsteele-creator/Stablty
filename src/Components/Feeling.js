import React from "react";
import "./Feeling.css";
import { NavLink } from "react-router-dom";
import Anger from "./angry.png";
const Feeling = () => {
  return (
    <>
      <h1 id="feelings-title">What's bothering you?</h1>
      <div id="feelings-container">
        <NavLink to="/depression" className="container">
          <div>
            <p>Depression</p>
          </div>
        </NavLink>
        <NavLink to="/stress" className="container">
          <div>
            <p>Stress</p>
          </div>
        </NavLink>
        <NavLink to="/anxiety" className="container">
          <div>
            <p>Anxiety</p>
          </div>
        </NavLink>
        <NavLink to="/lonely" className="container">
          <div>
            <p>Lonely</p>
          </div>
        </NavLink>
        <NavLink to="/sadness" className="container">
          <div>
            <p>Sadness</p>
          </div>
        </NavLink>
        <NavLink to="/anger" className="container">
          <div>
            <p>Anger</p>
            <img className="icon" src={Anger} />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Feeling;

