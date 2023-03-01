import React from "react";
import "./Feeling.css";
import { NavLink } from "react-router-dom";
import Anger from "./angry.svg";
import Depression from "./depression.svg"
import FeelingCard from "./FeelingCard";
import Stress from "./stress.svg"
import Lonely from "./lonely.svg"
import Sad from "./sad.svg"
import Anxiety from "./anxiety.svg"
import Fear from "./fear.svg"
import Helpless from "./helpless.svg"

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
        <FeelingCard title={"Helpless"} img={Helpless}   />
        <FeelingCard title={"Fear"} img={Fear}   />
        <FeelingCard title={"Jealous"} img={Anger}   />
      </div>
    </>
  );
};

export default Feeling;
