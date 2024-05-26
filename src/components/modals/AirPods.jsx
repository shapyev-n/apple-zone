import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const AirPods = ({handleMouseLeave}) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore AirPods</p>
              <Link to={"/"}>Explore All AirPods</Link>
              <Link to={"/"}>AirPods Pro 2nd generation</Link>
              <Link to={"/"}>AirPods 2nd generation</Link>
              <Link to={"/"}>AirPods 3rd generation</Link>
              <Link to={"/"}>AirPods Max</Link>
              <div className="a">
                <Link to={"/"}>Compare AirPods</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop AirPods</p>
                <Link to={"/"}>Shop AirPods</Link>
                <Link to={"/"}>AirPods Accessories</Link>
              </div>
              <div className="nav">
                <p>More from AirPods</p>
                <Link to={"/"}>AirPods Support</Link>
                <Link to={"/"}>AppleCare+ for Headphones</Link>
                <Link to={"/"}>Apple Music</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirPods;
