// import React, { Component } from "react";
// // import ReactDOM from "react-dom";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Redirect,
// //   Switch
// // } from "react-router-dom";

// class Slideshow extends Component {
//   // state = {  }

//   render() {
//     return (
//       <div style={{ width: "100%", textAlign: "center" }}>
//         <img
//           className="mySlid"
//           width="90%"
//           height="30%"
//           style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//             maxHeight: "287px"
//           }}
//           src={require("./s1.jpeg")}
//         />
//         <img
//           className="mySlid"
//           width="90%"
//           height="30%"
//           style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//             maxHeight: "287px"
//           }}
//           src={require("./s2.jpeg")}
//         />
//         <img
//           className="mySlid"
//           width="90%"
//           height="30%"
//           style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//             maxHeight: "287px"
//           }}
//           src={require("./s3.jpeg")}
//         />
//       </div>
//     );
//   }
// }

import React from "react";
import { Slide } from "react-slideshow-image";

const slideImages = ["./s1.jpeg", "./s2.jpeg", "./s3.jpeg"];

const properties = {
  duration: 2000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
  //   onChange: (oldIndex, newIndex) => {
  //     // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  //   }
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        <div className="each-slide">
          <div>
            <img
              src={require("./s1.jpeg")}
              width="90%"
              height="30%"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                height: "287px"
              }}
            />
            {/* <span>Slide 1</span> */}
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img
              src={require("./s2.jpeg")}
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
