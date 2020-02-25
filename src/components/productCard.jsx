import React from "react";
import { Link } from "react-router-dom";

function ProductCard(props) {
  return (
    <div className="col-md-4">
      <Link to={`/buy/${props.json.prodId}`}>
        <div className="product-item">
          <img src={require("./p006.jpeg")} alt={props.json.prodName} />
          <div className="down-content">
            <h4>{props.json.prodName}</h4>
            <h6>{"Rs. " + props.json.price}</h6>
            <p>{props.json.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
