import React from "react";
import "./AppStore.css";
import { Button } from "@mui/material";
import PhonePic from "./phone-pic.png";
import Iphone from "./iphone-pic.jpg"
import iphonepic from "./iphone.png"
import logo from "./logo.jpg"

const AppStore = () => {
  return (
    <div id="app-container">
      <div id="app-store-container">
        <div id="app-store-text">
          <h3>Ready to Get Started? Download our app today</h3>
            <p>Available on the app store</p>
          <div id="btn-container">
            <button className="app-btn">
              {" "}
              <a href="https://apps.apple.com/us/app/stablty-llc/id1530005012">
                Download
              </a>
            </button>
          </div>
        </div>
        <div id="app-store-image">
          <img id="phone-img" src={PhonePic} />
        </div>
      </div>
      <a id="credit" href='https://pngtree.com/so/apple'>apple png from pngtree.com/</a>
    </div>
  );
};

export default AppStore;
