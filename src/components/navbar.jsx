import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { NavLink, Link, Route, Switch } from "react-router-dom";
import {
  BrowserRouter as Router
  //   Route,
  //   Redirect,
  //   Switch
} from "react-router-dom";
import AccountInfo from "./accountInfo";
import PurchaseReport from "./purchaseReport";
import MainConainer from "./mainConainer";
import SearchBar from "./searchbar";
import Buy from "./buy";

class Navbar extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <div>
          <div style={{ textAlign: "center" }}>
            <h2>Inventory Management System</h2>
          </div>

          <ul>
            <Link to="/home">
              <li>
                home
                {/* <a className="active">Home</a> */}
              </li>
            </Link>
            <Link to="/purchasereport">
              <li>
                purchase report
                {/* <a>Purchase Report</a> */}
              </li>
            </Link>

            <NavLink to="/accountInfo">
              <li id="userId">{this.props.userId}</li>
            </NavLink>
          </ul>
        </div>

        <SearchBar />
      </div>
    );
  }
}

export default Navbar;
