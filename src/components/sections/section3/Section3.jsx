import React, { useState } from "react";
import "./section3.scss";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import slideImg1 from "../../../images/scroll_t1.jpg";
import slideImg2 from "../../../images/scroll_t2.jpg";
import slideImg3 from "../../../images/scroll_t3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: slideImg1,
  },
  {
    imgPath: slideImg2,
  },
  {
    imgPath: slideImg3,
  },
];

function Section3() {
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(1);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div id="section3">
      <div className="left_bg"></div>
      <div className="right_bg"></div>
      <Box sx={{ minWidth: "100%", minHeight: "100vh", flexGrow: 1 }}>
        <AutoPlaySwipeableViews className="slideImage"
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ overflow: "hidden" }}
        >
          {images.map((step, index) => (
            <div className="boxMap" key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box className="box"
                  component="img"
                  sx={{
                    height: "100vh",
                    display: "block",
                    overflow: "hidden",
                    width: "80%",
                    margin: "0 auto",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ display: "flex", justifyContent: "center" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </div>
  );
}

export default Section3;
