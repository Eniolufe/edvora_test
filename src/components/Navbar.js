import React from "react";
import passport from "../images/passport.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Edvora</h1>
      <div className="rider">
        <h4>Dhruv Singh</h4>
        <img src={passport} alt="img" />
      </div>
    </nav>
  );
};

export default Navbar;
