import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Vision = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore Vision</p>
              <Link to={"/"}>Explore All Vision</Link>
              <div className="a">
                <Link to={"/"}>Guided Tour</Link>
                <Link to={"/"}>Tech Specs</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop Vision</p>
                <Link to={"/"}>Shop Apple Vision Pro</Link>
                <Link to={"/"}>Apple Vision Pro Accessories</Link>
                <Link to={"/"}>Book a Demo</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>More from Vision</p>
                <Link to={"/"}>Apple Vision Pro Support</Link>
                <Link to={"/"}>AppleCare+</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
