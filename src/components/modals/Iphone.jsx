import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Iphone = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore iPhone</p>
              <Link to={"/"}>Explore All iPhone</Link>
              <Link to={"/"}>iPhone 15 Pro</Link>
              <Link to={"/"}>iPhone 15</Link>
              <Link to={"/"}>iPhone 14</Link>
              <Link to={"/"}>iPhone 13</Link>
              <Link to={"/"}>iPhone SE</Link>
              <div className="a">
                <Link to={"/"}>Compare iPhone</Link>
                <Link to={"/"}>Switch from Android</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop iPhone</p>
                <Link to={"/"}>Shop iPhone</Link>
                <Link to={"/"}>iPhone Accessories</Link>
                <Link to={"/"}>Apple Trade In</Link>
                <Link to={"/"}>Carrier Deals at Apple</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>More from iPhone</p>
                <Link to={"/"}>iPhone Support</Link>
                <Link to={"/"}>AppleCare+ for iPhone</Link>
                <Link to={"/"}>iOS 17</Link>
                <Link to={"/"}>Apps by Apple</Link>
                <Link to={"/"}>iPhone Privacy</Link>
                <Link to={"/"}>iCloud+</Link>
                <Link to={"/"}>Wallet, Pay, Card</Link>
                <Link to={"/"}>Siri</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
