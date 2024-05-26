import React from "react";
import "./section1.scss";
import img1 from "../../../images/laptops.jpg";
import img2 from "../../../images/iPhone.jpg";
import img3 from "../../../images/iPhone2.jpg";
import { heroTxt, btnTxt } from "../../../helpers/const";

const Section1 = () => {
  let {
    h1: { h1_1: hh1_1, h1_2: hh1_2 },
    h2: { h2_1: hh2_1, h2_2: hh2_2 },
    h3: { h3_1: hh3_1, h3_2: hh3_2 },
  } = heroTxt;
  let { f1: ff1, f2: ff2 } = btnTxt;

  return (
    <div id="hero">
      <div className="hero">
        <div className="top">
          <img className="sq" src={img1} alt="" />
          <div className="txt">
            <h1>{hh1_1}</h1>
            <p>{hh1_2}</p>
            <div className="btns">
              <button style={{ background: "#0071E3", color: "#fff" }}>
                {ff1}
              </button>
              <button>{ff2}</button>
            </div>
          </div>
        </div>
        <div className="center">
          <img className="sq" src={img2} alt="" />
          <div className="txt">
            <h1 style={{ color: "#F5F5F7" }}>{hh2_1}</h1>
            <p style={{ color: "#F5F5F7" }}>{hh2_2}</p>
            <div className="btns">
              <button style={{ background: "#0071E3", color: "#fff" }}>
                {ff1}
              </button>
              <button>{ff2}</button>
            </div>
          </div>
        </div>
        <div className="bottom">
          <img className="sq" src={img3} alt="" />
          <div className="txt">
            <h1>{hh3_1}</h1>
            <p>{hh3_2}</p>
            <div className="btns">
              <button style={{ background: "#0071E3", color: "#fff" }}>
                {ff1}
              </button>
              <button>{ff2}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
