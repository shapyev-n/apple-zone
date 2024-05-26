import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Support = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore Support</p>
              <Link to={"/"}>iPhone</Link>
              <Link to={"/"}>Mac</Link>
              <Link to={"/"}>iPad</Link>
              <Link to={"/"}>Watch</Link>
              <Link to={"/"}>Apple Vision Pro</Link>
              <Link to={"/"}>AirPods</Link>
              <Link to={"/"}>Music</Link>
              <Link to={"/"}>TV</Link>
              <div className="a">
                <Link to={"/"}>Explore Support</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Get Help</p>
                <Link to={"/"}>Community</Link>
                <Link to={"/"}>Check Coverage</Link>
                <Link to={"/"}>Repair</Link>
                <Link to={"/"}>Contact Us</Link>
              </div>
              <div className="nav">
                <p>Helpful Topics</p>
                <Link to={"/"}>Get AppleCare+</Link>
                <Link to={"/"}>Apple ID & Password</Link>
                <Link to={"/"}>Get AppleCare+</Link>
                <Link to={"/"}>Find My</Link>
                <Link to={"/"}>Accessibility</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
