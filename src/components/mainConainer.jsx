import React, { Component } from "react";
import Slideshow from "./slideshow";
import RecentProducts from "./recentProducts";

class MainConainer extends Component {
  componentDidMount() {
    // console.log("Home CDM");
  }
  // state = {  }
  render() {
    return (
      <div>
        <Slideshow />
        <RecentProducts />
      </div>
    );
  }
}

export default MainConainer;
