import React from "react";
import Slideshow from "./slideshow";
import RecentProducts from "./recentProducts";

function MainConainer(props) {
  return (
    <div>
      <Slideshow />
      <RecentProducts />
    </div>
  );
}

export default MainConainer;
