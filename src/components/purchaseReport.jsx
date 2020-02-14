import React, { Component } from "react";
import SearchBar from "./searchbar";
import PurchaseDetails from "./purchaseDetails";
import { withRouter } from "react-router-dom";

let resjson;

class PurchaseReport extends Component {
  state = {
    item: []
  };

  componentDidMount() {
    console.log("mounted");
    this.onLoadFunc();
  }

  onLoadFunc = () => {
    console.log("hiii");
    let url =
      "http://172.20.49.143:8080/inventory/user/purchaseReport?user_id=" +
      localStorage.getItem("userId") +
      "&selected=date";
    console.log(url);

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
        console.log(json);
        this.setState({ item: json });
      });
  };

  render() {
    // console.log(resjson);
    var i = 0;

    return (
      <div>
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

export default withRouter(PurchaseReport);
