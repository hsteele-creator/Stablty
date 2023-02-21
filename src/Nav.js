import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [openNav, SetOpenNav] = useState(false);
  return (
    <nav id="nav-bar">
      <img
        id="logo"
        src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/23.png"
      />

      <div id="links">
        <div id="hamburger-holder">
        <img
          id="hamburger"
          src="https://cdn.iconscout.com/icon/free/png-512/hamburger-menu-462145.png?f=avif&w=512"
          onClick={() => SetOpenNav(!openNav)}
        //   style={{ display: openNav ? "inline" : "block" }}
        />
        </div>

        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/team">
          Team
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
