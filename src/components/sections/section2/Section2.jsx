import React from 'react';
import "./section2.scss"
import img1 from "../../../images/card1.jpg";
import img2 from "../../../images/card2.jpg";
import img3 from "../../../images/card3.jpg";
import img4 from "../../../images/card4.jpg";
import img5 from "../../../images/card5.jpg";
import img6 from "../../../images/card6.jpg";
import { cardsTxt, btnTxt } from "../../../helpers/const";

const Section2 = () => {
    let { f1: ff1, f2: ff2, f3: ff3 } = btnTxt;
    let {
      card1: card1t,
      card2: card2t,
      card3: card3t,
      card4: card4t,
      card5: card5t,
      card6: card6t,
    } = cardsTxt;
    return (
      <div id="cards">
        <div className="cards">
          <div className="main">
            <div>
              <img className="imgMain" src={img1} alt="" />
              <div className="txt">
                {card1t.map((el) => (
                  <p style={{ color: "#F5F5F7" }}>{el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff1}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img className="imgMain" src={img2} alt="" />
              <div className="txt">
                {card2t.map((el) => (
                  <p style={{ color: "#000" }}>{el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff1}
                  </button>
                  <button>{ff2}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <img className="imgMain" src={img3} alt="" />
              <div className="txt">
                {card3t.map((el) => (
                  <p style={{ color: "#F5F5F7" }}>{el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff1}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <img className="imgMain" src={img4} alt="" />
              <div className="txt">
                {card4t.map((el, idx) => (
                  <p className="colors">{idx === 1 ? <h3>{el}</h3> : el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff1}
                  </button>
                  <button>{ff2}</button>
                </div>
              </div>
            </div>
          </div>
          <div className="main">
            <div>
              <img className="imgMain" src={img5} alt="" />
              <div className="txt">
                {card5t.map((el) => (
                  <p>{el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff1}
                  </button>
                  <button>{ff2}</button>
                </div>
              </div>
            </div>
            <div>
              <img className="imgMain" src={img6} alt="" />
              <div className="txt">
                {card6t.map((el) => (
                  <p>{el}</p>
                ))}
                <div className="btns">
                  <button style={{ background: "#0071E3", color: "#fff" }}>
                    {ff3}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Section2;