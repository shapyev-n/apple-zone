import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Entertaiment = ({handleMouseLeave}) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar"onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore Entertaiment</p>
              <Link to={"/"}>Explore Entertaiment</Link>
              <Link to={"/"}>Apple One</Link>
              <Link to={"/"}>Apple TV+</Link>
              <Link to={"/"}>Apple Music</Link>
              <Link to={"/"}>Apple Arcade</Link>
              <Link to={"/"}>Apple Fitness+</Link>
              <Link to={"/"}>Apple News+</Link>
              <Link to={"/"}>Apple Podcasts</Link>
              <Link to={"/"}>Apple Books</Link>
              <Link to={"/"}>App Store</Link>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Support</p>
                <Link to={"/"}>Apple TV+ Support</Link>
                <Link to={"/"}>Apple Music Support</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Entertaiment;
