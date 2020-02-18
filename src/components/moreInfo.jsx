import React, { Component } from "react";
class MoreInfo extends Component {
  state = { quantity: "" };
  myChange = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  buyNow = json => {
    let quantity;
    let pricee;
    quantity = this.state.quantity;
    pricee = this.props.json.price;

    if (Number.isInteger(Number(quantity)) === false) {
      //alert(quantity);
      alert("Please enter an integer.");
      return;
    }
    var newurl =
      "http://172.20.49.73:8080/inventory/user/supply?prodId=" +
      this.props.json.product.prodId +
      "&qty=" +
      quantity +
      "&user_id=" +
      sessionStorage.getItem("userId") +
      "&price=" +
      pricee +
      "&vendorId=" +
      this.props.json.vendor.vendorId;
    // console.log(newurl);

    fetch(newurl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // //console.log(json);
        if (JSON.stringify(json) === "true") {
          alert("Buy successfully");
          window.location.reload();
          return;
        }
        alert("Failed");
      });
  };
  render() {
    // console.log(this.props);
    return (
      <div className="col-md-6">
        <div className="left-content">
          <h4>{this.props.json.product.prodName}</h4>
          <span>Product Id :{this.props.json.product.prodId}</span>
          <br />
          <span>Price :{this.props.json.price}</span>
          <br />
          <span>Vendor Name : {this.props.json.vendor.vendorName}</span>
          <br />
          <span>Quantity Available : {this.props.json.qty}</span>
          <br />
          <br />
          <br />

          <span>Enter quantity you want to buy : </span>
          <br />
          <br />
          <input type="number" name="quantity" onBlur={this.myChange} />
          <br />
          <br />
          <button className="button" onClick={() => this.buyNow(this.props.id)}>
            Buy Now
          </button>
        </div>
      </div>
    );
  }
}

export default MoreInfo;
