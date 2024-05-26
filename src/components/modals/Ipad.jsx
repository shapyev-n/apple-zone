import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Ipad = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore iPad</p>
              <Link to={"/"}>Explore All iPad</Link>
              <Link to={"/"}>iPad Pro</Link>
              <Link to={"/"}>iPad Air</Link>
              <Link to={"/"}>iPad</Link>
              <Link to={"/"}>iPad mini</Link>
              <Link to={"/"}>Apple Pencil</Link>
              <Link to={"/"}>Keyboards</Link>
              <div className="a">
                <Link to={"/"}>Compare iPad</Link>
                <Link to={"/"}>Why iPad</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop iPad</p>
                <Link to={"/"}>Shop iPad</Link>
                <Link to={"/"}>iPad Accessories</Link>
                <Link to={"/"}>Apple Trade In</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>More from iPad</p>
                <Link to={"/"}>iPad Support</Link>
                <Link to={"/"}>AppleCare+ for iPad</Link>
                <Link to={"/"}>iPadOS 17</Link>
                <Link to={"/"}>Apps by Apple</Link>
                <Link to={"/"}>iCloud+</Link>
                <Link to={"/"}>Education</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ipad;
