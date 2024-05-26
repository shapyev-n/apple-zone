import React, { useState } from "react";
import "./section4.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import slide1 from "../../../images/slide1.jpg";
import slide2 from "../../../images/slide2.jpg";
import slide3 from "../../../images/slide3.jpg";
import slide4 from "../../../images/slide4.jpg";
// import apple from "../../../images/apple_white.png";

const Section4 = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div id="slider_media">
      <div className="container">
        <div className="slider_media">
          <div className="slide">
            <img src={slide1} alt="" />
            <div className="txt"></div>
          </div>
          <div className="slide">
            <img className="imgXs" src={slide2} alt="" />
            <div className="txt"></div>
          </div>
          <div className="slide">
            <img src={slide3} alt="" />
            <div className="txt"></div>
          </div>
          <div className="slide">
            <img src={slide4} alt="" />
            <div className="txt"></div>
          </div>
        </div>
      </div>
      <div className="p_p">
        <button onClick={handlePlayPause}>
          {isPlaying ? (
            <PauseIcon sx={{ width: 18, height: 18 }} />
          ) : (
            <PlayArrowIcon sx={{ width: 18, height: 18 }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Section4;
