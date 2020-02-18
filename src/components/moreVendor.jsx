import React from "react";
import MoreInfo from "./moreInfo";
function MoreVendor(props) {
  let i = 0;
  // console.log(this.props);
  return (
    <div className="best-features">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>More Vendors</h2>
            </div>
          </div>
          {this.props &&
            this.props.json
              .slice(1)
              .map(json => <MoreInfo key={i++} id={i} json={json} />)}
        </div>
      </div>
    </div>
  );
}

export default MoreVendor;
