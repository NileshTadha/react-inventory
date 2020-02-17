import React, { Component } from "react";
import MoreVendor from "./moreVendor";
class Buy extends Component {
  state = {
    json: [],
    loading: false,
    quantity: 0,
    morVendor: false
  };

  componentDidMount() {
    this.onLoadFunc();
  }
  onLoadFunc = () => {
    var newurl =
      "http://172.20.49.61:8080/inventory/user/home/getProduct?prodId=" +
      this.props.match.params.prodId;

    // console.log(newurl);

    fetch(newurl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({
          json: json,
          loading: true
        });
      });
  };

  myChange = event => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };

  buyNow = id => {
    let quantity;
    let pricee;
    quantity = this.state.quantity;
    pricee = this.state.json[id].price;

    if (Number.isInteger(Number(quantity)) === false) {
      //alert(quantity);
      alert("Please enter an integer.");
      return;
    }
    var newurl =
      "http://172.20.49.61:8080/inventory/user/supply?prodId=" +
      this.state.json[id].product.prodId +
      "&qty=" +
      quantity +
      "&user_id=" +
      localStorage.getItem("userId") +
      "&price=" +
      pricee +
      "&vendorId=" +
      this.state.json[id].vendor.vendorId;
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

  showVendor = () => {
    this.setState({ morVendor: true });
  };

  render() {
    return (
      <div>
        <div className="best-features">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>Product Details</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="left-content">
                  <h4>
                    {this.state.loading && this.state.json[0].product.prodName}
                  </h4>
                  <span id="prodId">
                    prodId :
                    {this.state.loading && this.state.json[0].product.prodId}
                  </span>
                  <br />
                  <span id="price">
                    Price :{this.state.loading && this.state.json[0].price}
                  </span>
                  <br />
                  <span id="vendorName">
                    {" "}
                    Vendor Name :
                    {this.state.loading && this.state.json[0].vendor.vendorName}
                  </span>
                  <br />
                  <span id="qty">
                    {" "}
                    Quantity Available :
                    {this.state.loading && this.state.json[0].qty}
                  </span>
                  <br />
                  <br />
                  <br />
                  <span> Enter A quantity you want to buy</span>
                  <br />
                  <input
                    type="number"
                    onBlur={this.myChange}
                    placeholder="Quantity"
                    name="quantity"
                  />
                  <br />
                  <br />
                  <button
                    className="button"
                    // style={{ padding: "8px 12px" }}
                    onClick={() => {
                      let id = 0;
                      this.buyNow(id);
                    }}
                  >
                    Buy Now
                  </button>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button onClick={this.showVendor} className="button">
                    Show more Vendor
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-image">
                  <img id="rightImage" src={require("./p006.jpeg")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.loading && this.state.morVendor && (
          <MoreVendor json={this.state.json} />
        )}
      </div>
    );
  }
}

export default Buy;
