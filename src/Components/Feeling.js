import React from "react";
import "./Feeling.css";
import { NavLink } from "react-router-dom";
import Anger from "./anger.png";
import Depression from "./depression.png"
import FeelingCard from "./FeelingCard";
import Stress from "./stress.png"
import Lonely from "./alone.png"
import Sad from "./man.png"
import Anxiety from "./anxiety.png"

const Feeling = () => {
  return (
    <>
      <h1 id="feelings-title">What's bothering you?</h1>
      <div id="feelings-container">
        <FeelingCard title={"Depression"} img={Depression}  />
        <FeelingCard title={"Stress"} img={Stress} />
        <FeelingCard title={"Anxiety"} img={Anxiety} />
        <FeelingCard title={"Lonely"} img={Lonely}  />
        <FeelingCard title={"Sadness"} img={Sad}  />
        <FeelingCard title={"Anger"} img={Anger}   />
      </div>
    </>
  );
};

export default Feeling;
