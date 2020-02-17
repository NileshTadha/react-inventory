import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./searchbar";

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
              <li>home</li>
            </Link>
            <Link to="/purchasereport">
              <li>purchase report</li>
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
