import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const TvHome = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore TV & Home</p>
              <Link to={"/"}>Explore All TV & Home</Link>
              <Link to={"/"}>Apple TV 4K</Link>
              <Link to={"/"}>HomePod</Link>
              <Link to={"/"}>HomePod mini</Link>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop TV & Home</p>
                <Link to={"/"}>Shop Apple TV 4K</Link>
                <Link to={"/"}>Shop HomePod</Link>
                <Link to={"/"}>Shop HomePod mini</Link>
                <Link to={"/"}>Shop Siri Remote</Link>
                <Link to={"/"}>TV & Home Accessories</Link>
              </div>
              <div className="nav">
                <p>More from TV & Home</p>
                <Link to={"/"}>Apple TV Support</Link>
                <Link to={"/"}>HomePod Support</Link>
                <Link to={"/"}>AppleCare+</Link>
                <Link to={"/"}>Apple TV app</Link>
                <Link to={"/"}>Apple TV+</Link>
                <Link to={"/"}>Home app</Link>
                <Link to={"/"}>Apple Music</Link>
                <Link to={"/"}>Siri</Link>
                <Link to={"/"}>AirPlay</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvHome;
