import React from "react";
import { NavLink } from "react-router-dom";

const FeelingCard = ({ title, img, background }) => {
  return (
    <NavLink to={`/${title}`} className="container">
      <div style={{border : "5px solid blue"}} >
        <h4 style={{ padding: "15px 0", color : "blue" }}>{title}</h4>
        <img className="icon" src={img} />
      </div>
    </NavLink>
  );
};

export default FeelingCard;
