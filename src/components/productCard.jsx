import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  buy = () => {
    window.location.href = "/buy";
  };
  render() {
    // let imgSrc = "./" + this.props.json.prodId + ".jpeg";
    // console.log(imgSrc);

    return (
      <div className="col-md-4">
        <Link to={`/buy/${this.props.json.prodId}`}>
          <div className="product-item">
            <img src={require("./p006.jpeg")} alt={this.props.json.prodName} />
            <div className="down-content">
              <h4>{this.props.json.prodName}</h4>
              <h6>{"Rs. " + this.props.json.price}</h6>
              <p>{this.props.json.description}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProductCard;
