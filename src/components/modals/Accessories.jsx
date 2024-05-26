import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Accessories = ({handleMouseLeave}) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Shop Accessories</p>
              <Link to={"/"}>Shop All Accessories</Link>
              <Link to={"/"}>Mac</Link>
              <Link to={"/"}>iPad</Link>
              <Link to={"/"}>iPhone</Link>
              <Link to={"/"}>Apple Watch</Link>
              <Link to={"/"}>Apple Vision Pro</Link>
              <Link to={"/"}>AirPods</Link>
              <Link to={"/"}>TV & Home</Link>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Explore Accessories</p>
                <Link to={"/"}>Made by Apple</Link>
                <Link to={"/"}>Beats by Dr. Dre</Link>
                <Link to={"/"}>AirTag</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
