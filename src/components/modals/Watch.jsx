import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Watch = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore Watch</p>
              <Link to={"/"}>Explore All Watch</Link>
              <Link to={"/"}>Apple Watch Series 9</Link>
              <Link to={"/"}>Apple Watch Ultra 2</Link>
              <Link to={"/"}>Apple Watch SE</Link>
              <Link to={"/"}>Apple Watch Nice</Link>
              <Link to={"/"}>Apple Watch Hermes</Link>
              <div className="a">
                <Link to={"/"}>Compare Watch</Link>
                <Link to={"/"}>Why Apple Watch</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop Watch</p>
                <Link to={"/"}>Shop Apple Watch</Link>
                <Link to={"/"}>Apple Watch Studio</Link>
                <Link to={"/"}>Apple Watch Bands</Link>
                <Link to={"/"}>Apple Watch Accessories</Link>
                <Link to={"/"}>Apple Trade In</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>More from Watch</p>
                <Link to={"/"}>Apple Watch Support</Link>
                <Link to={"/"}>AppleCare+</Link>
                <Link to={"/"}>watchOS 10</Link>
                <Link to={"/"}>Apps by Apple</Link>
                <Link to={"/"}>Apple Fitness+</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
