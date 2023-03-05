import React from "react";
import Accordion from "./Accordion";
import "./Help.css";
import PositiveAttitude from "./PositiveAttitude";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Help = () => {
  return (
    <>
      {/* <h2 id="help-title">How can we improve your day?</h2>
      <Accordion title="Positive Mental Attitude" color="#F6EDB3"/>
      <Accordion title="Coping with Challenges" color="#ACECAE" />
      <Accordion title="Stress Management" color="#CBB9FE" />
      <Accordion title="Relationship Management" color="lightblue" />
      <Accordion title="Acheiving Your Goals" color="#89B2B9" />
      <Accordion title="Grattitude" color="#FDC2EB" /> */}
      <PositiveAttitude />
      <div>
        <Link to="/Goals">
          <Button>Acheiving Your Goals</Button>
        </Link>
      </div>
    </>
  );
};

export default Help;
