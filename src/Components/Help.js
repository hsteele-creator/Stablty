import React from "react";
import Accordion from "./Accordion";
import "./Help.css"

const Help = () => {
  return (
    <>
      <h2 id="help-title">How can we improve your day?</h2>
      <Accordion title="Positive Mental Attitude" color="#F6EDB3"/>
      <Accordion title="Coping with Challenges" color="#ACECAE" />
      <Accordion title="Stress Management" color="#CBB9FE" />
      <Accordion title="Relationship Management" color="lightblue" />
      <Accordion title="Acheiving Your Goals" color="#89B2B9" />
      <Accordion title="Grattitude" color="#FDC2EB" />
    </>
  );
};

export default Help;
