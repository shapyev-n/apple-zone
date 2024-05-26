import React, { useState } from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const StoreBar = ({ handleMouseLeave }) => {

  
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Shop</p>
              <Link to={"/"}>Shop the Latest</Link>
              <Link to={"/"}>Mac</Link>
              <Link to={"/"}>iPad</Link>
              <Link to={"/"}>iPhone</Link>
              <Link to={"/"}>Apple Watch</Link>
              <Link to={"/"}>Apple Vision Pro</Link>
              <Link to={"/"}>Accessories</Link>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Quick Links</p>
                <Link to={"/"}>Find a Store</Link>
                <Link to={"/"}>Order Status</Link>
                <Link to={"/"}>Apple Trade In</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>Shop Special</p>
                <Link to={"/"}>Certified Refurbished</Link>
                <Link to={"/"}>Education</Link>
                <Link to={"/"}>Business</Link>
                <Link to={"/"}>Veterans and Military</Link>
                <Link to={"/"}>Government</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreBar;
