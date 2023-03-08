import React from "react";
import { NavLink } from "react-router-dom";

const FeelingCard = ({ title, img, background }) => {
  return (
    <NavLink to={`/${title}`} className="container">
      <div style={{ backgroundImage : `url(${background})`, backkgroudRepeat : "no-repeat", backgroundPosition : "center", backgroundSize : "cover", borderRadius : "10px"}}>
        <h4 style={{ padding: "15px 0" }}>{title}</h4>
        <img className="icon" src={img} />
      </div>
    </NavLink>
  );
};

export default FeelingCard;
