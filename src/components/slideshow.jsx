import React from "react";
import { Slide } from "react-slideshow-image";
const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img
              src={require("./s1.jpeg")}
              alt="Slideshow 1"
              width="90%"
              height="30%"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "287px"
              }}
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              src={require("./s2.jpeg")}
              alt="Slideshow 2"
              width="90%"
              height="30%"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "287px"
              }}
            />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              src={require("./s3.jpeg")}
              alt="Slideshow 3"
              width="90%"
              height="30%"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "287px"
              }}
            />
          </div>
        </div>
      </Slide>
    </div>
  );
};
export default Slideshow;
