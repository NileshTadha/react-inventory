import React, { Component } from "react";
import SearchBar from "./searchbar";
import Slideshow from "./slideshow";
import RecentProducts from "./recentProducts";
import Navbar from "./navbar";

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
