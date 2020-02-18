import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./searchbar";

function Navbar(props) {
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
            <li id="userId">{props.userId}</li>
          </NavLink>
        </ul>
      </div>

      <SearchBar />
    </div>
  );
}

export default Navbar;
