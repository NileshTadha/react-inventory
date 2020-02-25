import React, { Component } from "react";
import PurchaseDetails from "./purchaseDetails";

class PurchaseReport extends Component {
  state = {
    item: [],
    selected: "date"
  };

  componentDidMount() {
    this.onLoadFunc();
  }

  onLoadFunc = () => {
    // if (sessionStorage.getItem("userId") == null) {
    //   alert("please login");
    //   console.log("hi");
    //   window.location.href = "/";
    // }

    // console.log("hiii");

    let url =
      "http://172.20.49.76:8080/inventory/user/purchaseReport?user_id=" +
      sessionStorage.getItem("userId") +
      "&selected=" +
      this.state.selected;
    // console.log(url);

    fetch(url, {
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
        this.setState({ item: json });
      });
  };
  myChange = event => {
    // console.log(event.target.value);
    this.setState({ selected: event.target.value }, () => {
      this.onLoadFunc();
    });
  };
  render() {
    var i = 0;
    // console.log(this.state.selected);
    // this.onLoadFunc();
    return (
      <div>
        {/* <SortBy /> */}

        <br />
        <form>
          <label>
            <span style={{ fontWeight: "bold", margin: "10px" }}>Sort By:</span>
            <select onChange={this.myChange} value={this.state.selected}>
              <option value="date">Date</option>
              <option value="price">Price</option>
              <option value="qty">Quantity</option>
            </select>
          </label>
        </form>
        <br />

        <div
          style={{
            backgroundColor: "#333",
            color: "white",
            verticalAlign: "middle"
          }}
        >
          <br />
          <div className="cardd">
            <span className="sspan6">Sr. No</span>
            <span className="sspan1">Product Id</span>
            <span className="sspan4">Product Name</span>
            <span className="sspan3">Vendor Name</span>
            <span className="sspan5">Quantity</span>
            <span className="sspan2">Price</span>
            <span className="sspan7">Date Time</span>
          </div>
          <br />
        </div>
        {this.state.item.map(json => (
          <PurchaseDetails key={i++} id={i} detail={json} />
        ))}
      </div>
    );
  }
}

export default PurchaseReport;
