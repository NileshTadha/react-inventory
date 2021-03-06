import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import SearchBar from "./searchbar";

function Navbar(props) {
  useEffect(() => {
    if (sessionStorage.getItem("userId") == null) {
      alert("please login");
      console.log("hi");
      window.location.href = "/";
    }
  });
  // console.log(props);
  let reportType;
  if (sessionStorage.getItem("type") === "customer")
    reportType = "Purchase Report";
  else reportType = "Sell Report";
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
            <li>{reportType}</li>
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
