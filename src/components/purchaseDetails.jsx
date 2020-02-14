import React, { Component } from "react";
// import "../inventory.css";

class PurchaseDetails extends Component {
  // state = {  }
  render() {
    return (
      <div className="cardmm">
        <br />
        <div className="cardm">
          <span className="sspan6">{this.props.id}</span>
          <span className="sspan1">{this.props.detail.product.prodId}</span>
          <span className="sspan4">{this.props.detail.product.prodName}</span>
          <span className="sspan3">{this.props.detail.vendorName}</span>
          <span className="sspan5">{this.props.detail.qty}</span>
          <span className="sspan2">{this.props.detail.product.price}</span>
          <span className="sspan7">{this.props.detail.timestamp}</span>
        </div>
        <hr style={{ borderTop: "1px solid black" }} />
      </div>
    );
  }
}

export default PurchaseDetails;
