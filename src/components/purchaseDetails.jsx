import React from "react";

function PurchaseDetails(props) {
  return (
    <div className="cardmm">
      <br />
      <div className="cardm">
        <span className="sspan6">{props.id}</span>
        <span className="sspan1">{props.detail.product.prodId}</span>
        <span className="sspan4">{props.detail.product.prodName}</span>
        <span className="sspan3">{props.detail.vendorName}</span>
        <span className="sspan5">{props.detail.qty}</span>
        <span className="sspan2">{props.detail.orderPrice}</span>
        <span className="sspan7">{props.detail.timestamp}</span>
      </div>
      <hr style={{ borderTop: "1px solid black" }} />
    </div>
  );
}

export default PurchaseDetails;
