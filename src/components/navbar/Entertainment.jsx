import React from "react";
import Footer from "../footer/Footer";
import { v1, v2 } from "../../videos";

const Entertainment = () => {
  return (
    <div>
      <div id="video">
        <video autoPlay muted loop id="myVideo">
          <source src={v1} type="video/mp4" />
        </video>

        <div className="content">
          <div className="txt">
            <h1>Stream award-winning Apple Originals on every screen.</h1>
            <p>THE MORNING SHOW</p>
          </div>
          <div className="btn">
            <button id="myBtn" onClick={() => {}}>
              Try it free
            </button>
            <button id="myBtn2" onClick={() => {}}>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div id="video">
        <video autoPlay muted loop id="myVideo">
          <source src={v2} type="video/mp4" />
        </video>

        <div className="content">
          <div className="txt">
            <h1>From HIIT to Meditation, there’s something for everyone.</h1>
            <p>Apple Fitness+</p>
          </div>
          <div className="btn">
            <button id="myBtn" onClick={() => {}}>
              Try it free
            </button>
            <button id="myBtn2" onClick={() => {}}>
              Learn more
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Entertainment;
