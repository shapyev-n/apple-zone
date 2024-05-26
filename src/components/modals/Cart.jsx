import React from "react";
import "./modalsBar.scss";
import { Link } from "react-router-dom";

const Cart = ({ handleMouseLeave }) => {
  return (
    <div id="modalsBarS">
      <div className="container">
        <div className="modalsBar" onMouseLeave={handleMouseLeave}>
          <div className="cart">
            <h1>Your Bag is empty</h1>
            <div className="txt">
              <p>
                <Link to={"/signIn"}>Sign in</Link>
                to see if you have any saved items
              </p>
            </div>
          </div>
          <div className="mainLinks">
            <div className="nav_c">
              <p>My Profile</p>
              <span className="orders">
                <Link to={"/card"}>Orders</Link>
              </span>
              <span className="saves">
                <Link to={"/"}>Your Saves</Link>
              </span>
              <span className="account">
                <Link to={"/"}>Account</Link>
              </span>
              <span className="signIn">
                <Link to={"/signIn"}>Sign in</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
