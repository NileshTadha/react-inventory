import React, { Component } from "react";
// import logo from './logo.svg';
// import "./App.css";
import "./main.css";
import "./inventory.css";
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
// import "./assets/css/owl.css";
import Login from "./components/login.jsx";
import "./vendor/bootstrap/css/bootstrap.min.css";
// import { Route } from "react-router-dom";
import Home from "./components/home";
// import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import AccountInfo from "./components/accountInfo";
import PurchaseReport from "./components/purchaseReport";
// import Home from "./components/home";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
  withRouter
} from "react-router-dom";
// import { logRoles } from "@testing-library/react";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
