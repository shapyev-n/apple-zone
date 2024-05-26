import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Mac = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBar">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="mainLinks">
            <div className="main">
              <p>Explore Mac</p>
              <Link to={"/"}>Explore All Mac</Link>
              <Link to={"/"}>MacBook Air</Link>
              <Link to={"/"}>MacBook Pro</Link>
              <Link to={"/"}>iMac</Link>
              <Link to={"/"}>Mac mini</Link>
              <Link to={"/"}>Mac Studio</Link>
              <Link to={"/"}>Mac Pro</Link>
              <Link to={"/"}>Dispays</Link>
              <div className="a">
                <Link to={"/"}>Compare Mac</Link>
                <Link to={"/"}>Mac Does That</Link>
              </div>
            </div>
            <div className="xs">
              <div className="nav">
                <p>Shop Mac</p>
                <Link to={"/"}>Shop Mac</Link>
                <Link to={"/"}>Mac Accessories</Link>
                <Link to={"/"}>Apple Trade In</Link>
                <Link to={"/"}>Financing</Link>
              </div>
              <div className="nav">
                <p>More from Mac</p>
                <Link to={"/"}>Mac Support</Link>
                <Link to={"/"}>AppleCare+ for Mac</Link>
                <Link to={"/"}>macOS Sonoma</Link>
                <Link to={"/"}>Apps by Apple</Link>
                <Link to={"/"}>Continuity</Link>
                <Link to={"/"}>iCloud+</Link>
                <Link to={"/"}>Mac for Business</Link>
                <Link to={"/"}>Education</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mac;
