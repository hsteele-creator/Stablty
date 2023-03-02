import React from "react";
import "./Overview.css";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import bluebg from "./bluebg.jpg";
import mountain from "./mountain.jpg";
import BlueWhite from "./bluewhite.jpg";
import GradientBG from "./gradient-bg.png";
import ImageSLider from "./ImageSlider";

const slides = [{ url: mountain }, { url: bluebg }, { url: BlueWhite }];

const Overview = () => {
  return (
    <div
      id="overview-container"
      style={{
        backgroundImage: `url(${GradientBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div id="text-container">
        <h1>Overview</h1>
        <h6>Who we are</h6>
        <p>
          We help people create mental stability, and develop a mindful
          practice.
        </p>
        <p>
          Diverse, varied, scientifically proven exercises engage users to
          develop healthy habits and positively impact their mental health
        </p>

        <Button id="help-btn">
          <NavLink to="/help" id="help-link">
            We can Help
          </NavLink>
        </Button>
      </div>

      <div id="image-slider-container">
        <ImageSLider slides={slides} />
      </div>
    </div>
  );
};

export default Overview;
