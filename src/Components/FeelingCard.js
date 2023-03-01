import React from "react";
import { NavLink } from "react-router-dom";

const FeelingCard = ({ title, img }) => {
  return (
    <NavLink to={`/${title}`} className="container">
      <div style={{ backgroundColor: "#73C2FB", borderRadius: "10px" }}>
        <h4 style={{ padding: "15px 0" }}>{title}</h4>
        <img className="icon" src={img} />
      </div>
    </NavLink>
  );
};

export default FeelingCard;
